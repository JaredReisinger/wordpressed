/* eslint-disable no-use-before-define */

// import util from 'util';
import fs from 'fs/promises';
import path from 'path';
import inflection from 'inflection';
import Listr from 'listr';
import got from 'got';

import 'dotenv/config';
import debugFn from 'debug';

import { Command, Flags } from '@oclif/core';

import { EndpointMethod, Route, WpJson } from '../util/wpapi.js';
import { /*byProperty,*/ byProperty, exists } from '../util/objects.js';

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
  methods: EndpointMethod[];
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
}

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
          title: 'write types',
          task: async (ctx) => {
            if (!ctx.data) {
              throw new Error('no parsed data available');
            }

            return this.createWriteTasks(
              ctx.data,
              flags['out-dir'] ?? 'UNUSED' // unused if dry-run...
            );
          },
        },
      ],
      // use the verbose renderer if DEBUG is set... this prevents the
      // pretty-TTY rendering from clobbering any debug lines
      { ...(process.env.DEBUG ? { renderer: 'verbose' } : {}) }
    );

    await tasks.run({ dryRun: flags['dry-run'] });
  }

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
          // client we are creating; this generator has its own implenmentation
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

  parseRoute(route: string, routeInfo: Route, ns: GenNamespace) {
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

  parseEndpoint(endpoint: Route['endpoints'][number], r: GenRoute) {
    // Some endpoints ("/wc-analytics/products/(?P<product_id>[\\d]+)/variations")
    // result in duplication where the methods are listed more than once (GET,
    // POST, GET, POST).  We look for this and ignore the redundant endpoints.
    if (r.endpoints.some((e) => e.methods.includes(endpoint.methods[0]))) {
      // this.warn(
      //   `DUPLICATE ROUTE METHOD ${r.route} ${endpoint.methods}... IGNORING`
      // );
      return;
    }

    // Otherwise, parse the argument types (and dependency types).
    const e: GenEndpoint = {
      route: r,
      methods: [...endpoint.methods],
      typeName: `${r.typeName}${this.normalizeTypeName(
        endpoint.methods.join('_').toLowerCase()
      )}`,
      types: [],
    };

    this.parseArgTypes(endpoint.args, e);

    r.endpoints.push(e);
  }

  /**
   *
   * @param str String to normalize
   * @param fallback fallback value used if-and-only-if `str` is empty/missing. This is particularly used to cause namespace "" to get called "wp-json".
   */
  normalizeFileName(str: string, fallback: string = 'XXX-UNEXPECTED-XXX') {
    // After cleaning call 'dasherize' to get a more filename looking value
    // ("some_name" => "some-name").
    return inflection.dasherize(
      this.identifize(str) || fallback || 'XXX_MISSING_XXX'
    );
  }

  /**
   *
   * @param str String to normalize
   * @param fallback fallback value used if-and-only-if `str` is empty/missing. This is particularly used to cause namespace "" to get called "WpJson".
   */
  normalizeTypeName(str: string, fallback: string = 'XXX_UNEXPECTED_XXX') {
    // After cleaning call 'camelize' to get a more Typescript-y looking value
    // ("some_name" => "SomeName").
    return inflection.camelize(
      this.identifize(str) || fallback || 'XXX_MISSING_XXX'
    );
  }

  /**
   * Returns a value safe to use as a JS identifier, quoted and escaped if needed.
   * @param str
   */
  normalizeJsIdentifier(str: string) {
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

  // function canonicalize(str: string) {
  //   return str.trim().replace(/\W+/g, '_').replace(/^_/, '').replace(/_$/, '');
  // }

  // function buildName(...str: string[]) {
  //   return inflection.classify(str.map(canonicalize).join('_'));
  // }

  /**
   * May return multiple type definitions if an arg is an array or object with
   * complex structure.
   **/
  parseArgTypes(args: Route['endpoints'][number]['args'], e: GenEndpoint) {
    const typeName = `${e.typeName}Args`;

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

        return {
          name: argName,
          optional: !argDesc.required,
          type: typeStr,
          // adding meta info, like min/max, default would be good!
          desc: argDesc.description,
        };
      })
      .filter(exists);

    // dbg(0, 'created argType', { argType, args });
    e.types.push({
      endpoint: e,
      typeName,
      members,
    });
  }

  createWriteTasks(data: GenData, dir: string) {
    // create a write task for each namespace, and the index, to be run
    // concurrently.
    const tasks = Object.values(data)
      .sort(byProperty('namespace'))
      .map<Listr.ListrTask<Context>>((ns) => ({
        title: `write ${ns.namespace || ns.fileName}`,
        skip: (ctx) => ctx.dryRun && 'dry-run',
        task: async () => {
          await this.writeNamespaceTypes(ns, dir);
        },
      }));

    // also create a task to write the index file!
    tasks.push({
      title: `write index`,
      skip: (ctx) => ctx.dryRun && 'dry-run',
      task: async () => {
        await this.writeNamespaceIndex(data, dir);
      },
    });

    return new Listr(tasks, { concurrent: true });
  }

  async writeNamespaceTypes(ns: GenNamespace, dir: string) {
    const file = await fs.open(
      path.join(dir, `${ns.fileName}.ts`),
      fs.constants.O_CREAT | fs.constants.O_WRONLY | fs.constants.O_TRUNC
    );

    for (const r of Object.values(ns.routes).sort(byProperty('route'))) {
      for (const e of r.endpoints) {
        await this.writeTypes(file, e.types, 0);
      }
    }

    // We also write the route/endpoint/args mapping types...
    await this.writeMappingTypes(file, ns, 0);

    await file.close();
  }

  // output functions are dependenct on indent level!
  async writeTypes(file: fs.FileHandle, types: GenTypeDesc[], indent: number) {
    // Rather than many small file writes, we collect an array of lines, and then
    // join/write them all at once.  Javascript can perform the join efficiently,
    // so this is likely the best performance balance option.
    const lines: string[] = [];

    types.forEach((t) => {
      // lines.push('');
      lines.push(`${'  '.repeat(indent)}export interface ${t.typeName} {`);
      t.members.forEach((m) => {
        if (m.desc) {
          lines.push(
            `${'  '.repeat(indent + 1)}/** ${m.desc.replaceAll('*/', '* /')} */`
          );
        }

        lines.push(
          `${'  '.repeat(indent + 1)}${this.normalizeJsIdentifier(m.name)}${
            m.optional ? '?' : ''
          }: ${m.type};`
        );
      });
      lines.push(`${'  '.repeat(indent)}}`);
      lines.push('');
      lines.push('');
    });

    await file.write(lines.join('\n'));
  }

  async writeMappingTypes(
    file: fs.FileHandle,
    ns: GenNamespace,
    indent: number
  ) {
    // Rather than many small file writes, we collect an array of lines, and then
    // join/write them all at once.  Javascript can perform the join efficiently,
    // so this is likely the best performance balance option.
    const lines: string[] = [''];

    // Note that we really want to group mappings by method, because that's how
    // the caller will find these...
    for (const m of Object.values(EndpointMethod)) {
      lines.push(
        `${'  '.repeat(indent)}export interface ${
          ns.typeName
        }${inflection.humanize(m)}Routes {`
      );

      for (const r of Object.values(ns.routes).sort(byProperty('route'))) {
        for (const e of r.endpoints) {
          if (e.methods.includes(m)) {
            lines.push(
              `${'  '.repeat(indent + 1)}${this.normalizeJsIdentifier(
                r.route
              )}: ${e.typeName}Args;`
            );
          }
        }
      }

      lines.push(`${'  '.repeat(indent)}}`);
      lines.push('');
    }

    await file.write(lines.join('\n'));
  }

  async writeNamespaceIndex(data: GenData, dir: string) {
    // Also write an index file that gathers/combines everything together...
    const file = await fs.open(
      path.join(dir, 'index.ts'),
      fs.constants.O_CREAT | fs.constants.O_WRONLY | fs.constants.O_TRUNC
    );

    // Rather than many small file writes, we collect an array of lines, and then
    // join/write them all at once.  Javascript can perform the join efficiently,
    // so this is likely the best performance balance option.
    const lines: string[] = [];
    const indent = 0;

    const nss = Object.values(data).sort(byProperty('namespace'));

    for (const ns of nss) {
      lines.push(
        `${'  '.repeat(indent)}import * as ${ns.typeName} from './${
          ns.fileName
        }.js';`
      );
    }

    lines.push('');

    // Note that we really want to group mappings by method, because that's how
    // the caller will find these...
    for (const m of Object.values(EndpointMethod)) {
      lines.push(
        `${'  '.repeat(indent)}export type Known${inflection.humanize(
          m
        )}Routes =`
      );

      for (let i = 0; i < nss.length; i++) {
        lines.push(
          `${'  '.repeat(indent + 1)}${nss[i].typeName}.${
            nss[i].typeName
          }${inflection.humanize(m)}Routes${i < nss.length - 1 ? ' &' : ';'}`
        );
      }

      lines.push('');
    }

    await file.write(lines.join('\n'));
    await file.close();
  }
}
