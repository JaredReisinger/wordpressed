export interface WccomSiteV2GetArgs {}

export interface WccomSiteV2InstallerPostPutPatchArgs {
  'idempotency-key': string;
  'product-id': number;
  'run-until-step':
    | 'get_product_info'
    | 'download_product'
    | 'unpack_product'
    | 'move_product'
    | 'activate_product';
}

export interface WccomSiteV2InstallerDeleteArgs {
  'idempotency-key': string;
  'product-id': number;
}

export interface WccomSiteV2DeleteRoutes {
  '/wccom-site/v2/installer': WccomSiteV2InstallerDeleteArgs;
}

export interface WccomSiteV2GetRoutes {
  '/wccom-site/v2': WccomSiteV2GetArgs;
}

export interface WccomSiteV2PatchRoutes {
  '/wccom-site/v2/installer': WccomSiteV2InstallerPostPutPatchArgs;
}

export interface WccomSiteV2PostRoutes {
  '/wccom-site/v2/installer': WccomSiteV2InstallerPostPutPatchArgs;
}

export interface WccomSiteV2PutRoutes {
  '/wccom-site/v2/installer': WccomSiteV2InstallerPostPutPatchArgs;
}
