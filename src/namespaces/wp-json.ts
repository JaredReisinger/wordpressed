// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "" namespace

import {
  WpJsonGetResponse,
  WpJsonBatchV1PostResponse,
} from './wp-json-responses.js';

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
  '/': {
    args: WpJsonGetArgs;
    response: WpJsonGetResponse;
  };
}

/**
 * All "" PATCH routes.
 */
export interface WpJsonPatchRoutes {}

/**
 * All "" POST routes.
 */
export interface WpJsonPostRoutes {
  '/batch/v1': {
    args: WpJsonBatchV1PostArgs;
    response: WpJsonBatchV1PostResponse;
  };
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
