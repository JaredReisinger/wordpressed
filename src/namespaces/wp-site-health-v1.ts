// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wp-site-health/v1" namespace

import {
  WpSiteHealthV1GetResponse,
  WpSiteHealthV1DirectorySizesGetResponse,
  WpSiteHealthV1TestsAuthorizationHeaderGetResponse,
  WpSiteHealthV1TestsBackgroundUpdatesGetResponse,
  WpSiteHealthV1TestsDotorgCommunicationGetResponse,
  WpSiteHealthV1TestsHttpsStatusGetResponse,
  WpSiteHealthV1TestsLoopbackRequestsGetResponse,
  WpSiteHealthV1TestsPageCacheGetResponse,
} from './wp-site-health-v1-responses.js';

/**
 * Arguments for `/wp-site-health/v1` route when calling GET method.
 */
export interface WpSiteHealthV1GetArgs {}

/**
 * Arguments for `/wp-site-health/v1/directory-sizes` route when calling GET method.
 */
export interface WpSiteHealthV1DirectorySizesGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/authorization-header` route when calling GET method.
 */
export interface WpSiteHealthV1TestsAuthorizationHeaderGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/background-updates` route when calling GET method.
 */
export interface WpSiteHealthV1TestsBackgroundUpdatesGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/dotorg-communication` route when calling GET method.
 */
export interface WpSiteHealthV1TestsDotorgCommunicationGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/https-status` route when calling GET method.
 */
export interface WpSiteHealthV1TestsHttpsStatusGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/loopback-requests` route when calling GET method.
 */
export interface WpSiteHealthV1TestsLoopbackRequestsGetArgs {}

/**
 * Arguments for `/wp-site-health/v1/tests/page-cache` route when calling GET method.
 */
export interface WpSiteHealthV1TestsPageCacheGetArgs {}

/**
 * All "wp-site-health/v1" DELETE routes.
 */
export interface WpSiteHealthV1DeleteRoutes {}

/**
 * All "wp-site-health/v1" GET routes.
 */
export interface WpSiteHealthV1GetRoutes {
  '/wp-site-health/v1': {
    args: WpSiteHealthV1GetArgs;
    response: WpSiteHealthV1GetResponse;
  };
  '/wp-site-health/v1/directory-sizes': {
    args: WpSiteHealthV1DirectorySizesGetArgs;
    response: WpSiteHealthV1DirectorySizesGetResponse;
  };
  '/wp-site-health/v1/tests/authorization-header': {
    args: WpSiteHealthV1TestsAuthorizationHeaderGetArgs;
    response: WpSiteHealthV1TestsAuthorizationHeaderGetResponse;
  };
  '/wp-site-health/v1/tests/background-updates': {
    args: WpSiteHealthV1TestsBackgroundUpdatesGetArgs;
    response: WpSiteHealthV1TestsBackgroundUpdatesGetResponse;
  };
  '/wp-site-health/v1/tests/dotorg-communication': {
    args: WpSiteHealthV1TestsDotorgCommunicationGetArgs;
    response: WpSiteHealthV1TestsDotorgCommunicationGetResponse;
  };
  '/wp-site-health/v1/tests/https-status': {
    args: WpSiteHealthV1TestsHttpsStatusGetArgs;
    response: WpSiteHealthV1TestsHttpsStatusGetResponse;
  };
  '/wp-site-health/v1/tests/loopback-requests': {
    args: WpSiteHealthV1TestsLoopbackRequestsGetArgs;
    response: WpSiteHealthV1TestsLoopbackRequestsGetResponse;
  };
  '/wp-site-health/v1/tests/page-cache': {
    args: WpSiteHealthV1TestsPageCacheGetArgs;
    response: WpSiteHealthV1TestsPageCacheGetResponse;
  };
}

/**
 * All "wp-site-health/v1" PATCH routes.
 */
export interface WpSiteHealthV1PatchRoutes {}

/**
 * All "wp-site-health/v1" POST routes.
 */
export interface WpSiteHealthV1PostRoutes {}

/**
 * All "wp-site-health/v1" PUT routes.
 */
export interface WpSiteHealthV1PutRoutes {}

/**
 * All "wp-site-health/v1" WordPress REST API methods/routes.
 */
export interface WpSiteHealthV1Routes {
  Delete: WpSiteHealthV1DeleteRoutes;
  Get: WpSiteHealthV1GetRoutes;
  Patch: WpSiteHealthV1PatchRoutes;
  Post: WpSiteHealthV1PostRoutes;
  Put: WpSiteHealthV1PutRoutes;
}
