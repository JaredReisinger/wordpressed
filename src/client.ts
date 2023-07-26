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

interface Routes {} // placeholder for "some interface"

type Endpoints = Record<
  Capitalize<Lowercase<keyof typeof EndpointMethod>>,
  Routes
>;

// We may need agnostic types here?  I'm not sure how to both put constraints
// (extends) on the generic types *and also* let them be statically defined by
// default.  Maybe this needs a "where" expression instead?
// type RouteMethodKey = keyof KnownRoutes;
// type RouteType = KnownRoutes[RouteMethodKey];

export class Client<
  ROUTES extends Endpoints = KnownRoutes,
  DELETE_ROUTES = ROUTES['Delete'],
  GET_ROUTES = ROUTES['Get'],
  PATCH_ROUTES = ROUTES['Patch'],
  POST_ROUTES = ROUTES['Post'],
  PUT_ROUTES = ROUTES['Put'],
> {
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
    T = unknown,
    R extends keyof DELETE_ROUTES = keyof DELETE_ROUTES,
    A extends DELETE_ROUTES[R] = DELETE_ROUTES[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.DELETE, route, args);
  }

  async get<
    T = unknown,
    R extends keyof GET_ROUTES = keyof GET_ROUTES,
    A extends GET_ROUTES[R] = GET_ROUTES[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.GET, route, args);
  }

  async patch<
    T = unknown,
    R extends keyof PATCH_ROUTES = keyof PATCH_ROUTES,
    A extends PATCH_ROUTES[R] = PATCH_ROUTES[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.PATCH, route, args);
  }

  async post<
    T = unknown,
    R extends keyof POST_ROUTES = keyof POST_ROUTES,
    A extends POST_ROUTES[R] = POST_ROUTES[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.POST, route, args);
  }

  async put<
    T = unknown,
    R extends keyof PUT_ROUTES = keyof PUT_ROUTES,
    A extends PUT_ROUTES[R] = PUT_ROUTES[R],
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
