/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
// analyzes the endpoints exposed by a WordPress site (given by the environment
// variables WP_HOST).
// import util from 'util';

import fs from 'fs/promises';
import path from 'path';
import inflection from 'inflection';

import { EndpointMethod, Route, WpJson } from '../index.js';
import { dbg, err, out } from './util/helpers.js';
import { /*byProperty,*/ byProperty, exists } from './util/objects.js';
import { getWpJson } from './util/wphost.js';

try {
  await generate();
} catch (e) {
  if (e instanceof Error) {
    err(e);
  } else {
    err(`unknown error: ${e}`);
  }
  process.exit(1);
}

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

async function generate() {
  out('beginning generation...');

  const wpjson = await getWpJson();

  // // always write a new file to '.temp/generated.ts'
  // const file = await fs.open(
  //   path.join('.', 'src', 'generated', 'types.ts'),
  //   fs.constants.O_CREAT | fs.constants.O_WRONLY | fs.constants.O_TRUNC
  // );

  const data: GenData = {};

  parseRoutes(wpjson.routes, data);

  await writeNamespaces(data, path.join('.', 'src', 'namespaces'));

  // // Some endpoints ("/wc-analytics/products/(?P<product_id>[\\d]+)/variations")
  // // result in duplication where the methods are listed more than once (GET,
  // // POST, GET, POST).  We look for this and ignore the redundant endpoints.
  // const routeMethodsSeen: Record<string, string[]> = {};

  // // Note that we do not use array.forEach because we also have async/await to
  // // contend with.
  // for (const [routePath, routeInfo] of Object.entries(wpjson.routes)) {
  //   for (const endpoint of routeInfo.endpoints) {
  //     // Some endpoints
  //     // ("/wc-analytics/products/(?P<product_id>[\\d]+)/variations") result in
  //     // duplication where the methods are listed more than once (GET, POST,
  //     // GET, POST).  We look for this and ignore the redundant endpoints.
  //     const methodsSeen = routeMethodsSeen[routePath];
  //     if (methodsSeen?.includes(endpoint.methods[0])) {
  //       err(
  //         `DUPLICATE ROUTE METHOD ${routePath} ${endpoint.methods}... IGNORING`
  //       );
  //       continue;
  //     }

  //     if (methodsSeen) {
  //       methodsSeen.push(...endpoint.methods);
  //     } else {
  //       routeMethodsSeen[routePath] = [...endpoint.methods];
  //     }

  //     const types = buildArgTypes(
  //       [routePath, ...endpoint.methods],
  //       endpoint.args
  //     );

  //     await writeTypes(file, types, 0);
  //   }
  // }

  // // const types = buildArgTypes(
  // //   ['/wc/v3/orders', 'GET'],
  // //   wpjson.routes['/wc/v3/orders'].endpoints[0].args
  // // );

  // // await writeTypes(file, types, 0);

  // await file.close();
}

function parseRoutes(routes: WpJson['routes'], data: GenData) {
  Object.entries(routes).forEach(([path, routeInfo]) => {
    // create the namespace entry if needed
    const { namespace } = routeInfo;
    let ns = data[namespace];
    if (!ns) {
      ns = {
        namespace,
        fileName: normalizeFileName(namespace, 'wp-json'),
        typeName: normalizeTypeName(namespace, 'wp_json'),
        routes: {},
      };
      data[namespace] = ns;
    }

    parseRoute(path, routeInfo, ns);
  });
}

function parseRoute(route: string, routeInfo: Route, ns: GenNamespace) {
  let r = ns.routes[route];
  if (!r) {
    // The namespace typeName is often a prefix of the path; we don't re-prefix
    // it if so.
    let typeName = normalizeTypeName(route, 'wp_json');
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

  routeInfo.endpoints.forEach((endpoint) => parseEndpoint(endpoint, r));
}

function parseEndpoint(endpoint: Route['endpoints'][number], r: GenRoute) {
  // Some endpoints ("/wc-analytics/products/(?P<product_id>[\\d]+)/variations")
  // result in duplication where the methods are listed more than once (GET,
  // POST, GET, POST).  We look for this and ignore the redundant endpoints.
  if (r.endpoints.some((e) => e.methods.includes(endpoint.methods[0]))) {
    err(`DUPLICATE ROUTE METHOD ${r.route} ${endpoint.methods}... IGNORING`);
    return;
  }

  // Otherwise, parse the argument types (and dependency types).
  const e: GenEndpoint = {
    route: r,
    methods: [...endpoint.methods],
    typeName: `${r.typeName}${normalizeTypeName(
      endpoint.methods.join('_').toLowerCase()
    )}`,
    types: [],
  };

  parseArgTypes(endpoint.args, e);

  r.endpoints.push(e);
}

/**
 *
 * @param str String to normalize
 * @param fallback fallback value used if-and-only-if `str` is empty/missing. This is particularly used to cause namespace "" to get called "wp-json".
 */
function normalizeFileName(
  str: string,
  fallback: string = 'XXX-UNEXPECTED-XXX'
) {
  // After cleaning call 'dasherize' to get a more filename looking value
  // ("some_name" => "some-name").
  return inflection.dasherize(identifize(str) || fallback || 'XXX_MISSING_XXX');
}

/**
 *
 * @param str String to normalize
 * @param fallback fallback value used if-and-only-if `str` is empty/missing. This is particularly used to cause namespace "" to get called "WpJson".
 */
function normalizeTypeName(
  str: string,
  fallback: string = 'XXX_UNEXPECTED_XXX'
) {
  // After cleaning call 'camelize' to get a more Typescript-y looking value
  // ("some_name" => "SomeName").
  return inflection.camelize(identifize(str) || fallback || 'XXX_MISSING_XXX');
}

/**
 * Returns a value safe to use as a JS identifier, quoted and escaped if needed.
 * @param str
 */
function normalizeJsIdentifier(str: string) {
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
function identifize(str: string) {
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
function parseArgTypes(
  args: Route['endpoints'][number]['args'],
  e: GenEndpoint
) {
  const typeName = `${e.typeName}Args`;

  // Parse all of the argument types (after sorting).  Note that "discovered"
  // types (array items, objects) are pushed onto the endpoint types array as
  // they are found, ensuring they are defined before they are used.
  const members = Object.entries(args)
    .sort(byProperty(0))
    .map<GenTypeMember | null>(([argName, argDesc]) => {
      const argTypeName = `${typeName}${normalizeTypeName(argName)}`;
      // determine the type description
      if (Array.isArray(argDesc.type)) {
        dbg(0, `multi-type arg NYI: ${typeName} ${argName}`);
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
          dbg(0, `arg type NYI: ${typeName} ${argName}: ${argDesc.type}`);
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

// When we go to write types, we create files per-namespace...
async function writeNamespaces(data: GenData, dir: string) {
  // Note that we don't use Array.forEach because we have async/await for fs
  // calls.
  for (const ns of Object.values(data).sort(byProperty('namespace'))) {
    await writeNamespace(ns, dir);
  }

  await writeNamespaceIndex(data, dir);
}

async function writeNamespace(ns: GenNamespace, dir: string) {
  const file = await fs.open(
    path.join(dir, `${ns.fileName}.ts`),
    fs.constants.O_CREAT | fs.constants.O_WRONLY | fs.constants.O_TRUNC
  );

  for (const r of Object.values(ns.routes).sort(byProperty('route'))) {
    for (const e of r.endpoints) {
      await writeTypes(file, e.types, 0);
    }
  }

  // We also write the route/endpoint/args mapping types...
  await writeMappingTypes(file, ns, 0);

  await file.close();
}

// output functions are dependenct on indent level!
async function writeTypes(
  file: fs.FileHandle,
  types: GenTypeDesc[],
  indent: number
) {
  // Rather than many small file writes, we collect an array of lines, and then
  // join/write them all at once.  Javascript can perform the join efficiently,
  // so this is likely the best performance balance option.
  const lines: string[] = [''];

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
        `${'  '.repeat(indent + 1)}${normalizeJsIdentifier(m.name)}${
          m.optional ? '?' : ''
        }: ${m.type};`
      );
    });
    lines.push(`${'  '.repeat(indent)}}`);
    lines.push('');
  });

  await file.write(lines.join('\n'));
}

async function writeMappingTypes(
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
            `${'  '.repeat(indent + 1)}${normalizeJsIdentifier(r.route)}: ${
              e.typeName
            }Args;`
          );
        }
      }
    }

    lines.push(`${'  '.repeat(indent)}}`);
    lines.push('');
  }

  await file.write(lines.join('\n'));
}

async function writeNamespaceIndex(data: GenData, dir: string) {
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
      `${'  '.repeat(indent)}export type Known${inflection.humanize(m)}Routes =`
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
