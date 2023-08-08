// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "kb-mailerlite/v1" namespace

/**
 * Arguments for `/kb-mailerlite/v1` route when calling GET method.
 */
export interface KbMailerliteV1GetArgs {}

export interface KbMailerliteV1GetGetArgsQueryargs {}

/**
 * Arguments for `/kb-mailerlite/v1/get` route when calling GET method.
 */
export interface KbMailerliteV1GetGetArgs {
  /**
   * The API Key for Mailerlite account.
   */
  apikey?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: string;
  /**
   * Actionable endpoint for api call.
   */
  endpoint?: string;
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
   * Query Args for url.
   */
  queryargs?: KbMailerliteV1GetGetArgsQueryargs[];
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * All "kb-mailerlite/v1" DELETE routes.
 */
export interface KbMailerliteV1DeleteRoutes {}

/**
 * All "kb-mailerlite/v1" GET routes.
 */
export interface KbMailerliteV1GetRoutes {
  '/kb-mailerlite/v1': KbMailerliteV1GetArgs;
  '/kb-mailerlite/v1/get': KbMailerliteV1GetGetArgs;
}

/**
 * All "kb-mailerlite/v1" PATCH routes.
 */
export interface KbMailerliteV1PatchRoutes {}

/**
 * All "kb-mailerlite/v1" POST routes.
 */
export interface KbMailerliteV1PostRoutes {}

/**
 * All "kb-mailerlite/v1" PUT routes.
 */
export interface KbMailerliteV1PutRoutes {}

/**
 * All "kb-mailerlite/v1" WordPress REST API methods/routes.
 */
export interface KbMailerliteV1Routes {
  Delete: KbMailerliteV1DeleteRoutes;
  Get: KbMailerliteV1GetRoutes;
  Patch: KbMailerliteV1PatchRoutes;
  Post: KbMailerliteV1PostRoutes;
  Put: KbMailerliteV1PutRoutes;
}
