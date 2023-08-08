// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wpcom/v3" namespace

import {
  WpcomV3GetResponse,
  WpcomV3BloggingPromptsGetResponse,
  WpcomV3BloggingPromptsPIdDGetResponse,
} from './wpcom-v3-responses.js';

/**
 * Arguments for `/wpcom/v3` route when calling GET method.
 */
export interface WpcomV3GetArgs {}

/**
 * Arguments for `/wpcom/v3/blogging-prompts` route when calling GET method.
 */
export interface WpcomV3BloggingPromptsGetArgs {
  /**
   * Show prompts following a given date.
   */
  after?: string;
  /**
   * Show prompts before a given date.
   */
  before?: string;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Force the returned prompts to be for a specific year. Returns only one prompt for each day.
   */
  force_year?: number;
  /**
   * Limit result set to specific IDs.
   * @default
   */
  include?: number[];
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by post attribute.
   * @default "date"
   */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * Arguments for `/wpcom/v3/blogging-prompts/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpcomV3BloggingPromptsPIdDGetArgs {
  /**
   * Unique identifier for the prompt.
   */
  id?: number;
}

/**
 * All "wpcom/v3" DELETE routes.
 */
export interface WpcomV3DeleteRoutes {}

/**
 * All "wpcom/v3" GET routes.
 */
export interface WpcomV3GetRoutes {
  '/wpcom/v3': {
    args: WpcomV3GetArgs;
    response: WpcomV3GetResponse;
  };
  '/wpcom/v3/blogging-prompts': {
    args: WpcomV3BloggingPromptsGetArgs;
    response: WpcomV3BloggingPromptsGetResponse;
  };
  '/wpcom/v3/blogging-prompts/(?P<id>[\\d]+)': {
    args: WpcomV3BloggingPromptsPIdDGetArgs;
    response: WpcomV3BloggingPromptsPIdDGetResponse;
  };
}

/**
 * All "wpcom/v3" PATCH routes.
 */
export interface WpcomV3PatchRoutes {}

/**
 * All "wpcom/v3" POST routes.
 */
export interface WpcomV3PostRoutes {}

/**
 * All "wpcom/v3" PUT routes.
 */
export interface WpcomV3PutRoutes {}

/**
 * All "wpcom/v3" WordPress REST API methods/routes.
 */
export interface WpcomV3Routes {
  Delete: WpcomV3DeleteRoutes;
  Get: WpcomV3GetRoutes;
  Patch: WpcomV3PatchRoutes;
  Post: WpcomV3PostRoutes;
  Put: WpcomV3PutRoutes;
}
