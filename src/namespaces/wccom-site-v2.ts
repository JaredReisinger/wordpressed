// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wccom-site/v2" namespace

import {
  WccomSiteV2GetResponse,
  WccomSiteV2InstallerPatchResponse,
  WccomSiteV2InstallerPostResponse,
  WccomSiteV2InstallerPutResponse,
  WccomSiteV2InstallerDeleteResponse,
} from './wccom-site-v2-responses.js';

/**
 * Arguments for `/wccom-site/v2` route when calling GET method.
 */
export interface WccomSiteV2GetArgs {}

/**
 * Arguments for `/wccom-site/v2/installer` route when calling PATCH, POST, and PUT methods.
 */
export interface WccomSiteV2InstallerPatchPostPutArgs {
  'idempotency-key': string;
  'product-id': number;
  'run-until-step':
    | 'get_product_info'
    | 'download_product'
    | 'unpack_product'
    | 'move_product'
    | 'activate_product';
}

/**
 * Arguments for `/wccom-site/v2/installer` route when calling DELETE method.
 */
export interface WccomSiteV2InstallerDeleteArgs {
  'idempotency-key': string;
  'product-id': number;
}

/**
 * All "wccom-site/v2" DELETE routes.
 */
export interface WccomSiteV2DeleteRoutes {
  '/wccom-site/v2/installer': {
    args: WccomSiteV2InstallerDeleteArgs;
    response: WccomSiteV2InstallerDeleteResponse;
  };
}

/**
 * All "wccom-site/v2" GET routes.
 */
export interface WccomSiteV2GetRoutes {
  '/wccom-site/v2': {
    args: WccomSiteV2GetArgs;
    response: WccomSiteV2GetResponse;
  };
}

/**
 * All "wccom-site/v2" PATCH routes.
 */
export interface WccomSiteV2PatchRoutes {
  '/wccom-site/v2/installer': {
    args: WccomSiteV2InstallerPatchPostPutArgs;
    response: WccomSiteV2InstallerPatchResponse;
  };
}

/**
 * All "wccom-site/v2" POST routes.
 */
export interface WccomSiteV2PostRoutes {
  '/wccom-site/v2/installer': {
    args: WccomSiteV2InstallerPatchPostPutArgs;
    response: WccomSiteV2InstallerPostResponse;
  };
}

/**
 * All "wccom-site/v2" PUT routes.
 */
export interface WccomSiteV2PutRoutes {
  '/wccom-site/v2/installer': {
    args: WccomSiteV2InstallerPatchPostPutArgs;
    response: WccomSiteV2InstallerPutResponse;
  };
}

/**
 * All "wccom-site/v2" WordPress REST API methods/routes.
 */
export interface WccomSiteV2Routes {
  Delete: WccomSiteV2DeleteRoutes;
  Get: WccomSiteV2GetRoutes;
  Patch: WccomSiteV2PatchRoutes;
  Post: WccomSiteV2PostRoutes;
  Put: WccomSiteV2PutRoutes;
}
