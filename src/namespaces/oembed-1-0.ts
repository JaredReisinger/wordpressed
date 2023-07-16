export interface Oembed10GetArgs {}

export interface Oembed10EmbedGetArgs {
  /** The URL of the resource for which to fetch oEmbed data. */
  url: string;
}

export interface Oembed10ProxyGetArgs {
  /** Whether to perform an oEmbed discovery request for unsanctioned providers. */
  discover?: boolean;
  /** The oEmbed format to use. */
  format?: 'json' | 'xml';
  /** The maximum height of the embed frame in pixels. */
  maxheight?: number;
  /** The maximum width of the embed frame in pixels. */
  maxwidth?: number;
  /** The URL of the resource for which to fetch oEmbed data. */
  url: string;
}

export interface Oembed10DeleteRoutes {}

export interface Oembed10GetRoutes {
  '/oembed/1.0': Oembed10GetArgs;
  '/oembed/1.0/embed': Oembed10EmbedGetArgs;
  '/oembed/1.0/proxy': Oembed10ProxyGetArgs;
}

export interface Oembed10PatchRoutes {}

export interface Oembed10PostRoutes {}

export interface Oembed10PutRoutes {}
