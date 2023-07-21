export interface KbpV1GetArgs {
}

export interface KbpV1PostQueryGetArgsInclude {
}


export interface KbpV1PostQueryGetArgs {
  /** Allow Sticky in Query. */
  allow_sticky?: boolean;
  /** Include posts category. */
  category?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Check if using a custom Taxonomy */
  custom_tax?: boolean;
  /** Exclude Category. */
  exclude?: string;
  /** Include posts by ID. */
  include?: KbpV1PostQueryGetArgsInclude[];
  /** Number of items to offset in query. */
  offset?: number;
  /** Define Query Order. */
  order?: string;
  /** Define Query Order By. */
  order_by?: string;
  /** Current page of the collection. */
  page?: number;
  /** Number of results to return. */
  per_page?: number;
  /** The Current Post ID. */
  post_id?: number;
  /** Define Type of Query. */
  query?: string;
  /** Limit results to those matching a string. */
  search?: string;
  /** Include posts tags. */
  tags?: string;
  /** Define Query Order By. */
  tax_type?: string;
  /** Limit results to items of a specific post type. */
  type?: string;
}


export interface KbpV1DeleteRoutes {
}

export interface KbpV1GetRoutes {
  '/kbp/v1': KbpV1GetArgs;
  '/kbp/v1/post-query': KbpV1PostQueryGetArgs;
}

export interface KbpV1PatchRoutes {
}

export interface KbpV1PostRoutes {
}

export interface KbpV1PutRoutes {
}
