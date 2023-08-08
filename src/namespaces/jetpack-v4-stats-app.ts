// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack/v4/stats-app" namespace

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
  '/jetpack/v4/stats-app': JetpackV4StatsAppGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/posts': JetpackV4StatsAppSites202188134PostsGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\\d]+)': JetpackV4StatsAppSites202188134PostsPResourceIdDGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/posts/(?P<resource_id>[\\d]+)/likes': JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/site-has-never-published-post': JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats': JetpackV4StatsAppSites202188134StatsGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\\-\\w]+)': JetpackV4StatsAppSites202188134StatsPResourceWGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/(?P<resource>[\\-\\w]+)/(?P<resource_id>[\\d]+)': JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/subscribers/counts': JetpackV4StatsAppSites202188134SubscribersCountsGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/wordads/earnings': JetpackV4StatsAppSites202188134WordadsEarningsGetArgs;
  '/jetpack/v4/stats-app/sites/202188134/wordads/stats': JetpackV4StatsAppSites202188134WordadsStatsGetArgs;
}

/**
 * All "jetpack/v4/stats-app" PATCH routes.
 */
export interface JetpackV4StatsAppPatchRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
}

/**
 * All "jetpack/v4/stats-app" POST routes.
 */
export interface JetpackV4StatsAppPostRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
}

/**
 * All "jetpack/v4/stats-app" PUT routes.
 */
export interface JetpackV4StatsAppPutRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePatchPostPutArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPatchPostPutArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPatchPostPutArgs;
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
