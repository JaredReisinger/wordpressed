// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "uag/v1" namespace

import {
  UagV1GetResponse,
  UagV1AdminCommonsettingsGetResponse,
} from './uag-v1-responses.js';

/**
 * Arguments for `/uag/v1` route when calling GET method.
 */
export interface UagV1GetArgs {}

/**
 * Arguments for `/uag/v1/admin/commonsettings` route when calling GET method.
 */
export interface UagV1AdminCommonsettingsGetArgs {}

/**
 * All "uag/v1" DELETE routes.
 */
export interface UagV1DeleteRoutes {}

/**
 * All "uag/v1" GET routes.
 */
export interface UagV1GetRoutes {
  '/uag/v1': {
    args: UagV1GetArgs;
    response: UagV1GetResponse;
  };
  '/uag/v1/admin/commonsettings': {
    args: UagV1AdminCommonsettingsGetArgs;
    response: UagV1AdminCommonsettingsGetResponse;
  };
}

/**
 * All "uag/v1" PATCH routes.
 */
export interface UagV1PatchRoutes {}

/**
 * All "uag/v1" POST routes.
 */
export interface UagV1PostRoutes {}

/**
 * All "uag/v1" PUT routes.
 */
export interface UagV1PutRoutes {}

/**
 * All "uag/v1" WordPress REST API methods/routes.
 */
export interface UagV1Routes {
  Delete: UagV1DeleteRoutes;
  Get: UagV1GetRoutes;
  Patch: UagV1PatchRoutes;
  Post: UagV1PostRoutes;
  Put: UagV1PutRoutes;
}
