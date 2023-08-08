// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "litespeed/v1" namespace

/**
 * Arguments for `/litespeed/v1` route when calling GET method.
 */
export interface LitespeedV1GetArgs {}

/**
 * Arguments for `/litespeed/v1/apikey` route when calling POST method.
 */
export interface LitespeedV1ApikeyPostArgs {}

/**
 * Arguments for `/litespeed/v1/cdn_status` route when calling POST method.
 */
export interface LitespeedV1CdnStatusPostArgs {}

/**
 * Arguments for `/litespeed/v1/check_img` route when calling POST method.
 */
export interface LitespeedV1CheckImgPostArgs {}

/**
 * Arguments for `/litespeed/v1/err_domains` route when calling POST method.
 */
export interface LitespeedV1ErrDomainsPostArgs {}

/**
 * Arguments for `/litespeed/v1/ip_validate` route when calling POST method.
 */
export interface LitespeedV1IpValidatePostArgs {}

/**
 * Arguments for `/litespeed/v1/notify_img` route when calling POST method.
 */
export interface LitespeedV1NotifyImgPostArgs {}

/**
 * Arguments for `/litespeed/v1/notify_ucss` route when calling POST method.
 */
export interface LitespeedV1NotifyUcssPostArgs {}

/**
 * Arguments for `/litespeed/v1/notify_vpi` route when calling POST method.
 */
export interface LitespeedV1NotifyVpiPostArgs {}

/**
 * Arguments for `/litespeed/v1/ping` route when calling GET method.
 */
export interface LitespeedV1PingGetArgs {}

/**
 * Arguments for `/litespeed/v1/toggle_crawler_state` route when calling POST method.
 */
export interface LitespeedV1ToggleCrawlerStatePostArgs {}

/**
 * Arguments for `/litespeed/v1/token` route when calling POST method.
 */
export interface LitespeedV1TokenPostArgs {}

/**
 * Arguments for `/litespeed/v1/token` route when calling GET method.
 */
export interface LitespeedV1TokenGetArgs {}

/**
 * Arguments for `/litespeed/v1/tool/check_ip` route when calling GET method.
 */
export interface LitespeedV1ToolCheckIpGetArgs {}

/**
 * All "litespeed/v1" DELETE routes.
 */
export interface LitespeedV1DeleteRoutes {}

/**
 * All "litespeed/v1" GET routes.
 */
export interface LitespeedV1GetRoutes {
  '/litespeed/v1': LitespeedV1GetArgs;
  '/litespeed/v1/ping': LitespeedV1PingGetArgs;
  '/litespeed/v1/token': LitespeedV1TokenGetArgs;
  '/litespeed/v1/tool/check_ip': LitespeedV1ToolCheckIpGetArgs;
}

/**
 * All "litespeed/v1" PATCH routes.
 */
export interface LitespeedV1PatchRoutes {}

/**
 * All "litespeed/v1" POST routes.
 */
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

/**
 * All "litespeed/v1" PUT routes.
 */
export interface LitespeedV1PutRoutes {}

/**
 * All "litespeed/v1" WordPress REST API methods/routes.
 */
export interface LitespeedV1Routes {
  Delete: LitespeedV1DeleteRoutes;
  Get: LitespeedV1GetRoutes;
  Patch: LitespeedV1PatchRoutes;
  Post: LitespeedV1PostRoutes;
  Put: LitespeedV1PutRoutes;
}
