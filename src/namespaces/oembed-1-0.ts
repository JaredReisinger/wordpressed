// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "oembed/1.0" namespace

/**
 * Arguments for `/oembed/1.0` route when calling GET method.
 */
export interface Oembed10GetArgs {}

/**
 * Arguments for `/oembed/1.0/embed` route when calling GET method.
 */
export interface Oembed10EmbedGetArgs {
  /**
   * The URL of the resource for which to fetch oEmbed data. Constraints: format = uri.
   */
  url: string;
}

/**
 * Arguments for `/oembed/1.0/proxy` route when calling GET method.
 */
export interface Oembed10ProxyGetArgs {
  /**
   * Whether to perform an oEmbed discovery request for unsanctioned providers.
   * @default true
   */
  discover?: boolean;
  /**
   * The oEmbed format to use.
   * @default "json"
   */
  format?: 'json' | 'xml';
  /**
   * The maximum height of the embed frame in pixels.
   */
  maxheight?: number;
  /**
   * The maximum width of the embed frame in pixels.
   * @default 600
   */
  maxwidth?: number;
  /**
   * The URL of the resource for which to fetch oEmbed data. Constraints: format = uri.
   */
  url: string;
}

/**
 * All "oembed/1.0" DELETE routes.
 */
export interface Oembed10DeleteRoutes {}

/**
 * All "oembed/1.0" GET routes.
 */
export interface Oembed10GetRoutes {
  '/oembed/1.0': Oembed10GetArgs;
  '/oembed/1.0/embed': Oembed10EmbedGetArgs;
  '/oembed/1.0/proxy': Oembed10ProxyGetArgs;
}

/**
 * All "oembed/1.0" PATCH routes.
 */
export interface Oembed10PatchRoutes {}

/**
 * All "oembed/1.0" POST routes.
 */
export interface Oembed10PostRoutes {}

/**
 * All "oembed/1.0" PUT routes.
 */
export interface Oembed10PutRoutes {}

/**
 * All "oembed/1.0" WordPress REST API methods/routes.
 */
export interface Oembed10Routes {
  Delete: Oembed10DeleteRoutes;
  Get: Oembed10GetRoutes;
  Patch: Oembed10PatchRoutes;
  Post: Oembed10PostRoutes;
  Put: Oembed10PutRoutes;
}
