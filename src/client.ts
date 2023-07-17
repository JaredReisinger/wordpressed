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

  async delete<
    T = unknown,
    R extends keyof KnownDeleteRoutes = keyof KnownDeleteRoutes,
    A = KnownDeleteRoutes[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.DELETE, route, args);
  }

  async get<
    T = unknown,
    R extends keyof KnownGetRoutes = keyof KnownGetRoutes,
    A = KnownGetRoutes[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.GET, route, args);
  }

  async patch<
    T = unknown,
    R extends keyof KnownPatchRoutes = keyof KnownPatchRoutes,
    A = KnownPatchRoutes[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.PATCH, route, args);
  }

  async post<
    T = unknown,
    R extends keyof KnownPostRoutes = keyof KnownPostRoutes,
    A = KnownPostRoutes[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.POST, route, args);
  }

  async put<
    T = unknown,
    R extends keyof KnownPutRoutes = keyof KnownPutRoutes,
    A = KnownPutRoutes[R],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.PUT, route, args);
  }

  async _call<
    T = unknown,
    R extends keyof AllRoutes = keyof AllRoutes,
    A = AllRoutes[R],
  >(method: EndpointMethod, route: R, args?: A) {
    // TODO: find pattern-match segments of the route path, and add those values
    // as needed.
    const url = `${this.host}/wp-json${route}`;
    console.log(method, { route, args, url });
    const resp = await got<T>(url, { responseType: 'json' });
    return resp;
  }
}
