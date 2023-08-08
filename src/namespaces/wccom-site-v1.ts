// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wccom-site/v1" namespace

/**
 * Arguments for `/wccom-site/v1` route when calling GET method.
 */
export interface WccomSiteV1GetArgs {}

/**
 * Arguments for `/wccom-site/v1/installer` route when calling GET method.
 */
export interface WccomSiteV1InstallerGetArgs {}

export interface WccomSiteV1InstallerPostArgsProducts {}

/**
 * Arguments for `/wccom-site/v1/installer` route when calling POST method.
 */
export interface WccomSiteV1InstallerPostArgs {
  products: WccomSiteV1InstallerPostArgsProducts;
}

/**
 * Arguments for `/wccom-site/v1/installer` route when calling DELETE method.
 */
export interface WccomSiteV1InstallerDeleteArgs {}

/**
 * Arguments for `/wccom-site/v1/ssr` route when calling GET method.
 */
export interface WccomSiteV1SsrGetArgs {}

/**
 * All "wccom-site/v1" DELETE routes.
 */
export interface WccomSiteV1DeleteRoutes {
  '/wccom-site/v1/installer': WccomSiteV1InstallerDeleteArgs;
}

/**
 * All "wccom-site/v1" GET routes.
 */
export interface WccomSiteV1GetRoutes {
  '/wccom-site/v1': WccomSiteV1GetArgs;
  '/wccom-site/v1/installer': WccomSiteV1InstallerGetArgs;
  '/wccom-site/v1/ssr': WccomSiteV1SsrGetArgs;
}

/**
 * All "wccom-site/v1" PATCH routes.
 */
export interface WccomSiteV1PatchRoutes {}

/**
 * All "wccom-site/v1" POST routes.
 */
export interface WccomSiteV1PostRoutes {
  '/wccom-site/v1/installer': WccomSiteV1InstallerPostArgs;
}

/**
 * All "wccom-site/v1" PUT routes.
 */
export interface WccomSiteV1PutRoutes {}

/**
 * All "wccom-site/v1" WordPress REST API methods/routes.
 */
export interface WccomSiteV1Routes {
  Delete: WccomSiteV1DeleteRoutes;
  Get: WccomSiteV1GetRoutes;
  Patch: WccomSiteV1PatchRoutes;
  Post: WccomSiteV1PostRoutes;
  Put: WccomSiteV1PutRoutes;
}
