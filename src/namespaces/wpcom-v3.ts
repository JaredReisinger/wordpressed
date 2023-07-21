export interface WpcomV3GetArgs {
}

export interface WpcomV3BloggingPromptsGetArgs {
  /** Show prompts following a given date. */
  after?: string;
  /** Show prompts before a given date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Force the returned prompts to be for a specific year. Returns only one prompt for each day. */
  force_year?: number;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title' | 'rand' | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpcomV3BloggingPromptsPIdDGetArgs {
  /** Unique identifier for the prompt. */
  id?: number;
}


export interface WpcomV3DeleteRoutes {
}

export interface WpcomV3GetRoutes {
  '/wpcom/v3': WpcomV3GetArgs;
  '/wpcom/v3/blogging-prompts': WpcomV3BloggingPromptsGetArgs;
  '/wpcom/v3/blogging-prompts/(?P<id>[\\d]+)': WpcomV3BloggingPromptsPIdDGetArgs;
}

export interface WpcomV3PatchRoutes {
}

export interface WpcomV3PostRoutes {
}

export interface WpcomV3PutRoutes {
}
