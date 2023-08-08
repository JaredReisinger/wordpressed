// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "" namespace

/**
 * Arguments for `/` route when calling GET method.
 */
export interface WpJsonGetArgs {}

export interface WpJsonBatchV1PostArgsRequests {}

/**
 * Arguments for `/batch/v1` route when calling POST method.
 */
export interface WpJsonBatchV1PostArgs {
  requests: WpJsonBatchV1PostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

/**
 * All "" DELETE routes.
 */
export interface WpJsonDeleteRoutes {}

/**
 * All "" GET routes.
 */
export interface WpJsonGetRoutes {
  '/': WpJsonGetArgs;
}

/**
 * All "" PATCH routes.
 */
export interface WpJsonPatchRoutes {}

/**
 * All "" POST routes.
 */
export interface WpJsonPostRoutes {
  '/batch/v1': WpJsonBatchV1PostArgs;
}

/**
 * All "" PUT routes.
 */
export interface WpJsonPutRoutes {}

/**
 * All "" WordPress REST API methods/routes.
 */
export interface WpJsonRoutes {
  Delete: WpJsonDeleteRoutes;
  Get: WpJsonGetRoutes;
  Patch: WpJsonPatchRoutes;
  Post: WpJsonPostRoutes;
  Put: WpJsonPutRoutes;
}
