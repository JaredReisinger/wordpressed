// analyzes the endpoints exposed by a WordPress site (given by the environment
// variables WP_HOST).
// import util from 'util';

import { dbg, err, out } from '../util/helpers.js';
import { mapObject } from '../util/objects.js';
import { getWpJson } from '../util/wphost.js';
import { WpJson } from '../util/wpapi.js';

try {
  await analysis();
} catch (e) {
  if (e instanceof Error) {
    err(e);
  } else {
    err(`unknown error: ${e}`);
  }
  process.exit(1);
}

async function analysis() {
  out('beginning analysis...');

  const wpjson = await getWpJson();

  // iterate all the routes, collect method names, and endpoints/args/etc. we
  // *could* attempt to do this all in one giant loop, but it's easier to think
  // about each kind of data separately, even if that means iterating more than
  // once.
  dbg(0, 'route namespaces', collectRouteNamespaces(wpjson.routes));
  dbg(0, 'route methods', collectRouteMethods(wpjson.routes));
  dbg(0, 'route endpoint methods', collectRouteEndpointMethods(wpjson.routes));
  dbg(0, 'route endpoint arg info', collectRouteEndpointArgInfo(wpjson.routes));
  dbg(0, 'array items', collectArrayItems(wpjson.routes));

  // console.log(util.inspect(wpjson.routes['/wc/v3/orders'], true, 8, true));
  // console.log(util.inspect(wpjson.routes['/wp/v2'], true, 8, true));
}

function collectRouteNamespaces(routes: WpJson['routes']) {
  const counts = Object.values(routes).reduce<Record<string, number>>(
    (memo, r) => {
      memo[r.namespace] = (memo[r.namespace] ?? 0) + 1;
      return memo;
    },
    {}
  );

  return alphabetizeCounts(counts);
}

function collectRouteMethods(routes: WpJson['routes']) {
  const counts = Object.values(routes).reduce<Record<string, number>>(
    (memo, r) =>
      r.methods.reduce((memo, m) => {
        memo[m] = (memo[m] ?? 0) + 1;
        return memo;
      }, memo),
    {}
  );

  return alphabetizeCounts(counts);
}

function collectRouteEndpointMethods(routes: WpJson['routes']) {
  const counts = Object.values(routes).reduce<Record<string, number>>(
    (memo, r) =>
      Object.values(r.endpoints).reduce(
        (memo, e) =>
          e.methods.reduce((memo, m) => {
            memo[m] = (memo[m] ?? 0) + 1;
            return memo;
          }, memo),
        memo
      ),
    {}
  );

  return alphabetizeCounts(counts);
}

type Counts = Record<string, number>;
type SubCounts = Record<string, [number, Counts]>;

function collectRouteEndpointArgInfo(routes: WpJson['routes']) {
  const info = Object.values(routes).reduce(
    (memo, r) =>
      Object.values(r.endpoints).reduce(
        (memo, e) =>
          Object.values(e.args).reduce((memo, a) => {
            const typeVal = a.type;
            return Object.entries(a).reduce((memo, [k, v]) => {
              if (!memo.argFields[k]) {
                memo.argFields[k] = [0, {}];
              }
              memo.argFields[k][0]++;
              // for arg fields, track the type of the value of the prop
              // and *also* the value of the 'type' for this arg!
              const valTypeKey = `val-${
                Array.isArray(v) ? `array(${typeof v[0]})` : typeof v
              }`;
              memo.argFields[k][1][valTypeKey] =
                (memo.argFields[k][1][valTypeKey] ?? 0) + 1;
              const typeValKey = `typ-${typeVal}`;
              memo.argFields[k][1][typeValKey] =
                (memo.argFields[k][1][typeValKey] ?? 0) + 1;

              if (k === 'type') {
                if (Array.isArray(v)) {
                  v.forEach((t) => {
                    memo.types[t] = (memo.types[t] ?? 0) + 1;
                  });
                  memo.typeMeta['array'] = (memo.typeMeta['array'] ?? 0) + 1;
                } else {
                  memo.types[v] = (memo.types[v] ?? 0) + 1;
                  memo.typeMeta['single'] = (memo.typeMeta['single'] ?? 0) + 1;
                }
              }
              return memo;
            }, memo);
          }, memo),
        memo
      ),
    {
      argFields: {} as SubCounts,
      types: {} as Counts,
      typeMeta: {} as Counts,
    }
  );

  // mapObject only works if the values are the same type, maybe something with
  // keyof would be better?
  return mapObject(info, alphabetize);
  // return {
  //   argFields: alphabetize(info.argFields),
  //   types: alphabetizeCounts(info.types),
  //   typeMeta: alphabetizeCounts(info.typeMeta),
  // };
}

function collectArrayItems(routes: WpJson['routes']) {
  // use forEach instead of reduce for ease of reading?
  const info = {
    itemKeys: {} as Counts,
    itemTypes: {} as Counts,
  };

  Object.values(routes).forEach((r) => {
    r.endpoints.forEach((e) => {
      Object.values(e.args).forEach((a) => {
        const isArray = a.type === 'array';
        const hasItems = 'items' in a;

        if (hasItems && !isArray) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          err(`items in non-array? ${(a as any).type}`);
        }

        if (isArray && hasItems) {
          Object.entries(a.items ?? {}).forEach(([k, v]) => {
            info.itemKeys[k] = (info.itemKeys[k] ?? 0) + 1;
            if (k === 'type') {
              info.itemTypes[v as string] =
                (info.itemTypes[v as string] ?? 0) + 1;
              if (v === 'array') {
                err(`array of array: ${r.namespace}`);
              }
            }
          });
        }
      });
    });
  });

  return mapObject(info, alphabetize);
}

/**
 * @param counts map of names to counts
 * @returns array of [name, count] tuples, alphabetized
 */
function alphabetizeCounts(counts: Record<string, number>) {
  // return Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0]));
  return alphabetize(counts);
}

/**
 * @param data map of names to values
 * @returns array of [name, count] tuples, alphabetized
 */
function alphabetize<O extends object, K = keyof O>(data: O): [K, unknown][];
function alphabetize<T>(data: Record<string, T>) {
  return Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
}
