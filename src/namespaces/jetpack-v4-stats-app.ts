// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack/v4/stats-app" namespace

import {
  JetpackV4StatsAppGetResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPutResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPutResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPutResponse,
  JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetResponse,
  JetpackV4StatsAppSites202188134PostsGetResponse,
  JetpackV4StatsAppSites202188134PostsPResourceIdDGetResponse,
  JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetResponse,
  JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetResponse,
  JetpackV4StatsAppSites202188134StatsGetResponse,
  JetpackV4StatsAppSites202188134StatsPResourceWGetResponse,
  JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePutResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostResponse,
  JetpackV4StatsAppSites202188134StatsReferrersSpamNewPutResponse,
  JetpackV4StatsAppSites202188134SubscribersCountsGetResponse,
  JetpackV4StatsAppSites202188134WordadsEarningsGetResponse,
  JetpackV4StatsAppSites202188134WordadsStatsGetResponse,
  JetpackV4StatsAppStatsNoticesPatchResponse,
  JetpackV4StatsAppStatsNoticesPostResponse,
  JetpackV4StatsAppStatsNoticesPutResponse,
} from './jetpack-v4-stats-app-responses.js';

/**
 * Arguments for `/jetpack/v4/stats-app` route when calling GET method.
 */
export interface JetpackV4StatsAppGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs {
  /**
   * ID of the notice
   */
  id: string;
  /**
   * Postponed for (in seconds) Constraints: minimum = 0.
   * @default null
   */
  postponed_for?: number;
  /**
   * Status of the notice
   */
  status: string;
}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/posts` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134PostsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\d]+)` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134PostsPResourceIdDGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\d]+)/likes` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/site-has-never-published-post` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/stats` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134StatsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\-\w]+)` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134StatsPResourceWGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\-\w]+)/(?P<resource_id>[\d]+)` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs {
  /**
   * Domain of the referrer
   */
  domain: string;
}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs {
  /**
   * Domain of the referrer
   */
  domain: string;
}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/subscribers/counts` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134SubscribersCountsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/wordads/earnings` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134WordadsEarningsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/sites/202188134/wordads/stats` route when calling GET method.
 */
export interface JetpackV4StatsAppSites202188134WordadsStatsGetArgs {}

/**
 * Arguments for `/jetpack/v4/stats-app/stats/notices` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4StatsAppStatsNoticesPatchPostPutArgs {
  /**
   * ID of the notice
   */
  id: string;
  /**
   * Postponed for (in seconds) Constraints: minimum = 0.
   * @default null
   */
  postponed_for?: number;
  /**
   * Status of the notice
   */
  status: string;
}

/**
 * All "jetpack/v4/stats-app" DELETE routes.
 */
export interface JetpackV4StatsAppDeleteRoutes {}

/**
 * All "jetpack/v4/stats-app" GET routes.
 */
export interface JetpackV4StatsAppGetRoutes {
  '/jetpack/v4/stats-app': {
    args: JetpackV4StatsAppGetArgs;
    response: JetpackV4StatsAppGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/posts': {
    args: JetpackV4StatsAppSites202188134PostsGetArgs;
    response: JetpackV4StatsAppSites202188134PostsGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\\d]+)': {
    args: JetpackV4StatsAppSites202188134PostsPResourceIdDGetArgs;
    response: JetpackV4StatsAppSites202188134PostsPResourceIdDGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\\d]+)/likes': {
    args: JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetArgs;
    response: JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/site-has-never-published-post': {
    args: JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetArgs;
    response: JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats': {
    args: JetpackV4StatsAppSites202188134StatsGetArgs;
    response: JetpackV4StatsAppSites202188134StatsGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\\-\\w]+)': {
    args: JetpackV4StatsAppSites202188134StatsPResourceWGetArgs;
    response: JetpackV4StatsAppSites202188134StatsPResourceWGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\\-\\w]+)/(?P<resource_id>[\\d]+)': {
    args: JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetArgs;
    response: JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/subscribers/counts': {
    args: JetpackV4StatsAppSites202188134SubscribersCountsGetArgs;
    response: JetpackV4StatsAppSites202188134SubscribersCountsGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/wordads/earnings': {
    args: JetpackV4StatsAppSites202188134WordadsEarningsGetArgs;
    response: JetpackV4StatsAppSites202188134WordadsEarningsGetResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/wordads/stats': {
    args: JetpackV4StatsAppSites202188134WordadsStatsGetArgs;
    response: JetpackV4StatsAppSites202188134WordadsStatsGetResponse;
  };
}

/**
 * All "jetpack/v4/stats-app" PATCH routes.
 */
export interface JetpackV4StatsAppPatchRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchResponse;
  };
  '/jetpack/v4/stats-app/stats/notices': {
    args: JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppStatsNoticesPatchResponse;
  };
}

/**
 * All "jetpack/v4/stats-app" POST routes.
 */
export interface JetpackV4StatsAppPostRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostResponse;
  };
  '/jetpack/v4/stats-app/stats/notices': {
    args: JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppStatsNoticesPostResponse;
  };
}

/**
 * All "jetpack/v4/stats-app" PUT routes.
 */
export interface JetpackV4StatsAppPutRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPutResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPutResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': {
    args: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPutResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePutResponse;
  };
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': {
    args: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
    response: JetpackV4StatsAppSites202188134StatsReferrersSpamNewPutResponse;
  };
  '/jetpack/v4/stats-app/stats/notices': {
    args: JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
    response: JetpackV4StatsAppStatsNoticesPutResponse;
  };
}

/**
 * All "jetpack/v4/stats-app" WordPress REST API methods/routes.
 */
export interface JetpackV4StatsAppRoutes {
  Delete: JetpackV4StatsAppDeleteRoutes;
  Get: JetpackV4StatsAppGetRoutes;
  Patch: JetpackV4StatsAppPatchRoutes;
  Post: JetpackV4StatsAppPostRoutes;
  Put: JetpackV4StatsAppPutRoutes;
}
