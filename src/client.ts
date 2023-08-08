import got, { OptionsOfJSONResponseBody } from 'got';

import { KnownRoutes } from './namespaces/index.js';

// We have to decide if some core WpJson stuff is exposed in parallel to the
// discovery-generated types.
export enum EndpointMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  // missing: OPTIONS, HEAD, etc.
}

// define the truly generic versions of the route types... a lot of
// trial-and-error went into finding something that works in an "extends" clause
// *and* accepts both the pre-defined default routes, *and* custom route sets.

/**
 * A semi-dummy type used to enforce that a KnownRoutes-style interface must
 * contain properties for each of the methods.
 */
type Methodable = Record<
  Capitalize<Lowercase<keyof typeof EndpointMethod>>,
  unknown
>;

/**
 * A semi-dummy interface used to enforce that a KnownRoutes-style endpoint
 * route-to-args/response mapping must contain the 'args' and 'response'
 * properties (so that we can index into them). This is set up as a named
 * property object so that it's easy to extend/add-to down the road.
 */
interface ArgResponse {
  args: unknown;
  response: unknown;
}

export class Client<ROUTES extends Methodable = KnownRoutes> {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  // The `args` arguments are currently optional, but there may be cases where
  // an argument value is *required*.  I think it would be possible to detect
  // "all optional" arg types, and make their route-to-arg mapping specifically
  // call out "or undefined" ('/some/route': SomeRouteGetArgs | undefined), so
  // that *just* those routes can be called without the `args` argument.

  async delete<
    R extends keyof ROUTES['Delete'] = keyof ROUTES['Delete'],
    E extends ROUTES['Delete'][R] & ArgResponse = ROUTES['Delete'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.DELETE, route, args);
  }

  async get<
    R extends keyof ROUTES['Get'] = keyof ROUTES['Get'],
    E extends ROUTES['Get'][R] & ArgResponse = ROUTES['Get'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.GET, route, args);
  }

  async patch<
    R extends keyof ROUTES['Patch'] = keyof ROUTES['Patch'],
    E extends ROUTES['Patch'][R] & ArgResponse = ROUTES['Patch'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.PATCH, route, args);
  }

  async post<
    R extends keyof ROUTES['Post'] = keyof ROUTES['Post'],
    E extends ROUTES['Post'][R] & ArgResponse = ROUTES['Post'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.POST, route, args);
  }

  async put<
    R extends keyof ROUTES['Put'] = keyof ROUTES['Put'],
    E extends ROUTES['Put'][R] & ArgResponse = ROUTES['Put'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.PUT, route, args);
  }

  async _call<T, R, A>(method: EndpointMethod, route: R, args?: A) {
    // TODO: find pattern-match segments of the route path, and add those values
    // as needed.
    // TODO: other route normalization, like detecting leading `/`, etc.

    const url = new URL(`${this.host}/wp-json${route}`);
    // console.log(method, { route, args, url });
    const options: OptionsOfJSONResponseBody = { method, responseType: 'json' };

    const argsInQuerystring = [
      EndpointMethod.DELETE,
      EndpointMethod.GET,
    ].includes(method);
    // build querystring args...
    if (args) {
      if (argsInQuerystring) {
        const params = new URLSearchParams(args);
        url.search = params.toString();
      } else {
        options.json = args;
      }
    }

    const resp = await got<T>(url, options);
    // console.log('********', resp);
    return resp;
  }
}

// export async function adhoc() {
//   const client = new Client('xxx');
//   const resp = await client.get('/forminator/v1/preview/forms', {
//     module_id: 3,
//   });
//   console.log(resp);
//   // const resp = await client.delete('/jetpack/v4/backup-helper-script', {});

//   interface CustomRoutes {
//     Get: {
//       '/something3': { args: { foo3: string }; response: { bar3: number } };
//       '/somthing4': { args: { foo4: string }; response: { bar4: number } };
//     };
//     Delete: never;
//     Post: never;
//     Patch: never;
//     Put: never;
//   }

//   const c2 = new Client<CustomRoutes>('ccc');
//   const r2 = await c2.get('/something3', {foo3});
//   console.log(r2);
// }
