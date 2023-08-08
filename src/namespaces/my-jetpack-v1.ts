// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "my-jetpack/v1" namespace

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
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZDeleteArgs;
}

/**
 * All "my-jetpack/v1" GET routes.
 */
export interface MyJetpackV1GetRoutes {
  '/my-jetpack/v1': MyJetpackV1GetArgs;
  '/my-jetpack/v1/chat/authentication': MyJetpackV1ChatAuthenticationGetArgs;
  '/my-jetpack/v1/chat/availability': MyJetpackV1ChatAvailabilityGetArgs;
  '/my-jetpack/v1/site': MyJetpackV1SiteGetArgs;
  '/my-jetpack/v1/site/products': MyJetpackV1SiteProductsGetArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZGetArgs;
  '/my-jetpack/v1/site/purchases': MyJetpackV1SitePurchasesGetArgs;
}

/**
 * All "my-jetpack/v1" PATCH routes.
 */
export interface MyJetpackV1PatchRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
}

/**
 * All "my-jetpack/v1" POST routes.
 */
export interface MyJetpackV1PostRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
}

/**
 * All "my-jetpack/v1" PUT routes.
 */
export interface MyJetpackV1PutRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPatchPostPutArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePatchPostPutArgs;
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
