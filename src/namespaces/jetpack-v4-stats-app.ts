export interface JetpackV4StatsAppGetArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostPutPatchArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostPutPatchArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostPutPatchArgs {
  /** ID of the notice */
  id: string;
  /** Postponed for (in seconds) */
  postponed_for?: number;
  /** Status of the notice */
  status: string;
}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsPResourceIdDGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetArgs {}

export interface JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsPResourceWGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostPutPatchArgs {
  /** Domain of the referrer */
  domain: string;
}

export interface JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostPutPatchArgs {
  /** Domain of the referrer */
  domain: string;
}

export interface JetpackV4StatsAppSites202188134SubscribersCountsGetArgs {}

export interface JetpackV4StatsAppSites202188134WordadsEarningsGetArgs {}

export interface JetpackV4StatsAppSites202188134WordadsStatsGetArgs {}

export interface JetpackV4StatsAppStatsNoticesPostPutPatchArgs {
  /** ID of the notice */
  id: string;
  /** Postponed for (in seconds) */
  postponed_for?: number;
  /** Status of the notice */
  status: string;
}

export interface JetpackV4StatsAppDeleteRoutes {}

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

export interface JetpackV4StatsAppPatchRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostPutPatchArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPostPutPatchArgs;
}

export interface JetpackV4StatsAppPostRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostPutPatchArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPostPutPatchArgs;
}

export interface JetpackV4StatsAppPutRoutes {
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/module-settings': JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/modules': JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/jetpack-stats-dashboard/notices': JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/delete': JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostPutPatchArgs;
  '/jetpack/v4/stats-app/sites/202188134/stats/referrers/spam/new': JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostPutPatchArgs;
  '/jetpack/v4/stats-app/stats/notices': JetpackV4StatsAppStatsNoticesPostPutPatchArgs;
}
