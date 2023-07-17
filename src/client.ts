import got from 'got';

import {
  KnownDeleteRoutes,
  KnownGetRoutes,
  KnownPatchRoutes,
  KnownPostRoutes,
  KnownPutRoutes,
} from './namespaces/index.js';

// We have to decide if some core WpJson stuff is exposed in parallel to the
// discovery-generated types.
// import { EndpointMethod } from './tools/util/wpapi.js';
export enum EndpointMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  // missing: OPTIONS, HEAD, etc.
}

type AllRoutes = KnownDeleteRoutes &
  KnownGetRoutes &
  KnownPatchRoutes &
  KnownPostRoutes &
  KnownPutRoutes;

export class Client {
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
    R extends keyof KnownDeleteRoutes = keyof KnownDeleteRoutes,
    A extends KnownDeleteRoutes[R] = KnownDeleteRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.DELETE, route, args);
  }

  async get<
    T = unknown,
    R extends keyof KnownGetRoutes = keyof KnownGetRoutes,
    A extends KnownGetRoutes[R] = KnownGetRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.GET, route, args);
  }

  async patch<
    T = unknown,
    R extends keyof KnownPatchRoutes = keyof KnownPatchRoutes,
    A extends KnownPatchRoutes[R] = KnownPatchRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.PATCH, route, args);
  }

  async post<
    T = unknown,
    R extends keyof KnownPostRoutes = keyof KnownPostRoutes,
    A extends KnownPostRoutes[R] = KnownPostRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.POST, route, args);
  }

  async put<
    T = unknown,
    R extends keyof KnownPutRoutes = keyof KnownPutRoutes,
    A extends KnownPutRoutes[R] = KnownPutRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.PUT, route, args);
  }

  async _call<
    T = unknown,
    R extends keyof AllRoutes = keyof AllRoutes,
    A extends AllRoutes[R] = AllRoutes[R],
  >(method: EndpointMethod, route: R, args?: A) {
    // TODO: find pattern-match segments of the route path, and add those values
    // as needed.
    const url = `${this.host}/wp-json${route}`;
    console.log(method, { route, args, url });
    const resp = await got<T>(url, { responseType: 'json' });
    return resp;
  }
}
