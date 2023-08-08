// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "kb-fluentcrm/v1" namespace

/**
 * Arguments for `/kb-fluentcrm/v1` route when calling GET method.
 */
export interface KbFluentcrmV1GetArgs {}

/**
 * Arguments for `/kb-fluentcrm/v1/get` route when calling GET method.
 */
export interface KbFluentcrmV1GetGetArgs {
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
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * All "kb-fluentcrm/v1" DELETE routes.
 */
export interface KbFluentcrmV1DeleteRoutes {}

/**
 * All "kb-fluentcrm/v1" GET routes.
 */
export interface KbFluentcrmV1GetRoutes {
  '/kb-fluentcrm/v1': KbFluentcrmV1GetArgs;
  '/kb-fluentcrm/v1/get': KbFluentcrmV1GetGetArgs;
}

/**
 * All "kb-fluentcrm/v1" PATCH routes.
 */
export interface KbFluentcrmV1PatchRoutes {}

/**
 * All "kb-fluentcrm/v1" POST routes.
 */
export interface KbFluentcrmV1PostRoutes {}

/**
 * All "kb-fluentcrm/v1" PUT routes.
 */
export interface KbFluentcrmV1PutRoutes {}

/**
 * All "kb-fluentcrm/v1" WordPress REST API methods/routes.
 */
export interface KbFluentcrmV1Routes {
  Delete: KbFluentcrmV1DeleteRoutes;
  Get: KbFluentcrmV1GetRoutes;
  Patch: KbFluentcrmV1PatchRoutes;
  Post: KbFluentcrmV1PostRoutes;
  Put: KbFluentcrmV1PutRoutes;
}
