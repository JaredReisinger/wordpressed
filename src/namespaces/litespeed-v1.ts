export interface LitespeedV1GetArgs {
}

export interface LitespeedV1ApikeyPostArgs {
}

export interface LitespeedV1CdnStatusPostArgs {
}

export interface LitespeedV1CheckImgPostArgs {
}

export interface LitespeedV1ErrDomainsPostArgs {
}

export interface LitespeedV1IpValidatePostArgs {
}

export interface LitespeedV1NotifyImgPostArgs {
}

export interface LitespeedV1NotifyUcssPostArgs {
}

export interface LitespeedV1NotifyVpiPostArgs {
}

export interface LitespeedV1PingGetArgs {
}

export interface LitespeedV1ToggleCrawlerStatePostArgs {
}

export interface LitespeedV1TokenPostArgs {
}

export interface LitespeedV1TokenGetArgs {
}

export interface LitespeedV1ToolCheckIpGetArgs {
}


export interface LitespeedV1DeleteRoutes {
}

export interface LitespeedV1GetRoutes {
  '/litespeed/v1': LitespeedV1GetArgs;
  '/litespeed/v1/ping': LitespeedV1PingGetArgs;
  '/litespeed/v1/token': LitespeedV1TokenGetArgs;
  '/litespeed/v1/tool/check_ip': LitespeedV1ToolCheckIpGetArgs;
}

export interface LitespeedV1PatchRoutes {
}

export interface LitespeedV1PostRoutes {
  '/litespeed/v1/apikey': LitespeedV1ApikeyPostArgs;
  '/litespeed/v1/cdn_status': LitespeedV1CdnStatusPostArgs;
  '/litespeed/v1/check_img': LitespeedV1CheckImgPostArgs;
  '/litespeed/v1/err_domains': LitespeedV1ErrDomainsPostArgs;
  '/litespeed/v1/ip_validate': LitespeedV1IpValidatePostArgs;
  '/litespeed/v1/notify_img': LitespeedV1NotifyImgPostArgs;
  '/litespeed/v1/notify_ucss': LitespeedV1NotifyUcssPostArgs;
  '/litespeed/v1/notify_vpi': LitespeedV1NotifyVpiPostArgs;
  '/litespeed/v1/toggle_crawler_state': LitespeedV1ToggleCrawlerStatePostArgs;
  '/litespeed/v1/token': LitespeedV1TokenPostArgs;
}

export interface LitespeedV1PutRoutes {
}

export interface LitespeedV1Routes {
  Delete: LitespeedV1DeleteRoutes;
  Get: LitespeedV1GetRoutes;
  Patch: LitespeedV1PatchRoutes;
  Post: LitespeedV1PostRoutes;
  Put: LitespeedV1PutRoutes;
}
