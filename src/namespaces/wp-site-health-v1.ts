export interface WpSiteHealthV1GetArgs {
}

export interface WpSiteHealthV1DirectorySizesGetArgs {
}

export interface WpSiteHealthV1TestsAuthorizationHeaderGetArgs {
}

export interface WpSiteHealthV1TestsBackgroundUpdatesGetArgs {
}

export interface WpSiteHealthV1TestsDotorgCommunicationGetArgs {
}

export interface WpSiteHealthV1TestsHttpsStatusGetArgs {
}

export interface WpSiteHealthV1TestsLoopbackRequestsGetArgs {
}

export interface WpSiteHealthV1TestsPageCacheGetArgs {
}


export interface WpSiteHealthV1DeleteRoutes {
}

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

export interface WpSiteHealthV1PatchRoutes {
}

export interface WpSiteHealthV1PostRoutes {
}

export interface WpSiteHealthV1PutRoutes {
}

export interface WpSiteHealthV1Routes {
  Delete: WpSiteHealthV1DeleteRoutes;
  Get: WpSiteHealthV1GetRoutes;
  Patch: WpSiteHealthV1PatchRoutes;
  Post: WpSiteHealthV1PostRoutes;
  Put: WpSiteHealthV1PutRoutes;
}
