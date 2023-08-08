import fs from 'fs/promises';
import path from 'path';
import inflection from 'inflection';
import Listr from 'listr';
import got from 'got';

// import 'dotenv/config';
import dotenv from 'dotenv';
import debugFn from 'debug';

import { Command, Flags } from '@oclif/core';

import {
  WpJsonEndpointMethod,
  WpJsonRoute,
  WpJson,
  WpJsonArgDesc,
} from '../util/wpapi-types.js';

import { byProperty, exists } from '../util/objects.js';
import { LineBuffer } from '../util/line-buffer.js';
import {
  allMethods,
  humanizeMethodList,
  normalizeMethodList,
} from '../util/methods.js';
import { sanitizeForDocComment } from '../util/comments.js';

// we *do not* use dotenv when testing!
if (process.env.NODE_ENV !== 'test') {
  dotenv.config();
}

const debug = debugFn('wordpressed:generate');

// WordPress uses both the term "route" and "endpoint", and they *almost* mean
// the same thing.  The route is the URL path, which the endpoint is the HTTP
// method on that particular path.  For clarity, we tend to use the term
// "route", and rarely use "endpoint".
//
// The overall model is to parse the *entire* wp-json data, grouping by
// namespace, and then output a separate file per-namespace, with the routes
// sorted alphabetically (for consistency and determinism, and to make merges
// easier to comprehend).  The sub-types for a given route/endpoint are output
// before the type for the endpoint args just to keep any "used before defined"
// rules happy.

// we have circularly-referenced types, so we have to disable the
// use-before-define prevention...
/* eslint-disable no-use-before-define */
type GenData = Record<string, GenNamespace>;

interface GenNamespace {
  namespace: string; // official/canonical namespace ("", or "oembed/1.0")
  fileName: string;
  typeName: string; // normalized type name component ("WpJson" or "Oembed10")
  routes: Record<string, GenRoute>;
}

interface GenRoute {
  namespace: GenNamespace;
  route: string; // raw route path, including pattern-match args
  typeName: string; // normalized type name comoponent
  // endpoints are not a map because the methods could be a list!
  endpoints: GenEndpoint[];
}

interface GenEndpoint {
  route: GenRoute;
  methods: WpJsonEndpointMethod[];
  typeName: string;
  types: GenTypeDesc[]; // last type is the Arg
}

interface GenTypeDesc {
  endpoint: GenEndpoint;
  typeName: string;
  members: GenTypeMember[];
}

interface GenTypeMember {
  // parent: GenTypeDesc;
  name: string;
  desc?: string;
  type: string;
  optional: boolean;
  // We also point back to original member definition for things like min/max,
  // default, so that we don't have to copy them all here. We use them in
  // generating the doc-comment.
  original: WpJsonArgDesc;
}

// re-enable the use-before-define prevention...
/* eslint-ensable no-use-before-define */

// custom type for our Listr context...
interface Context {
  wpjson?: WpJson;
  fromCache?: boolean;
  data?: GenData;
  dryRun?: boolean;
}

/**
 * Analyzes the endpoints exposed by a WordPress site (given by the environment
 * variable WP_HOST or `--host` flag).
 */
export class Generate extends Command {
  static summary = 'Generates types from a WordPress REST API host.';

  static description = `Queries the 'wp-json' route on a WordPress host to discover types for the available routes/endpoints, then processes them into TypeScript-equivalent types for use with the 'wordpressed' client library.

  For convenience (mainly for myself, as this generator is being developed), any '.env' file from the current working directory is loaded if it exists so that 'WP_HOST', 'CACHE_FILE', and 'OUT_DIR' don't have to appear on the command line.`;

  static flags = {
    host: Flags.url({
      char: 'h',
      env: 'WP_HOST',
      summary: 'host to query',
      description: `The WordPress REST API host to query. Defaults to the 'WP_HOST' environment variable if it is set. Required if no '--cache' option is given or if the cache file does not exist.`,
    }),

    cache: Flags.file({
      char: 'c',
      env: 'CACHE_FILE',
      summary: 'file to load/cache response JSON',
      description: `A file to load-from/save-to for wp-json data. Defaults to the 'CACHE_FILE' environment variable if it is set. If the file does not exist, a '--host' value is required, and the host will be queried. If the file does exist, and the '--fetch' flag is not present, the cache file is used instead of making a wp-json request.`,
    }),

    fetch: Flags.boolean({
      summary: `fetch from '--host' even if '--cache' file exists`,
      description: `Used to force re-fetch the wp-json data. Particularly useful when '--host' and '--cache' are set in the environment, to force an update of the cached JSON.`,
      allowNo: true,
      dependsOn: ['host'],
    }),

    'out-dir': Flags.directory({
      char: 'o',
      env: 'OUT_DIR',
      summary: 'directory to write types into',
      description: `The directory in which to write all of the generated route/endpoint argument and parameter types. Defaults to the 'OUT_DIR' environment variable if it is set.`,
      exists: true,
    }),

    // do we prefer `dryRun` or `dry-run` as the CLI flag?
    'dry-run': Flags.boolean({
      summary: 'do not write the type files',
    }),
  };

  // static examples: Command.Example[] = [
  //   {
  //     description: 'does some stuff',
  //     command: 'yadda yadda',
  //   },
  // ];

  /**
   * Main entrypoint for the type-generation command.
   */
  async run() {
    const { flags } = await this.parse(Generate);

    debug('flags %o', flags);

    if (!flags.host && !flags.cache) {
      this.error(`at least one of '--host' or '--cache' is required`, {
        code: 'FLAG_MISSING',
        exit: 1,
      });
    }

    if (!flags['out-dir'] && !flags['dry-run']) {
      this.error(`at least one of '--out-dir' or '--dry-run' is required`, {
        code: 'FLAG_MISSING',
        exit: 1,
      });
    }

    // The original code was split up by namespaces, routes, and endpoints, but
    // using Listr for a nice UI presentation kind of forces a different pattern
    // of logic on us.  It's still a bit of a combination; further iterations
    // will hopefully refactor for clarity.  (I'm not sure if delegating Listr
    // subtask list creation to a helper method is better or worse than keeping
    // the high-level logic all here in one place.)
    //
    // Also, the previous code passed flags directly, and used return values,
    // but Listr uses a list-global context value for inter-task sharing. We
    // *could* still use a lexically-scoped object, it's not obvious what's
    // easiest to comprehend for someone new to the code.
    const tasks = new Listr<Context>(
      [
        {
          title: 'get wp-json data',
          task: () =>
            this.createWpJsonTasks(flags.host, flags.cache, flags.fetch),
        },
        {
          title: 'parse wp-json data',
          task: async (ctx) => {
            if (!ctx.wpjson) {
              throw new Error('no wp-json data available');
            }
            ctx.data = {};
            this.parseRoutes(ctx.wpjson.routes, ctx.data);
          },
        },
        {
          title: 'create types',
          task: async (ctx) => {
            if (!ctx.data) {
              throw new Error('no parsed data available');
            }

            return this.createGenerationTasks(ctx.data, flags['out-dir']);
          },
        },
      ],
      // use the verbose renderer if DEBUG is set... this prevents the
      // pretty-TTY rendering from clobbering any debug lines
      { ...(process.env.DEBUG ? { renderer: 'verbose' } : {}) }
    );

    await tasks.run({ dryRun: flags['dry-run'] });
  }

  /**
   * Creates the `Listr` tasks necessary to retrieve the `WpJson` data, using a
   * cache file if available, or falling back to a host query if not (or if
   * `fetch` is true).
   *
   * @param host host to query
   * @param cache cache file to use
   * @param fetch whether to force-fetch even if cache file exists
   * @returns Listr object with tasks
   */
  createWpJsonTasks(host?: URL, cache?: string, fetch?: boolean) {
    const fsOpts = { encoding: 'utf8' } as const;

    return new Listr<Context>([
      {
        title: 'read wp-json from cache',
        task: async (ctx, task) => {
          if (fetch) {
            task.skip('force-fetch requested');
            return;
          }
          if (!cache) {
            task.skip('no cache file provided');
            return;
          }

          try {
            const json = await fs.readFile(cache, fsOpts);
            ctx.wpjson = JSON.parse(json);
            ctx.fromCache = true;
          } catch (err) {
            // this.error(err as Error);
            task.skip(`no cache file found (${err})`);
            return;
          }
        },
      },
      {
        title: 'fetch wp-json from host',
        skip: (ctx) => ctx.wpjson && !fetch && 'using cached wp-json data',
        task: async (ctx) => {
          if (!host) {
            throw new Error('--host option is required');
          }

          // Note that we do *not* build this on top of the WordPress REST API
          // client we are creating; this generator has its own implementation
          // to make bootstrapping easier (and it's super-simple, in any case).
          const url = new URL('/wp-json/', host);
          // debug('GET', url.toString());
          const resp = await got<WpJson>(url, {
            responseType: 'json',
          });
          ctx.wpjson = resp.body;
        },
      },
      {
        title: 'write wp-json to cache',
        skip: (ctx) =>
          (!cache && 'no cache file provided') ||
          (ctx.fromCache && 'wp-json came from cache'),
        task: async (ctx) => {
          await fs.writeFile(cache!, JSON.stringify(ctx.wpjson), fsOpts);
        },
      },
    ]);
  }

  /**
   * Parses the routes/endpoints from a `WpJson.routes` object into a `GenData`
   * generated data object.
   * @param routes the WpJson routes to parse
   * @param data an empty data object to fill
   */
  parseRoutes(routes: WpJson['routes'], data: GenData) {
    Object.entries(routes).forEach(([path, routeInfo]) => {
      // create the namespace entry if needed
      const { namespace } = routeInfo;
      let ns = data[namespace];
      if (!ns) {
        ns = {
          namespace,
          fileName: this.normalizeFileName(namespace, 'wp-json'),
          typeName: this.normalizeTypeName(namespace, 'wp_json'),
          routes: {},
        };
        data[namespace] = ns;
      }

      this.parseRoute(path, routeInfo, ns);
    });
  }

  /**
   * Parses an individual route into a `Route` route info object.
   * @param route the WpJson route path
   * @param routeInfo the WpJson route object to parse
   * @param ns the generated namespace object to add the route to
   */
  parseRoute(route: string, routeInfo: WpJsonRoute, ns: GenNamespace) {
    let r = ns.routes[route];
    if (!r) {
      // The namespace typeName is often a prefix of the path; we don't re-prefix
      // it if so.
      let typeName = this.normalizeTypeName(route, 'wp_json');
      if (!typeName.startsWith(ns.typeName)) {
        typeName = `${ns.typeName}${typeName}`;
      }
      r = {
        namespace: ns,
        route,
        typeName,
        endpoints: [],
      };
      ns.routes[route] = r;
    }

    routeInfo.endpoints.forEach((endpoint) => this.parseEndpoint(endpoint, r));
  }

  /**
   * Parses a single endpoint (one or more HTTP methods!) for a route.
   * @param endpoint the WpJson endpoint to parse
   * @param r the GenRoute generated route object to add the endpoint types to
   */
  parseEndpoint(endpoint: WpJsonRoute['endpoints'][number], r: GenRoute) {
    // Some endpoints (like
    // "/wc-analytics/products/(?P<product_id>[\\d]+)/variations") result in
    // duplication where the methods are listed more than once (GET, POST, GET,
    // POST).  We look for this and ignore the redundant endpoints.
    const methods = normalizeMethodList(endpoint.methods);
    if (r.endpoints.some((e) => e.methods.includes(methods[0]))) {
      // this.warn(
      //   `DUPLICATE ROUTE METHOD ${r.route} ${endpoint.methods}... IGNORING`
      // );
      return;
    }

    // Otherwise, parse the argument types (and dependency types).
    const e: GenEndpoint = {
      route: r,
      methods,
      typeName: `${r.typeName}${this.normalizeTypeName(
        methods.join('_').toLowerCase()
      )}`,
      types: [],
    };

    this.parseArgTypes(endpoint.args, e);

    r.endpoints.push(e);
  }

  /**
   * Creates a normalized file name, typically for a namespace, like
   * "some-name".
   * @param str string to normalize
   * @param fallback fallback value used if-and-only-if `str` is
   *     empty/missing. This is particularly used to cause namespace "" to get
   *     called "wp-json".
   */
  normalizeFileName(str: string, fallback: string = 'XXX-UNEXPECTED-XXX') {
    // After cleaning call 'dasherize' to get a more filename looking value
    // ("some_name" => "some-name").
    return inflection.dasherize(
      this.identifize(str) || fallback || 'XXX_MISSING_XXX'
    );
  }

  /**
   * Creates a normalized Typescript-y type name, like "SomeName".
   * @param str String to normalize
   * @param fallback fallback value used if-and-only-if `str` is empty/missing.
   *     This is particularly used to cause namespace "" to get called "WpJson".
   */
  normalizeTypeName(str: string, fallback: string = 'XXX_UNEXPECTED_XXX') {
    // After cleaning call 'camelize' to get a more Typescript-y looking value
    // ("some_name" => "SomeName").
    return inflection.camelize(
      this.identifize(str) || fallback || 'XXX_MISSING_XXX'
    );
  }

  /**
   * Returns a value safe to use as a JS property key, quoted and escaped if
   * needed.
   * @param str string to normalize
   */
  normalizePropertyKey(str: string) {
    let safe = str;
    if (safe.match(/\W/)) {
      safe = `'${safe.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`;
    }
    return safe;
  }

  /**
   * Replaces all non-word/non-identifier characters with underscores. The value
   * passed in `str` might be a namespace (with hyphens and slashes), or a route
   * path (with slashes, pattern matches, etc.).  We convert all non-word
   * (a-zA-Z0-9_) characters into underscores, de-dupe any underscores, and trim
   * the start/end.
   * @param str string to clean
   */
  identifize(str: string) {
    return str
      .trim()
      .replace(/\W+/g, '_')
      .replace(/_{2,}/g, '_')
      .replace(/^_/, '')
      .replace(/_$/, '');
  }

  /**
   * May return multiple type definitions if an arg is an array or object with
   * complex structure.
   **/

  /**
   * Parses all of the members of a WpJson endpoint argument list.
   * @param args the WpJson route/endpoint arguments to parse
   * @param e the GenEndpoint generated data to fill with direct and indirect
   *     types
   */
  parseArgTypes(
    args: WpJsonRoute['endpoints'][number]['args'],
    e: GenEndpoint
  ) {
    const typeName = Generate.argsTypeName(e);

    // Parse all of the argument types (after sorting).  Note that "discovered"
    // types (array items, objects) are pushed onto the endpoint types array as
    // they are found, ensuring they are defined before they are used.
    const members = Object.entries(args)
      .sort(byProperty(0))
      .map<GenTypeMember | null>(([argName, argDesc]) => {
        const argTypeName = `${typeName}${this.normalizeTypeName(argName)}`;
        // determine the type description
        if (Array.isArray(argDesc.type)) {
          debug(`multi-type arg NYI: ${typeName} ${argName}`);
          return null;
        }

        let typeStr: string;
        switch (argDesc.type) {
          case 'array':
            switch (argDesc.items?.type) {
              case 'integer':
                typeStr = `number[]`;
                break;
              case 'string':
                typeStr = `number[]`;
                break;
              default:
                // TODO: build sub-type if needed!
                e.types.push({
                  endpoint: e,
                  typeName: argTypeName,
                  members: [],
                });
                typeStr = `${argTypeName}[]`;
            }

            break;
          case 'boolean':
            typeStr = 'boolean';
            break;
          case 'float':
          case 'int':
          case 'integer':
          case 'number':
            typeStr = 'number';
            break;
          case 'null':
            typeStr = 'never'; //?
            break;
          case 'object':
            // TODO: build sub-type!
            e.types.push({
              endpoint: e,
              typeName: argTypeName,
              members: [],
            });
            typeStr = `${argTypeName}`;
            break;
          case 'string':
          case 'text':
            if (argDesc.enum) {
              typeStr = argDesc.enum
                .map((s) => `'${s.replaceAll("'", "\\'")}'`)
                .join(' | ');
            } else {
              typeStr = 'string';
            }
            break;
          default:
            debug(`arg type NYI: ${typeName} ${argName}: ${argDesc.type}`);
            return null;
        }

        const m: GenTypeMember = {
          name: argName,
          optional: !argDesc.required,
          type: typeStr,
          // adding meta info, like min/max, default would be good!
          desc: argDesc.description,
          original: argDesc,
        };

        return m;
      })
      .filter(exists);

    // dbg(0, 'created argType', { argType, args });
    e.types.push({
      endpoint: e,
      typeName,
      members,
    });
  }

  createGenerationTasks(data: GenData, dir?: string) {
    // Create two generate/write tasks for each namespace (a clobbery one for
    // args, and a non-clobber to stub out responses), and one for the index, to
    // be run concurrently.  Note that we commingle the type generation and the
    // writing so that we can take advantage of parallelizing generation while
    // other writes are happening.
    const tasks = Object.values(data)
      .sort(byProperty('namespace'))
      .flatMap<Listr.ListrTask<Context>>((ns) => [
        {
          title: `create ${ns.namespace || ns.fileName} args`,
          task: async (ctx, task) => {
            // 'index' is a special name, and we *cannot* have a namespace that
            // uses it!
            if (ns.fileName === 'index') {
              task.report(new Error('cannnot have namespace named "index"'));
              return;
            }

            const content = this.createNamespaceTypes(ns);

            if (ctx.dryRun || !dir) {
              task.skip('skipping write to file system');
              return;
            }

            await this.writeFile(`${ns.fileName}.ts`, dir, content);
          },
        },
        {
          title: `create ${ns.namespace || ns.fileName} responses`,
          // TODO:skip if there's an existing file on disk?
          task: async (ctx, task) => {
            const content = this.createNamespaceResponseTypes(ns);

            if (ctx.dryRun || !dir) {
              task.skip('skipping write to file system');
              return;
            }

            // do *not* write if the file already exists! (not an error!)
            try {
              await this.writeFile(
                `${ns.fileName}-responses.ts`,
                dir,
                content,
                false
              );
            } catch (err) {
              if (
                err &&
                typeof err === 'object' &&
                'code' in err &&
                err.code === 'EEXIST'
              ) {
                // allowable!
                task.skip('file already exists');
              } else {
                throw err;
              }
            }
          },
        },
      ]);

    // also create a task to write the index file!
    tasks.push({
      title: `write index`,
      task: async (ctx, task) => {
        const content = this.createIndexTypes(data);

        if (ctx.dryRun || !dir) {
          task.skip('skipping write to file system');
          return;
        }

        await this.writeFile('index.ts', dir, content);
      },
    });

    return new Listr(tasks, { concurrent: true });
  }

  async writeFile(
    filename: string,
    dir: string,
    content: string,
    allowClobber = true
  ) {
    // note that we *could* check dryRun here, and skip the file-system call

    // const file = await fs.open(
    //   path.join(dir, filename),
    //   fs.constants.O_CREAT | fs.constants.O_WRONLY | fs.constants.O_TRUNC
    // );
    // await file.write(content);
    // await file.close();

    await fs.writeFile(path.join(dir, filename), content, {
      encoding: 'utf8',
      ...(!allowClobber ? { flag: 'wx' } : {}),
    });
  }

  createNamespaceTypes(ns: GenNamespace) {
    const buf = new LineBuffer();

    buf.add('// GENERATED FILE -- DO NOT EDIT');
    buf.add(`// WordPress REST API "${ns.namespace}" namespace`);

    // we need to import the response types for referencing in the method maps
    buf.ensureBlank();
    buf.add('import {');
    const indent = buf.indent();
    Object.values(ns.routes)
      .sort(byProperty('route'))
      .forEach((r) => {
        r.endpoints.forEach((e) => {
          // Unlike input arguments, we need separate response types, becuase
          // there's no guarantee that they will be the same just because the
          // input arguments were.
          e.methods.forEach((m) => {
            indent.add(`${Generate.responseTypeName(r, m)},`);
          });
        });
      });
    buf.add(`} from './${ns.fileName}-responses.js';`);

    Object.values(ns.routes)
      .sort(byProperty('route'))
      .forEach((r) => {
        r.endpoints.forEach((e) => {
          buf.ensureBlank();
          this.writeEndpointTypes(buf, e);
        });
      });

    // We also write the route/endpoint/args mapping types...
    this.writeMethodMaps(buf, ns);

    return buf.toString();
  }

  createNamespaceResponseTypes(ns: GenNamespace) {
    const buf = new LineBuffer();

    buf.add('// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!');
    buf.addBlank();
    buf.add(
      "// This file is only created if it doesn't already exist. It is safe (and"
    );
    buf.add(
      '// encouraged!) to edit this file to provide response types for the API calls.'
    );
    buf.addBlank();
    buf.add(`// WordPress REST API "${ns.namespace}" responses`);

    Object.values(ns.routes)
      .sort(byProperty('route'))
      .forEach((r) => {
        r.endpoints.forEach((e) => {
          // Unlike input arguments, we need separate response types, becuase
          // there's no guarantee that they will be the same just because the
          // input arguments were.
          e.methods.forEach((m) => {
            buf.ensureBlank();
            buf.add('/**');
            buf.add(
              ` * Response for \`${
                e.route.route
              }\` route when calling ${humanizeMethodList([m], true)}.`
            );
            buf.add(' */');

            // So here's an interesting philosophical question... can we tell
            // when a response returns a list (array) of items, vs. just a
            // single one?  This is mainly an issue for GET, but regardless, we
            // need to know.  Perhaps stubbing out as interface{} is fine, and
            // it can be hand-tweaked to an array type as needed?
            buf.add(`export interface ${Generate.responseTypeName(r, m)} {}`);
          });
        });
      });

    return buf.toString();
  }

  static argsTypeName(e: GenEndpoint) {
    return `${e.typeName}Args`;
  }

  static responseTypeName(r: GenRoute, m: WpJsonEndpointMethod) {
    const methodName = inflection.humanize(m);
    const methodResponseType = `${r.typeName}${methodName}Response`;
    return methodResponseType;
  }

  writeEndpointTypes(buf: LineBuffer, e: GenEndpoint) {
    e.types.forEach((t, i, arr) => {
      buf.ensureBlank();
      // The *last* type is the args for the route itself (previous types are supporting types). We add a comment to help decribe
      if (i === arr.length - 1) {
        buf.add('/**');
        buf.add(
          ` * Arguments for \`${
            e.route.route
          }\` route when calling ${humanizeMethodList(e.methods, true)}.`
        );
        buf.add(' */');
      }
      buf.add(`export interface ${t.typeName} {`);
      const indented = buf.indent();
      t.members.forEach((m) => {
        if (m.desc) {
          indented.add('/**');

          // we also include additional data (min, max, etc.)
          const contraintItems: string[] = [];

          // Note that we kind of do this blindly, the values are all simple.
          // Also, rather than alphabetical (by type), they are in the order we
          // want to see them.
          const contraintProps = [
            // array
            'minItems',
            'maxItems',
            'uniqueItems',
            // int
            'minimum',
            'maximum',
            'exclusiveMinimum',
            'exclusiveMaximum',
            'multipleOf',
            // string
            'minLength',
            'format',
            'pattern',
          ] as const;

          contraintProps.forEach((prop) => {
            if (prop in m.original) {
              // @ts-expect-error - we've looked for the prop, so we know it's
              // valid to index
              const constraintValue = m.original[prop];
              if (constraintValue !== undefined) {
                contraintItems.push(
                  `${prop} = ${sanitizeForDocComment(String(constraintValue))}`
                );
              }
            }
          });

          const contraints =
            contraintItems.length > 0
              ? ` Constraints: ${contraintItems.join(', ')}.`
              : '';

          indented.add(` * ${sanitizeForDocComment(m.desc)}${contraints}`);

          if ('default' in m.original) {
            const defaultValue = m.original.default;
            if (defaultValue !== undefined) {
              let defaultFmt = String(defaultValue);
              if (typeof defaultValue === 'string') {
                defaultFmt = `"${defaultValue}"`;
              }
              indented.add(` * @default ${sanitizeForDocComment(defaultFmt)}`);
            }
          }

          indented.add(' */');
        }

        indented.add(
          `${this.normalizePropertyKey(m.name)}${m.optional ? '?' : ''}: ${
            m.type
          };`
        );
      });
      buf.add('}');
    });
  }

  writeMethodMaps(buf: LineBuffer, ns: GenNamespace) {
    // Note that we really want to group mappings by method, because that's how
    // the caller will find these...
    allMethods.forEach((m) => {
      const methodName = inflection.humanize(m);
      const methodRoutesType = `${ns.typeName}${methodName}Routes`;

      buf.ensureBlank();
      buf.add('/**');
      buf.add(` * All "${sanitizeForDocComment(ns.namespace)}" ${m} routes.`);
      buf.add(' */');
      buf.add(`export interface ${methodRoutesType} {`);

      const indented = buf.indent();

      Object.values(ns.routes)
        .sort(byProperty('route'))
        .forEach((r) => {
          r.endpoints.forEach((e) => {
            if (e.methods.includes(m)) {
              indented.add(`${this.normalizePropertyKey(r.route)}: {`);
              indented.add(`args: ${Generate.argsTypeName(e)}`, 1);
              indented.add(`response: ${Generate.responseTypeName(r, m)}`, 1);
              indented.add('};');
            }
          });
        });

      buf.add('}');
    });

    this.writeSummaryMethodMap(buf, ns);
  }

  createIndexTypes(data: GenData) {
    // Also write an index file that gathers/combines everything together...
    const buf = new LineBuffer();

    buf.add('// GENERATED FILE -- DO NOT EDIT');
    buf.add('// WordPress REST API types');

    const nss = Object.values(data).sort(byProperty('namespace'));

    buf.ensureBlank();
    nss.forEach((ns) => {
      buf.add(`import * as ${ns.typeName} from './${ns.fileName}.js';`);
    });

    // Note that we really want to group mappings by method, because that's how
    // the caller will find these...
    allMethods.forEach((m) => {
      const methodName = inflection.humanize(m);
      const methodRoutesType = `Known${methodName}Routes`;

      buf.ensureBlank();
      buf.add('/**');
      buf.add(` * All known ${m} routes for WordPress REST API.`);
      buf.add(' */');
      buf.add(`export interface ${methodRoutesType} extends`);
      const indented = buf.indent();

      for (let i = 0; i < nss.length; i++) {
        indented.add(
          `${nss[i].typeName}.${nss[i].typeName}${methodName}Routes${
            i < nss.length - 1 ? ',' : ' {}'
          }`
        );
      }
    });

    this.writeSummaryMethodMap(buf);

    return buf.toString();
  }

  /**
   * Writes the summary method-to-"known" routes mapping. For a namespace, the
   * prefix is the namespace class name.  For the index file, it's the word
   * "Known".
   * @param buf line buffer to fill
   * @param ns namespace for the summary (or falsy for the index/all-known
   * sumamry)
   */
  writeSummaryMethodMap(buf: LineBuffer, ns?: GenNamespace) {
    const typeNamePrefix = ns?.typeName ?? 'Known';

    buf.ensureBlank();
    buf.add('/**');
    buf.add(
      ` * All ${sanitizeForDocComment(
        ns ? `"${ns.namespace}"` : 'known'
      )} WordPress REST API methods/routes.`
    );
    buf.add(' */');
    buf.add(`export interface ${typeNamePrefix}Routes {`);
    const indented = buf.indent();

    allMethods.forEach((m) => {
      const methodName = inflection.humanize(m);
      const methodRoutesType = `${typeNamePrefix}${methodName}Routes`;
      indented.add(`${methodName}: ${methodRoutesType};`);
    });
    buf.add('}');
  }
}
