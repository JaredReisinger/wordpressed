// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "kbp/v1" namespace

import {
  KbpV1GetResponse,
  KbpV1PostQueryGetResponse,
} from './kbp-v1-responses.js';

/**
 * Arguments for `/kbp/v1` route when calling GET method.
 */
export interface KbpV1GetArgs {}

export interface KbpV1PostQueryGetArgsInclude {}

/**
 * Arguments for `/kbp/v1/post-query` route when calling GET method.
 */
export interface KbpV1PostQueryGetArgs {
  /**
   * Allow Sticky in Query.
   */
  allow_sticky?: boolean;
  /**
   * Include posts category.
   */
  category?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: string;
  /**
   * Check if using a custom Taxonomy
   */
  custom_tax?: boolean;
  /**
   * Exclude Category.
   */
  exclude?: string;
  /**
   * Include posts by ID.
   */
  include?: KbpV1PostQueryGetArgsInclude[];
  /**
   * Number of items to offset in query.
   * @default 0
   */
  offset?: number;
  /**
   * Define Query Order.
   */
  order?: string;
  /**
   * Define Query Order By.
   */
  order_by?: string;
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Number of results to return.
   * @default 25
   */
  per_page?: number;
  /**
   * The Current Post ID.
   */
  post_id?: number;
  /**
   * Define Type of Query.
   */
  query?: string;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Include posts tags.
   */
  tags?: string;
  /**
   * Define Query Order By.
   */
  tax_type?: string;
  /**
   * Limit results to items of a specific post type.
   */
  type?: string;
}

/**
 * All "kbp/v1" DELETE routes.
 */
export interface KbpV1DeleteRoutes {}

/**
 * All "kbp/v1" GET routes.
 */
export interface KbpV1GetRoutes {
  '/kbp/v1': {
    args: KbpV1GetArgs;
    response: KbpV1GetResponse;
  };
  '/kbp/v1/post-query': {
    args: KbpV1PostQueryGetArgs;
    response: KbpV1PostQueryGetResponse;
  };
}

/**
 * All "kbp/v1" PATCH routes.
 */
export interface KbpV1PatchRoutes {}

/**
 * All "kbp/v1" POST routes.
 */
export interface KbpV1PostRoutes {}

/**
 * All "kbp/v1" PUT routes.
 */
export interface KbpV1PutRoutes {}

/**
 * All "kbp/v1" WordPress REST API methods/routes.
 */
export interface KbpV1Routes {
  Delete: KbpV1DeleteRoutes;
  Get: KbpV1GetRoutes;
  Patch: KbpV1PatchRoutes;
  Post: KbpV1PostRoutes;
  Put: KbpV1PutRoutes;
}
