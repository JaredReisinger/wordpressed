// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "my-jetpack/v1" namespace

import {
  MyJetpackV1GetResponse,
  MyJetpackV1ChatAuthenticationGetResponse,
  MyJetpackV1ChatAvailabilityGetResponse,
  MyJetpackV1SiteGetResponse,
  MyJetpackV1SiteProductsGetResponse,
  MyJetpackV1SiteProductsPProductAZGetResponse,
  MyJetpackV1SiteProductsPProductAZPatchResponse,
  MyJetpackV1SiteProductsPProductAZPostResponse,
  MyJetpackV1SiteProductsPProductAZPutResponse,
  MyJetpackV1SiteProductsPProductAZDeleteResponse,
  MyJetpackV1SiteProductsPProductAZInstallStandalonePatchResponse,
  MyJetpackV1SiteProductsPProductAZInstallStandalonePostResponse,
  MyJetpackV1SiteProductsPProductAZInstallStandalonePutResponse,
  MyJetpackV1SitePurchasesGetResponse,
} from './my-jetpack-v1-responses.js';

/**
 * Arguments for `/my-jetpack/v1` route when calling GET method.
 */
export interface MyJetpackV1GetArgs {}

/**
 * Arguments for `/my-jetpack/v1/chat/authentication` route when calling GET method.
 */
export interface MyJetpackV1ChatAuthenticationGetArgs {
  test_mode?: boolean;
  type?: string;
}

/**
 * Arguments for `/my-jetpack/v1/chat/availability` route when calling GET method.
 */
export interface MyJetpackV1ChatAvailabilityGetArgs {}

/**
 * Arguments for `/my-jetpack/v1/site` route when calling GET method.
 */
export interface MyJetpackV1SiteGetArgs {}

/**
 * Arguments for `/my-jetpack/v1/site/products` route when calling GET method.
 */
export interface MyJetpackV1SiteProductsGetArgs {}

/**
 * Arguments for `/my-jetpack/v1/site/products/(?P<product>[a-z\-]+)` route when calling GET method.
 */
export interface MyJetpackV1SiteProductsPProductAZGetArgs {
  /**
   * Product slug
   */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

/**
 * Arguments for `/my-jetpack/v1/site/products/(?P<product>[a-z\-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface MyJetpackV1SiteProductsPProductAZPatchPostPutArgs {
  /**
   * Product slug
   */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

/**
 * Arguments for `/my-jetpack/v1/site/products/(?P<product>[a-z\-]+)` route when calling DELETE method.
 */
export interface MyJetpackV1SiteProductsPProductAZDeleteArgs {
  /**
   * Product slug
   */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

/**
 * Arguments for `/my-jetpack/v1/site/products/(?P<product>[a-z\-]+)/install-standalone` route when calling PATCH, POST, and PUT methods.
 */
export interface MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs {
  /**
   * Product slug
   */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

/**
 * Arguments for `/my-jetpack/v1/site/purchases` route when calling GET method.
 */
export interface MyJetpackV1SitePurchasesGetArgs {}

/**
 * All "my-jetpack/v1" DELETE routes.
 */
export interface MyJetpackV1DeleteRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': {
    args: MyJetpackV1SiteProductsPProductAZDeleteArgs;
    response: MyJetpackV1SiteProductsPProductAZDeleteResponse;
  };
}

/**
 * All "my-jetpack/v1" GET routes.
 */
export interface MyJetpackV1GetRoutes {
  '/my-jetpack/v1': {
    args: MyJetpackV1GetArgs;
    response: MyJetpackV1GetResponse;
  };
  '/my-jetpack/v1/chat/authentication': {
    args: MyJetpackV1ChatAuthenticationGetArgs;
    response: MyJetpackV1ChatAuthenticationGetResponse;
  };
  '/my-jetpack/v1/chat/availability': {
    args: MyJetpackV1ChatAvailabilityGetArgs;
    response: MyJetpackV1ChatAvailabilityGetResponse;
  };
  '/my-jetpack/v1/site': {
    args: MyJetpackV1SiteGetArgs;
    response: MyJetpackV1SiteGetResponse;
  };
  '/my-jetpack/v1/site/products': {
    args: MyJetpackV1SiteProductsGetArgs;
    response: MyJetpackV1SiteProductsGetResponse;
  };
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': {
    args: MyJetpackV1SiteProductsPProductAZGetArgs;
    response: MyJetpackV1SiteProductsPProductAZGetResponse;
  };
  '/my-jetpack/v1/site/purchases': {
    args: MyJetpackV1SitePurchasesGetArgs;
    response: MyJetpackV1SitePurchasesGetResponse;
  };
}

/**
 * All "my-jetpack/v1" PATCH routes.
 */
export interface MyJetpackV1PatchRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': {
    args: MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZPatchResponse;
  };
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': {
    args: MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZInstallStandalonePatchResponse;
  };
}

/**
 * All "my-jetpack/v1" POST routes.
 */
export interface MyJetpackV1PostRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': {
    args: MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZPostResponse;
  };
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': {
    args: MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZInstallStandalonePostResponse;
  };
}

/**
 * All "my-jetpack/v1" PUT routes.
 */
export interface MyJetpackV1PutRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': {
    args: MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZPutResponse;
  };
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': {
    args: MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
    response: MyJetpackV1SiteProductsPProductAZInstallStandalonePutResponse;
  };
}

/**
 * All "my-jetpack/v1" WordPress REST API methods/routes.
 */
export interface MyJetpackV1Routes {
  Delete: MyJetpackV1DeleteRoutes;
  Get: MyJetpackV1GetRoutes;
  Patch: MyJetpackV1PatchRoutes;
  Post: MyJetpackV1PostRoutes;
  Put: MyJetpackV1PutRoutes;
}
