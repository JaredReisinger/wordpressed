import * as Types from './generated/types.js';

const x: Types.BatchV1PostArgs = { requests: [] };
console.log(x);

// mapping of endpoint/route to args...
export interface GetRoutes {
  '/': Types.GetArgs;
  '/batch/v1': Types.BatchV1PostArgs;
  '/oembed/1.0': Types.Oembed10GetArgs;
  '/oembed/1.0/embed': Types.Oembed10EmbedGetArgs;
}

export function getX<
  R extends keyof GetRoutes = keyof GetRoutes,
  A extends GetRoutes[R] = GetRoutes[R],
>(route: R, args: A) {
  console.log('route and args', { route, args });
}

getX('/', {});
getX('/batch/v1', { requests: [] });

// Could also create per-namespace mappings?
export interface WpJsonRoutes {
  '': Types.GetArgs;
  'batch/v1': Types.BatchV1PostArgs; // POST, not GET, but :shrug:
}

export interface Oembed10Routes {
  '': Types.Oembed10GetArgs;
  embed: Types.Oembed10EmbedGetArgs;
}

export interface NamespaceRoutes {
  '': WpJsonRoutes;
  'oembed/1.0': Oembed10Routes;
}

export function get3<
  N extends keyof NamespaceRoutes = keyof NamespaceRoutes,
  R extends keyof NamespaceRoutes[N] = keyof NamespaceRoutes[N],
  A extends NamespaceRoutes[N][R] = NamespaceRoutes[N][R],
>(namespace: N, route: R, args: A) {
  console.log('namespace, route and args', { namespace, route, args });
}

get3('', '', {});
get3('oembed/1.0', 'embed', { url: '' });
