// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wccom-site/v1" namespace

import {
  WccomSiteV1GetResponse,
  WccomSiteV1InstallerGetResponse,
  WccomSiteV1InstallerPostResponse,
  WccomSiteV1InstallerDeleteResponse,
  WccomSiteV1SsrGetResponse,
} from './wccom-site-v1-responses.js';

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
  '/wccom-site/v1/installer': {
    args: WccomSiteV1InstallerDeleteArgs;
    response: WccomSiteV1InstallerDeleteResponse;
  };
}

/**
 * All "wccom-site/v1" GET routes.
 */
export interface WccomSiteV1GetRoutes {
  '/wccom-site/v1': {
    args: WccomSiteV1GetArgs;
    response: WccomSiteV1GetResponse;
  };
  '/wccom-site/v1/installer': {
    args: WccomSiteV1InstallerGetArgs;
    response: WccomSiteV1InstallerGetResponse;
  };
  '/wccom-site/v1/ssr': {
    args: WccomSiteV1SsrGetArgs;
    response: WccomSiteV1SsrGetResponse;
  };
}

/**
 * All "wccom-site/v1" PATCH routes.
 */
export interface WccomSiteV1PatchRoutes {}

/**
 * All "wccom-site/v1" POST routes.
 */
export interface WccomSiteV1PostRoutes {
  '/wccom-site/v1/installer': {
    args: WccomSiteV1InstallerPostArgs;
    response: WccomSiteV1InstallerPostResponse;
  };
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
