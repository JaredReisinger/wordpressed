export interface JetpackV4GetArgs {
}

export interface JetpackV4BackupHelperScriptPostArgs {
  /** base64 encoded Backup Helper Script body. */
  helper: string;
}

export interface JetpackV4BackupHelperScriptDeleteArgs {
  /** Path to Backup Helper Script */
  path: string;
}

export interface JetpackV4CommentsPIdDBackupGetArgs {
}

export interface JetpackV4ConnectionGetArgs {
}

export interface JetpackV4ConnectionPostPutPatchArgs {
}

export interface JetpackV4ConnectionAuthorizeUrlGetArgs {
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
}

export interface JetpackV4ConnectionDataGetArgs {
}

export interface JetpackV4ConnectionOwnerPostPutPatchArgs {
  /** New owner */
  owner: number;
}

export interface JetpackV4ConnectionPluginsGetArgs {
}

export interface JetpackV4ConnectionReconnectPostPutPatchArgs {
}

export interface JetpackV4ConnectionRegisterPostPutPatchArgs {
  /** Indicates where the registration action was triggered for tracking/segmentation purposes */
  from?: string;
  /** Indicates from what plugin the request is coming from */
  plugin_slug?: string;
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
  /** The registration nonce */
  registration_nonce: string;
}

export interface JetpackV4ConnectionTestGetArgs {
}

export interface JetpackV4ConnectionTestWpcomGetArgs {
}

export interface JetpackV4ConnectionUrlGetArgs {
  from?: string;
  redirect?: string;
}

export interface JetpackV4ConnectionUserPostPutPatchArgs {
}

export interface JetpackV4DatabaseObjectBackupGetArgs {
  /** ID of the database object to fetch */
  object_id: number;
}

export interface JetpackV4HintsPostPutPatchArgs {
  hint: string;
}

export interface JetpackV4IdentityCrisisConfirmSafeModePostPutPatchArgs {
}

export interface JetpackV4IdentityCrisisMigratePostPutPatchArgs {
}

export interface JetpackV4IdentityCrisisStartFreshPostPutPatchArgs {
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
}

export interface JetpackV4IntroOffersGetArgs {
}

export interface JetpackV4JetpackCrmGetArgs {
}

export interface JetpackV4JetpackCrmPostPutPatchArgs {
  extension: string;
}

export interface JetpackV4JetpackAiJwtPostPutPatchArgs {
}

export interface JetpackV4JitmGetArgs {
}

export interface JetpackV4JitmPostArgs {
}

export interface JetpackV4LicensingAttachLicensesPostPutPatchArgs {
  licenses: number[];
}

export interface JetpackV4LicensingErrorGetArgs {
}

export interface JetpackV4LicensingErrorPostPutPatchArgs {
  error: string;
}

export interface JetpackV4LicensingSetLicensePostPutPatchArgs {
  license: string;
}

export interface JetpackV4LicensingUserActivationNoticeDismissPostPutPatchArgs {
  last_detached_count: number;
}

export interface JetpackV4LicensingUserCountsGetArgs {
}

export interface JetpackV4LicensingUserLicensesGetArgs {
}

export interface JetpackV4MarketingSurveyPostArgs {
}

export interface JetpackV4ModulePServiceAZKeyCheckGetArgs {
}

export interface JetpackV4ModulePServiceAZKeyCheckPostPutPatchArgs {
  api_key?: string;
}

export interface JetpackV4ModulePSlugAZGetArgs {
}

export interface JetpackV4ModulePSlugAZPostPutPatchArgsAdvancedSeoTitleFormats {
}


export interface JetpackV4ModulePSlugAZPostPutPatchArgsCustom {
}


export interface JetpackV4ModulePSlugAZPostPutPatchArgsOnboarding {
}


export interface JetpackV4ModulePSlugAZPostPutPatchArgsSharingServices {
}


export interface JetpackV4ModulePSlugAZPostPutPatchArgs {
  'action-bar'?: boolean;
  /** Include a small chart in your admin bar with a 48-hour traffic snapshot. */
  admin_bar?: boolean;
  /** Front page meta description. */
  advanced_seo_front_page_description?: string;
  /** SEO page title structures. */
  advanced_seo_title_formats?: JetpackV4ModulePSlugAZPostPutPatchArgsAdvancedSeoTitleFormats;
  akismet_show_user_comments_approved?: boolean;
  /** Bing Webmaster Center */
  bing?: string;
  blaze?: boolean;
  /** Blog ID. */
  blog_id?: boolean;
  /** Button Style */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  carousel?: boolean;
  /** Color scheme. */
  carousel_background_color?: 'black' | 'white';
  /** Show comments area in carousel */
  carousel_display_comments?: boolean;
  /** Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available. */
  carousel_display_exif?: boolean;
  /** Collapse upgrade nudges */
  collapse_nudges?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  /** Count the page views of registered users who are logged in. */
  count_roles?: number[];
  /** Custom sharing services added by user. */
  custom?: JetpackV4ModulePSlugAZPostPutPatchArgsCustom;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_empty_stats_card?: boolean;
  /** Do not track. */
  do_not_track?: boolean;
  /** Display an ad unit at the top of each page. */
  enable_header_ad?: boolean;
  /** Preview the new Jetpack Stats experience (Experimental). */
  enable_odyssey_stats?: boolean;
  'enhanced-distribution'?: boolean;
  /** Facebook Domain Verification */
  facebook?: string;
  /** Google Search Console */
  google?: string;
  /** Google Analytics */
  google_analytics_tracking_id?: string;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  /** View people&#039;s profiles when you mouse over their Gravatars */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  'gravatar-hovercards'?: boolean;
  /** Has an active Jetpack Search product purchase */
  has_jetpack_search_product?: boolean;
  /** Greeting Text */
  highlander_comment_form_prompt?: string;
  /** To infinity and beyond */
  infinite_scroll?: boolean;
  /** Use Google Analytics with Infinite Scroll */
  infinite_scroll_google_analytics?: boolean;
  'infinite-scroll'?: boolean;
  /** Enable Instant Search */
  instant_search_enabled?: boolean;
  /** Jetpack Blocks disabled. */
  jetpack_blocks_disabled?: boolean;
  /** Color scheme */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /** Enable or disable Jetpack portfolio post type. */
  jetpack_portfolio?: boolean;
  /** Number of entries to show at most in Portfolio pages. */
  jetpack_portfolio_posts_per_page?: number;
  /** Protect global IP allow list */
  jetpack_protect_global_whitelist?: string;
  /** Protect API key */
  jetpack_protect_key?: string;
  /** Match by Email */
  jetpack_sso_match_by_email?: boolean;
  /** Require Two-Step Authentication */
  jetpack_sso_require_two_step?: boolean;
  /** Enable or disable Jetpack testimonial post type. */
  jetpack_testimonial?: boolean;
  /** Number of entries to show at most in Testimonial pages. */
  jetpack_testimonial_posts_per_page?: number;
  /** Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules. */
  jetpack_waf_automatic_rules?: boolean;
  /** Always allowed IP addresses */
  jetpack_waf_ip_allow_list?: string;
  /** Blocked IP addresses */
  jetpack_waf_ip_block_list?: string;
  /** Allow / Block list - Block or allow a specific request IP. */
  jetpack_waf_ip_list?: boolean;
  /** Share data with Jetpack. */
  jetpack_waf_share_data?: boolean;
  /** The Twitter username of the owner of this site&#039;s domain. */
  'jetpack-twitter-cards-site-tag'?: string;
  'json-api'?: boolean;
  /** Primary language for the site. */
  lang_id?: string;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  /** Receive Monitor Email Notifications. */
  monitor_receive_notifications?: boolean;
  notes?: boolean;
  onboarding?: JetpackV4ModulePSlugAZPostPutPatchArgsOnboarding;
  photon?: boolean;
  'photon-cdn'?: boolean;
  /** Pinterest Site Verification */
  pinterest?: string;
  /** Email Address */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  /** Select the roles that will be able to view stats reports. */
  roles?: number[];
  search?: boolean;
  /** Trigger an auto config of instant search */
  search_auto_config?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  /** Disable CSS and JS */
  sharedaddy_disable_resources?: boolean;
  /** Delete custom sharing service. */
  sharing_delete_service?: string;
  /** Sharing Label */
  sharing_label?: string;
  /** Enabled Services and those hidden behind a button */
  sharing_services?: JetpackV4ModulePSlugAZPostPutPatchArgsSharingServices;
  shortcodes?: boolean;
  shortlinks?: boolean;
  /** Views where buttons are shown */
  show?: number[];
  /** Highlight related content with a heading */
  show_headline?: boolean;
  /** Show a thumbnail image where available */
  show_thumbnails?: boolean;
  sitemaps?: boolean;
  /** Send email notification when someone likes a post */
  social_notifications_like?: boolean;
  /** Send email notification when someone follows my blog */
  social_notifications_subscribe?: boolean;
  sso?: boolean;
  stats?: boolean;
  /** Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form */
  stb_enabled?: boolean;
  /** Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form */
  stc_enabled?: boolean;
  subscriptions?: boolean;
  /** Display all your gallery pictures in a cool mosaic. */
  tiled_galleries?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  /** Version. */
  version?: number;
  videopress?: boolean;
  /** Video Privacy: Restrict views to members of this site */
  videopress_private_enabled_for_site?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
  /** Is site approved for WordAds? */
  wordads_approved?: boolean;
  /** Enable support for California Consumer Privacy Act */
  wordads_ccpa_enabled?: boolean;
  /** Privacy Policy URL */
  wordads_ccpa_privacy_policy_url?: string;
  /** Custom ads.txt entries */
  wordads_custom_adstxt?: string;
  /** Custom ads.txt */
  wordads_custom_adstxt_enabled?: boolean;
  /** Display ads on archive pages? */
  wordads_display_archive?: boolean;
  /** Display ads on the front page? */
  wordads_display_front_page?: boolean;
  /** Display ads on pages? */
  wordads_display_page?: boolean;
  /** Display ads on posts? */
  wordads_display_post?: boolean;
  /** Display second ad below post? */
  wordads_second_belowpost?: boolean;
  wordpress_api_key?: string;
  /** Use Markdown for comments. */
  wpcom_publish_comments_with_markdown?: boolean;
  /** Use Markdown for posts. */
  wpcom_publish_posts_with_markdown?: boolean;
  /** Show post views in the WordPress.com Reader. */
  wpcom_reader_views_enabled?: boolean;
  /** WordPress.com Likes are */
  wpl_default?: 'on' | 'off';
  /** Yandex Site Verification */
  yandex?: string;
}

export interface JetpackV4ModulePSlugAZActivePostPutPatchArgs {
  active: boolean;
}

export interface JetpackV4ModulePSlugAZDataGetArgs {
  range?: string;
}

export interface JetpackV4ModuleAllGetArgs {
}

export interface JetpackV4ModuleAllActivePostPutPatchArgs {
  active?: boolean;
  modules: number[];
}

export interface JetpackV4NoticePNoticeAZPostPutPatchArgs {
}

export interface JetpackV4OptionsPOptionsAZPostPutPatchArgs {
}

export interface JetpackV4OptionsBackupGetArgs {
}

export interface JetpackV4PlansGetArgs {
}

export interface JetpackV4PluginPPluginAZGetArgs {
}

export interface JetpackV4PluginsGetArgs {
}

export interface JetpackV4PluginsPostArgs {
  /** WordPress.org plugin directory slug. */
  slug: string;
  source?: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
}

export interface JetpackV4PluginsPPluginPostPutPatchArgs {
  source?: string;
  status: string;
}

export interface JetpackV4PostsPIdDBackupGetArgs {
}

export interface JetpackV4ProductsGetArgs {
}

export interface JetpackV4PurchaseTokenGetArgs {
}

export interface JetpackV4PurchaseTokenPostArgs {
}

export interface JetpackV4RecommendationsConditionalGetArgs {
}

export interface JetpackV4RecommendationsDataGetArgs {
}

export interface JetpackV4RecommendationsDataPostPutPatchArgsData {
}


export interface JetpackV4RecommendationsDataPostPutPatchArgs {
  data: JetpackV4RecommendationsDataPostPutPatchArgsData;
}

export interface JetpackV4RecommendationsProductSuggestionsGetArgs {
}

export interface JetpackV4RecommendationsStepGetArgs {
}

export interface JetpackV4RecommendationsStepPostPutPatchArgs {
  step: string;
}

export interface JetpackV4RecommendationsUpsellGetArgs {
}

export interface JetpackV4RemoteAuthorizePostPutPatchArgs {
}

export interface JetpackV4RewindGetArgs {
}

export interface JetpackV4ScanGetArgs {
}

export interface JetpackV4SearchGetArgs {
}

export interface JetpackV4SearchLocalStatsGetArgs {
}

export interface JetpackV4SearchPlanGetArgs {
}

export interface JetpackV4SearchPlanActivatePostPutPatchArgs {
}

export interface JetpackV4SearchPlanDeactivatePostPutPatchArgs {
}

export interface JetpackV4SearchPricingGetArgs {
}

export interface JetpackV4SearchSettingsPostPutPatchArgs {
}

export interface JetpackV4SearchSettingsGetArgs {
}

export interface JetpackV4SearchStatsGetArgs {
}

export interface JetpackV4SeenWcConnectionModalPostPutPatchArgs {
}

export interface JetpackV4SettingsPostPutPatchArgsAdvancedSeoTitleFormats {
}


export interface JetpackV4SettingsPostPutPatchArgsCustom {
}


export interface JetpackV4SettingsPostPutPatchArgsOnboarding {
}


export interface JetpackV4SettingsPostPutPatchArgsSharingServices {
}


export interface JetpackV4SettingsPostPutPatchArgs {
  'action-bar'?: boolean;
  /** Include a small chart in your admin bar with a 48-hour traffic snapshot. */
  admin_bar?: boolean;
  /** Front page meta description. */
  advanced_seo_front_page_description?: string;
  /** SEO page title structures. */
  advanced_seo_title_formats?: JetpackV4SettingsPostPutPatchArgsAdvancedSeoTitleFormats;
  akismet_show_user_comments_approved?: boolean;
  /** Bing Webmaster Center */
  bing?: string;
  blaze?: boolean;
  /** Blog ID. */
  blog_id?: boolean;
  /** Button Style */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  carousel?: boolean;
  /** Color scheme. */
  carousel_background_color?: 'black' | 'white';
  /** Show comments area in carousel */
  carousel_display_comments?: boolean;
  /** Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available. */
  carousel_display_exif?: boolean;
  /** Collapse upgrade nudges */
  collapse_nudges?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  /** Count the page views of registered users who are logged in. */
  count_roles?: number[];
  /** Custom sharing services added by user. */
  custom?: JetpackV4SettingsPostPutPatchArgsCustom;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_empty_stats_card?: boolean;
  /** Do not track. */
  do_not_track?: boolean;
  /** Display an ad unit at the top of each page. */
  enable_header_ad?: boolean;
  /** Preview the new Jetpack Stats experience (Experimental). */
  enable_odyssey_stats?: boolean;
  'enhanced-distribution'?: boolean;
  /** Facebook Domain Verification */
  facebook?: string;
  /** Google Search Console */
  google?: string;
  /** Google Analytics */
  google_analytics_tracking_id?: string;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  /** View people&#039;s profiles when you mouse over their Gravatars */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  'gravatar-hovercards'?: boolean;
  /** Has an active Jetpack Search product purchase */
  has_jetpack_search_product?: boolean;
  /** Greeting Text */
  highlander_comment_form_prompt?: string;
  /** To infinity and beyond */
  infinite_scroll?: boolean;
  /** Use Google Analytics with Infinite Scroll */
  infinite_scroll_google_analytics?: boolean;
  'infinite-scroll'?: boolean;
  /** Enable Instant Search */
  instant_search_enabled?: boolean;
  /** Jetpack Blocks disabled. */
  jetpack_blocks_disabled?: boolean;
  /** Color scheme */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /** Enable or disable Jetpack portfolio post type. */
  jetpack_portfolio?: boolean;
  /** Number of entries to show at most in Portfolio pages. */
  jetpack_portfolio_posts_per_page?: number;
  /** Protect global IP allow list */
  jetpack_protect_global_whitelist?: string;
  /** Protect API key */
  jetpack_protect_key?: string;
  /** Match by Email */
  jetpack_sso_match_by_email?: boolean;
  /** Require Two-Step Authentication */
  jetpack_sso_require_two_step?: boolean;
  /** Enable or disable Jetpack testimonial post type. */
  jetpack_testimonial?: boolean;
  /** Number of entries to show at most in Testimonial pages. */
  jetpack_testimonial_posts_per_page?: number;
  /** Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules. */
  jetpack_waf_automatic_rules?: boolean;
  /** Always allowed IP addresses */
  jetpack_waf_ip_allow_list?: string;
  /** Blocked IP addresses */
  jetpack_waf_ip_block_list?: string;
  /** Allow / Block list - Block or allow a specific request IP. */
  jetpack_waf_ip_list?: boolean;
  /** Share data with Jetpack. */
  jetpack_waf_share_data?: boolean;
  /** The Twitter username of the owner of this site&#039;s domain. */
  'jetpack-twitter-cards-site-tag'?: string;
  'json-api'?: boolean;
  /** Primary language for the site. */
  lang_id?: string;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  /** Receive Monitor Email Notifications. */
  monitor_receive_notifications?: boolean;
  notes?: boolean;
  onboarding?: JetpackV4SettingsPostPutPatchArgsOnboarding;
  photon?: boolean;
  'photon-cdn'?: boolean;
  /** Pinterest Site Verification */
  pinterest?: string;
  /** Email Address */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  /** Select the roles that will be able to view stats reports. */
  roles?: number[];
  search?: boolean;
  /** Trigger an auto config of instant search */
  search_auto_config?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  /** Disable CSS and JS */
  sharedaddy_disable_resources?: boolean;
  /** Delete custom sharing service. */
  sharing_delete_service?: string;
  /** Sharing Label */
  sharing_label?: string;
  /** Enabled Services and those hidden behind a button */
  sharing_services?: JetpackV4SettingsPostPutPatchArgsSharingServices;
  shortcodes?: boolean;
  shortlinks?: boolean;
  /** Views where buttons are shown */
  show?: number[];
  /** Highlight related content with a heading */
  show_headline?: boolean;
  /** Show a thumbnail image where available */
  show_thumbnails?: boolean;
  sitemaps?: boolean;
  /** Send email notification when someone likes a post */
  social_notifications_like?: boolean;
  /** Send email notification when someone follows my blog */
  social_notifications_subscribe?: boolean;
  sso?: boolean;
  stats?: boolean;
  /** Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form */
  stb_enabled?: boolean;
  /** Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form */
  stc_enabled?: boolean;
  subscriptions?: boolean;
  /** Display all your gallery pictures in a cool mosaic. */
  tiled_galleries?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  /** Version. */
  version?: number;
  videopress?: boolean;
  /** Video Privacy: Restrict views to members of this site */
  videopress_private_enabled_for_site?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
  /** Is site approved for WordAds? */
  wordads_approved?: boolean;
  /** Enable support for California Consumer Privacy Act */
  wordads_ccpa_enabled?: boolean;
  /** Privacy Policy URL */
  wordads_ccpa_privacy_policy_url?: string;
  /** Custom ads.txt entries */
  wordads_custom_adstxt?: string;
  /** Custom ads.txt */
  wordads_custom_adstxt_enabled?: boolean;
  /** Display ads on archive pages? */
  wordads_display_archive?: boolean;
  /** Display ads on the front page? */
  wordads_display_front_page?: boolean;
  /** Display ads on pages? */
  wordads_display_page?: boolean;
  /** Display ads on posts? */
  wordads_display_post?: boolean;
  /** Display second ad below post? */
  wordads_second_belowpost?: boolean;
  wordpress_api_key?: string;
  /** Use Markdown for comments. */
  wpcom_publish_comments_with_markdown?: boolean;
  /** Use Markdown for posts. */
  wpcom_publish_posts_with_markdown?: boolean;
  /** Show post views in the WordPress.com Reader. */
  wpcom_reader_views_enabled?: boolean;
  /** WordPress.com Likes are */
  wpl_default?: 'on' | 'off';
  /** Yandex Site Verification */
  yandex?: string;
}

export interface JetpackV4SettingsGetArgs {
}

export interface JetpackV4SettingsPSlugAZPostPutPatchArgs {
}

export interface JetpackV4SiteGetArgs {
}

export interface JetpackV4SiteActivityGetArgs {
}

export interface JetpackV4SiteBenefitsGetArgs {
}

export interface JetpackV4SiteDiscountGetArgs {
}

export interface JetpackV4SiteFeaturesGetArgs {
}

export interface JetpackV4SiteProductsGetArgs {
}

export interface JetpackV4SitePurchasesGetArgs {
}

export interface JetpackV4SyncCheckoutPostPutPatchArgs {
}

export interface JetpackV4SyncClosePostPutPatchArgs {
}

export interface JetpackV4SyncDataCheckGetArgs {
  /** If text fields should be converted to latin1 in checksum calculation. */
  perform_text_conversion?: boolean;
}

export interface JetpackV4SyncDataHistogramPostPutPatchArgsColumns {
}


export interface JetpackV4SyncDataHistogramPostPutPatchArgs {
  /** Number of histogram buckets. */
  buckets?: number;
  /** Column mappings */
  columns?: JetpackV4SyncDataHistogramPostPutPatchArgsColumns[];
  /** Do we want the checksum or object ids. */
  detailed_drilldown?: boolean;
  /** End ID for the histogram */
  end_id?: number;
  /** Object Type */
  object_type?: string;
  /** Should only range endges be returned */
  only_range_edges?: boolean;
  /** If text fields should be converted to latin1 in checksum calculation. */
  perform_text_conversion?: boolean;
  /** Shared Salt to use when generating checksum */
  shared_salt?: string;
  /** Start ID for the histogram */
  start_id?: number;
  /** Strip non-ascii characters? */
  strip_non_ascii?: boolean;
}

export interface JetpackV4SyncFullSyncPostPutPatchArgsComments {
}


export interface JetpackV4SyncFullSyncPostPutPatchArgsModules {
}


export interface JetpackV4SyncFullSyncPostPutPatchArgsPosts {
}


export interface JetpackV4SyncFullSyncPostPutPatchArgs {
  /** Comment IDs to include in Full Sync */
  comments?: JetpackV4SyncFullSyncPostPutPatchArgsComments[];
  /** Data Modules that should be included in Full Sync */
  modules?: JetpackV4SyncFullSyncPostPutPatchArgsModules[];
  /** Post IDs to include in Full Sync */
  posts?: JetpackV4SyncFullSyncPostPutPatchArgsPosts[];
}

export interface JetpackV4SyncHealthPostPutPatchArgs {
  /** New Sync health status */
  status: string;
}

export interface JetpackV4SyncLocksDeleteArgs {
}

export interface JetpackV4SyncNowPostPutPatchArgs {
  /** Name of Sync queue. */
  queue: string;
}

export interface JetpackV4SyncObjectGetPostPutPatchDeleteArgsObjectIds {
}


export interface JetpackV4SyncObjectGetPostPutPatchDeleteArgs {
  /** Name of Sync module */
  module_name?: string;
  /** Objects Identifiers */
  object_ids?: JetpackV4SyncObjectGetPostPutPatchDeleteArgsObjectIds[];
  /** Object Type */
  object_type?: string;
}

export interface JetpackV4SyncObjectIdRangeGetArgs {
  /** Size of batches */
  batch_size: number;
  /** Name of Sync module. */
  sync_module: string;
}

export interface JetpackV4SyncSettingsGetArgs {
}

export interface JetpackV4SyncSettingsPostPutPatchArgs {
}

export interface JetpackV4SyncSpawnSyncGetArgs {
}

export interface JetpackV4SyncStatusGetArgs {
  /** Comma seperated list of additional fields that should be included in status. */
  fields?: string;
}

export interface JetpackV4SyncUnlockPostPutPatchArgs {
  /** Name of Sync queue. */
  queue: string;
}

export interface JetpackV4TermsPIdDBackupGetArgs {
}

export interface JetpackV4TrackingSettingsGetArgs {
}

export interface JetpackV4TrackingSettingsPostPutPatchArgs {
  tracks_opt_out?: boolean;
}

export interface JetpackV4UpdatesPluginsGetArgs {
}

export interface JetpackV4UserTokenPostPutPatchArgs {
  /** Is connection owner */
  is_connection_owner?: boolean;
  /** New user token */
  user_token: string;
}

export interface JetpackV4UsersPIdDBackupGetArgs {
}

export interface JetpackV4VerifyXmlrpcErrorPostArgs {
  nonce: string;
}

export interface JetpackV4VerifySitePServiceAZGetArgs {
}

export interface JetpackV4VerifySitePServiceAZPostPutPatchArgs {
  keyring_id: number;
}

export interface JetpackV4VerifySitePServiceAZKeyringId09GetArgs {
}

export interface JetpackV4WafGetArgs {
}

export interface JetpackV4WafPostPutPatchArgs {
}

export interface JetpackV4WafUpdateRulesPostPutPatchArgs {
}

export interface JetpackV4WidgetsPId09aZGetArgs {
}


export interface JetpackV4DeleteRoutes {
  '/jetpack/v4/backup-helper-script': JetpackV4BackupHelperScriptDeleteArgs;
  '/jetpack/v4/sync/locks': JetpackV4SyncLocksDeleteArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectGetPostPutPatchDeleteArgs;
}

export interface JetpackV4GetRoutes {
  '/jetpack/v4': JetpackV4GetArgs;
  '/jetpack/v4/comments/(?P<id>\\d+)/backup': JetpackV4CommentsPIdDBackupGetArgs;
  '/jetpack/v4/connection': JetpackV4ConnectionGetArgs;
  '/jetpack/v4/connection/authorize_url': JetpackV4ConnectionAuthorizeUrlGetArgs;
  '/jetpack/v4/connection/data': JetpackV4ConnectionDataGetArgs;
  '/jetpack/v4/connection/plugins': JetpackV4ConnectionPluginsGetArgs;
  '/jetpack/v4/connection/test': JetpackV4ConnectionTestGetArgs;
  '/jetpack/v4/connection/test-wpcom': JetpackV4ConnectionTestWpcomGetArgs;
  '/jetpack/v4/connection/url': JetpackV4ConnectionUrlGetArgs;
  '/jetpack/v4/database-object/backup': JetpackV4DatabaseObjectBackupGetArgs;
  '/jetpack/v4/intro-offers': JetpackV4IntroOffersGetArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmGetArgs;
  '/jetpack/v4/jitm': JetpackV4JitmGetArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorGetArgs;
  '/jetpack/v4/licensing/user/counts': JetpackV4LicensingUserCountsGetArgs;
  '/jetpack/v4/licensing/user/licenses': JetpackV4LicensingUserLicensesGetArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckGetArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZGetArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/data': JetpackV4ModulePSlugAZDataGetArgs;
  '/jetpack/v4/module/all': JetpackV4ModuleAllGetArgs;
  '/jetpack/v4/options/backup': JetpackV4OptionsBackupGetArgs;
  '/jetpack/v4/plans': JetpackV4PlansGetArgs;
  '/jetpack/v4/plugin/(?P<plugin>[a-z\\/\\.\\-_]+)': JetpackV4PluginPPluginAZGetArgs;
  '/jetpack/v4/plugins': JetpackV4PluginsGetArgs;
  '/jetpack/v4/posts/(?P<id>\\d+)/backup': JetpackV4PostsPIdDBackupGetArgs;
  '/jetpack/v4/products': JetpackV4ProductsGetArgs;
  '/jetpack/v4/purchase-token': JetpackV4PurchaseTokenGetArgs;
  '/jetpack/v4/recommendations/conditional': JetpackV4RecommendationsConditionalGetArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataGetArgs;
  '/jetpack/v4/recommendations/product-suggestions': JetpackV4RecommendationsProductSuggestionsGetArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepGetArgs;
  '/jetpack/v4/recommendations/upsell': JetpackV4RecommendationsUpsellGetArgs;
  '/jetpack/v4/rewind': JetpackV4RewindGetArgs;
  '/jetpack/v4/scan': JetpackV4ScanGetArgs;
  '/jetpack/v4/search': JetpackV4SearchGetArgs;
  '/jetpack/v4/search/local-stats': JetpackV4SearchLocalStatsGetArgs;
  '/jetpack/v4/search/plan': JetpackV4SearchPlanGetArgs;
  '/jetpack/v4/search/pricing': JetpackV4SearchPricingGetArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsGetArgs;
  '/jetpack/v4/search/stats': JetpackV4SearchStatsGetArgs;
  '/jetpack/v4/settings': JetpackV4SettingsGetArgs;
  '/jetpack/v4/site': JetpackV4SiteGetArgs;
  '/jetpack/v4/site/activity': JetpackV4SiteActivityGetArgs;
  '/jetpack/v4/site/benefits': JetpackV4SiteBenefitsGetArgs;
  '/jetpack/v4/site/discount': JetpackV4SiteDiscountGetArgs;
  '/jetpack/v4/site/features': JetpackV4SiteFeaturesGetArgs;
  '/jetpack/v4/site/products': JetpackV4SiteProductsGetArgs;
  '/jetpack/v4/site/purchases': JetpackV4SitePurchasesGetArgs;
  '/jetpack/v4/sync/data-check': JetpackV4SyncDataCheckGetArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectGetPostPutPatchDeleteArgs;
  '/jetpack/v4/sync/object-id-range': JetpackV4SyncObjectIdRangeGetArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsGetArgs;
  '/jetpack/v4/sync/spawn-sync': JetpackV4SyncSpawnSyncGetArgs;
  '/jetpack/v4/sync/status': JetpackV4SyncStatusGetArgs;
  '/jetpack/v4/terms/(?P<id>\\d+)/backup': JetpackV4TermsPIdDBackupGetArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsGetArgs;
  '/jetpack/v4/updates/plugins': JetpackV4UpdatesPluginsGetArgs;
  '/jetpack/v4/users/(?P<id>\\d+)/backup': JetpackV4UsersPIdDBackupGetArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZGetArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)/(?<keyring_id>[0-9]+)': JetpackV4VerifySitePServiceAZKeyringId09GetArgs;
  '/jetpack/v4/waf': JetpackV4WafGetArgs;
  '/jetpack/v4/widgets/(?P<id>[0-9a-z\\-_]+)': JetpackV4WidgetsPId09aZGetArgs;
}

export interface JetpackV4PatchRoutes {
  '/jetpack/v4/connection': JetpackV4ConnectionPostPutPatchArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPostPutPatchArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPostPutPatchArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPostPutPatchArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPostPutPatchArgs;
  '/jetpack/v4/hints': JetpackV4HintsPostPutPatchArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPostPutPatchArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPostPutPatchArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPostPutPatchArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPostPutPatchArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPostPutPatchArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePostPutPatchArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPostPutPatchArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePostPutPatchArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePostPutPatchArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPostPutPatchArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPostPutPatchArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPostPutPatchArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPostPutPatchArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPostPutPatchArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePostPutPatchArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePostPutPatchArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePostPutPatchArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPostPutPatchArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPostPutPatchArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPostPutPatchArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPostPutPatchArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPostPutPatchArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePostPutPatchArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPostPutPatchArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPostPutPatchArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPostPutPatchArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPostPutPatchArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectGetPostPutPatchDeleteArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPostPutPatchArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPostPutPatchArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPostPutPatchArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPostPutPatchArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPostPutPatchArgs;
  '/jetpack/v4/waf': JetpackV4WafPostPutPatchArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPostPutPatchArgs;
}

export interface JetpackV4PostRoutes {
  '/jetpack/v4/backup-helper-script': JetpackV4BackupHelperScriptPostArgs;
  '/jetpack/v4/connection': JetpackV4ConnectionPostPutPatchArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPostPutPatchArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPostPutPatchArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPostPutPatchArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPostPutPatchArgs;
  '/jetpack/v4/hints': JetpackV4HintsPostPutPatchArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPostPutPatchArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPostPutPatchArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPostPutPatchArgs;
  '/jetpack/v4/jitm': JetpackV4JitmPostArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPostPutPatchArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPostPutPatchArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePostPutPatchArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPostPutPatchArgs;
  '/jetpack/v4/marketing/survey': JetpackV4MarketingSurveyPostArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePostPutPatchArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePostPutPatchArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPostPutPatchArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPostPutPatchArgs;
  '/jetpack/v4/plugins': JetpackV4PluginsPostArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPostPutPatchArgs;
  '/jetpack/v4/purchase-token': JetpackV4PurchaseTokenPostArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPostPutPatchArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPostPutPatchArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePostPutPatchArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePostPutPatchArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePostPutPatchArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPostPutPatchArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPostPutPatchArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPostPutPatchArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPostPutPatchArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPostPutPatchArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePostPutPatchArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPostPutPatchArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPostPutPatchArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPostPutPatchArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPostPutPatchArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectGetPostPutPatchDeleteArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPostPutPatchArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPostPutPatchArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPostPutPatchArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPostPutPatchArgs;
  '/jetpack/v4/verify_xmlrpc_error': JetpackV4VerifyXmlrpcErrorPostArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPostPutPatchArgs;
  '/jetpack/v4/waf': JetpackV4WafPostPutPatchArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPostPutPatchArgs;
}

export interface JetpackV4PutRoutes {
  '/jetpack/v4/connection': JetpackV4ConnectionPostPutPatchArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPostPutPatchArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPostPutPatchArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPostPutPatchArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPostPutPatchArgs;
  '/jetpack/v4/hints': JetpackV4HintsPostPutPatchArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePostPutPatchArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPostPutPatchArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPostPutPatchArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPostPutPatchArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPostPutPatchArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPostPutPatchArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePostPutPatchArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPostPutPatchArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPostPutPatchArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePostPutPatchArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePostPutPatchArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPostPutPatchArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPostPutPatchArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPostPutPatchArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPostPutPatchArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPostPutPatchArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePostPutPatchArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePostPutPatchArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePostPutPatchArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPostPutPatchArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPostPutPatchArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPostPutPatchArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPostPutPatchArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPostPutPatchArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePostPutPatchArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPostPutPatchArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPostPutPatchArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPostPutPatchArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPostPutPatchArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectGetPostPutPatchDeleteArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPostPutPatchArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPostPutPatchArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPostPutPatchArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPostPutPatchArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPostPutPatchArgs;
  '/jetpack/v4/waf': JetpackV4WafPostPutPatchArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPostPutPatchArgs;
}

export interface JetpackV4Routes {
  Delete: JetpackV4DeleteRoutes;
  Get: JetpackV4GetRoutes;
  Patch: JetpackV4PatchRoutes;
  Post: JetpackV4PostRoutes;
  Put: JetpackV4PutRoutes;
}
