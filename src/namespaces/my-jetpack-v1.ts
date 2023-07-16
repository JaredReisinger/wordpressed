export interface MyJetpackV1GetArgs {}

export interface MyJetpackV1ChatAuthenticationGetArgs {
  test_mode?: boolean;
  type?: string;
}

export interface MyJetpackV1ChatAvailabilityGetArgs {}

export interface MyJetpackV1SiteGetArgs {}

export interface MyJetpackV1SiteProductsGetArgs {}

export interface MyJetpackV1SiteProductsPProductAZGetArgs {
  /** Product slug */
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

export interface MyJetpackV1SiteProductsPProductAZPostPutPatchArgs {
  /** Product slug */
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

export interface MyJetpackV1SiteProductsPProductAZDeleteArgs {
  /** Product slug */
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

export interface MyJetpackV1SiteProductsPProductAZInstallStandalonePostPutPatchArgs {
  /** Product slug */
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

export interface MyJetpackV1SitePurchasesGetArgs {}

export interface MyJetpackV1DeleteRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZDeleteArgs;
}

export interface MyJetpackV1GetRoutes {
  '/my-jetpack/v1': MyJetpackV1GetArgs;
  '/my-jetpack/v1/chat/authentication': MyJetpackV1ChatAuthenticationGetArgs;
  '/my-jetpack/v1/chat/availability': MyJetpackV1ChatAvailabilityGetArgs;
  '/my-jetpack/v1/site': MyJetpackV1SiteGetArgs;
  '/my-jetpack/v1/site/products': MyJetpackV1SiteProductsGetArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZGetArgs;
  '/my-jetpack/v1/site/purchases': MyJetpackV1SitePurchasesGetArgs;
}

export interface MyJetpackV1PatchRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPostPutPatchArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePostPutPatchArgs;
}

export interface MyJetpackV1PostRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPostPutPatchArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePostPutPatchArgs;
}

export interface MyJetpackV1PutRoutes {
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)': MyJetpackV1SiteProductsPProductAZPostPutPatchArgs;
  '/my-jetpack/v1/site/products/(?P<product>[a-z\\-]+)/install-standalone': MyJetpackV1SiteProductsPProductAZInstallStandalonePostPutPatchArgs;
}
