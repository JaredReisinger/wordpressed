// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "litespeed/v1" namespace

import {
  LitespeedV1GetResponse,
  LitespeedV1ApikeyPostResponse,
  LitespeedV1CdnStatusPostResponse,
  LitespeedV1CheckImgPostResponse,
  LitespeedV1ErrDomainsPostResponse,
  LitespeedV1IpValidatePostResponse,
  LitespeedV1NotifyImgPostResponse,
  LitespeedV1NotifyUcssPostResponse,
  LitespeedV1NotifyVpiPostResponse,
  LitespeedV1PingGetResponse,
  LitespeedV1ToggleCrawlerStatePostResponse,
  LitespeedV1TokenPostResponse,
  LitespeedV1TokenGetResponse,
  LitespeedV1ToolCheckIpGetResponse,
} from './litespeed-v1-responses.js';

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
  '/litespeed/v1': {
    args: LitespeedV1GetArgs;
    response: LitespeedV1GetResponse;
  };
  '/litespeed/v1/ping': {
    args: LitespeedV1PingGetArgs;
    response: LitespeedV1PingGetResponse;
  };
  '/litespeed/v1/token': {
    args: LitespeedV1TokenGetArgs;
    response: LitespeedV1TokenGetResponse;
  };
  '/litespeed/v1/tool/check_ip': {
    args: LitespeedV1ToolCheckIpGetArgs;
    response: LitespeedV1ToolCheckIpGetResponse;
  };
}

/**
 * All "litespeed/v1" PATCH routes.
 */
export interface LitespeedV1PatchRoutes {}

/**
 * All "litespeed/v1" POST routes.
 */
export interface LitespeedV1PostRoutes {
  '/litespeed/v1/apikey': {
    args: LitespeedV1ApikeyPostArgs;
    response: LitespeedV1ApikeyPostResponse;
  };
  '/litespeed/v1/cdn_status': {
    args: LitespeedV1CdnStatusPostArgs;
    response: LitespeedV1CdnStatusPostResponse;
  };
  '/litespeed/v1/check_img': {
    args: LitespeedV1CheckImgPostArgs;
    response: LitespeedV1CheckImgPostResponse;
  };
  '/litespeed/v1/err_domains': {
    args: LitespeedV1ErrDomainsPostArgs;
    response: LitespeedV1ErrDomainsPostResponse;
  };
  '/litespeed/v1/ip_validate': {
    args: LitespeedV1IpValidatePostArgs;
    response: LitespeedV1IpValidatePostResponse;
  };
  '/litespeed/v1/notify_img': {
    args: LitespeedV1NotifyImgPostArgs;
    response: LitespeedV1NotifyImgPostResponse;
  };
  '/litespeed/v1/notify_ucss': {
    args: LitespeedV1NotifyUcssPostArgs;
    response: LitespeedV1NotifyUcssPostResponse;
  };
  '/litespeed/v1/notify_vpi': {
    args: LitespeedV1NotifyVpiPostArgs;
    response: LitespeedV1NotifyVpiPostResponse;
  };
  '/litespeed/v1/toggle_crawler_state': {
    args: LitespeedV1ToggleCrawlerStatePostArgs;
    response: LitespeedV1ToggleCrawlerStatePostResponse;
  };
  '/litespeed/v1/token': {
    args: LitespeedV1TokenPostArgs;
    response: LitespeedV1TokenPostResponse;
  };
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
