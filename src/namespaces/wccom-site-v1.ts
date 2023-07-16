export interface WccomSiteV1GetArgs {}

export interface WccomSiteV1InstallerGetArgs {}

export interface WccomSiteV1InstallerPostArgsProducts {}

export interface WccomSiteV1InstallerPostArgs {
  products: WccomSiteV1InstallerPostArgsProducts;
}

export interface WccomSiteV1InstallerDeleteArgs {}

export interface WccomSiteV1SsrGetArgs {}

export interface WccomSiteV1DeleteRoutes {
  '/wccom-site/v1/installer': WccomSiteV1InstallerDeleteArgs;
}

export interface WccomSiteV1GetRoutes {
  '/wccom-site/v1': WccomSiteV1GetArgs;
  '/wccom-site/v1/installer': WccomSiteV1InstallerGetArgs;
  '/wccom-site/v1/ssr': WccomSiteV1SsrGetArgs;
}

export interface WccomSiteV1PatchRoutes {}

export interface WccomSiteV1PostRoutes {
  '/wccom-site/v1/installer': WccomSiteV1InstallerPostArgs;
}

export interface WccomSiteV1PutRoutes {}
