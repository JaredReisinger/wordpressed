// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc-admin" namespace

import {
  WcAdminGetResponse,
  WcAdminExperimentsAssignmentGetResponse,
  WcAdminFeaturesGetResponse,
  WcAdminMarketingCampaignTypesGetResponse,
  WcAdminMarketingCampaignsGetResponse,
  WcAdminMarketingChannelsGetResponse,
  WcAdminMarketingKnowledgeBaseGetResponse,
  WcAdminMarketingOverviewActivatePluginPatchResponse,
  WcAdminMarketingOverviewActivatePluginPostResponse,
  WcAdminMarketingOverviewActivatePluginPutResponse,
  WcAdminMarketingOverviewInstalledPluginsGetResponse,
  WcAdminMarketingRecommendationsGetResponse,
  WcAdminMarketingRecommendedGetResponse,
  WcAdminMobileAppGetResponse,
  WcAdminMobileAppSendMagicLinkGetResponse,
  WcAdminNavigationFavoritesMeGetResponse,
  WcAdminNavigationFavoritesMePostResponse,
  WcAdminNavigationFavoritesMeDeleteResponse,
  WcAdminOnboardingFreeExtensionsGetResponse,
  WcAdminOnboardingPluginsInstallAndActivatePostResponse,
  WcAdminOnboardingPluginsInstallAndActivateAsyncPostResponse,
  WcAdminOnboardingPluginsJetpackAuthorizationUrlGetResponse,
  WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetResponse,
  WcAdminOnboardingProductTypesGetResponse,
  WcAdminOnboardingProfileGetResponse,
  WcAdminOnboardingProfilePatchResponse,
  WcAdminOnboardingProfilePostResponse,
  WcAdminOnboardingProfilePutResponse,
  WcAdminOnboardingProfileExperimentalGetEmailPrefillGetResponse,
  WcAdminOnboardingTasksGetResponse,
  WcAdminOnboardingTasksPostResponse,
  WcAdminOnboardingTasksPIdAZ09SnoozePostResponse,
  WcAdminOnboardingTasksPIdAZ09ActionPatchResponse,
  WcAdminOnboardingTasksPIdAZ09ActionPostResponse,
  WcAdminOnboardingTasksPIdAZ09ActionPutResponse,
  WcAdminOnboardingTasksPIdAZ09DismissPatchResponse,
  WcAdminOnboardingTasksPIdAZ09DismissPostResponse,
  WcAdminOnboardingTasksPIdAZ09DismissPutResponse,
  WcAdminOnboardingTasksPIdAZ09HidePatchResponse,
  WcAdminOnboardingTasksPIdAZ09HidePostResponse,
  WcAdminOnboardingTasksPIdAZ09HidePutResponse,
  WcAdminOnboardingTasksPIdAZ09UndoDismissPatchResponse,
  WcAdminOnboardingTasksPIdAZ09UndoDismissPostResponse,
  WcAdminOnboardingTasksPIdAZ09UndoDismissPutResponse,
  WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchResponse,
  WcAdminOnboardingTasksPIdAZ09UndoSnoozePostResponse,
  WcAdminOnboardingTasksPIdAZ09UndoSnoozePutResponse,
  WcAdminOnboardingTasksPIdAZ09UnhidePatchResponse,
  WcAdminOnboardingTasksPIdAZ09UnhidePostResponse,
  WcAdminOnboardingTasksPIdAZ09UnhidePutResponse,
  WcAdminOnboardingTasksCreateHomepagePostResponse,
  WcAdminOnboardingTasksCreateProductFromTemplatePostResponse,
  WcAdminOnboardingTasksImportSampleProductsPostResponse,
  WcAdminOnboardingThemesActivatePatchResponse,
  WcAdminOnboardingThemesActivatePostResponse,
  WcAdminOnboardingThemesActivatePutResponse,
  WcAdminOnboardingThemesInstallPatchResponse,
  WcAdminOnboardingThemesInstallPostResponse,
  WcAdminOnboardingThemesInstallPutResponse,
  WcAdminOptionsGetResponse,
  WcAdminOptionsPatchResponse,
  WcAdminOptionsPostResponse,
  WcAdminOptionsPutResponse,
  WcAdminPaymentGatewaySuggestionsGetResponse,
  WcAdminPaymentGatewaySuggestionsDismissPostResponse,
  WcAdminPluginsActivatePatchResponse,
  WcAdminPluginsActivatePostResponse,
  WcAdminPluginsActivatePutResponse,
  WcAdminPluginsActivateStatusGetResponse,
  WcAdminPluginsActivateStatusPJobIdAZ09GetResponse,
  WcAdminPluginsActiveGetResponse,
  WcAdminPluginsConnectJetpackGetResponse,
  WcAdminPluginsConnectSquarePatchResponse,
  WcAdminPluginsConnectSquarePostResponse,
  WcAdminPluginsConnectSquarePutResponse,
  WcAdminPluginsConnectWcpayPatchResponse,
  WcAdminPluginsConnectWcpayPostResponse,
  WcAdminPluginsConnectWcpayPutResponse,
  WcAdminPluginsFinishWccomConnectPostResponse,
  WcAdminPluginsInstallPatchResponse,
  WcAdminPluginsInstallPostResponse,
  WcAdminPluginsInstallPutResponse,
  WcAdminPluginsInstallStatusGetResponse,
  WcAdminPluginsInstallStatusPJobIdAZ09GetResponse,
  WcAdminPluginsInstalledGetResponse,
  WcAdminPluginsRequestWccomConnectPostResponse,
  WcAdminShippingPartnerSuggestionsGetResponse,
  WcAdminThemesPatchResponse,
  WcAdminThemesPostResponse,
  WcAdminThemesPutResponse,
} from './wc-admin-responses.js';

/**
 * Arguments for `/wc-admin` route when calling GET method.
 */
export interface WcAdminGetArgs {}

/**
 * Arguments for `/wc-admin/experiments/assignment` route when calling GET method.
 */
export interface WcAdminExperimentsAssignmentGetArgs {}

/**
 * Arguments for `/wc-admin/features` route when calling GET method.
 */
export interface WcAdminFeaturesGetArgs {}

/**
 * Arguments for `/wc-admin/marketing/campaign-types` route when calling GET method.
 */
export interface WcAdminMarketingCampaignTypesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: 'view';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
}

/**
 * Arguments for `/wc-admin/marketing/campaigns` route when calling GET method.
 */
export interface WcAdminMarketingCampaignsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: 'view';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
}

/**
 * Arguments for `/wc-admin/marketing/channels` route when calling GET method.
 */
export interface WcAdminMarketingChannelsGetArgs {}

/**
 * Arguments for `/wc-admin/marketing/knowledge-base` route when calling GET method.
 */
export interface WcAdminMarketingKnowledgeBaseGetArgs {
  category?: string;
}

/**
 * Arguments for `/wc-admin/marketing/overview/activate-plugin` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminMarketingOverviewActivatePluginPatchPostPutArgs {
  plugin: string;
}

/**
 * Arguments for `/wc-admin/marketing/overview/installed-plugins` route when calling GET method.
 */
export interface WcAdminMarketingOverviewInstalledPluginsGetArgs {}

/**
 * Arguments for `/wc-admin/marketing/recommendations` route when calling GET method.
 */
export interface WcAdminMarketingRecommendationsGetArgs {
  category: 'channels' | 'extensions';
}

/**
 * Arguments for `/wc-admin/marketing/recommended` route when calling GET method.
 */
export interface WcAdminMarketingRecommendedGetArgs {
  category?: string;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
}

/**
 * Arguments for `/wc-admin/mobile-app` route when calling GET method.
 */
export interface WcAdminMobileAppGetArgs {}

/**
 * Arguments for `/wc-admin/mobile-app/send-magic-link` route when calling GET method.
 */
export interface WcAdminMobileAppSendMagicLinkGetArgs {}

/**
 * Arguments for `/wc-admin/navigation/favorites/me` route when calling GET method.
 */
export interface WcAdminNavigationFavoritesMeGetArgs {}

/**
 * Arguments for `/wc-admin/navigation/favorites/me` route when calling POST method.
 */
export interface WcAdminNavigationFavoritesMePostArgs {}

/**
 * Arguments for `/wc-admin/navigation/favorites/me` route when calling DELETE method.
 */
export interface WcAdminNavigationFavoritesMeDeleteArgs {}

/**
 * Arguments for `/wc-admin/onboarding/free-extensions` route when calling GET method.
 */
export interface WcAdminOnboardingFreeExtensionsGetArgs {}

/**
 * Arguments for `/wc-admin/onboarding/plugins/install-and-activate` route when calling POST method.
 */
export interface WcAdminOnboardingPluginsInstallAndActivatePostArgs {}

export interface WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgsPlugins {}

/**
 * Arguments for `/wc-admin/onboarding/plugins/install-and-activate-async` route when calling POST method.
 */
export interface WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgs {
  /**
   * A list of plugins to install
   */
  plugins: WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgsPlugins[];
}

/**
 * Arguments for `/wc-admin/onboarding/plugins/jetpack-authorization-url` route when calling GET method.
 */
export interface WcAdminOnboardingPluginsJetpackAuthorizationUrlGetArgs {
  /**
   * from value for the jetpack authorization page
   * @default "woocommerce-onboarding"
   */
  from?: string;
  /**
   * The URL to redirect to after authorization
   */
  redirect_url: string;
}

/**
 * Arguments for `/wc-admin/onboarding/plugins/scheduled-installs/(?P<job_id>\w+)` route when calling GET method.
 */
export interface WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetArgs {}

/**
 * Arguments for `/wc-admin/onboarding/product-types` route when calling GET method.
 */
export interface WcAdminOnboardingProductTypesGetArgs {}

/**
 * Arguments for `/wc-admin/onboarding/profile` route when calling GET method.
 */
export interface WcAdminOnboardingProfileGetArgs {}

export interface WcAdminOnboardingProfilePatchPostPutArgsIndustry {}

/**
 * Arguments for `/wc-admin/onboarding/profile` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingProfilePatchPostPutArgs {
  /**
   * Extra business extensions to install.
   */
  business_extensions?: number[];
  /**
   * Whether or not the profile was completed.
   */
  completed?: boolean;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
  /**
   * Industry.
   */
  industry?: WcAdminOnboardingProfilePatchPostPutArgsIndustry[];
  /**
   * Whether or not this store agreed to receiving marketing contents from WooCommerce.com.
   */
  is_agree_marketing?: boolean;
  /**
   * Whether or not plugins step in core profiler was skipped.
   */
  is_plugins_page_skipped?: boolean;
  /**
   * Whether or not this store country is set via onboarding profiler.
   */
  is_store_country_set?: boolean;
  /**
   * Number of employees of the store.
   */
  number_employees?:
    | '1'
    | '<10'
    | '10-50'
    | '50-250'
    | '+250'
    | 'not specified';
  /**
   * Name of other platform used to sell.
   */
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
  /**
   * Name of other platform used to sell (not listed).
   */
  other_platform_name?: string;
  /**
   * Number of products to be added.
   */
  product_count?: '0' | '1-10' | '11-100' | '101-1000' | '1000+';
  /**
   * Types of products sold.
   */
  product_types?: number[];
  /**
   * Current annual revenue of the store.
   */
  revenue?:
    | 'none'
    | 'up-to-2500'
    | '2500-10000'
    | '10000-50000'
    | '50000-250000'
    | 'more-than-250000'
    | 'rather-not-say';
  /**
   * Other places the store is selling products.
   */
  selling_venues?:
    | 'no'
    | 'other'
    | 'brick-mortar'
    | 'brick-mortar-other'
    | 'other-woocommerce';
  /**
   * Whether or not this store was setup for a client.
   */
  setup_client?: boolean;
  /**
   * Whether or not the profile was skipped.
   */
  skipped?: boolean;
  /**
   * Store email address.
   */
  store_email?: string;
  /**
   * Selected store theme.
   */
  theme?: string;
  /**
   * Whether or not the store was connected to WooCommerce.com during the extension flow.
   */
  wccom_connected?: boolean;
}

/**
 * Arguments for `/wc-admin/onboarding/profile/experimental_get_email_prefill` route when calling GET method.
 */
export interface WcAdminOnboardingProfileExperimentalGetEmailPrefillGetArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks` route when calling GET method.
 */
export interface WcAdminOnboardingTasksGetArgs {
  /**
   * Optional parameter to get only specific task lists by id.
   */
  ids?: number[];
}

export interface WcAdminOnboardingTasksPostArgsExtendedTasks {}

/**
 * Arguments for `/wc-admin/onboarding/tasks` route when calling POST method.
 */
export interface WcAdminOnboardingTasksPostArgs {
  /**
   * List of extended deprecated tasks from the client side filter.
   */
  extended_tasks?: WcAdminOnboardingTasksPostArgsExtendedTasks[];
  /**
   * Optional parameter to get only specific task lists by id.
   */
  ids?: number[];
}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_-]+)/snooze` route when calling POST method.
 */
export interface WcAdminOnboardingTasksPIdAZ09SnoozePostArgs {
  /**
   * Time period to snooze the task.
   */
  duration?: string;
  /**
   * Optional parameter to query specific task list.
   */
  task_list_id?: string;
}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/action` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09ActionPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/dismiss` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09DismissPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/hide` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09HidePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/undo_dismiss` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09UndoDismissPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/undo_snooze` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\-]+)/unhide` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingTasksPIdAZ09UnhidePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/create_homepage` route when calling POST method.
 */
export interface WcAdminOnboardingTasksCreateHomepagePostArgs {}

/**
 * Arguments for `/wc-admin/onboarding/tasks/create_product_from_template` route when calling POST method.
 */
export interface WcAdminOnboardingTasksCreateProductFromTemplatePostArgs {
  /**
   * Product template name.
   */
  template_name: string;
}

/**
 * Arguments for `/wc-admin/onboarding/tasks/import_sample_products` route when calling POST method.
 */
export interface WcAdminOnboardingTasksImportSampleProductsPostArgs {}

/**
 * Arguments for `/wc-admin/onboarding/themes/activate` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingThemesActivatePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/onboarding/themes/install` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOnboardingThemesInstallPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/options` route when calling GET method.
 */
export interface WcAdminOptionsGetArgs {}

/**
 * Arguments for `/wc-admin/options` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminOptionsPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/payment-gateway-suggestions` route when calling GET method.
 */
export interface WcAdminPaymentGatewaySuggestionsGetArgs {
  /**
   * Return the default payment suggestions when woocommerce_show_marketplace_suggestions and woocommerce_setting_payments_recommendations_hidden options are set to no
   */
  force_default_suggestions?: boolean;
}

/**
 * Arguments for `/wc-admin/payment-gateway-suggestions/dismiss` route when calling POST method.
 */
export interface WcAdminPaymentGatewaySuggestionsDismissPostArgs {}

/**
 * Arguments for `/wc-admin/plugins/activate` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminPluginsActivatePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/plugins/activate/status` route when calling GET method.
 */
export interface WcAdminPluginsActivateStatusGetArgs {}

/**
 * Arguments for `/wc-admin/plugins/activate/status/(?P<job_id>[a-z0-9_\-]+)` route when calling GET method.
 */
export interface WcAdminPluginsActivateStatusPJobIdAZ09GetArgs {}

/**
 * Arguments for `/wc-admin/plugins/active` route when calling GET method.
 */
export interface WcAdminPluginsActiveGetArgs {}

/**
 * Arguments for `/wc-admin/plugins/connect-jetpack` route when calling GET method.
 */
export interface WcAdminPluginsConnectJetpackGetArgs {}

/**
 * Arguments for `/wc-admin/plugins/connect-square` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminPluginsConnectSquarePatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/plugins/connect-wcpay` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminPluginsConnectWcpayPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/plugins/finish-wccom-connect` route when calling POST method.
 */
export interface WcAdminPluginsFinishWccomConnectPostArgs {}

/**
 * Arguments for `/wc-admin/plugins/install` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminPluginsInstallPatchPostPutArgs {}

/**
 * Arguments for `/wc-admin/plugins/install/status` route when calling GET method.
 */
export interface WcAdminPluginsInstallStatusGetArgs {}

/**
 * Arguments for `/wc-admin/plugins/install/status/(?P<job_id>[a-z0-9_\-]+)` route when calling GET method.
 */
export interface WcAdminPluginsInstallStatusPJobIdAZ09GetArgs {}

/**
 * Arguments for `/wc-admin/plugins/installed` route when calling GET method.
 */
export interface WcAdminPluginsInstalledGetArgs {}

/**
 * Arguments for `/wc-admin/plugins/request-wccom-connect` route when calling POST method.
 */
export interface WcAdminPluginsRequestWccomConnectPostArgs {}

/**
 * Arguments for `/wc-admin/shipping-partner-suggestions` route when calling GET method.
 */
export interface WcAdminShippingPartnerSuggestionsGetArgs {
  /**
   * Return the default shipping partner suggestions when woocommerce_show_marketplace_suggestions option is set to no
   */
  force_default_suggestions?: boolean;
}

/**
 * Arguments for `/wc-admin/themes` route when calling PATCH, POST, and PUT methods.
 */
export interface WcAdminThemesPatchPostPutArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * All "wc-admin" DELETE routes.
 */
export interface WcAdminDeleteRoutes {
  '/wc-admin/navigation/favorites/me': {
    args: WcAdminNavigationFavoritesMeDeleteArgs;
    response: WcAdminNavigationFavoritesMeDeleteResponse;
  };
}

/**
 * All "wc-admin" GET routes.
 */
export interface WcAdminGetRoutes {
  '/wc-admin': {
    args: WcAdminGetArgs;
    response: WcAdminGetResponse;
  };
  '/wc-admin/experiments/assignment': {
    args: WcAdminExperimentsAssignmentGetArgs;
    response: WcAdminExperimentsAssignmentGetResponse;
  };
  '/wc-admin/features': {
    args: WcAdminFeaturesGetArgs;
    response: WcAdminFeaturesGetResponse;
  };
  '/wc-admin/marketing/campaign-types': {
    args: WcAdminMarketingCampaignTypesGetArgs;
    response: WcAdminMarketingCampaignTypesGetResponse;
  };
  '/wc-admin/marketing/campaigns': {
    args: WcAdminMarketingCampaignsGetArgs;
    response: WcAdminMarketingCampaignsGetResponse;
  };
  '/wc-admin/marketing/channels': {
    args: WcAdminMarketingChannelsGetArgs;
    response: WcAdminMarketingChannelsGetResponse;
  };
  '/wc-admin/marketing/knowledge-base': {
    args: WcAdminMarketingKnowledgeBaseGetArgs;
    response: WcAdminMarketingKnowledgeBaseGetResponse;
  };
  '/wc-admin/marketing/overview/installed-plugins': {
    args: WcAdminMarketingOverviewInstalledPluginsGetArgs;
    response: WcAdminMarketingOverviewInstalledPluginsGetResponse;
  };
  '/wc-admin/marketing/recommendations': {
    args: WcAdminMarketingRecommendationsGetArgs;
    response: WcAdminMarketingRecommendationsGetResponse;
  };
  '/wc-admin/marketing/recommended': {
    args: WcAdminMarketingRecommendedGetArgs;
    response: WcAdminMarketingRecommendedGetResponse;
  };
  '/wc-admin/mobile-app': {
    args: WcAdminMobileAppGetArgs;
    response: WcAdminMobileAppGetResponse;
  };
  '/wc-admin/mobile-app/send-magic-link': {
    args: WcAdminMobileAppSendMagicLinkGetArgs;
    response: WcAdminMobileAppSendMagicLinkGetResponse;
  };
  '/wc-admin/navigation/favorites/me': {
    args: WcAdminNavigationFavoritesMeGetArgs;
    response: WcAdminNavigationFavoritesMeGetResponse;
  };
  '/wc-admin/onboarding/free-extensions': {
    args: WcAdminOnboardingFreeExtensionsGetArgs;
    response: WcAdminOnboardingFreeExtensionsGetResponse;
  };
  '/wc-admin/onboarding/plugins/jetpack-authorization-url': {
    args: WcAdminOnboardingPluginsJetpackAuthorizationUrlGetArgs;
    response: WcAdminOnboardingPluginsJetpackAuthorizationUrlGetResponse;
  };
  '/wc-admin/onboarding/plugins/scheduled-installs/(?P<job_id>\\w+)': {
    args: WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetArgs;
    response: WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetResponse;
  };
  '/wc-admin/onboarding/product-types': {
    args: WcAdminOnboardingProductTypesGetArgs;
    response: WcAdminOnboardingProductTypesGetResponse;
  };
  '/wc-admin/onboarding/profile': {
    args: WcAdminOnboardingProfileGetArgs;
    response: WcAdminOnboardingProfileGetResponse;
  };
  '/wc-admin/onboarding/profile/experimental_get_email_prefill': {
    args: WcAdminOnboardingProfileExperimentalGetEmailPrefillGetArgs;
    response: WcAdminOnboardingProfileExperimentalGetEmailPrefillGetResponse;
  };
  '/wc-admin/onboarding/tasks': {
    args: WcAdminOnboardingTasksGetArgs;
    response: WcAdminOnboardingTasksGetResponse;
  };
  '/wc-admin/options': {
    args: WcAdminOptionsGetArgs;
    response: WcAdminOptionsGetResponse;
  };
  '/wc-admin/payment-gateway-suggestions': {
    args: WcAdminPaymentGatewaySuggestionsGetArgs;
    response: WcAdminPaymentGatewaySuggestionsGetResponse;
  };
  '/wc-admin/plugins/activate/status': {
    args: WcAdminPluginsActivateStatusGetArgs;
    response: WcAdminPluginsActivateStatusGetResponse;
  };
  '/wc-admin/plugins/activate/status/(?P<job_id>[a-z0-9_\\-]+)': {
    args: WcAdminPluginsActivateStatusPJobIdAZ09GetArgs;
    response: WcAdminPluginsActivateStatusPJobIdAZ09GetResponse;
  };
  '/wc-admin/plugins/active': {
    args: WcAdminPluginsActiveGetArgs;
    response: WcAdminPluginsActiveGetResponse;
  };
  '/wc-admin/plugins/connect-jetpack': {
    args: WcAdminPluginsConnectJetpackGetArgs;
    response: WcAdminPluginsConnectJetpackGetResponse;
  };
  '/wc-admin/plugins/install/status': {
    args: WcAdminPluginsInstallStatusGetArgs;
    response: WcAdminPluginsInstallStatusGetResponse;
  };
  '/wc-admin/plugins/install/status/(?P<job_id>[a-z0-9_\\-]+)': {
    args: WcAdminPluginsInstallStatusPJobIdAZ09GetArgs;
    response: WcAdminPluginsInstallStatusPJobIdAZ09GetResponse;
  };
  '/wc-admin/plugins/installed': {
    args: WcAdminPluginsInstalledGetArgs;
    response: WcAdminPluginsInstalledGetResponse;
  };
  '/wc-admin/shipping-partner-suggestions': {
    args: WcAdminShippingPartnerSuggestionsGetArgs;
    response: WcAdminShippingPartnerSuggestionsGetResponse;
  };
}

/**
 * All "wc-admin" PATCH routes.
 */
export interface WcAdminPatchRoutes {
  '/wc-admin/marketing/overview/activate-plugin': {
    args: WcAdminMarketingOverviewActivatePluginPatchPostPutArgs;
    response: WcAdminMarketingOverviewActivatePluginPatchResponse;
  };
  '/wc-admin/onboarding/profile': {
    args: WcAdminOnboardingProfilePatchPostPutArgs;
    response: WcAdminOnboardingProfilePatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': {
    args: WcAdminOnboardingTasksPIdAZ09ActionPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09ActionPatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09DismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09DismissPatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': {
    args: WcAdminOnboardingTasksPIdAZ09HidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09HidePatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09UndoDismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoDismissPatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': {
    args: WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': {
    args: WcAdminOnboardingTasksPIdAZ09UnhidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UnhidePatchResponse;
  };
  '/wc-admin/onboarding/themes/activate': {
    args: WcAdminOnboardingThemesActivatePatchPostPutArgs;
    response: WcAdminOnboardingThemesActivatePatchResponse;
  };
  '/wc-admin/onboarding/themes/install': {
    args: WcAdminOnboardingThemesInstallPatchPostPutArgs;
    response: WcAdminOnboardingThemesInstallPatchResponse;
  };
  '/wc-admin/options': {
    args: WcAdminOptionsPatchPostPutArgs;
    response: WcAdminOptionsPatchResponse;
  };
  '/wc-admin/plugins/activate': {
    args: WcAdminPluginsActivatePatchPostPutArgs;
    response: WcAdminPluginsActivatePatchResponse;
  };
  '/wc-admin/plugins/connect-square': {
    args: WcAdminPluginsConnectSquarePatchPostPutArgs;
    response: WcAdminPluginsConnectSquarePatchResponse;
  };
  '/wc-admin/plugins/connect-wcpay': {
    args: WcAdminPluginsConnectWcpayPatchPostPutArgs;
    response: WcAdminPluginsConnectWcpayPatchResponse;
  };
  '/wc-admin/plugins/install': {
    args: WcAdminPluginsInstallPatchPostPutArgs;
    response: WcAdminPluginsInstallPatchResponse;
  };
  '/wc-admin/themes': {
    args: WcAdminThemesPatchPostPutArgs;
    response: WcAdminThemesPatchResponse;
  };
}

/**
 * All "wc-admin" POST routes.
 */
export interface WcAdminPostRoutes {
  '/wc-admin/marketing/overview/activate-plugin': {
    args: WcAdminMarketingOverviewActivatePluginPatchPostPutArgs;
    response: WcAdminMarketingOverviewActivatePluginPostResponse;
  };
  '/wc-admin/navigation/favorites/me': {
    args: WcAdminNavigationFavoritesMePostArgs;
    response: WcAdminNavigationFavoritesMePostResponse;
  };
  '/wc-admin/onboarding/plugins/install-and-activate': {
    args: WcAdminOnboardingPluginsInstallAndActivatePostArgs;
    response: WcAdminOnboardingPluginsInstallAndActivatePostResponse;
  };
  '/wc-admin/onboarding/plugins/install-and-activate-async': {
    args: WcAdminOnboardingPluginsInstallAndActivateAsyncPostArgs;
    response: WcAdminOnboardingPluginsInstallAndActivateAsyncPostResponse;
  };
  '/wc-admin/onboarding/profile': {
    args: WcAdminOnboardingProfilePatchPostPutArgs;
    response: WcAdminOnboardingProfilePostResponse;
  };
  '/wc-admin/onboarding/tasks': {
    args: WcAdminOnboardingTasksPostArgs;
    response: WcAdminOnboardingTasksPostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_-]+)/snooze': {
    args: WcAdminOnboardingTasksPIdAZ09SnoozePostArgs;
    response: WcAdminOnboardingTasksPIdAZ09SnoozePostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': {
    args: WcAdminOnboardingTasksPIdAZ09ActionPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09ActionPostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09DismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09DismissPostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': {
    args: WcAdminOnboardingTasksPIdAZ09HidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09HidePostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09UndoDismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoDismissPostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': {
    args: WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoSnoozePostResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': {
    args: WcAdminOnboardingTasksPIdAZ09UnhidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UnhidePostResponse;
  };
  '/wc-admin/onboarding/tasks/create_homepage': {
    args: WcAdminOnboardingTasksCreateHomepagePostArgs;
    response: WcAdminOnboardingTasksCreateHomepagePostResponse;
  };
  '/wc-admin/onboarding/tasks/create_product_from_template': {
    args: WcAdminOnboardingTasksCreateProductFromTemplatePostArgs;
    response: WcAdminOnboardingTasksCreateProductFromTemplatePostResponse;
  };
  '/wc-admin/onboarding/tasks/import_sample_products': {
    args: WcAdminOnboardingTasksImportSampleProductsPostArgs;
    response: WcAdminOnboardingTasksImportSampleProductsPostResponse;
  };
  '/wc-admin/onboarding/themes/activate': {
    args: WcAdminOnboardingThemesActivatePatchPostPutArgs;
    response: WcAdminOnboardingThemesActivatePostResponse;
  };
  '/wc-admin/onboarding/themes/install': {
    args: WcAdminOnboardingThemesInstallPatchPostPutArgs;
    response: WcAdminOnboardingThemesInstallPostResponse;
  };
  '/wc-admin/options': {
    args: WcAdminOptionsPatchPostPutArgs;
    response: WcAdminOptionsPostResponse;
  };
  '/wc-admin/payment-gateway-suggestions/dismiss': {
    args: WcAdminPaymentGatewaySuggestionsDismissPostArgs;
    response: WcAdminPaymentGatewaySuggestionsDismissPostResponse;
  };
  '/wc-admin/plugins/activate': {
    args: WcAdminPluginsActivatePatchPostPutArgs;
    response: WcAdminPluginsActivatePostResponse;
  };
  '/wc-admin/plugins/connect-square': {
    args: WcAdminPluginsConnectSquarePatchPostPutArgs;
    response: WcAdminPluginsConnectSquarePostResponse;
  };
  '/wc-admin/plugins/connect-wcpay': {
    args: WcAdminPluginsConnectWcpayPatchPostPutArgs;
    response: WcAdminPluginsConnectWcpayPostResponse;
  };
  '/wc-admin/plugins/finish-wccom-connect': {
    args: WcAdminPluginsFinishWccomConnectPostArgs;
    response: WcAdminPluginsFinishWccomConnectPostResponse;
  };
  '/wc-admin/plugins/install': {
    args: WcAdminPluginsInstallPatchPostPutArgs;
    response: WcAdminPluginsInstallPostResponse;
  };
  '/wc-admin/plugins/request-wccom-connect': {
    args: WcAdminPluginsRequestWccomConnectPostArgs;
    response: WcAdminPluginsRequestWccomConnectPostResponse;
  };
  '/wc-admin/themes': {
    args: WcAdminThemesPatchPostPutArgs;
    response: WcAdminThemesPostResponse;
  };
}

/**
 * All "wc-admin" PUT routes.
 */
export interface WcAdminPutRoutes {
  '/wc-admin/marketing/overview/activate-plugin': {
    args: WcAdminMarketingOverviewActivatePluginPatchPostPutArgs;
    response: WcAdminMarketingOverviewActivatePluginPutResponse;
  };
  '/wc-admin/onboarding/profile': {
    args: WcAdminOnboardingProfilePatchPostPutArgs;
    response: WcAdminOnboardingProfilePutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/action': {
    args: WcAdminOnboardingTasksPIdAZ09ActionPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09ActionPutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09DismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09DismissPutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/hide': {
    args: WcAdminOnboardingTasksPIdAZ09HidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09HidePutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_dismiss': {
    args: WcAdminOnboardingTasksPIdAZ09UndoDismissPatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoDismissPutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/undo_snooze': {
    args: WcAdminOnboardingTasksPIdAZ09UndoSnoozePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UndoSnoozePutResponse;
  };
  '/wc-admin/onboarding/tasks/(?P<id>[a-z0-9_\\-]+)/unhide': {
    args: WcAdminOnboardingTasksPIdAZ09UnhidePatchPostPutArgs;
    response: WcAdminOnboardingTasksPIdAZ09UnhidePutResponse;
  };
  '/wc-admin/onboarding/themes/activate': {
    args: WcAdminOnboardingThemesActivatePatchPostPutArgs;
    response: WcAdminOnboardingThemesActivatePutResponse;
  };
  '/wc-admin/onboarding/themes/install': {
    args: WcAdminOnboardingThemesInstallPatchPostPutArgs;
    response: WcAdminOnboardingThemesInstallPutResponse;
  };
  '/wc-admin/options': {
    args: WcAdminOptionsPatchPostPutArgs;
    response: WcAdminOptionsPutResponse;
  };
  '/wc-admin/plugins/activate': {
    args: WcAdminPluginsActivatePatchPostPutArgs;
    response: WcAdminPluginsActivatePutResponse;
  };
  '/wc-admin/plugins/connect-square': {
    args: WcAdminPluginsConnectSquarePatchPostPutArgs;
    response: WcAdminPluginsConnectSquarePutResponse;
  };
  '/wc-admin/plugins/connect-wcpay': {
    args: WcAdminPluginsConnectWcpayPatchPostPutArgs;
    response: WcAdminPluginsConnectWcpayPutResponse;
  };
  '/wc-admin/plugins/install': {
    args: WcAdminPluginsInstallPatchPostPutArgs;
    response: WcAdminPluginsInstallPutResponse;
  };
  '/wc-admin/themes': {
    args: WcAdminThemesPatchPostPutArgs;
    response: WcAdminThemesPutResponse;
  };
}

/**
 * All "wc-admin" WordPress REST API methods/routes.
 */
export interface WcAdminRoutes {
  Delete: WcAdminDeleteRoutes;
  Get: WcAdminGetRoutes;
  Patch: WcAdminPatchRoutes;
  Post: WcAdminPostRoutes;
  Put: WcAdminPutRoutes;
}
