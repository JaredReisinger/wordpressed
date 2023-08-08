// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wp-site-health/v1" namespace

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
  '/wp-site-health/v1': WpSiteHealthV1GetArgs;
  '/wp-site-health/v1/directory-sizes': WpSiteHealthV1DirectorySizesGetArgs;
  '/wp-site-health/v1/tests/authorization-header': WpSiteHealthV1TestsAuthorizationHeaderGetArgs;
  '/wp-site-health/v1/tests/background-updates': WpSiteHealthV1TestsBackgroundUpdatesGetArgs;
  '/wp-site-health/v1/tests/dotorg-communication': WpSiteHealthV1TestsDotorgCommunicationGetArgs;
  '/wp-site-health/v1/tests/https-status': WpSiteHealthV1TestsHttpsStatusGetArgs;
  '/wp-site-health/v1/tests/loopback-requests': WpSiteHealthV1TestsLoopbackRequestsGetArgs;
  '/wp-site-health/v1/tests/page-cache': WpSiteHealthV1TestsPageCacheGetArgs;
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
