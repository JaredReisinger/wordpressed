export interface WcAdminGetArgs {}

export interface WcAdminExperimentsAssignmentGetArgs {}

export interface WcAdminFeaturesGetArgs {}

export interface WcAdminMarketingCampaignTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAdminMarketingCampaignsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAdminMarketingChannelsGetArgs {}

export interface WcAdminMarketingKnowledgeBaseGetArgs {
  category?: string;
}

export interface WcAdminMarketingOverviewActivatePluginPostPutPatchArgs {
  plugin: string;
}

export interface WcAdminMarketingOverviewInstalledPluginsGetArgs {}

export interface WcAdminMarketingRecommendationsGetArgs {
  category: 'channels' | 'extensions';
}

export interface WcAdminMarketingRecommendedGetArgs {
  category?: string;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAdminMobileAppGetArgs {}

export interface WcAdminMobileAppSendMagicLinkGetArgs {}

export interface WcAdminNavigationFavoritesMeGetArgs {}

export interface WcAdminNavigationFavoritesMePostArgs {}

export interface WcAdminNavigationFavoritesMeDeleteArgs {}

export interface WcAdminOnboardingFreeExtensionsGetArgs {}

export interface WcAdminOnboardingPluginsInstallAndActivatePostArgs {}

export interface WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgsPlugins {}

export interface WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgs {
  /** A list of plugins to install */
  plugins: WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgsPlugins[];
}

export interface WcAdminOnboardingPluginsJetpackAuthorizationUrlGetArgs {
  /** from value for the jetpack authorization page */
  from?: string;
  /** The URL to redirect to after authorization */
  redirect_url: string;
}

export interface WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetArgs {}

export interface WcAdminOnboardingProductTypesGetArgs {}

export interface WcAdminOnboardingProfileGetArgs {}

export interface WcAdminOnboardingProfilePostPutPatchArgsIndustry {}

export interface WcAdminOnboardingProfilePostPutPatchArgs {
  /** Extra business extensions to install. */
  business_extensions?: number[];
  /** Whether or not the profile was completed. */
  completed?: boolean;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Industry. */
  industry?: WcAdminOnboardingProfilePostPutPatchArgsIndustry[];
  /** Whether or not this store agreed to receiving marketing contents from WooCommerce.com. */
  is_agree_marketing?: boolean;
  /** Whether or not plugins step in core profiler was skipped. */
  is_plugins_page_skipped?: boolean;
  /** Whether or not this store country is set via onboarding profiler. */
  is_store_country_set?: boolean;
  /** Number of employees of the store. */
  number_employees?:
    | '1'
    | '<10'
    | '10-50'
    | '50-250'
    | '+250'
    | 'not specified';
  /** Name of other platform used to sell. */
  other_platform?:
    | 'shopify'
    | 'bigcommerce'
    | 'magento'
    | 'wix'
    | 'amazon'
    | 'ebay'
    | 'etsy'
    | 'squarespace'
    | 'other';
  /** Name of other platform used to sell (not listed). */
  other_platform_name?: string;
  /** Number of products to be added. */
  product_count?: '0' | '1-10' | '11-100' | '101-1000' | '1000+';
  /** Types of products sold. */
  product_types?: number[];
  /** Current annual revenue of the store. */
  revenue?:
    | 'none'
    | 'up-to-2500'
    | '2500-10000'
    | '10000-50000'
    | '50000-250000'
    | 'more-than-250000'
    | 'rather-not-say';
  /** Other places the store is selling products. */
  selling_venues?:
    | 'no'
    | 'other'
    | 'brick-mortar'
    | 'brick-mortar-other'
    | 'other-woocommerce';
  /** Whether or not this store was setup for a client. */
  setup_client?: boolean;
  /** Whether or not the profile was skipped. */
  skipped?: boolean;
  /** Store email address. */
  store_email?: string;
  /** Selected store theme. */
  theme?: string;
  /** Whether or not the store was connected to WooCommerce.com during the extension flow. */
  wccom_connected?: boolean;
}

export interface WcAdminOnboardingProfileExperimentalGetEmailPrefillGetArgs {}

export interface WcAdminOnboardingTasksGetArgs {
  /** Optional parameter to get only specific task lists by id. */
  ids?: number[];
}

export interface WcAdminOnboardingTasksPostArgsExtendedTasks {}

export interface WcAdminOnboardingTasksPostArgs {
  /** List of extended deprecated tasks from the client side filter. */
  extended_tasks?: WcAdminOnboardingTasksPostArgsExtendedTasks[];
  /** Optional parameter to get only specific task lists by id. */
  ids?: number[];
}

export interface WcAdminOnboardingTasksPIdAZ09SnoozePostArgs {
  /** Time period to snooze the task. */
  duration?: string;
  /** Optional parameter to query specific task list. */
  task_list_id?: string;
}

export interface WcAdminOnboardingTasksPIdAZ09ActionPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09DismissPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09HidePostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UndoDismissPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UndoSnoozePostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UnhidePostPutPatchArgs {}

export interface WcAdminOnboardingTasksCreateHomepagePostArgs {}

export interface WcAdminOnboardingTasksCreateProductFromTemplatePostArgs {
  /** Product template name. */
  template_name: string;
}

export interface WcAdminOnboardingTasksImportSampleProductsPostArgs {}

export interface WcAdminOnboardingThemesActivatePostPutPatchArgs {}

export interface WcAdminOnboardingThemesInstallPostPutPatchArgs {}

export interface WcAdminOptionsGetArgs {}

export interface WcAdminOptionsPostPutPatchArgs {}

export interface WcAdminPaymentGatewaySuggestionsGetArgs {
  /** Return the default payment suggestions when woocommerce_show_marketplace_suggestions and woocommerce_setting_payments_recommendations_hidden options are set to no */
  force_default_suggestions?: boolean;
}

export interface WcAdminPaymentGatewaySuggestionsDismissPostArgs {}

export interface WcAdminPluginsActivatePostPutPatchArgs {}

export interface WcAdminPluginsActivateStatusGetArgs {}

export interface WcAdminPluginsActivateStatusPJobIdAZ09GetArgs {}

export interface WcAdminPluginsActiveGetArgs {}

export interface WcAdminPluginsConnectJetpackGetArgs {}

export interface WcAdminPluginsConnectSquarePostPutPatchArgs {}

export interface WcAdminPluginsConnectWcpayPostPutPatchArgs {}

export interface WcAdminPluginsFinishWccomConnectPostArgs {}

export interface WcAdminPluginsInstallPostPutPatchArgs {}

export interface WcAdminPluginsInstallStatusGetArgs {}

export interface WcAdminPluginsInstallStatusPJobIdAZ09GetArgs {}

export interface WcAdminPluginsInstalledGetArgs {}

export interface WcAdminPluginsRequestWccomConnectPostArgs {}

export interface WcAdminShippingPartnerSuggestionsGetArgs {
  /** Return the default shipping partner suggestions when woocommerce_show_marketplace_suggestions option is set to no */
  force_default_suggestions?: boolean;
}

export interface WcAdminThemesPostPutPatchArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAdminDeleteRoutes {
  '/wc-admin/navigation/favorites/me': WcAdminNavigationFavoritesMeDeleteArgs;
}

export interface WcAdminGetRoutes {
  '/wc-admin': WcAdminGetArgs;
  '/wc-admin/experiments/assignment': WcAdminExperimentsAssignmentGetArgs;
  '/wc-admin/features': WcAdminFeaturesGetArgs;
  '/wc-admin/marketing/campaign-types': WcAdminMarketingCampaignTypesGetArgs;
  '/wc-admin/marketing/campaigns': WcAdminMarketingCampaignsGetArgs;
  '/wc-admin/marketing/channels': WcAdminMarketingChannelsGetArgs;
  '/wc-admin/marketing/knowledge-base': WcAdminMarketingKnowledgeBaseGetArgs;
  '/wc-admin/marketing/overview/installed-plugins': WcAdminMarketingOverviewInstalledPluginsGetArgs;
  '/wc-admin/marketing/recommendations': WcAdminMarketingRecommendationsGetArgs;
  '/wc-admin/marketing/recommended': WcAdminMarketingRecommendedGetArgs;
  '/wc-admin/mobile-app': WcAdminMobileAppGetArgs;
  '/wc-admin/mobile-app/send-magic-link': WcAdminMobileAppSendMagicLinkGetArgs;
  '/wc-admin/navigation/favorites/me': WcAdminNavigationFavoritesMeGetArgs;
  '/wc-admin/onboarding/free-extensions': WcAdminOnboardingFreeExtensionsGetArgs;
  '/wc-admin/onboarding/plugins/jetpack-authorization-url': WcAdminOnboardingPluginsJetpackAuthorizationUrlGetArgs;
  '/wc-admin/onboarding/plugins/scheduled-installs/(?P<job_id>\\w+)': WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetArgs;
  '/wc-admin/onboarding/product-types': WcAdminOnboardingProductTypesGetArgs;
  '/wc-admin/onboarding/profile': WcAdminOnboardingProfileGetArgs;
  '/wc-admin/onboarding/profile/experimental_get_email_prefill': WcAdminOnboardingProfileExperimentalGetEmailPrefillGetArgs;
  '/wc-admin/onboarding/tasks': WcAdminOnboardingTasksGetArgs;
  '/wc-admin/options': WcAdminOptionsGetArgs;
  '/wc-admin/payment-gateway-suggestions': WcAdminPaymentGatewaySuggestionsGetArgs;
  '/wc-admin/plugins/activate/status': WcAdminPluginsActivateStatusGetArgs;
  '/wc-admin/plugins/activate/status/(?P<job_id>[a-z0-9_\\-]+)': WcAdminPluginsActivateStatusPJobIdAZ09GetArgs;
  '/wc-admin/plugins/active': WcAdminPluginsActiveGetArgs;
  '/wc-admin/plugins/connect-jetpack': WcAdminPluginsConnectJetpackGetArgs;
  '/wc-admin/plugins/install/status': WcAdminPluginsInstallStatusGetArgs;
  '/wc-admin/plugins/install/status/(?P<job_id>[a-z0-9_\\-]+)': WcAdminPluginsInstallStatusPJobIdAZ09GetArgs;
  '/wc-admin/plugins/installed': WcAdminPluginsInstalledGetArgs;
  '/wc-admin/shipping-partner-suggestions': WcAdminShippingPartnerSuggestionsGetArgs;
}

export interface WcAdminPatchRoutes {
  '/wc-admin/marketing/overview/activate-plugin': WcAdminMarketingOverviewActivatePluginPostPutPatchArgs;
  '/wc-admin/onboarding/profile': WcAdminOnboardingProfilePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': WcAdminOnboardingTasksPIdAZ09ActionPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': WcAdminOnboardingTasksPIdAZ09DismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': WcAdminOnboardingTasksPIdAZ09HidePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': WcAdminOnboardingTasksPIdAZ09UndoDismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': WcAdminOnboardingTasksPIdAZ09UndoSnoozePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': WcAdminOnboardingTasksPIdAZ09UnhidePostPutPatchArgs;
  '/wc-admin/onboarding/themes/activate': WcAdminOnboardingThemesActivatePostPutPatchArgs;
  '/wc-admin/onboarding/themes/install': WcAdminOnboardingThemesInstallPostPutPatchArgs;
  '/wc-admin/options': WcAdminOptionsPostPutPatchArgs;
  '/wc-admin/plugins/activate': WcAdminPluginsActivatePostPutPatchArgs;
  '/wc-admin/plugins/connect-square': WcAdminPluginsConnectSquarePostPutPatchArgs;
  '/wc-admin/plugins/connect-wcpay': WcAdminPluginsConnectWcpayPostPutPatchArgs;
  '/wc-admin/plugins/install': WcAdminPluginsInstallPostPutPatchArgs;
  '/wc-admin/themes': WcAdminThemesPostPutPatchArgs;
}

export interface WcAdminPostRoutes {
  '/wc-admin/marketing/overview/activate-plugin': WcAdminMarketingOverviewActivatePluginPostPutPatchArgs;
  '/wc-admin/navigation/favorites/me': WcAdminNavigationFavoritesMePostArgs;
  '/wc-admin/onboarding/plugins/install-and-activate': WcAdminOnboardingPluginsInstallAndActivatePostArgs;
  '/wc-admin/onboarding/plugins/install-and-activate-async': WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgs;
  '/wc-admin/onboarding/profile': WcAdminOnboardingProfilePostPutPatchArgs;
  '/wc-admin/onboarding/tasks': WcAdminOnboardingTasksPostArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_-]+)/snooze': WcAdminOnboardingTasksPIdAZ09SnoozePostArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': WcAdminOnboardingTasksPIdAZ09ActionPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': WcAdminOnboardingTasksPIdAZ09DismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': WcAdminOnboardingTasksPIdAZ09HidePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': WcAdminOnboardingTasksPIdAZ09UndoDismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': WcAdminOnboardingTasksPIdAZ09UndoSnoozePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': WcAdminOnboardingTasksPIdAZ09UnhidePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/create_homepage': WcAdminOnboardingTasksCreateHomepagePostArgs;
  '/wc-admin/onboarding/tasks/create_product_from_template': WcAdminOnboardingTasksCreateProductFromTemplatePostArgs;
  '/wc-admin/onboarding/tasks/import_sample_products': WcAdminOnboardingTasksImportSampleProductsPostArgs;
  '/wc-admin/onboarding/themes/activate': WcAdminOnboardingThemesActivatePostPutPatchArgs;
  '/wc-admin/onboarding/themes/install': WcAdminOnboardingThemesInstallPostPutPatchArgs;
  '/wc-admin/options': WcAdminOptionsPostPutPatchArgs;
  '/wc-admin/payment-gateway-suggestions/dismiss': WcAdminPaymentGatewaySuggestionsDismissPostArgs;
  '/wc-admin/plugins/activate': WcAdminPluginsActivatePostPutPatchArgs;
  '/wc-admin/plugins/connect-square': WcAdminPluginsConnectSquarePostPutPatchArgs;
  '/wc-admin/plugins/connect-wcpay': WcAdminPluginsConnectWcpayPostPutPatchArgs;
  '/wc-admin/plugins/finish-wccom-connect': WcAdminPluginsFinishWccomConnectPostArgs;
  '/wc-admin/plugins/install': WcAdminPluginsInstallPostPutPatchArgs;
  '/wc-admin/plugins/request-wccom-connect': WcAdminPluginsRequestWccomConnectPostArgs;
  '/wc-admin/themes': WcAdminThemesPostPutPatchArgs;
}

export interface WcAdminPutRoutes {
  '/wc-admin/marketing/overview/activate-plugin': WcAdminMarketingOverviewActivatePluginPostPutPatchArgs;
  '/wc-admin/onboarding/profile': WcAdminOnboardingProfilePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': WcAdminOnboardingTasksPIdAZ09ActionPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': WcAdminOnboardingTasksPIdAZ09DismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': WcAdminOnboardingTasksPIdAZ09HidePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': WcAdminOnboardingTasksPIdAZ09UndoDismissPostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': WcAdminOnboardingTasksPIdAZ09UndoSnoozePostPutPatchArgs;
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': WcAdminOnboardingTasksPIdAZ09UnhidePostPutPatchArgs;
  '/wc-admin/onboarding/themes/activate': WcAdminOnboardingThemesActivatePostPutPatchArgs;
  '/wc-admin/onboarding/themes/install': WcAdminOnboardingThemesInstallPostPutPatchArgs;
  '/wc-admin/options': WcAdminOptionsPostPutPatchArgs;
  '/wc-admin/plugins/activate': WcAdminPluginsActivatePostPutPatchArgs;
  '/wc-admin/plugins/connect-square': WcAdminPluginsConnectSquarePostPutPatchArgs;
  '/wc-admin/plugins/connect-wcpay': WcAdminPluginsConnectWcpayPostPutPatchArgs;
  '/wc-admin/plugins/install': WcAdminPluginsInstallPostPutPatchArgs;
  '/wc-admin/themes': WcAdminThemesPostPutPatchArgs;
}

export interface WcAdminRoutes {
  Delete: WcAdminDeleteRoutes;
  Get: WcAdminGetRoutes;
  Patch: WcAdminPatchRoutes;
  Post: WcAdminPostRoutes;
  Put: WcAdminPutRoutes;
}
