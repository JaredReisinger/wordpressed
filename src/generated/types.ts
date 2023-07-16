export interface GetArgs {}

export interface BatchV1PostRequest {}

export interface BatchV1PostArgs {
  validation?: 'require-all-validate' | 'normal';
  requests: BatchV1PostRequest[];
}

export interface Oembed10GetArgs {}

export interface Oembed10EmbedGetArgs {
  /** The URL of the resource for which to fetch oEmbed data. */
  url: string;
}

export interface Oembed10ProxyGetArgs {
  /** The URL of the resource for which to fetch oEmbed data. */
  url: string;
  /** The oEmbed format to use. */
  format?: 'json' | 'xml';
  /** The maximum width of the embed frame in pixels. */
  maxwidth?: number;
  /** The maximum height of the embed frame in pixels. */
  maxheight?: number;
  /** Whether to perform an oEmbed discovery request for unsanctioned providers. */
  discover?: boolean;
}

export interface JetpackV4GetArgs {}

export interface JetpackV4BackupHelperScriptPostArgs {
  /** base64 encoded Backup Helper Script body. */
  helper: string;
}

export interface JetpackV4BackupHelperScriptDeleteArgs {
  /** Path to Backup Helper Script */
  path: string;
}

export interface JetpackV4DatabaseObjectBackupGetArgs {
  /** ID of the database object to fetch */
  object_id: number;
}

export interface JetpackV4OptionsBackupGetArgs {}

export interface JetpackV4CommentsPIdDBackupGetArgs {}

export interface JetpackV4PostsPIdDBackupGetArgs {}

export interface JetpackV4TermsPIdDBackupGetArgs {}

export interface JetpackV4UsersPIdDBackupGetArgs {}

export interface JetpackV4JetpackAiJwtPostPutPatchArgs {}

export interface JetpackV4PlansGetArgs {}

export interface JetpackV4ProductsGetArgs {}

export interface JetpackV4MarketingSurveyPostArgs {}

export interface JetpackV4ConnectionTestGetArgs {}

export interface JetpackV4ConnectionTestWpcomGetArgs {}

export interface JetpackV4RewindGetArgs {}

export interface JetpackV4ScanGetArgs {}

export interface JetpackV4ConnectionUrlGetArgs {
  from?: string;
  redirect?: string;
}

export interface JetpackV4TrackingSettingsGetArgs {}

export interface JetpackV4TrackingSettingsPostPutPatchArgs {
  tracks_opt_out?: boolean;
}

export interface JetpackV4ConnectionUserPostPutPatchArgs {}

export interface JetpackV4SiteGetArgs {}

export interface JetpackV4SiteFeaturesGetArgs {}

export interface JetpackV4SiteProductsGetArgs {}

export interface JetpackV4SitePurchasesGetArgs {}

export interface JetpackV4SiteBenefitsGetArgs {}

export interface JetpackV4SiteActivityGetArgs {}

export interface JetpackV4ModuleAllGetArgs {}

export interface JetpackV4ModuleAllActivePostPutPatchArgs {
  modules: number[];
  active?: boolean;
}

export interface JetpackV4ModulePSlugAZGetArgs {}

export interface JetpackV4ModulePSlugAZPostPutPatchSharingService {}

export interface JetpackV4ModulePSlugAZPostPutPatchCustom {}

export interface JetpackV4ModulePSlugAZPostPutPatchOnboarding {}

export interface JetpackV4ModulePSlugAZPostPutPatchAdvancedSeoTitleFormat {}

export interface JetpackV4ModulePSlugAZPostPutPatchArgs {
  /** Jetpack Blocks disabled. */
  jetpack_blocks_disabled?: boolean;
  /** Color scheme. */
  carousel_background_color?: 'black' | 'white';
  /** Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available. */
  carousel_display_exif?: boolean;
  /** Show comments area in carousel */
  carousel_display_comments?: boolean;
  /** Greeting Text */
  highlander_comment_form_prompt?: string;
  /** Color scheme */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /** Enable or disable Jetpack portfolio post type. */
  jetpack_portfolio?: boolean;
  /** Number of entries to show at most in Portfolio pages. */
  jetpack_portfolio_posts_per_page?: number;
  /** Enable or disable Jetpack testimonial post type. */
  jetpack_testimonial?: boolean;
  /** Number of entries to show at most in Testimonial pages. */
  jetpack_testimonial_posts_per_page?: number;
  /** Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules. */
  jetpack_waf_automatic_rules?: boolean;
  /** Allow / Block list - Block or allow a specific request IP. */
  jetpack_waf_ip_list?: boolean;
  /** Blocked IP addresses */
  jetpack_waf_ip_block_list?: string;
  /** Always allowed IP addresses */
  jetpack_waf_ip_allow_list?: string;
  /** Share data with Jetpack. */
  jetpack_waf_share_data?: boolean;
  /** Display all your gallery pictures in a cool mosaic. */
  tiled_galleries?: boolean;
  /** View people&#039;s profiles when you mouse over their Gravatars */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  /** To infinity and beyond */
  infinite_scroll?: boolean;
  /** Use Google Analytics with Infinite Scroll */
  infinite_scroll_google_analytics?: boolean;
  /** WordPress.com Likes are */
  wpl_default?: 'on' | 'off';
  /** Send email notification when someone likes a post */
  social_notifications_like?: boolean;
  /** Use Markdown for comments. */
  wpcom_publish_comments_with_markdown?: boolean;
  /** Use Markdown for posts. */
  wpcom_publish_posts_with_markdown?: boolean;
  /** Receive Monitor Email Notifications. */
  monitor_receive_notifications?: boolean;
  /** Email Address */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  /** Protect API key */
  jetpack_protect_key?: string;
  /** Protect global IP allow list */
  jetpack_protect_global_whitelist?: string;
  /** Enabled Services and those hidden behind a button */
  sharing_services?: JetpackV4ModulePSlugAZPostPutPatchSharingService;
  /** Button Style */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  /** Sharing Label */
  sharing_label?: string;
  /** Views where buttons are shown */
  show?: number[];
  /** The Twitter username of the owner of this site&#039;s domain. */
  'jetpack-twitter-cards-site-tag'?: string;
  /** Disable CSS and JS */
  sharedaddy_disable_resources?: boolean;
  /** Custom sharing services added by user. */
  custom?: JetpackV4ModulePSlugAZPostPutPatchCustom;
  /** Delete custom sharing service. */
  sharing_delete_service?: string;
  /** Require Two-Step Authentication */
  jetpack_sso_require_two_step?: boolean;
  /** Match by Email */
  jetpack_sso_match_by_email?: boolean;
  /** Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form */
  stb_enabled?: boolean;
  /** Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form */
  stc_enabled?: boolean;
  /** Send email notification when someone follows my blog */
  social_notifications_subscribe?: boolean;
  /** Highlight related content with a heading */
  show_headline?: boolean;
  /** Show a thumbnail image where available */
  show_thumbnails?: boolean;
  /** Enable Instant Search */
  instant_search_enabled?: boolean;
  /** Has an active Jetpack Search product purchase */
  has_jetpack_search_product?: boolean;
  /** Trigger an auto config of instant search */
  search_auto_config?: boolean;
  /** Google Search Console */
  google?: string;
  /** Bing Webmaster Center */
  bing?: string;
  /** Pinterest Site Verification */
  pinterest?: string;
  /** Yandex Site Verification */
  yandex?: string;
  /** Facebook Domain Verification */
  facebook?: string;
  /** Display an ad unit at the top of each page. */
  enable_header_ad?: boolean;
  /** Is site approved for WordAds? */
  wordads_approved?: boolean;
  /** Display second ad below post? */
  wordads_second_belowpost?: boolean;
  /** Display ads on the front page? */
  wordads_display_front_page?: boolean;
  /** Display ads on posts? */
  wordads_display_post?: boolean;
  /** Display ads on pages? */
  wordads_display_page?: boolean;
  /** Display ads on archive pages? */
  wordads_display_archive?: boolean;
  /** Custom ads.txt */
  wordads_custom_adstxt_enabled?: boolean;
  /** Custom ads.txt entries */
  wordads_custom_adstxt?: string;
  /** Enable support for California Consumer Privacy Act */
  wordads_ccpa_enabled?: boolean;
  /** Privacy Policy URL */
  wordads_ccpa_privacy_policy_url?: string;
  /** Google Analytics */
  google_analytics_tracking_id?: string;
  /** Include a small chart in your admin bar with a 48-hour traffic snapshot. */
  admin_bar?: boolean;
  /** Preview the new Jetpack Stats experience (Experimental). */
  enable_odyssey_stats?: boolean;
  /** Select the roles that will be able to view stats reports. */
  roles?: number[];
  /** Count the page views of registered users who are logged in. */
  count_roles?: number[];
  /** Blog ID. */
  blog_id?: boolean;
  /** Do not track. */
  do_not_track?: boolean;
  /** Version. */
  version?: number;
  /** Collapse upgrade nudges */
  collapse_nudges?: boolean;
  /** Show post views in the WordPress.com Reader. */
  wpcom_reader_views_enabled?: boolean;
  akismet_show_user_comments_approved?: boolean;
  wordpress_api_key?: string;
  dismiss_empty_stats_card?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  /** Primary language for the site. */
  lang_id?: string;
  onboarding?: JetpackV4ModulePSlugAZPostPutPatchOnboarding;
  /** Front page meta description. */
  advanced_seo_front_page_description?: string;
  /** SEO page title structures. */
  advanced_seo_title_formats?: JetpackV4ModulePSlugAZPostPutPatchAdvancedSeoTitleFormat;
  /** Video Privacy: Restrict views to members of this site */
  videopress_private_enabled_for_site?: boolean;
  'action-bar'?: boolean;
  blaze?: boolean;
  carousel?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  'enhanced-distribution'?: boolean;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  'gravatar-hovercards'?: boolean;
  'infinite-scroll'?: boolean;
  'json-api'?: boolean;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  notes?: boolean;
  'photon-cdn'?: boolean;
  photon?: boolean;
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  search?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  shortcodes?: boolean;
  shortlinks?: boolean;
  sitemaps?: boolean;
  sso?: boolean;
  stats?: boolean;
  subscriptions?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  videopress?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
}

export interface JetpackV4ModulePSlugAZActivePostPutPatchArgs {
  active: boolean;
}

export interface JetpackV4ModulePSlugAZDataGetArgs {
  range?: string;
}

export interface JetpackV4ModulePServiceAZKeyCheckGetArgs {}

export interface JetpackV4ModulePServiceAZKeyCheckPostPutPatchArgs {
  api_key?: string;
}

export interface JetpackV4SettingsPostPutPatchSharingService {}

export interface JetpackV4SettingsPostPutPatchCustom {}

export interface JetpackV4SettingsPostPutPatchOnboarding {}

export interface JetpackV4SettingsPostPutPatchAdvancedSeoTitleFormat {}

export interface JetpackV4SettingsPostPutPatchArgs {
  /** Jetpack Blocks disabled. */
  jetpack_blocks_disabled?: boolean;
  /** Color scheme. */
  carousel_background_color?: 'black' | 'white';
  /** Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available. */
  carousel_display_exif?: boolean;
  /** Show comments area in carousel */
  carousel_display_comments?: boolean;
  /** Greeting Text */
  highlander_comment_form_prompt?: string;
  /** Color scheme */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /** Enable or disable Jetpack portfolio post type. */
  jetpack_portfolio?: boolean;
  /** Number of entries to show at most in Portfolio pages. */
  jetpack_portfolio_posts_per_page?: number;
  /** Enable or disable Jetpack testimonial post type. */
  jetpack_testimonial?: boolean;
  /** Number of entries to show at most in Testimonial pages. */
  jetpack_testimonial_posts_per_page?: number;
  /** Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules. */
  jetpack_waf_automatic_rules?: boolean;
  /** Allow / Block list - Block or allow a specific request IP. */
  jetpack_waf_ip_list?: boolean;
  /** Blocked IP addresses */
  jetpack_waf_ip_block_list?: string;
  /** Always allowed IP addresses */
  jetpack_waf_ip_allow_list?: string;
  /** Share data with Jetpack. */
  jetpack_waf_share_data?: boolean;
  /** Display all your gallery pictures in a cool mosaic. */
  tiled_galleries?: boolean;
  /** View people&#039;s profiles when you mouse over their Gravatars */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  /** To infinity and beyond */
  infinite_scroll?: boolean;
  /** Use Google Analytics with Infinite Scroll */
  infinite_scroll_google_analytics?: boolean;
  /** WordPress.com Likes are */
  wpl_default?: 'on' | 'off';
  /** Send email notification when someone likes a post */
  social_notifications_like?: boolean;
  /** Use Markdown for comments. */
  wpcom_publish_comments_with_markdown?: boolean;
  /** Use Markdown for posts. */
  wpcom_publish_posts_with_markdown?: boolean;
  /** Receive Monitor Email Notifications. */
  monitor_receive_notifications?: boolean;
  /** Email Address */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  /** Protect API key */
  jetpack_protect_key?: string;
  /** Protect global IP allow list */
  jetpack_protect_global_whitelist?: string;
  /** Enabled Services and those hidden behind a button */
  sharing_services?: JetpackV4SettingsPostPutPatchSharingService;
  /** Button Style */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  /** Sharing Label */
  sharing_label?: string;
  /** Views where buttons are shown */
  show?: number[];
  /** The Twitter username of the owner of this site&#039;s domain. */
  'jetpack-twitter-cards-site-tag'?: string;
  /** Disable CSS and JS */
  sharedaddy_disable_resources?: boolean;
  /** Custom sharing services added by user. */
  custom?: JetpackV4SettingsPostPutPatchCustom;
  /** Delete custom sharing service. */
  sharing_delete_service?: string;
  /** Require Two-Step Authentication */
  jetpack_sso_require_two_step?: boolean;
  /** Match by Email */
  jetpack_sso_match_by_email?: boolean;
  /** Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form */
  stb_enabled?: boolean;
  /** Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form */
  stc_enabled?: boolean;
  /** Send email notification when someone follows my blog */
  social_notifications_subscribe?: boolean;
  /** Highlight related content with a heading */
  show_headline?: boolean;
  /** Show a thumbnail image where available */
  show_thumbnails?: boolean;
  /** Enable Instant Search */
  instant_search_enabled?: boolean;
  /** Has an active Jetpack Search product purchase */
  has_jetpack_search_product?: boolean;
  /** Trigger an auto config of instant search */
  search_auto_config?: boolean;
  /** Google Search Console */
  google?: string;
  /** Bing Webmaster Center */
  bing?: string;
  /** Pinterest Site Verification */
  pinterest?: string;
  /** Yandex Site Verification */
  yandex?: string;
  /** Facebook Domain Verification */
  facebook?: string;
  /** Display an ad unit at the top of each page. */
  enable_header_ad?: boolean;
  /** Is site approved for WordAds? */
  wordads_approved?: boolean;
  /** Display second ad below post? */
  wordads_second_belowpost?: boolean;
  /** Display ads on the front page? */
  wordads_display_front_page?: boolean;
  /** Display ads on posts? */
  wordads_display_post?: boolean;
  /** Display ads on pages? */
  wordads_display_page?: boolean;
  /** Display ads on archive pages? */
  wordads_display_archive?: boolean;
  /** Custom ads.txt */
  wordads_custom_adstxt_enabled?: boolean;
  /** Custom ads.txt entries */
  wordads_custom_adstxt?: string;
  /** Enable support for California Consumer Privacy Act */
  wordads_ccpa_enabled?: boolean;
  /** Privacy Policy URL */
  wordads_ccpa_privacy_policy_url?: string;
  /** Google Analytics */
  google_analytics_tracking_id?: string;
  /** Include a small chart in your admin bar with a 48-hour traffic snapshot. */
  admin_bar?: boolean;
  /** Preview the new Jetpack Stats experience (Experimental). */
  enable_odyssey_stats?: boolean;
  /** Select the roles that will be able to view stats reports. */
  roles?: number[];
  /** Count the page views of registered users who are logged in. */
  count_roles?: number[];
  /** Blog ID. */
  blog_id?: boolean;
  /** Do not track. */
  do_not_track?: boolean;
  /** Version. */
  version?: number;
  /** Collapse upgrade nudges */
  collapse_nudges?: boolean;
  /** Show post views in the WordPress.com Reader. */
  wpcom_reader_views_enabled?: boolean;
  akismet_show_user_comments_approved?: boolean;
  wordpress_api_key?: string;
  dismiss_empty_stats_card?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  /** Primary language for the site. */
  lang_id?: string;
  onboarding?: JetpackV4SettingsPostPutPatchOnboarding;
  /** Front page meta description. */
  advanced_seo_front_page_description?: string;
  /** SEO page title structures. */
  advanced_seo_title_formats?: JetpackV4SettingsPostPutPatchAdvancedSeoTitleFormat;
  /** Video Privacy: Restrict views to members of this site */
  videopress_private_enabled_for_site?: boolean;
  'action-bar'?: boolean;
  blaze?: boolean;
  carousel?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  'enhanced-distribution'?: boolean;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  'gravatar-hovercards'?: boolean;
  'infinite-scroll'?: boolean;
  'json-api'?: boolean;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  notes?: boolean;
  'photon-cdn'?: boolean;
  photon?: boolean;
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  search?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  shortcodes?: boolean;
  shortlinks?: boolean;
  sitemaps?: boolean;
  sso?: boolean;
  stats?: boolean;
  subscriptions?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  videopress?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
}

export interface JetpackV4SettingsGetArgs {}

export interface JetpackV4SettingsPSlugAZPostPutPatchArgs {}

export interface JetpackV4OptionsPOptionsAZPostPutPatchArgs {}

export interface JetpackV4UpdatesPluginsGetArgs {}

export interface JetpackV4NoticePNoticeAZPostPutPatchArgs {}

export interface JetpackV4PluginsGetArgs {}

export interface JetpackV4PluginsPostArgs {
  /** WordPress.org plugin directory slug. */
  slug: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
  source?: string;
}

export interface JetpackV4PluginsPPluginPostPutPatchArgs {
  status: string;
  source?: string;
}

export interface JetpackV4PluginPPluginAZGetArgs {}

export interface JetpackV4WidgetsPId09aZGetArgs {}

export interface JetpackV4VerifySitePServiceAZGetArgs {}

export interface JetpackV4VerifySitePServiceAZPostPutPatchArgs {
  keyring_id: number;
}

export interface JetpackV4VerifySitePServiceAZKeyringId09GetArgs {}

export interface JetpackV4RecommendationsDataGetArgs {}

export interface JetpackV4RecommendationsDataPostPutPatchDatum {}

export interface JetpackV4RecommendationsDataPostPutPatchArgs {
  data: JetpackV4RecommendationsDataPostPutPatchDatum;
}

export interface JetpackV4RecommendationsStepGetArgs {}

export interface JetpackV4RecommendationsStepPostPutPatchArgs {
  step: string;
}

export interface JetpackV4RecommendationsProductSuggestionsGetArgs {}

export interface JetpackV4RecommendationsUpsellGetArgs {}

export interface JetpackV4RecommendationsConditionalGetArgs {}

export interface JetpackV4SiteDiscountGetArgs {}

export interface JetpackV4JetpackCrmGetArgs {}

export interface JetpackV4JetpackCrmPostPutPatchArgs {
  extension: string;
}

export interface JetpackV4PurchaseTokenGetArgs {}

export interface JetpackV4PurchaseTokenPostArgs {}

export interface JetpackV4SeenWcConnectionModalPostPutPatchArgs {}

export interface JetpackV4IntroOffersGetArgs {}

export interface JetpackV4LicensingErrorGetArgs {}

export interface JetpackV4LicensingErrorPostPutPatchArgs {
  error: string;
}

export interface JetpackV4LicensingSetLicensePostPutPatchArgs {
  license: string;
}

export interface JetpackV4LicensingUserLicensesGetArgs {}

export interface JetpackV4LicensingUserCountsGetArgs {}

export interface JetpackV4LicensingUserActivationNoticeDismissPostPutPatchArgs {
  last_detached_count: number;
}

export interface JetpackV4LicensingAttachLicensesPostPutPatchArgs {
  licenses: number[];
}

export interface LitespeedV1GetArgs {}

export interface LitespeedV1ToggleCrawlerStatePostArgs {}

export interface LitespeedV1ToolCheckIpGetArgs {}

export interface LitespeedV1IpValidatePostArgs {}

export interface LitespeedV1TokenPostArgs {}

export interface LitespeedV1TokenGetArgs {}

export interface LitespeedV1PingGetArgs {}

export interface LitespeedV1ApikeyPostArgs {}

export interface LitespeedV1CdnStatusPostArgs {}

export interface LitespeedV1NotifyImgPostArgs {}

export interface LitespeedV1NotifyUcssPostArgs {}

export interface LitespeedV1NotifyVpiPostArgs {}

export interface LitespeedV1ErrDomainsPostArgs {}

export interface LitespeedV1CheckImgPostArgs {}

export interface RedirectionV1GetArgs {}

export interface RedirectionV1RedirectGetArgs {
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
}

export interface RedirectionV1RedirectPostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
}

export interface RedirectionV1RedirectPIdDPostPutPatchArgs {}

export interface RedirectionV1RedirectPostGetArgs {
  /** Text to match */
  text: string;
}

export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchItem {}

export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
  /** Apply bulk action globally, as per filters */
  global?: boolean;
  /** Array of IDs to perform action on */
  items?: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchItem[];
}

export interface RedirectionV1GroupGetArgs {
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
}

export interface RedirectionV1GroupPostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
  /** Module ID */
  moduleId: number;
  /** Group name */
  name: string;
}

export interface RedirectionV1GroupPIdDPostPutPatchArgs {
  /** Module ID */
  moduleId: number;
  /** Group name */
  name: string;
}

export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchItem {}

export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchItem[];
}

export interface RedirectionV1LogGetArgs {
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
}

export interface RedirectionV1BulkLogPBulkDeletePostPutPatchItem {}

export interface RedirectionV1BulkLogPBulkDeletePostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1BulkLogPBulkDeletePostPutPatchItem[];
}

export interface RedirectionV1404GetArgs {
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
}

export interface RedirectionV1Bulk404PBulkDeletePostPutPatchItem {}

export interface RedirectionV1Bulk404PBulkDeletePostPutPatchArgs {
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Number of results per page */
  per_page?: number;
  /** Page offset */
  page?: number;
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1Bulk404PBulkDeletePostPutPatchItem[];
}

export interface RedirectionV1SettingGetArgs {}

export interface RedirectionV1SettingPostPutPatchArgs {}

export interface RedirectionV1PluginGetArgs {}

export interface RedirectionV1PluginPostPutPatchArgs {
  /** Name */
  name?: string;
  /** Value */
  value?: string;
}

export interface RedirectionV1PluginDeletePostPutPatchArgs {}

export interface RedirectionV1PluginTestGetPostPutPatchDeleteArgs {}

export interface RedirectionV1PluginDataPostPutPatchArgs {
  /** Upgrade parameter */
  upgrade?: 'stop' | 'skip' | 'retry';
}

export interface RedirectionV1ImportFilePGroupIdDPostPutPatchArgs {}

export interface RedirectionV1ImportPluginGetArgs {}

export interface RedirectionV1ImportPluginPostPutPatchArgs {}

export interface RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs {}

export interface JetpackV4VerifyXmlrpcErrorPostArgs {
  nonce: string;
}

export interface JetpackV4RemoteAuthorizePostPutPatchArgs {}

export interface JetpackV4ConnectionGetArgs {}

export interface JetpackV4ConnectionPostPutPatchArgs {}

export interface JetpackV4ConnectionDataGetArgs {}

export interface JetpackV4ConnectionPluginsGetArgs {}

export interface JetpackV4ConnectionReconnectPostPutPatchArgs {}

export interface JetpackV4ConnectionRegisterPostPutPatchArgs {
  /** Indicates where the registration action was triggered for tracking/segmentation purposes */
  from?: string;
  /** The registration nonce */
  registration_nonce: string;
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
  /** Indicates from what plugin the request is coming from */
  plugin_slug?: string;
}

export interface JetpackV4ConnectionAuthorizeUrlGetArgs {
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
}

export interface JetpackV4UserTokenPostPutPatchArgs {
  /** New user token */
  user_token: string;
  /** Is connection owner */
  is_connection_owner?: boolean;
}

export interface JetpackV4ConnectionOwnerPostPutPatchArgs {
  /** New owner */
  owner: number;
}

export interface JetpackV4SyncFullSyncPostPutPatchModule {}

export interface JetpackV4SyncFullSyncPostPutPatchPost {}

export interface JetpackV4SyncFullSyncPostPutPatchComment {}

export interface JetpackV4SyncFullSyncPostPutPatchArgs {
  /** Data Modules that should be included in Full Sync */
  modules?: JetpackV4SyncFullSyncPostPutPatchModule[];
  /** Post IDs to include in Full Sync */
  posts?: JetpackV4SyncFullSyncPostPutPatchPost[];
  /** Comment IDs to include in Full Sync */
  comments?: JetpackV4SyncFullSyncPostPutPatchComment[];
}

export interface JetpackV4SyncStatusGetArgs {
  /** Comma seperated list of additional fields that should be included in status. */
  fields?: string;
}

export interface JetpackV4SyncHealthPostPutPatchArgs {
  /** New Sync health status */
  status: string;
}

export interface JetpackV4SyncSettingsGetArgs {}

export interface JetpackV4SyncSettingsPostPutPatchArgs {}

export interface JetpackV4SyncObjectGetPostPutPatchDeleteObjectId {}

export interface JetpackV4SyncObjectGetPostPutPatchDeleteArgs {
  /** Name of Sync module */
  module_name?: string;
  /** Object Type */
  object_type?: string;
  /** Objects Identifiers */
  object_ids?: JetpackV4SyncObjectGetPostPutPatchDeleteObjectId[];
}

export interface JetpackV4SyncNowPostPutPatchArgs {
  /** Name of Sync queue. */
  queue: string;
}

export interface JetpackV4SyncCheckoutPostPutPatchArgs {}

export interface JetpackV4SyncClosePostPutPatchArgs {}

export interface JetpackV4SyncUnlockPostPutPatchArgs {
  /** Name of Sync queue. */
  queue: string;
}

export interface JetpackV4SyncObjectIdRangeGetArgs {
  /** Name of Sync module. */
  sync_module: string;
  /** Size of batches */
  batch_size: number;
}

export interface JetpackV4SyncDataCheckGetArgs {
  /** If text fields should be converted to latin1 in checksum calculation. */
  perform_text_conversion?: boolean;
}

export interface JetpackV4SyncDataHistogramPostPutPatchColumn {}

export interface JetpackV4SyncDataHistogramPostPutPatchArgs {
  /** Column mappings */
  columns?: JetpackV4SyncDataHistogramPostPutPatchColumn[];
  /** Object Type */
  object_type?: string;
  /** Number of histogram buckets. */
  buckets?: number;
  /** Start ID for the histogram */
  start_id?: number;
  /** End ID for the histogram */
  end_id?: number;
  /** Strip non-ascii characters? */
  strip_non_ascii?: boolean;
  /** Shared Salt to use when generating checksum */
  shared_salt?: string;
  /** Should only range endges be returned */
  only_range_edges?: boolean;
  /** Do we want the checksum or object ids. */
  detailed_drilldown?: boolean;
  /** If text fields should be converted to latin1 in checksum calculation. */
  perform_text_conversion?: boolean;
}

export interface JetpackV4SyncSpawnSyncGetArgs {}

export interface JetpackV4SyncLocksDeleteArgs {}

export interface JetpackV4JitmGetArgs {}

export interface JetpackV4JitmPostArgs {}

export interface JetpackV4IdentityCrisisConfirmSafeModePostPutPatchArgs {}

export interface JetpackV4IdentityCrisisMigratePostPutPatchArgs {}

export interface JetpackV4IdentityCrisisStartFreshPostPutPatchArgs {
  /** URI of the admin page where the user should be redirected after connection flow */
  redirect_uri?: string;
}

export interface JetpackV4SearchPlanGetArgs {}

export interface JetpackV4SearchSettingsPostPutPatchArgs {}

export interface JetpackV4SearchSettingsGetArgs {}

export interface JetpackV4SearchStatsGetArgs {}

export interface JetpackV4SearchPricingGetArgs {}

export interface JetpackV4SearchPlanActivatePostPutPatchArgs {}

export interface JetpackV4SearchPlanDeactivatePostPutPatchArgs {}

export interface JetpackV4SearchGetArgs {}

export interface JetpackV4SearchLocalStatsGetArgs {}

export interface JetpackV4WafGetArgs {}

export interface JetpackV4WafPostPutPatchArgs {}

export interface JetpackV4WafUpdateRulesPostPutPatchArgs {}

export interface WpcomV2GetArgs {}

export interface WpcomV2VideopressMetaPostPutPatchArgs {
  /** The post id for the attachment. */
  id: number;
  /** The title of the video. */
  title?: string;
  /** The description of the video. */
  description?: string;
  /** The caption of the video. */
  caption?: string;
  /** The video content rating. One of G, PG-13 or R-17 */
  rating?: string;
  /** Display the share menu in the player. */
  display_embed?: boolean;
  /** Display download option and allow viewers to download this video */
  allow_download?: boolean;
  /** How to determine if the video should be public or private */
  privacy_setting?: number;
}

export interface WpcomV2VideopressPVideoGuidWPosterGetArgs {}

export interface WpcomV2VideopressPVideoGuidWPosterPostPutPatchArgs {
  /** The time in the video to use as the poster frame. */
  at_time?: number;
  /** Whether the time is in milliseconds or seconds. */
  is_millisec?: boolean;
  /** The attachment id of the poster image. */
  poster_attachment_id?: number;
}

export interface WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetArgs {}

export interface WpcomV2VideopressUploadJwtPostPutPatchArgs {}

export interface WpcomV2VideopressPlaybackJwtPVideoGuidWPostPutPatchArgs {}

export interface JetpackV4StatsAppGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsPResourceWPResourceIdDGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsPResourceWGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsPResourceIdDGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsPResourceIdDLikesGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsGetArgs {}

export interface JetpackV4StatsAppSites202188134SiteHasNeverPublishedPostGetArgs {}

export interface JetpackV4StatsAppSites202188134PostsGetArgs {}

export interface JetpackV4StatsAppSites202188134SubscribersCountsGetArgs {}

export interface JetpackV4StatsAppSites202188134WordadsEarningsGetArgs {}

export interface JetpackV4StatsAppSites202188134WordadsStatsGetArgs {}

export interface JetpackV4StatsAppStatsNoticesPostPutPatchArgs {
  /** ID of the notice */
  id: string;
  /** Status of the notice */
  status: string;
  /** Postponed for (in seconds) */
  postponed_for?: number;
}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesPostPutPatchArgs {
  /** ID of the notice */
  id: string;
  /** Status of the notice */
  status: string;
  /** Postponed for (in seconds) */
  postponed_for?: number;
}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardNoticesGetArgs {}

export interface JetpackV4StatsAppSites202188134StatsReferrersSpamNewPostPutPatchArgs {
  /** Domain of the referrer */
  domain: string;
}

export interface JetpackV4StatsAppSites202188134StatsReferrersSpamDeletePostPutPatchArgs {
  /** Domain of the referrer */
  domain: string;
}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesPostPutPatchArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModulesGetArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsPostPutPatchArgs {}

export interface JetpackV4StatsAppSites202188134JetpackStatsDashboardModuleSettingsGetArgs {}

export interface JetpackV4ImportGetArgs {}

export interface JetpackV4ImportBlocksPostTitle {}

export interface JetpackV4ImportBlocksPostContent {}

export interface JetpackV4ImportBlocksPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: JetpackV4ImportBlocksPostTitle;
  /** The content for the post. */
  content?: JetpackV4ImportBlocksPostContent;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCategoriesPostMetum {}

export interface JetpackV4ImportCategoriesPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent category slug. */
  parent?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportCategoriesPostMetum;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCommentsPostContent {}

export interface JetpackV4ImportCommentsPostMetum {}

export interface JetpackV4ImportCommentsPostArgs {
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: JetpackV4ImportCommentsPostContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportCommentsPostMetum;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCustomCssPostTitle {}

export interface JetpackV4ImportCustomCssPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: JetpackV4ImportCustomCssPostTitle;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportEndPostArgs {}

export interface JetpackV4ImportGlobalStylesPostTitle {}

export interface JetpackV4ImportGlobalStylesPostContent {}

export interface JetpackV4ImportGlobalStylesPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: JetpackV4ImportGlobalStylesPostTitle;
  /** The content for the post. */
  content?: JetpackV4ImportGlobalStylesPostContent;
  /** The theme file to use to display the post. */
  template?: string;
  /** The name of the theme. */
  theme: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
}

export interface JetpackV4ImportMediaPostTitle {}

export interface JetpackV4ImportMediaPostMetum {}

export interface JetpackV4ImportMediaPostCaption {}

export interface JetpackV4ImportMediaPostDescription {}

export interface JetpackV4ImportMediaPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The title for the post. */
  title?: JetpackV4ImportMediaPostTitle;
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** Meta fields. */
  meta?: JetpackV4ImportMediaPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: JetpackV4ImportMediaPostCaption;
  /** The attachment description. */
  description?: JetpackV4ImportMediaPostDescription;
  /** The ID for the associated post of the attachment. */
  post?: number;
}

export interface JetpackV4ImportMediaPIdDPostPutPatchTitle {}

export interface JetpackV4ImportMediaPIdDPostPutPatchMetum {}

export interface JetpackV4ImportMediaPIdDPostPutPatchCaption {}

export interface JetpackV4ImportMediaPIdDPostPutPatchDescription {}

export interface JetpackV4ImportMediaPIdDPostPutPatchArgs {
  /** Unique identifier for the attachment. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The title for the post. */
  title?: JetpackV4ImportMediaPIdDPostPutPatchTitle;
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** Meta fields. */
  meta?: JetpackV4ImportMediaPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: JetpackV4ImportMediaPIdDPostPutPatchCaption;
  /** The attachment description. */
  description?: JetpackV4ImportMediaPIdDPostPutPatchDescription;
  /** The ID for the associated post of the attachment. */
  post?: number;
}

export interface JetpackV4ImportMediaPIdDPostProcessPostArgs {
  /** Unique identifier for the attachment. */
  id?: number;
  action: 'create-image-subsizes';
}

export interface JetpackV4ImportMenuItemsPostMetum {}

export interface JetpackV4ImportMenuItemsPostArgs {
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the parent of the object. */
  parent?: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
  /** The parent menu slug. */
  menus?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportMenuItemsPostMetum;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportMenusPostMetum {}

export interface JetpackV4ImportMenusPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportMenusPostMetum;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
}

export interface JetpackV4ImportNavigationPostTitle {}

export interface JetpackV4ImportNavigationPostContent {}

export interface JetpackV4ImportNavigationPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: JetpackV4ImportNavigationPostTitle;
  /** The content for the post. */
  content?: JetpackV4ImportNavigationPostContent;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportPagesPostTitle {}

export interface JetpackV4ImportPagesPostContent {}

export interface JetpackV4ImportPagesPostExcerpt {}

export interface JetpackV4ImportPagesPostMetum {}

export interface JetpackV4ImportPagesPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The ID for the parent of the post. */
  parent?: number;
  /** The title for the post. */
  title?: JetpackV4ImportPagesPostTitle;
  /** The content for the post. */
  content?: JetpackV4ImportPagesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: JetpackV4ImportPagesPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: JetpackV4ImportPagesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportPostsPostTitle {}

export interface JetpackV4ImportPostsPostContent {}

export interface JetpackV4ImportPostsPostExcerpt {}

export interface JetpackV4ImportPostsPostMetum {}

export interface JetpackV4ImportPostsPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: JetpackV4ImportPostsPostTitle;
  /** The content for the post. */
  content?: JetpackV4ImportPostsPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: JetpackV4ImportPostsPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: JetpackV4ImportPostsPostMetum;
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportStartGetArgs {}

export interface JetpackV4ImportTagsPostMetum {}

export interface JetpackV4ImportTagsPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportTagsPostMetum;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportTemplatePartsPostArgs {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportTemplatesPostArgs {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface WpcomV2BusinessHoursLocalizedWeekGetArgs {}

export interface WpcomV2AdminMenuGetArgs {}

export interface WpcomV2JetpackAiAiAssistantFeatureGetArgs {}

export interface WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetArgs {
  /** Media collection search term. */
  search?: string;
  /** Number of media items in the request */
  number?: number;
  path?: string;
  page_handle?: string;
}

export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostMedium {}

export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs {
  /** Media data to copy. */
  media: WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostMedium[];
  /** The post ID to attach the upload to. */
  post_id?: number;
}

export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetArgs {}

export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs {}

export interface WpcomV2FollowingMineGetArgs {
  ignore_user_blogs?: boolean;
}

export interface WpcomV2CheckgoogledocvisibilityGetArgs {}

export interface WpcomV2InstagramGalleryConnectUrlGetArgs {}

export interface WpcomV2InstagramGalleryConnectionsGetArgs {}

export interface WpcomV2InstagramGalleryGalleryGetArgs {
  /** An Instagram Keyring access token. */
  access_token: number;
  /** How many Instagram posts? */
  count: number;
}

export interface WpcomV2MailchimpGetArgs {}

export interface WpcomV2MailchimpGroupsGetArgs {}

export interface WpcomV2PodcastPlayerGetGuid {}

export interface WpcomV2PodcastPlayerGetArgs {
  /** The Podcast RSS feed URL. */
  url: string;
  /** A list of unique identifiers for fetching specific podcast episodes. */
  guids: WpcomV2PodcastPlayerGetGuid[];
  /** Whether we should return the episodes list for use in the selection UI */
  'episode-options': boolean;
}

export interface WpcomV2PodcastPlayerTrackQuantityGetArgs {}

export interface WpcomV2PublicizeConnectionsGetArgs {}

export interface WpcomV2PostsPPostidDPublicizePostSkippedConnection {}

export interface WpcomV2PostsPPostidDPublicizePostArgs {
  /** The message to share. */
  message: string;
  /** Array of external connection IDs to skip sharing. */
  skipped_connections?: WpcomV2PostsPPostidDPublicizePostSkippedConnection[];
}

export interface WpcomV2ResolveRedirectPUrlGetArgs {
  /** The URL to check for redirects. */
  url: string;
}

export interface WpcomV2SearchGetArgs {}

export interface WpcomV2SendEmailPreviewPostArgs {
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpcomV2TemplateLoaderPTemplateTypeWGetArgs {
  /** The type of the template. */
  template_type: string;
}

export interface WpcomV2TransientsPNameW1172DeleteArgs {
  /** The name of the transient to delete. */
  name: string;
}

export interface WpcomV2TweetstormGatherGetArgs {
  /** The tweet URL to gather from. */
  url: string;
}

export interface WpcomV2TweetstormParsePostPutPatchBlock {}

export interface WpcomV2TweetstormParsePostPutPatchArgs {
  /** An array of serialized blocks, and editor-specific block information. */
  blocks: WpcomV2TweetstormParsePostPutPatchBlock[];
}

export interface WpcomV2TweetstormGenerateCardsPostPutPatchUrl {}

export interface WpcomV2TweetstormGenerateCardsPostPutPatchArgs {
  /** An array of URLs to generate Twitter card details for. */
  urls: WpcomV2TweetstormGenerateCardsPostPutPatchUrl[];
}

export interface WpcomV3GetArgs {}

export interface WpcomV3BloggingPromptsGetArgs {
  /** Show prompts following a given date. */
  after?: string;
  /** Show prompts before a given date. */
  before?: string;
  /** Force the returned prompts to be for a specific year. Returns only one prompt for each day. */
  force_year?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order';
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpcomV3BloggingPromptsPIdDGetArgs {
  /** Unique identifier for the prompt. */
  id?: number;
}

export interface WpcomV2GutenbergAvailableExtensionsGetArgs {}

export interface WpcomV2HelloGetArgs {}

export interface WpcomV2MembershipsStatusGetArgs {
  type?: string;
  source?: string;
  is_editable?: boolean;
}

export interface WpcomV2MembershipsProductPostArgs {
  title: string;
  price: number;
  currency: string;
  interval: string;
  is_editable?: boolean;
  buyer_can_change_amount?: boolean;
}

export interface WpcomV2MembershipsProductsPostArgs {}

export interface WpcomV2PublicizeConnectionTestResultsGetArgs {}

export interface WpcomV2PublicizeServicesGetArgs {}

export interface WpcomV2ServiceApiKeysPServiceAZGetArgs {}

export interface WpcomV2ServiceApiKeysPServiceAZPostPutPatchArgs {
  service_api_key: string;
}

export interface WpcomV2ServiceApiKeysPServiceAZDeleteArgs {}

export interface KbpV1GetArgs {}

export interface KbpV1PostQueryGetInclude {}

export interface KbpV1PostQueryGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Current page of the collection. */
  page?: number;
  /** Number of results to return. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to items of a specific post type. */
  type?: string;
  /** Include posts by ID. */
  include?: KbpV1PostQueryGetInclude[];
  /** Define Type of Query. */
  query?: string;
  /** Define Query Order. */
  order?: string;
  /** Define Query Order By. */
  order_by?: string;
  /** Allow Sticky in Query. */
  allow_sticky?: boolean;
  /** Exclude Category. */
  exclude?: string;
  /** Number of items to offset in query. */
  offset?: number;
  /** The Current Post ID. */
  post_id?: number;
  /** Check if using a custom Taxonomy */
  custom_tax?: boolean;
  /** Define Query Order By. */
  tax_type?: string;
  /** Include posts category. */
  category?: string;
  /** Include posts tags. */
  tags?: string;
}

export interface KbMailerliteV1GetArgs {}

export interface KbMailerliteV1GetGetQueryarg {}

export interface KbMailerliteV1GetGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** The API Key for Mailerlite account. */
  apikey?: string;
  /** Actionable endpoint for api call. */
  endpoint?: string;
  /** Query Args for url. */
  queryargs?: KbMailerliteV1GetGetQueryarg[];
}

export interface KbFluentcrmV1GetArgs {}

export interface KbFluentcrmV1GetGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Actionable endpoint for api call. */
  endpoint?: string;
}

export interface KbLottieanimationV1GetArgs {}

export interface KbLottieanimationV1AnimationsPIdAZaZ09GetArgs {}

export interface KbLottieanimationV1AnimationsPostArgs {}

export interface SpectraV1GetArgs {}

export interface SpectraV1AllTaxonomyGetArgs {}

export interface UagV1GetArgs {}

export interface UagV1AdminCommonsettingsGetArgs {}

export interface WcPaypalV1GetArgs {}

export interface WcPaypalV1OnboardingGetParamsPostArgs {}

export interface WcPaypalV1OnboardingGetStatusGetArgs {}

export interface WcPaypalV1OnboardingSetCredentialsPostArgs {}

export interface PaypalV1GetArgs {}

export interface PaypalV1IncomingPostArgs {}

export interface WcAdminGetArgs {}

export interface WcAdminFeaturesGetArgs {}

export interface WcAnalyticsGetArgs {}

export interface WcAnalyticsAdminNotesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'note_id' | 'date' | 'type' | 'title' | 'status';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Type of note. */
  type?: number[];
  /** Status of note. */
  status?: number[];
  /** Source of note. */
  source?: number[];
}

export interface WcAnalyticsAdminNotesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcAnalyticsAdminNotesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcAnalyticsAdminNotesDeletePIdDDeleteArgs {}

export interface WcAnalyticsAdminNotesDeleteAllDeleteArgs {
  /** Status of note. */
  status?: number[];
}

export interface WcAnalyticsAdminNotesTrackerPNoteIdDUserPUserIdDGetArgs {}

export interface WcAnalyticsAdminNotesUpdatePostPutPatchArgs {}

export interface WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostPutPatchArgs {}

export interface WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostPutPatchArgs {
  /** Unique ID for the Note. */
  note_id?: number;
  /** Unique ID for the Note Action. */
  action_id?: number;
}

export interface WcAnalyticsCouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to coupons with codes matching a given string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to resources with a specific code. */
  code?: string;
}

export interface WcAnalyticsCouponsPostMetaDatum {}

export interface WcAnalyticsCouponsPostArgs {
  /** Coupon code. */
  code: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcAnalyticsCouponsPostMetaDatum[];
}

export interface WcAnalyticsCouponsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsCouponsPIdDPostPutPatchMetaDatum {}

export interface WcAnalyticsCouponsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcAnalyticsCouponsPIdDPostPutPatchMetaDatum[];
}

export interface WcAnalyticsCouponsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcAnalyticsCouponsBatchPostPutPatchMetaDatum {}

export interface WcAnalyticsCouponsBatchPostPutPatchArgs {
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcAnalyticsCouponsBatchPostPutPatchMetaDatum[];
}

export interface WcAnalyticsDataGetArgs {}

export interface WcAnalyticsDataCountriesLocalesGetArgs {}

export interface WcAnalyticsDataCountriesGetArgs {}

export interface WcAnalyticsDataCountriesPLocationWGetArgs {
  /** ISO3166 alpha-2 country code. */
  location?: string;
}

export interface WcAnalyticsDataDownloadIpsGetArgs {}

export interface WcAdminExperimentsAssignmentGetArgs {}

export interface WcAdminMarketingRecommendedGetArgs {
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  category?: string;
}

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

export interface WcAdminMarketingChannelsGetArgs {}

export interface WcAdminMarketingCampaignsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAdminMarketingCampaignTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAdminOptionsGetArgs {}

export interface WcAdminOptionsPostPutPatchArgs {}

export interface WcAnalyticsOrdersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to orders which have specific statuses. */
  status?: number[];
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to orders matching part of an order number. */
  number?: string;
}

export interface WcAnalyticsOrdersPostBilling {}

export interface WcAnalyticsOrdersPostShipping {}

export interface WcAnalyticsOrdersPostMetaDatum {}

export interface WcAnalyticsOrdersPostLineItem {}

export interface WcAnalyticsOrdersPostShippingLine {}

export interface WcAnalyticsOrdersPostFeeLine {}

export interface WcAnalyticsOrdersPostCouponLine {}

export interface WcAnalyticsOrdersPostArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcAnalyticsOrdersPostBilling;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersPostShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersPostMetaDatum[];
  /** Line items data. */
  line_items?: WcAnalyticsOrdersPostLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersPostShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersPostFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersPostCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcAnalyticsOrdersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsOrdersPIdDPostPutPatchBilling {}

export interface WcAnalyticsOrdersPIdDPostPutPatchShipping {}

export interface WcAnalyticsOrdersPIdDPostPutPatchMetaDatum {}

export interface WcAnalyticsOrdersPIdDPostPutPatchLineItem {}

export interface WcAnalyticsOrdersPIdDPostPutPatchShippingLine {}

export interface WcAnalyticsOrdersPIdDPostPutPatchFeeLine {}

export interface WcAnalyticsOrdersPIdDPostPutPatchCouponLine {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcAnalyticsOrdersPIdDPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersPIdDPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersPIdDPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcAnalyticsOrdersPIdDPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersPIdDPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersPIdDPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersPIdDPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcAnalyticsOrdersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcAnalyticsOrdersBatchPostPutPatchBilling {}

export interface WcAnalyticsOrdersBatchPostPutPatchShipping {}

export interface WcAnalyticsOrdersBatchPostPutPatchMetaDatum {}

export interface WcAnalyticsOrdersBatchPostPutPatchLineItem {}

export interface WcAnalyticsOrdersBatchPostPutPatchShippingLine {}

export interface WcAnalyticsOrdersBatchPostPutPatchFeeLine {}

export interface WcAnalyticsOrdersBatchPostPutPatchCouponLine {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcAnalyticsOrdersBatchPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersBatchPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersBatchPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcAnalyticsOrdersBatchPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersBatchPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersBatchPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersBatchPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcAdminPaymentGatewaySuggestionsGetArgs {
  /** Return the default payment suggestions when woocommerce_show_marketplace_suggestions and woocommerce_setting_payments_recommendations_hidden options are set to no */
  force_default_suggestions?: boolean;
}

export interface WcAdminPaymentGatewaySuggestionsDismissPostArgs {}

export interface WcAnalyticsProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Search by similar product name or sku. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'price'
    | 'popularity'
    | 'rating';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Limit results to those with a SKU that partial matches a string. */
  search_sku?: string;
  /** Limit result set to products that are low or out of stock. (Deprecated) */
  low_in_stock?: boolean;
}

export interface WcAnalyticsProductsPostDownload {}

export interface WcAnalyticsProductsPostDimension {}

export interface WcAnalyticsProductsPostCategory {}

export interface WcAnalyticsProductsPostTag {}

export interface WcAnalyticsProductsPostImage {}

export interface WcAnalyticsProductsPostAttribute {}

export interface WcAnalyticsProductsPostDefaultAttribute {}

export interface WcAnalyticsProductsPostMetaDatum {}

export interface WcAnalyticsProductsPostArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcAnalyticsProductsPostCategory[];
  /** List of tags. */
  tags?: WcAnalyticsProductsPostTag[];
  /** List of images. */
  images?: WcAnalyticsProductsPostImage[];
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPostAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsPostDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPostMetaDatum[];
}

export interface WcAnalyticsProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WcAnalyticsProductsPIdDPostPutPatchDownload {}

export interface WcAnalyticsProductsPIdDPostPutPatchDimension {}

export interface WcAnalyticsProductsPIdDPostPutPatchCategory {}

export interface WcAnalyticsProductsPIdDPostPutPatchTag {}

export interface WcAnalyticsProductsPIdDPostPutPatchImage {}

export interface WcAnalyticsProductsPIdDPostPutPatchAttribute {}

export interface WcAnalyticsProductsPIdDPostPutPatchDefaultAttribute {}

export interface WcAnalyticsProductsPIdDPostPutPatchMetaDatum {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcAnalyticsProductsPIdDPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcAnalyticsProductsPIdDPostPutPatchTag[];
  /** List of images. */
  images?: WcAnalyticsProductsPIdDPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPIdDPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsPIdDPostPutPatchDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPIdDPostPutPatchMetaDatum[];
}

export interface WcAnalyticsProductsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcAnalyticsProductsBatchPostPutPatchDownload {}

export interface WcAnalyticsProductsBatchPostPutPatchDimension {}

export interface WcAnalyticsProductsBatchPostPutPatchCategory {}

export interface WcAnalyticsProductsBatchPostPutPatchTag {}

export interface WcAnalyticsProductsBatchPostPutPatchImage {}

export interface WcAnalyticsProductsBatchPostPutPatchAttribute {}

export interface WcAnalyticsProductsBatchPostPutPatchDefaultAttribute {}

export interface WcAnalyticsProductsBatchPostPutPatchMetaDatum {}

export interface WcAnalyticsProductsBatchPostPutPatchArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcAnalyticsProductsBatchPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcAnalyticsProductsBatchPostPutPatchTag[];
  /** List of images. */
  images?: WcAnalyticsProductsBatchPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcAnalyticsProductsBatchPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsBatchPostPutPatchDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsBatchPostPutPatchMetaDatum[];
}

export interface WcAnalyticsProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Search by similar attribute name. */
  search?: string;
}

export interface WcAnalyticsProductsAttributesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcAnalyticsProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsProductsAttributesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcAnalyticsProductsAttributesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcAnalyticsProductsAttributesBatchPostPutPatchArgs {
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcAnalyticsProductsAttributesPSlugAZ09GetArgs {
  /** Slug identifier for the resource. */
  slug?: string;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPostArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsAttributesPSlugAZ09TermsGetArgs {
  /** Limit result set to resources with a specific slug. */
  slug?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
}

export interface WcAnalyticsProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcAnalyticsProductsCategoriesPostImage {}

export interface WcAnalyticsProductsCategoriesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesPostImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsProductsCategoriesPIdDPostPutPatchImage {}

export interface WcAnalyticsProductsCategoriesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesPIdDPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsCategoriesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcAnalyticsProductsCategoriesBatchPostPutPatchImage {}

export interface WcAnalyticsProductsCategoriesBatchPostPutPatchArgs {
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesBatchPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Search by similar product name, sku, or attribute value. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsProductsPProductIdDVariationsPostDownload {}

export interface WcAnalyticsProductsPProductIdDVariationsPostDimension {}

export interface WcAnalyticsProductsPProductIdDVariationsPostImage {}

export interface WcAnalyticsProductsPProductIdDVariationsPostAttribute {}

export interface WcAnalyticsProductsPProductIdDVariationsPostMetaDatum {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsPostImage;
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsPostAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsPostMetaDatum[];
  /** Product parent name. */
  name?: string;
  /** Product type. */
  type?: 'variation';
  /** Product parent ID. */
  parent_id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchDownload {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchDimension {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchImage {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchAttribute {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum[];
  /** Product parent name. */
  name?: string;
  /** Product type. */
  type?: 'variation';
  /** Product parent ID. */
  parent_id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchDownload {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchDimension {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchImage {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchAttribute {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchMetaDatum {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchMetaDatum[];
  /** Product parent name. */
  name?: string;
  /** Product type. */
  type?: 'variation';
  /** Product parent ID. */
  parent_id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostDownload {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostDimension {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostImage {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostAttribute {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostMetaDatum {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsGeneratePostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsGeneratePostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsGeneratePostImage;
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsGeneratePostAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsGeneratePostMetaDatum[];
  /** Product parent name. */
  name?: string;
  /** Product type. */
  type?: 'variation';
  /** Product parent ID. */
  parent_id?: number;
}

export interface WcAnalyticsVariationsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Search by similar product name, sku, or attribute value. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsProductsReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to reviews published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
  /** Limit result set to reviews assigned to specific user IDs. */
  reviewer?: number[];
  /** Ensure result set excludes reviews assigned to specific user IDs. */
  reviewer_exclude?: number[];
  /** Limit result set to that from a specific author email. */
  reviewer_email?: string;
  /** Limit result set to reviews assigned to specific product IDs. */
  product?: number[];
  /** Limit result set to reviews assigned a specific status. */
  status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
}

export interface WcAnalyticsProductsReviewsPostArgs {
  /** Unique identifier for the product. */
  product_id: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Name of the reviewer. */
  reviewer: string;
  /** Email of the reviewer. */
  reviewer_email: string;
  /** Review content. */
  review: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcAnalyticsProductsReviewsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsProductsReviewsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcAnalyticsProductsReviewsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcAnalyticsProductsReviewsBatchPostPutPatchArgs {
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcAnalyticsProductsLowInStockGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to products assigned a specific status. */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
}

export interface WcAnalyticsSettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcAnalyticsSettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcAnalyticsSettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcAnalyticsSettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcAdminThemesPostPutPatchArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAdminPluginsInstallPostPutPatchArgs {}

export interface WcAdminPluginsInstallStatusGetArgs {}

export interface WcAdminPluginsInstallStatusPJobIdAZ09GetArgs {}

export interface WcAdminPluginsActiveGetArgs {}

export interface WcAdminPluginsInstalledGetArgs {}

export interface WcAdminPluginsActivatePostPutPatchArgs {}

export interface WcAdminPluginsActivateStatusGetArgs {}

export interface WcAdminPluginsActivateStatusPJobIdAZ09GetArgs {}

export interface WcAdminPluginsConnectJetpackGetArgs {}

export interface WcAdminPluginsRequestWccomConnectPostArgs {}

export interface WcAdminPluginsFinishWccomConnectPostArgs {}

export interface WcAdminPluginsConnectWcpayPostPutPatchArgs {}

export interface WcAdminPluginsConnectSquarePostPutPatchArgs {}

export interface WcAdminOnboardingFreeExtensionsGetArgs {}

export interface WcAdminOnboardingProductTypesGetArgs {}

export interface WcAdminOnboardingProfileGetArgs {}

export interface WcAdminOnboardingProfilePostPutPatchIndustry {}

export interface WcAdminOnboardingProfilePostPutPatchArgs {
  /** Whether or not the profile was completed. */
  completed?: boolean;
  /** Whether or not the profile was skipped. */
  skipped?: boolean;
  /** Industry. */
  industry?: WcAdminOnboardingProfilePostPutPatchIndustry[];
  /** Types of products sold. */
  product_types?: number[];
  /** Number of products to be added. */
  product_count?: '0' | '1-10' | '11-100' | '101-1000' | '1000+';
  /** Other places the store is selling products. */
  selling_venues?:
    | 'no'
    | 'other'
    | 'brick-mortar'
    | 'brick-mortar-other'
    | 'other-woocommerce';
  /** Number of employees of the store. */
  number_employees?:
    | '1'
    | '<10'
    | '10-50'
    | '50-250'
    | '+250'
    | 'not specified';
  /** Current annual revenue of the store. */
  revenue?:
    | 'none'
    | 'up-to-2500'
    | '2500-10000'
    | '10000-50000'
    | '50000-250000'
    | 'more-than-250000'
    | 'rather-not-say';
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
  /** Extra business extensions to install. */
  business_extensions?: number[];
  /** Selected store theme. */
  theme?: string;
  /** Whether or not this store was setup for a client. */
  setup_client?: boolean;
  /** Whether or not the store was connected to WooCommerce.com during the extension flow. */
  wccom_connected?: boolean;
  /** Whether or not this store agreed to receiving marketing contents from WooCommerce.com. */
  is_agree_marketing?: boolean;
  /** Store email address. */
  store_email?: string;
  /** Whether or not this store country is set via onboarding profiler. */
  is_store_country_set?: boolean;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcAdminOnboardingProfileExperimentalGetEmailPrefillGetArgs {}

export interface WcAdminOnboardingTasksImportSampleProductsPostArgs {}

export interface WcAdminOnboardingTasksCreateHomepagePostArgs {}

export interface WcAdminOnboardingTasksCreateProductFromTemplatePostArgs {
  /** Product template name. */
  template_name: string;
}

export interface WcAdminOnboardingTasksGetArgs {
  /** Optional parameter to get only specific task lists by id. */
  ids?: number[];
}

export interface WcAdminOnboardingTasksPostExtendedTask {}

export interface WcAdminOnboardingTasksPostArgs {
  /** Optional parameter to get only specific task lists by id. */
  ids?: number[];
  /** List of extended deprecated tasks from the client side filter. */
  extended_tasks?: WcAdminOnboardingTasksPostExtendedTask[];
}

export interface WcAdminOnboardingTasksPIdAZ09HidePostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UnhidePostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09DismissPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UndoDismissPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09SnoozePostArgs {
  /** Time period to snooze the task. */
  duration?: string;
  /** Optional parameter to query specific task list. */
  task_list_id?: string;
}

export interface WcAdminOnboardingTasksPIdAZ09ActionPostPutPatchArgs {}

export interface WcAdminOnboardingTasksPIdAZ09UndoSnoozePostPutPatchArgs {}

export interface WcAdminOnboardingThemesInstallPostPutPatchArgs {}

export interface WcAdminOnboardingThemesActivatePostPutPatchArgs {}

export interface WcAdminOnboardingPluginsInstallAsyncPostPlugin {}

export interface WcAdminOnboardingPluginsInstallAsyncPostArgs {
  /** A list of plugins to install */
  plugins: WcAdminOnboardingPluginsInstallAsyncPostPlugin[];
}

export interface WcAdminOnboardingPluginsInstallAndActivatePostArgs {}

export interface WcAdminOnboardingPluginsScheduledInstallsPJobIdWGetArgs {}

export interface WcAdminNavigationFavoritesMeGetArgs {}

export interface WcAdminNavigationFavoritesMePostArgs {}

export interface WcAdminNavigationFavoritesMeDeleteArgs {}

export interface WcAnalyticsTaxesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'order' | 'priority';
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Search by similar tax code. */
  search?: string;
  /** Limit result set to items that have the specified rate ID(s) assigned. */
  include?: number[];
}

export interface WcAnalyticsTaxesPostArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcAnalyticsTaxesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsTaxesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcAnalyticsTaxesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcAnalyticsTaxesBatchPostPutPatchArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcAdminMobileAppSendMagicLinkGetArgs {}

export interface WcAdminMobileAppGetArgs {}

export interface WcAdminShippingPartnerSuggestionsGetArgs {
  /** Return the default shipping partner suggestions when woocommerce_show_marketplace_suggestions option is set to no */
  force_default_suggestions?: boolean;
}

export interface WcAnalyticsCustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit result to items with specified user ids. */
  users?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit result to items with specified customer ids. */
  include?: number[];
}

export interface WcAnalyticsCustomersPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit result to items with specified user ids. */
  users?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit result to items with specified customer ids. */
  include?: number[];
}

export interface WcAnalyticsLeaderboardsGetArgs {
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** URL query to persist across links. */
  persisted_query?: string;
}

export interface WcAnalyticsLeaderboardsAllowedGetArgs {}

export interface WcAnalyticsLeaderboardsPLeaderboardWGetArgs {
  leaderboard?: 'customers' | 'coupons' | 'categories' | 'products';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** URL query to persist across links. */
  persisted_query?: string;
}

export interface WcAnalyticsReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcAnalyticsReportsImportPostPutPatchArgs {
  /** Number of days to import. */
  days?: number;
  /** Skip importing existing order data. */
  skip_existing?: boolean;
}

export interface WcAnalyticsReportsImportCancelPostPutPatchArgs {}

export interface WcAnalyticsReportsImportDeletePostPutPatchArgs {}

export interface WcAnalyticsReportsImportStatusGetArgs {}

export interface WcAnalyticsReportsImportTotalsGetArgs {
  /** Number of days to import. */
  days?: number;
  /** Skip importing existing order data. */
  skip_existing?: boolean;
}

export interface WcAnalyticsReportsPTypeAZExportPostPutPatchReportArg {}

export interface WcAnalyticsReportsPTypeAZExportPostPutPatchArgs {
  /** Parameters to pass on to the exported report. */
  report_args?: WcAnalyticsReportsPTypeAZExportPostPutPatchReportArg;
  /** When true, email a link to download the export to the requesting user. */
  email?: boolean;
}

export interface WcAnalyticsReportsPTypeAZExportPExportIdAZ09StatusGetArgs {}

export interface WcAnalyticsReportsProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold'
    | 'product_name'
    | 'variations'
    | 'sku';
  /** Limit result to items from the specified categories. */
  categories?: number[];
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit result to items with specified product ids. */
  products?: number[];
  /** Add additional piece of info about each product to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsVariationsGetAttributeI {}

export interface WcAnalyticsReportsVariationsGetAttributeIsNot {}

export interface WcAnalyticsReportsVariationsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'net_revenue' | 'orders_count' | 'items_sold' | 'sku';
  /** Limit result set to items that have the specified parent product(s). */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified parent product(s). */
  product_excludes?: number[];
  /** Limit result to items with specified variation ids. */
  variations?: number[];
  /** Add additional piece of info about each variation to the report. */
  extended_info?: boolean;
  /** Limit result set to variations that include the specified attributes. */
  attribute_is?: WcAnalyticsReportsVariationsGetAttributeI[];
  /** Limit result set to variations that don't include the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsVariationsGetAttributeIsNot[];
  /** Limit result set to variations in the specified categories. */
  category_includes?: number[];
  /** Limit result set to variations not in the specified categories. */
  category_excludes?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsProductsStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit result to items from the specified categories. */
  categories?: number[];
  /** Limit result to items with specified product ids. */
  products?: number[];
  /** Limit result to items with specified variation ids. */
  variations?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsVariationsStatsGetAttributeI {}

export interface WcAnalyticsReportsVariationsStatsGetAttributeIsNot {}

export interface WcAnalyticsReportsVariationsStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit result to items from the specified categories. */
  category_includes?: number[];
  /** Limit result set to variations not in the specified categories. */
  category_excludes?: number[];
  /** Limit result set to items that have the specified parent product(s). */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified parent product(s). */
  product_excludes?: number[];
  /** Limit result to items with specified variation ids. */
  variations?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsVariationsStatsGetAttributeI[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsVariationsStatsGetAttributeIsNot[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsRevenueStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'total_sales'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold'
    | 'gross_sales';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation' | 'coupon' | 'customer_type';
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsOrdersGetAttributeI {}

export interface WcAnalyticsReportsOrdersGetAttributeIsNot {}

export interface WcAnalyticsReportsOrdersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'num_items_sold' | 'net_total';
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified variation(s) assigned. */
  variation_includes?: number[];
  /** Limit result set to items that don't have the specified variation(s) assigned. */
  variation_excludes?: number[];
  /** Limit result set to items that have the specified coupon(s) assigned. */
  coupon_includes?: number[];
  /** Limit result set to items that don't have the specified coupon(s) assigned. */
  coupon_excludes?: number[];
  /** Limit result set to items that have the specified tax rate(s) assigned. */
  tax_rate_includes?: number[];
  /** Limit result set to items that don't have the specified tax rate(s) assigned. */
  tax_rate_excludes?: number[];
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
  /** Limit result set to returning or new customers. */
  customer_type?: '' | 'returning' | 'new';
  /** Limit result set to specific types of refunds. */
  refunds?: '' | 'all' | 'partial' | 'full' | 'none';
  /** Add additional piece of info about each coupon to the report. */
  extended_info?: boolean;
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsOrdersGetAttributeI[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsOrdersGetAttributeIsNot[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsOrdersStatsGetAttributeI {}

export interface WcAnalyticsReportsOrdersStatsGetAttributeIsNot {}

export interface WcAnalyticsReportsOrdersStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'net_revenue' | 'orders_count' | 'avg_order_value';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified variation(s) assigned. */
  variation_includes?: number[];
  /** Limit result set to items that don't have the specified variation(s) assigned. */
  variation_excludes?: number[];
  /** Limit result set to items that have the specified coupon(s) assigned. */
  coupon_includes?: number[];
  /** Limit result set to items that don't have the specified coupon(s) assigned. */
  coupon_excludes?: number[];
  /** Limit result set to items that have the specified tax rate(s) assigned. */
  tax_rate_includes?: number[];
  /** Limit result set to items that don't have the specified tax rate(s) assigned. */
  tax_rate_excludes?: number[];
  /** Alias for customer_type (deprecated). */
  customer?: 'new' | 'returning';
  /** Limit result set to orders that have the specified customer_type */
  customer_type?: 'new' | 'returning';
  /** Limit result set to specific types of refunds. */
  refunds?: '' | 'all' | 'partial' | 'full' | 'none';
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsOrdersStatsGetAttributeI[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsOrdersStatsGetAttributeIsNot[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation' | 'coupon' | 'customer_type';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'category_id'
    | 'items_sold'
    | 'net_revenue'
    | 'orders_count'
    | 'products_count'
    | 'category';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
  /** Limit result set to all items that have the specified term assigned in the categories taxonomy. */
  categories?: number[];
  /** Add additional piece of info about each category to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsTaxesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'name'
    | 'tax_rate_id'
    | 'tax_code'
    | 'rate'
    | 'order_tax'
    | 'total_tax'
    | 'shipping_tax'
    | 'orders_count';
  /** Limit result set to items assigned one or more tax rates. */
  taxes?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsTaxesStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'items_sold'
    | 'total_sales'
    | 'orders_count'
    | 'products_count';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit result set to all items that have the specified term assigned in the taxes taxonomy. */
  taxes?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'tax_rate_id';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsCouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'coupon_id' | 'code' | 'amount' | 'orders_count';
  /** Limit result set to coupons assigned specific coupon IDs. */
  coupons?: number[];
  /** Add additional piece of info about each coupon to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsCouponsStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'amount' | 'coupons_count' | 'orders_count';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit result set to coupons assigned specific coupon IDs. */
  coupons?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'variation' | 'category' | 'coupon';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsStockGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'stock_status'
    | 'stock_quantity'
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'sku';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to items assigned a stock report type. */
  type?: 'all' | 'lowstock' | 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsReportsStockStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsReportsDownloadsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'product';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: products, orders, username, ip_address. */
  match?: 'all' | 'any';
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit response to objects that have the specified user ids. */
  customer_includes?: number[];
  /** Limit response to objects that don't have the specified user ids. */
  customer_excludes?: number[];
  /** Limit response to objects that have a specified ip address. */
  ip_address_includes?: number[];
  /** Limit response to objects that don't have a specified ip address. */
  ip_address_excludes?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsDownloadsStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'download_count';
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit response to objects that have the specified customer ids. */
  customer_includes?: number[];
  /** Limit response to objects that don't have the specified customer ids. */
  customer_excludes?: number[];
  /** Limit response to objects that have a specified ip address. */
  ip_address_includes?: number[];
  /** Limit response to objects that don't have a specified ip address. */
  ip_address_excludes?: number[];
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsCustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit result to items with specified customer ids. */
  customers?: number[];
  /** Limit result to items with specified user ids. */
  users?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsCustomersStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit result to items with specified customer ids. */
  customers?: number[];
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
}

export interface WcAnalyticsReportsPerformanceIndicatorsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to specific report stats. Allowed values: . */
  stats?: number[];
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
}

export interface WcAnalyticsReportsPerformanceIndicatorsAllowedGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to specific report stats. Allowed values: . */
  stats?: number[];
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
}

export interface WcStoreGetArgs {}

export interface WcStoreBatchPostRequest {}

export interface WcStoreBatchPostArgs {
  validation?: 'require-all-validate' | 'normal';
  requests: WcStoreBatchPostRequest[];
}

export interface WcStoreCartGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartAddItemPostVariation {}

export interface WcStoreCartAddItemPostArgs {
  /** The cart item product or variation ID. */
  id?: number;
  /** Quantity of this item to add to the cart. */
  quantity?: number;
  /** Chosen attributes (for variations). */
  variation?: WcStoreCartAddItemPostVariation[];
}

export interface WcStoreCartApplyCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreCartCouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartCouponsPostArgs {
  /** The coupon's unique code. */
  code?: string;
  /** The discount type for the coupon (e.g. percentage or fixed amount) */
  discount_type?: string;
}

export interface WcStoreCartCouponsDeleteArgs {}

export interface WcStoreCartCouponsPCodeWGetArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartCouponsPCodeWDeleteArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreCartExtensionsPostDatum {}

export interface WcStoreCartExtensionsPostArgs {
  /** Extension's name - this will be used to ensure the data in the request is routed appropriately. */
  namespace?: string;
  /** Additional data to pass to the extension */
  data?: WcStoreCartExtensionsPostDatum;
}

export interface WcStoreCartItemsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartItemsPostExtension {}

export interface WcStoreCartItemsPostArgs {
  extensions?: WcStoreCartItemsPostExtension;
}

export interface WcStoreCartItemsDeleteArgs {}

export interface WcStoreCartItemsPKeyW32GetArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartItemsPKeyW32PostPutPatchExtension {}

export interface WcStoreCartItemsPKeyW32PostPutPatchArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
  extensions?: WcStoreCartItemsPKeyW32PostPutPatchExtension;
}

export interface WcStoreCartItemsPKeyW32DeleteArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreCartRemoveCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreCartRemoveItemPostArgs {
  /** Unique identifier (key) for the cart item. */
  key?: string;
}

export interface WcStoreCartSelectShippingRatePostArgs {
  /** The chosen rate ID for the package. */
  rate_id: string;
}

export interface WcStoreCartUpdateItemPostArgs {
  /** Unique identifier (key) for the cart item to update. */
  key?: string;
  /** New quantity of the item in the cart. */
  quantity?: number;
}

export interface WcStoreCartUpdateCustomerPostBillingAddress {}

export interface WcStoreCartUpdateCustomerPostShippingAddress {}

export interface WcStoreCartUpdateCustomerPostArgs {
  /** Billing address. */
  billing_address?: WcStoreCartUpdateCustomerPostBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreCartUpdateCustomerPostShippingAddress;
}

export interface WcStoreCheckoutGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCheckoutPostPaymentDatum {}

export interface WcStoreCheckoutPostBillingAddress {}

export interface WcStoreCheckoutPostShippingAddress {}

export interface WcStoreCheckoutPostExtension {}

export interface WcStoreCheckoutPostArgs {
  /** Data to pass through to the payment method when processing payment. */
  payment_data?: WcStoreCheckoutPostPaymentDatum[];
  /** Note added to the order by the customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing_address: WcStoreCheckoutPostBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreCheckoutPostShippingAddress;
  /** The ID of the payment method being used to process the payment. */
  payment_method?: 'ppcp-gateway';
  /** Whether to create a new user account as part of order processing. */
  create_account?: boolean;
  extensions?: WcStoreCheckoutPostExtension;
}

export interface WcStoreProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WcStoreProductsCollectionDataGetAttribute {}

export interface WcStoreProductsCollectionDataGetCalculateAttributeCount {}

export interface WcStoreProductsCollectionDataGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'modified'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'price'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'comment_count';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreProductsCollectionDataGetAttribute[];
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
  /** If true, calculates the minimum and maximum product prices for the collection. */
  calculate_price_range?: boolean;
  /** If true, calculates stock counts for products in the collection. */
  calculate_stock_status_counts?: boolean;
  /** If requested, calculates attribute term counts for products in the collection. */
  calculate_attribute_counts?: WcStoreProductsCollectionDataGetCalculateAttributeCount[];
  /** If true, calculates rating counts for products in the collection. */
  calculate_rating_counts?: boolean;
}

export interface WcStoreProductsReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'rating' | 'product';
  /** Limit result set to reviews from specific category IDs. */
  category_id?: string;
  /** Limit result set to reviews from specific product IDs. */
  product_id?: string;
}

export interface WcStoreProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreProductsGetAttribute {}

export interface WcStoreProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'modified'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'price'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'comment_count';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreProductsGetAttribute[];
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
}

export interface WcStoreProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreProductsPSlugSGetArgs {
  /** Slug of the resource. */
  slug?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1GetArgs {}

export interface WcStoreV1BatchPostRequest {}

export interface WcStoreV1BatchPostArgs {
  validation?: 'require-all-validate' | 'normal';
  requests: WcStoreV1BatchPostRequest[];
}

export interface WcStoreV1CartGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartAddItemPostVariation {}

export interface WcStoreV1CartAddItemPostArgs {
  /** The cart item product or variation ID. */
  id?: number;
  /** Quantity of this item to add to the cart. */
  quantity?: number;
  /** Chosen attributes (for variations). */
  variation?: WcStoreV1CartAddItemPostVariation[];
}

export interface WcStoreV1CartApplyCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartCouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartCouponsPostArgs {
  /** The coupon's unique code. */
  code?: string;
  /** The discount type for the coupon (e.g. percentage or fixed amount) */
  discount_type?: string;
}

export interface WcStoreV1CartCouponsDeleteArgs {}

export interface WcStoreV1CartCouponsPCodeWGetArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartCouponsPCodeWDeleteArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartExtensionsPostDatum {}

export interface WcStoreV1CartExtensionsPostArgs {
  /** Extension's name - this will be used to ensure the data in the request is routed appropriately. */
  namespace?: string;
  /** Additional data to pass to the extension */
  data?: WcStoreV1CartExtensionsPostDatum;
}

export interface WcStoreV1CartItemsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartItemsPostExtension {}

export interface WcStoreV1CartItemsPostArgs {
  extensions?: WcStoreV1CartItemsPostExtension;
}

export interface WcStoreV1CartItemsDeleteArgs {}

export interface WcStoreV1CartItemsPKeyW32GetArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartItemsPKeyW32PostPutPatchExtension {}

export interface WcStoreV1CartItemsPKeyW32PostPutPatchArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
  extensions?: WcStoreV1CartItemsPKeyW32PostPutPatchExtension;
}

export interface WcStoreV1CartItemsPKeyW32DeleteArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreV1CartRemoveCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartRemoveItemPostArgs {
  /** Unique identifier (key) for the cart item. */
  key?: string;
}

export interface WcStoreV1CartSelectShippingRatePostArgs {
  /** The chosen rate ID for the package. */
  rate_id: string;
}

export interface WcStoreV1CartUpdateItemPostArgs {
  /** Unique identifier (key) for the cart item to update. */
  key?: string;
  /** New quantity of the item in the cart. */
  quantity?: number;
}

export interface WcStoreV1CartUpdateCustomerPostBillingAddress {}

export interface WcStoreV1CartUpdateCustomerPostShippingAddress {}

export interface WcStoreV1CartUpdateCustomerPostArgs {
  /** Billing address. */
  billing_address?: WcStoreV1CartUpdateCustomerPostBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreV1CartUpdateCustomerPostShippingAddress;
}

export interface WcStoreV1CheckoutGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CheckoutPostPaymentDatum {}

export interface WcStoreV1CheckoutPostBillingAddress {}

export interface WcStoreV1CheckoutPostShippingAddress {}

export interface WcStoreV1CheckoutPostExtension {}

export interface WcStoreV1CheckoutPostArgs {
  /** Data to pass through to the payment method when processing payment. */
  payment_data?: WcStoreV1CheckoutPostPaymentDatum[];
  /** Note added to the order by the customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing_address: WcStoreV1CheckoutPostBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreV1CheckoutPostShippingAddress;
  /** The ID of the payment method being used to process the payment. */
  payment_method?: 'ppcp-gateway';
  /** Whether to create a new user account as part of order processing. */
  create_account?: boolean;
  extensions?: WcStoreV1CheckoutPostExtension;
}

export interface WcStoreV1ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1ProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1ProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreV1ProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreV1ProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WcStoreV1ProductsCollectionDataGetAttribute {}

export interface WcStoreV1ProductsCollectionDataGetCalculateAttributeCount {}

export interface WcStoreV1ProductsCollectionDataGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'modified'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'price'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'comment_count';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreV1ProductsCollectionDataGetAttribute[];
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
  /** If true, calculates the minimum and maximum product prices for the collection. */
  calculate_price_range?: boolean;
  /** If true, calculates stock counts for products in the collection. */
  calculate_stock_status_counts?: boolean;
  /** If requested, calculates attribute term counts for products in the collection. */
  calculate_attribute_counts?: WcStoreV1ProductsCollectionDataGetCalculateAttributeCount[];
  /** If true, calculates rating counts for products in the collection. */
  calculate_rating_counts?: boolean;
}

export interface WcStoreV1ProductsReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'rating' | 'product';
  /** Limit result set to reviews from specific category IDs. */
  category_id?: string;
  /** Limit result set to reviews from specific product IDs. */
  product_id?: string;
}

export interface WcStoreV1ProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
}

export interface WcStoreV1ProductsGetAttribute {}

export interface WcStoreV1ProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'modified'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'price'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'comment_count';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreV1ProductsGetAttribute[];
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
}

export interface WcStoreV1ProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1ProductsPSlugSGetArgs {
  /** Slug of the resource. */
  slug?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WpgmzaV1GetArgs {}

export interface WpgmzaV1MapsDGetArgs {}

export interface WpgmzaV1MarkersDGetArgs {}

export interface WpgmzaV1MarkersGetArgs {}

export interface WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetArgs {}

export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs {}

export interface WpgmzaV1MarkersDDeletePostArgs {}

export interface WpgmzaV1DatatablesGetArgs {}

export interface WpgmzaV1DatatablesPostArgs {}

export interface WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1GeocodeCacheGetArgs {}

export interface WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1DecompressGetArgs {}

export interface WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetArgs {}

export interface MyJetpackV1GetArgs {}

export interface MyJetpackV1SiteProductsGetArgs {}

export interface MyJetpackV1SiteProductsPProductAZGetArgs {
  /** Product slug */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

export interface MyJetpackV1SiteProductsPProductAZPostPutPatchArgs {
  /** Product slug */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

export interface MyJetpackV1SiteProductsPProductAZDeleteArgs {
  /** Product slug */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

export interface MyJetpackV1SiteProductsPProductAZInstallStandalonePostPutPatchArgs {
  /** Product slug */
  product:
    | 'anti-spam'
    | 'backup'
    | 'boost'
    | 'crm'
    | 'extras'
    | 'jetpack-ai'
    | 'scan'
    | 'search'
    | 'social'
    | 'security'
    | 'protect'
    | 'videopress'
    | 'stats';
}

export interface MyJetpackV1SitePurchasesGetArgs {}

export interface MyJetpackV1ChatAvailabilityGetArgs {}

export interface MyJetpackV1ChatAuthenticationGetArgs {
  type?: string;
  test_mode?: boolean;
}

export interface MyJetpackV1SiteGetArgs {}

export interface JetpackBoostV1GetArgs {}

export interface JetpackBoostV1SpeedScoresPostPutPatchArgs {}

export interface JetpackBoostV1SpeedScoresRefreshPostPutPatchArgs {}

export interface WpcomV2FormsResponsesGetArgs {
  limit?: number;
  offset?: number;
  form_id?: number;
  search?: string;
}

export interface WpcomV2FormsResponsesBulkActionsPostArgs {}

export interface JetpackV4BlazeAppGetArgs {}

export interface JetpackV4BlazeAppSites202188134BlazePostsGetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1CreditsPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1CampaignsPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1CampaignsPSubPathAZaZ09PostPutPatchArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1Sites202188134CampaignsPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1SearchPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1UserPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1TemplatesPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1SubscriptionsPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1SmartPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1SmartPSubPathAZaZ09PostPutPatchArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1LocationsPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1WooCountriesPSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeAppSites202188134WordadsDspApiV1ImagePSubPathAZaZ09GetArgs {}

export interface JetpackV4BlazeGetArgs {}

export interface JetpackV4BlazeEligibilityGetArgs {}

export interface JetpackV4BlazeDashboardGetArgs {}

export interface JetpackV4HintsPostPutPatchArgs {
  hint: string;
}

export interface ForminatorV1GetArgs {}

export interface ForminatorV1PreviewFormsGetArgs {
  /** Module ID */
  module_id: number;
}

export interface ForminatorV1PreviewPollsGetArgs {
  /** Module ID */
  module_id: number;
}

export interface ForminatorV1PreviewQuizzesGetArgs {
  /** Module ID */
  module_id: number;
}

export interface WcV1GetArgs {}

export interface WcV1CouponsGetFilter {}

export interface WcV1CouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1CouponsGetFilter;
  /** Limit result set to resources with a specific code. */
  code?: string;
}

export interface WcV1CouponsPostArgs {
  /** Coupon code. */
  code: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
}

export interface WcV1CouponsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1CouponsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Coupon code. */
  code?: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
}

export interface WcV1CouponsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV1CouponsBatchPostPutPatchArgs {
  /** Coupon code. */
  code?: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
}

export interface WcV1CustomersPCustomerIdDDownloadsGetArgs {
  /** Unique identifier for the resource. */
  customer_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV1CustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  /** Limit result set to resources with a specific email. */
  email?: string;
  /** Limit result set to resources with a specific role. */
  role?:
    | 'all'
    | 'administrator'
    | 'editor'
    | 'author'
    | 'contributor'
    | 'subscriber'
    | 'customer'
    | 'shop_manager';
}

export interface WcV1CustomersPostBilling {}

export interface WcV1CustomersPostShipping {}

export interface WcV1CustomersPostArgs {
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** New user username. */
  username?: string;
  /** New user password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV1CustomersPostBilling;
  /** List of shipping address data. */
  shipping?: WcV1CustomersPostShipping;
}

export interface WcV1CustomersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1CustomersPIdDPostPutPatchBilling {}

export interface WcV1CustomersPIdDPostPutPatchShipping {}

export interface WcV1CustomersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV1CustomersPIdDPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV1CustomersPIdDPostPutPatchShipping;
}

export interface WcV1CustomersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV1CustomersBatchPostPutPatchBilling {}

export interface WcV1CustomersBatchPostPutPatchShipping {}

export interface WcV1CustomersBatchPostPutPatchArgs {
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV1CustomersBatchPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV1CustomersBatchPostPutPatchShipping;
}

export interface WcV1OrdersPOrderIdDNotesGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1OrdersPOrderIdDNotesPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Order note content. */
  note: string;
  /** Shows/define if the note is only for reference or for the customer (the user will be notified). */
  customer_note?: boolean;
}

export interface WcV1OrdersPOrderIdDNotesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1OrdersPOrderIdDRefundsGetFilter {}

export interface WcV1OrdersPOrderIdDRefundsGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1OrdersPOrderIdDRefundsGetFilter;
  /** Limit result set to orders assigned a specific status. */
  status?:
    | 'any'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
}

export interface WcV1OrdersPOrderIdDRefundsPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Refund amount. */
  amount?: string;
  /** Reason for refund. */
  reason?: string;
}

export interface WcV1OrdersPOrderIdDRefundsPIdDGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1OrdersGetFilter {}

export interface WcV1OrdersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1OrdersGetFilter;
  /** Limit result set to orders assigned a specific status. */
  status?:
    | 'any'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
}

export interface WcV1OrdersPostBilling {}

export interface WcV1OrdersPostShipping {}

export interface WcV1OrdersPostLineItem {}

export interface WcV1OrdersPostShippingLine {}

export interface WcV1OrdersPostFeeLine {}

export interface WcV1OrdersPostCouponLine {}

export interface WcV1OrdersPostArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Billing address. */
  billing?: WcV1OrdersPostBilling;
  /** Shipping address. */
  shipping?: WcV1OrdersPostShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Line items data. */
  line_items?: WcV1OrdersPostLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersPostShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV1OrdersPostFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersPostCouponLine[];
}

export interface WcV1OrdersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1OrdersPIdDPostPutPatchBilling {}

export interface WcV1OrdersPIdDPostPutPatchShipping {}

export interface WcV1OrdersPIdDPostPutPatchLineItem {}

export interface WcV1OrdersPIdDPostPutPatchShippingLine {}

export interface WcV1OrdersPIdDPostPutPatchFeeLine {}

export interface WcV1OrdersPIdDPostPutPatchCouponLine {}

export interface WcV1OrdersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Billing address. */
  billing?: WcV1OrdersPIdDPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV1OrdersPIdDPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Line items data. */
  line_items?: WcV1OrdersPIdDPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersPIdDPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV1OrdersPIdDPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersPIdDPostPutPatchCouponLine[];
}

export interface WcV1OrdersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV1OrdersBatchPostPutPatchBilling {}

export interface WcV1OrdersBatchPostPutPatchShipping {}

export interface WcV1OrdersBatchPostPutPatchLineItem {}

export interface WcV1OrdersBatchPostPutPatchShippingLine {}

export interface WcV1OrdersBatchPostPutPatchFeeLine {}

export interface WcV1OrdersBatchPostPutPatchCouponLine {}

export interface WcV1OrdersBatchPostPutPatchArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Billing address. */
  billing?: WcV1OrdersBatchPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV1OrdersBatchPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Line items data. */
  line_items?: WcV1OrdersBatchPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersBatchPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV1OrdersBatchPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersBatchPostPutPatchCouponLine[];
}

export interface WcV1ProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsPostArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsAttributesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV1ProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsAttributesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV1ProductsAttributesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1ProductsAttributesBatchPostPutPatchArgs {
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV1ProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV1ProductsCategoriesPostImage {}

export interface WcV1ProductsCategoriesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV1ProductsCategoriesPostImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsCategoriesPIdDPostPutPatchImage {}

export interface WcV1ProductsCategoriesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV1ProductsCategoriesPIdDPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsCategoriesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1ProductsCategoriesBatchPostPutPatchImage {}

export interface WcV1ProductsCategoriesBatchPostPutPatchArgs {
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV1ProductsCategoriesBatchPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV1ProductsPProductIdDReviewsGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsPProductIdDReviewsPostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Review content. */
  review: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Name of the reviewer. */
  name: string;
  /** Email of the reviewer. */
  email: string;
}

export interface WcV1ProductsPProductIdDReviewsPIdDGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsPProductIdDReviewsPIdDPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Reviewer name. */
  name?: string;
  /** Reviewer email. */
  email?: string;
}

export interface WcV1ProductsPProductIdDReviewsPIdDDeleteArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV1ProductsShippingClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV1ProductsShippingClassesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsShippingClassesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsShippingClassesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsShippingClassesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1ProductsShippingClassesBatchPostPutPatchArgs {
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV1ProductsTagsPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsTagsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsTagsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsTagsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1ProductsTagsBatchPostPutPatchArgs {
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV1ProductsGetFilter {}

export interface WcV1ProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1ProductsGetFilter;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific attribute. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit result set to products with a specific SKU. */
  sku?: string;
}

export interface WcV1ProductsPostDownload {}

export interface WcV1ProductsPostDimension {}

export interface WcV1ProductsPostCategory {}

export interface WcV1ProductsPostTag {}

export interface WcV1ProductsPostImage {}

export interface WcV1ProductsPostAttribute {}

export interface WcV1ProductsPostDefaultAttribute {}

export interface WcV1ProductsPostVariation {}

export interface WcV1ProductsPostArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV1ProductsPostCategory[];
  /** List of tags. */
  tags?: WcV1ProductsPostTag[];
  /** List of images. */
  images?: WcV1ProductsPostImage[];
  /** List of attributes. */
  attributes?: WcV1ProductsPostAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsPostDefaultAttribute[];
  /** List of variations. */
  variations?: WcV1ProductsPostVariation[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
}

export interface WcV1ProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsPIdDPostPutPatchDownload {}

export interface WcV1ProductsPIdDPostPutPatchDimension {}

export interface WcV1ProductsPIdDPostPutPatchCategory {}

export interface WcV1ProductsPIdDPostPutPatchTag {}

export interface WcV1ProductsPIdDPostPutPatchImage {}

export interface WcV1ProductsPIdDPostPutPatchAttribute {}

export interface WcV1ProductsPIdDPostPutPatchDefaultAttribute {}

export interface WcV1ProductsPIdDPostPutPatchVariation {}

export interface WcV1ProductsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV1ProductsPIdDPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV1ProductsPIdDPostPutPatchTag[];
  /** List of images. */
  images?: WcV1ProductsPIdDPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV1ProductsPIdDPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsPIdDPostPutPatchDefaultAttribute[];
  /** List of variations. */
  variations?: WcV1ProductsPIdDPostPutPatchVariation[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
}

export interface WcV1ProductsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV1ProductsBatchPostPutPatchDownload {}

export interface WcV1ProductsBatchPostPutPatchDimension {}

export interface WcV1ProductsBatchPostPutPatchCategory {}

export interface WcV1ProductsBatchPostPutPatchTag {}

export interface WcV1ProductsBatchPostPutPatchImage {}

export interface WcV1ProductsBatchPostPutPatchAttribute {}

export interface WcV1ProductsBatchPostPutPatchDefaultAttribute {}

export interface WcV1ProductsBatchPostPutPatchVariation {}

export interface WcV1ProductsBatchPostPutPatchArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV1ProductsBatchPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV1ProductsBatchPostPutPatchTag[];
  /** List of images. */
  images?: WcV1ProductsBatchPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV1ProductsBatchPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsBatchPostPutPatchDefaultAttribute[];
  /** List of variations. */
  variations?: WcV1ProductsBatchPostPutPatchVariation[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
}

export interface WcV1ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV1ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV1ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV1TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV1TaxesClassesPSlugWWSDeleteArgs {
  /** Unique slug for the resource. */
  slug?: string;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1TaxesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'order' | 'priority';
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV1TaxesPostArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV1TaxesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1TaxesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV1TaxesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1TaxesBatchPostPutPatchArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV1WebhooksGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'title';
  /** Limit result set to webhooks assigned a specific status. */
  status?: 'all' | 'active' | 'paused' | 'disabled';
}

export interface WcV1WebhooksPostArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook delivery URL. */
  delivery_url: string;
}

export interface WcV1WebhooksPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1WebhooksPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV1WebhooksPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV1WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV1WebhooksPWebhookIdDDeliveriesGetArgs {
  /** Unique identifier for the webhook. */
  webhook_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1WebhooksPWebhookIdDDeliveriesPIdDGetArgs {
  /** Unique identifier for the webhook. */
  webhook_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2GetArgs {}

export interface WcV2CouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to resources with a specific code. */
  code?: string;
}

export interface WcV2CouponsPostMetaDatum {}

export interface WcV2CouponsPostArgs {
  /** Coupon code. */
  code: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV2CouponsPostMetaDatum[];
}

export interface WcV2CouponsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2CouponsPIdDPostPutPatchMetaDatum {}

export interface WcV2CouponsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV2CouponsPIdDPostPutPatchMetaDatum[];
}

export interface WcV2CouponsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2CouponsBatchPostPutPatchMetaDatum {}

export interface WcV2CouponsBatchPostPutPatchArgs {
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV2CouponsBatchPostPutPatchMetaDatum[];
}

export interface WcV2CustomersPCustomerIdDDownloadsGetArgs {
  /** Unique identifier for the resource. */
  customer_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2CustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  /** Limit result set to resources with a specific email. */
  email?: string;
  /** Limit result set to resources with a specific role. */
  role?:
    | 'all'
    | 'administrator'
    | 'editor'
    | 'author'
    | 'contributor'
    | 'subscriber'
    | 'customer'
    | 'shop_manager';
}

export interface WcV2CustomersPostBilling {}

export interface WcV2CustomersPostShipping {}

export interface WcV2CustomersPostMetaDatum {}

export interface WcV2CustomersPostArgs {
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** New user username. */
  username?: string;
  /** New user password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV2CustomersPostBilling;
  /** List of shipping address data. */
  shipping?: WcV2CustomersPostShipping;
  /** Meta data. */
  meta_data?: WcV2CustomersPostMetaDatum[];
}

export interface WcV2CustomersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2CustomersPIdDPostPutPatchBilling {}

export interface WcV2CustomersPIdDPostPutPatchShipping {}

export interface WcV2CustomersPIdDPostPutPatchMetaDatum {}

export interface WcV2CustomersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV2CustomersPIdDPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV2CustomersPIdDPostPutPatchShipping;
  /** Meta data. */
  meta_data?: WcV2CustomersPIdDPostPutPatchMetaDatum[];
}

export interface WcV2CustomersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV2CustomersBatchPostPutPatchBilling {}

export interface WcV2CustomersBatchPostPutPatchShipping {}

export interface WcV2CustomersBatchPostPutPatchMetaDatum {}

export interface WcV2CustomersBatchPostPutPatchArgs {
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV2CustomersBatchPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV2CustomersBatchPostPutPatchShipping;
  /** Meta data. */
  meta_data?: WcV2CustomersBatchPostPutPatchMetaDatum[];
}

export interface WcV2OrdersPOrderIdDNotesGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result to customers or internal notes. */
  type?: 'any' | 'customer' | 'internal';
}

export interface WcV2OrdersPOrderIdDNotesPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Order note content. */
  note: string;
  /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
  customer_note?: boolean;
}

export interface WcV2OrdersPOrderIdDNotesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2OrdersPOrderIdDRefundsGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV2OrdersPOrderIdDRefundsPostMetaDatum {}

export interface WcV2OrdersPOrderIdDRefundsPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Refund amount. */
  amount?: string;
  /** Reason for refund. */
  reason?: string;
  /** User ID of user who created the refund. */
  refunded_by?: number;
  /** Meta data. */
  meta_data?: WcV2OrdersPOrderIdDRefundsPostMetaDatum[];
  /** When true, the payment gateway API is used to generate the refund. */
  api_refund?: boolean;
}

export interface WcV2OrdersPOrderIdDRefundsPIdDGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2OrdersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to orders assigned a specific status. */
  status?:
    | 'any'
    | 'trash'
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV2OrdersPostBilling {}

export interface WcV2OrdersPostShipping {}

export interface WcV2OrdersPostMetaDatum {}

export interface WcV2OrdersPostLineItem {}

export interface WcV2OrdersPostShippingLine {}

export interface WcV2OrdersPostFeeLine {}

export interface WcV2OrdersPostCouponLine {}

export interface WcV2OrdersPostArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV2OrdersPostBilling;
  /** Shipping address. */
  shipping?: WcV2OrdersPostShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV2OrdersPostMetaDatum[];
  /** Line items data. */
  line_items?: WcV2OrdersPostLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersPostShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV2OrdersPostFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersPostCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV2OrdersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2OrdersPIdDPostPutPatchBilling {}

export interface WcV2OrdersPIdDPostPutPatchShipping {}

export interface WcV2OrdersPIdDPostPutPatchMetaDatum {}

export interface WcV2OrdersPIdDPostPutPatchLineItem {}

export interface WcV2OrdersPIdDPostPutPatchShippingLine {}

export interface WcV2OrdersPIdDPostPutPatchFeeLine {}

export interface WcV2OrdersPIdDPostPutPatchCouponLine {}

export interface WcV2OrdersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV2OrdersPIdDPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV2OrdersPIdDPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV2OrdersPIdDPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcV2OrdersPIdDPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersPIdDPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV2OrdersPIdDPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersPIdDPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV2OrdersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2OrdersBatchPostPutPatchBilling {}

export interface WcV2OrdersBatchPostPutPatchShipping {}

export interface WcV2OrdersBatchPostPutPatchMetaDatum {}

export interface WcV2OrdersBatchPostPutPatchLineItem {}

export interface WcV2OrdersBatchPostPutPatchShippingLine {}

export interface WcV2OrdersBatchPostPutPatchFeeLine {}

export interface WcV2OrdersBatchPostPutPatchCouponLine {}

export interface WcV2OrdersBatchPostPutPatchArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV2OrdersBatchPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV2OrdersBatchPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV2OrdersBatchPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcV2OrdersBatchPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersBatchPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV2OrdersBatchPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersBatchPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsPostArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsAttributesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV2ProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsAttributesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV2ProductsAttributesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2ProductsAttributesBatchPostPutPatchArgs {
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV2ProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV2ProductsCategoriesPostImage {}

export interface WcV2ProductsCategoriesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV2ProductsCategoriesPostImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsCategoriesPIdDPostPutPatchImage {}

export interface WcV2ProductsCategoriesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV2ProductsCategoriesPIdDPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsCategoriesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2ProductsCategoriesBatchPostPutPatchImage {}

export interface WcV2ProductsCategoriesBatchPostPutPatchArgs {
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV2ProductsCategoriesBatchPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV2ProductsPProductIdDReviewsGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsPProductIdDReviewsPostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Review content. */
  review: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Name of the reviewer. */
  name: string;
  /** Email of the reviewer. */
  email: string;
}

export interface WcV2ProductsPProductIdDReviewsPIdDGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsPProductIdDReviewsPIdDPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Reviewer name. */
  name?: string;
  /** Reviewer email. */
  email?: string;
}

export interface WcV2ProductsPProductIdDReviewsPIdDDeleteArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2ProductsPProductIdDReviewsBatchPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Reviewer name. */
  name?: string;
  /** Reviewer email. */
  email?: string;
}

export interface WcV2ProductsShippingClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV2ProductsShippingClassesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsShippingClassesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsShippingClassesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsShippingClassesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2ProductsShippingClassesBatchPostPutPatchArgs {
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV2ProductsTagsPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsTagsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsTagsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsTagsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2ProductsTagsBatchPostPutPatchArgs {
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV2ProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating'
    | 'menu_order';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit result set to products in stock or out of stock. */
  in_stock?: boolean;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV2ProductsPostDownload {}

export interface WcV2ProductsPostDimension {}

export interface WcV2ProductsPostCategory {}

export interface WcV2ProductsPostTag {}

export interface WcV2ProductsPostImage {}

export interface WcV2ProductsPostAttribute {}

export interface WcV2ProductsPostDefaultAttribute {}

export interface WcV2ProductsPostMetaDatum {}

export interface WcV2ProductsPostArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV2ProductsPostCategory[];
  /** List of tags. */
  tags?: WcV2ProductsPostTag[];
  /** List of images. */
  images?: WcV2ProductsPostImage[];
  /** List of attributes. */
  attributes?: WcV2ProductsPostAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsPostDefaultAttribute[];
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPostMetaDatum[];
}

export interface WcV2ProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsPIdDPostPutPatchDownload {}

export interface WcV2ProductsPIdDPostPutPatchDimension {}

export interface WcV2ProductsPIdDPostPutPatchCategory {}

export interface WcV2ProductsPIdDPostPutPatchTag {}

export interface WcV2ProductsPIdDPostPutPatchImage {}

export interface WcV2ProductsPIdDPostPutPatchAttribute {}

export interface WcV2ProductsPIdDPostPutPatchDefaultAttribute {}

export interface WcV2ProductsPIdDPostPutPatchMetaDatum {}

export interface WcV2ProductsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV2ProductsPIdDPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV2ProductsPIdDPostPutPatchTag[];
  /** List of images. */
  images?: WcV2ProductsPIdDPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV2ProductsPIdDPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsPIdDPostPutPatchDefaultAttribute[];
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPIdDPostPutPatchMetaDatum[];
}

export interface WcV2ProductsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2ProductsBatchPostPutPatchDownload {}

export interface WcV2ProductsBatchPostPutPatchDimension {}

export interface WcV2ProductsBatchPostPutPatchCategory {}

export interface WcV2ProductsBatchPostPutPatchTag {}

export interface WcV2ProductsBatchPostPutPatchImage {}

export interface WcV2ProductsBatchPostPutPatchAttribute {}

export interface WcV2ProductsBatchPostPutPatchDefaultAttribute {}

export interface WcV2ProductsBatchPostPutPatchMetaDatum {}

export interface WcV2ProductsBatchPostPutPatchArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV2ProductsBatchPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV2ProductsBatchPostPutPatchTag[];
  /** List of images. */
  images?: WcV2ProductsBatchPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV2ProductsBatchPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsBatchPostPutPatchDefaultAttribute[];
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsBatchPostPutPatchMetaDatum[];
}

export interface WcV2ProductsPProductIdDVariationsGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit result set to products in stock or out of stock. */
  in_stock?: boolean;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV2ProductsPProductIdDVariationsPostDownload {}

export interface WcV2ProductsPProductIdDVariationsPostDimension {}

export interface WcV2ProductsPProductIdDVariationsPostImage {}

export interface WcV2ProductsPProductIdDVariationsPostAttribute {}

export interface WcV2ProductsPProductIdDVariationsPostMetaDatum {}

export interface WcV2ProductsPProductIdDVariationsPostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsPostImage;
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsPostAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsPostMetaDatum[];
}

export interface WcV2ProductsPProductIdDVariationsPIdDGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchDownload {}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchDimension {}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchImage {}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchAttribute {}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum {}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum[];
}

export interface WcV2ProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchDownload {}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchDimension {}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchImage {}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchAttribute {}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchMetaDatum {}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchMetaDatum[];
}

export interface WcV2ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV2ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV2ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2SettingsGetArgs {}

export interface WcV2SettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV2SettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV2SettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2SettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2ShippingZonesGetArgs {}

export interface WcV2ShippingZonesPostArgs {
  /** Shipping zone name. */
  name: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV2ShippingZonesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV2ShippingZonesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone name. */
  name?: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV2ShippingZonesPIdDDeleteArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2ShippingZonesPIdDLocationsGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV2ShippingZonesPIdDLocationsPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone location code. */
  code?: string;
  /** Shipping zone location type. */
  type?: 'postcode' | 'state' | 'country' | 'continent';
}

export interface WcV2ShippingZonesPZoneIdDMethodsGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPostSetting {}

export interface WcV2ShippingZonesPZoneIdDMethodsPostArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method settings. */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPostSetting;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchSetting {}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method settings. */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchSetting;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV2TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV2TaxesClassesPSlugWWSGetArgs {
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV2TaxesClassesPSlugWWSDeleteArgs {
  /** Unique slug for the resource. */
  slug?: string;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2TaxesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'order' | 'priority';
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV2TaxesPostArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV2TaxesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2TaxesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV2TaxesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2TaxesBatchPostPutPatchArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode / ZIP. */
  postcode?: string;
  /** City name. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV2WebhooksGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'title';
  /** Limit result set to webhooks assigned a specific status. */
  status?: 'all' | 'active' | 'paused' | 'disabled';
}

export interface WcV2WebhooksPostArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook delivery URL. */
  delivery_url: string;
}

export interface WcV2WebhooksPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2WebhooksPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV2WebhooksPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV2WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV2WebhooksPWebhookIdDDeliveriesGetArgs {
  /** Unique identifier for the webhook. */
  webhook_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2WebhooksPWebhookIdDDeliveriesPIdDGetArgs {
  /** Unique identifier for the webhook. */
  webhook_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2SystemStatusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2SystemStatusToolsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2SystemStatusToolsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2SystemStatusToolsPIdWPostPutPatchArgs {
  /** A unique identifier for the tool. */
  id?: string;
  /** Tool name. */
  name?: string;
  /** What running the tool will do. */
  action?: string;
  /** Tool description. */
  description?: string;
  /** Did the tool run successfully? */
  success?: boolean;
  /** Tool return message. */
  message?: string;
}

export interface WcV2ShippingMethodsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2ShippingMethodsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2PaymentGatewaysGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2PaymentGatewaysPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2PaymentGatewaysPIdWPostPutPatchSetting {}

export interface WcV2PaymentGatewaysPIdWPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Payment gateway title on checkout. */
  title?: string;
  /** Payment gateway description on checkout. */
  description?: string;
  /** Payment gateway sort order. */
  order?: number;
  /** Payment gateway enabled status. */
  enabled?: boolean;
  /** Payment gateway settings. */
  settings?: WcV2PaymentGatewaysPIdWPostPutPatchSetting;
}

export interface WcV3GetArgs {}

export interface WcV3CouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to resources with a specific code. */
  code?: string;
}

export interface WcV3CouponsPostMetaDatum {}

export interface WcV3CouponsPostArgs {
  /** Coupon code. */
  code: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV3CouponsPostMetaDatum[];
}

export interface WcV3CouponsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3CouponsPIdDPostPutPatchMetaDatum {}

export interface WcV3CouponsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV3CouponsPIdDPostPutPatchMetaDatum[];
}

export interface WcV3CouponsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3CouponsBatchPostPutPatchMetaDatum {}

export interface WcV3CouponsBatchPostPutPatchArgs {
  /** Coupon code. */
  code?: string;
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** Coupon description. */
  description?: string;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** Meta data. */
  meta_data?: WcV3CouponsBatchPostPutPatchMetaDatum[];
}

export interface WcV3CustomersPCustomerIdDDownloadsGetArgs {
  /** Unique identifier for the resource. */
  customer_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3CustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  /** Limit result set to resources with a specific email. */
  email?: string;
  /** Limit result set to resources with a specific role. */
  role?:
    | 'all'
    | 'administrator'
    | 'editor'
    | 'author'
    | 'contributor'
    | 'subscriber'
    | 'customer'
    | 'shop_manager';
}

export interface WcV3CustomersPostBilling {}

export interface WcV3CustomersPostShipping {}

export interface WcV3CustomersPostMetaDatum {}

export interface WcV3CustomersPostArgs {
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** New user username. */
  username?: string;
  /** New user password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV3CustomersPostBilling;
  /** List of shipping address data. */
  shipping?: WcV3CustomersPostShipping;
  /** Meta data. */
  meta_data?: WcV3CustomersPostMetaDatum[];
}

export interface WcV3CustomersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3CustomersPIdDPostPutPatchBilling {}

export interface WcV3CustomersPIdDPostPutPatchShipping {}

export interface WcV3CustomersPIdDPostPutPatchMetaDatum {}

export interface WcV3CustomersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV3CustomersPIdDPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV3CustomersPIdDPostPutPatchShipping;
  /** Meta data. */
  meta_data?: WcV3CustomersPIdDPostPutPatchMetaDatum[];
}

export interface WcV3CustomersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV3CustomersBatchPostPutPatchBilling {}

export interface WcV3CustomersBatchPostPutPatchShipping {}

export interface WcV3CustomersBatchPostPutPatchMetaDatum {}

export interface WcV3CustomersBatchPostPutPatchArgs {
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer login name. */
  username?: string;
  /** Customer password. */
  password?: string;
  /** List of billing address data. */
  billing?: WcV3CustomersBatchPostPutPatchBilling;
  /** List of shipping address data. */
  shipping?: WcV3CustomersBatchPostPutPatchShipping;
  /** Meta data. */
  meta_data?: WcV3CustomersBatchPostPutPatchMetaDatum[];
}

export interface WcV3OrdersPOrderIdDNotesGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result to customers or internal notes. */
  type?: 'any' | 'customer' | 'internal';
}

export interface WcV3OrdersPOrderIdDNotesPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Order note content. */
  note: string;
  /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
  customer_note?: boolean;
  /** If true, this note will be attributed to the current user. If false, the note will be attributed to the system. */
  added_by_user?: boolean;
}

export interface WcV3OrdersPOrderIdDNotesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3OrdersPOrderIdDRefundsGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV3OrdersPOrderIdDRefundsPostMetaDatum {}

export interface WcV3OrdersPOrderIdDRefundsPostArgs {
  /** The order ID. */
  order_id?: number;
  /** Refund amount. */
  amount?: string;
  /** Reason for refund. */
  reason?: string;
  /** User ID of user who created the refund. */
  refunded_by?: number;
  /** Meta data. */
  meta_data?: WcV3OrdersPOrderIdDRefundsPostMetaDatum[];
  /** When true, the payment gateway API is used to generate the refund. */
  api_refund?: boolean;
  /** When true, refunded items are restocked. */
  api_restock?: boolean;
}

export interface WcV3OrdersPOrderIdDRefundsPIdDGetArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** The order ID. */
  order_id?: number;
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3OrdersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to orders which have specific statuses. */
  status?: number[];
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
}

export interface WcV3OrdersPostBilling {}

export interface WcV3OrdersPostShipping {}

export interface WcV3OrdersPostMetaDatum {}

export interface WcV3OrdersPostLineItem {}

export interface WcV3OrdersPostShippingLine {}

export interface WcV3OrdersPostFeeLine {}

export interface WcV3OrdersPostCouponLine {}

export interface WcV3OrdersPostArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV3OrdersPostBilling;
  /** Shipping address. */
  shipping?: WcV3OrdersPostShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV3OrdersPostMetaDatum[];
  /** Line items data. */
  line_items?: WcV3OrdersPostLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersPostShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV3OrdersPostFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersPostCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV3OrdersPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3OrdersPIdDPostPutPatchBilling {}

export interface WcV3OrdersPIdDPostPutPatchShipping {}

export interface WcV3OrdersPIdDPostPutPatchMetaDatum {}

export interface WcV3OrdersPIdDPostPutPatchLineItem {}

export interface WcV3OrdersPIdDPostPutPatchShippingLine {}

export interface WcV3OrdersPIdDPostPutPatchFeeLine {}

export interface WcV3OrdersPIdDPostPutPatchCouponLine {}

export interface WcV3OrdersPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV3OrdersPIdDPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV3OrdersPIdDPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV3OrdersPIdDPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcV3OrdersPIdDPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersPIdDPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV3OrdersPIdDPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersPIdDPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV3OrdersPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3OrdersBatchPostPutPatchBilling {}

export interface WcV3OrdersBatchPostPutPatchShipping {}

export interface WcV3OrdersBatchPostPutPatchMetaDatum {}

export interface WcV3OrdersBatchPostPutPatchLineItem {}

export interface WcV3OrdersBatchPostPutPatchShippingLine {}

export interface WcV3OrdersBatchPostPutPatchFeeLine {}

export interface WcV3OrdersBatchPostPutPatchCouponLine {}

export interface WcV3OrdersBatchPostPutPatchArgs {
  /** Parent order ID. */
  parent_id?: number;
  /** Order status. */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /** Currency the order was created with, in ISO format. */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Billing address. */
  billing?: WcV3OrdersBatchPostPutPatchBilling;
  /** Shipping address. */
  shipping?: WcV3OrdersBatchPostPutPatchShipping;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Unique transaction ID. */
  transaction_id?: string;
  /** Meta data. */
  meta_data?: WcV3OrdersBatchPostPutPatchMetaDatum[];
  /** Line items data. */
  line_items?: WcV3OrdersBatchPostPutPatchLineItem[];
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersBatchPostPutPatchShippingLine[];
  /** Fee lines data. */
  fee_lines?: WcV3OrdersBatchPostPutPatchFeeLine[];
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersBatchPostPutPatchCouponLine[];
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPostArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsAttributesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV3ProductsAttributesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsAttributesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV3ProductsAttributesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3ProductsAttributesBatchPostPutPatchArgs {
  /** Attribute name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
}

export interface WcV3ProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsCategoriesPostImage {}

export interface WcV3ProductsCategoriesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV3ProductsCategoriesPostImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsCategoriesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsCategoriesPIdDPostPutPatchImage {}

export interface WcV3ProductsCategoriesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV3ProductsCategoriesPIdDPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsCategoriesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3ProductsCategoriesBatchPostPutPatchImage {}

export interface WcV3ProductsCategoriesBatchPostPutPatchArgs {
  /** Category name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV3ProductsCategoriesBatchPostPutPatchImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
}

export interface WcV3ProductsReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to reviews published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
  /** Limit result set to reviews assigned to specific user IDs. */
  reviewer?: number[];
  /** Ensure result set excludes reviews assigned to specific user IDs. */
  reviewer_exclude?: number[];
  /** Limit result set to that from a specific author email. */
  reviewer_email?: string;
  /** Limit result set to reviews assigned to specific product IDs. */
  product?: number[];
  /** Limit result set to reviews assigned a specific status. */
  status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
}

export interface WcV3ProductsReviewsPostArgs {
  /** Unique identifier for the product. */
  product_id: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Name of the reviewer. */
  reviewer: string;
  /** Email of the reviewer. */
  reviewer_email: string;
  /** Review content. */
  review: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcV3ProductsReviewsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsReviewsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcV3ProductsReviewsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3ProductsReviewsBatchPostPutPatchArgs {
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** The content of the review. */
  review?: string;
  /** Review rating (0 to 5). */
  rating?: number;
}

export interface WcV3ProductsShippingClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsShippingClassesPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsShippingClassesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsShippingClassesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsShippingClassesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3ProductsShippingClassesBatchPostPutPatchArgs {
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsTagsPostArgs {
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsTagsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsTagsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsTagsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3ProductsTagsBatchPostPutPatchArgs {
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** HTML description of the resource. */
  description?: string;
}

export interface WcV3ProductsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating'
    | 'menu_order'
    | 'price'
    | 'popularity'
    | 'rating';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Limit results to those with a SKU that partial matches a string. */
  search_sku?: string;
}

export interface WcV3ProductsPostDownload {}

export interface WcV3ProductsPostDimension {}

export interface WcV3ProductsPostCategory {}

export interface WcV3ProductsPostTag {}

export interface WcV3ProductsPostImage {}

export interface WcV3ProductsPostAttribute {}

export interface WcV3ProductsPostDefaultAttribute {}

export interface WcV3ProductsPostMetaDatum {}

export interface WcV3ProductsPostArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV3ProductsPostCategory[];
  /** List of tags. */
  tags?: WcV3ProductsPostTag[];
  /** List of images. */
  images?: WcV3ProductsPostImage[];
  /** List of attributes. */
  attributes?: WcV3ProductsPostAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsPostDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPostMetaDatum[];
}

export interface WcV3ProductsPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsPIdDPostPutPatchDownload {}

export interface WcV3ProductsPIdDPostPutPatchDimension {}

export interface WcV3ProductsPIdDPostPutPatchCategory {}

export interface WcV3ProductsPIdDPostPutPatchTag {}

export interface WcV3ProductsPIdDPostPutPatchImage {}

export interface WcV3ProductsPIdDPostPutPatchAttribute {}

export interface WcV3ProductsPIdDPostPutPatchDefaultAttribute {}

export interface WcV3ProductsPIdDPostPutPatchMetaDatum {}

export interface WcV3ProductsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV3ProductsPIdDPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV3ProductsPIdDPostPutPatchTag[];
  /** List of images. */
  images?: WcV3ProductsPIdDPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV3ProductsPIdDPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsPIdDPostPutPatchDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPIdDPostPutPatchMetaDatum[];
}

export interface WcV3ProductsPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3ProductsBatchPostPutPatchDownload {}

export interface WcV3ProductsBatchPostPutPatchDimension {}

export interface WcV3ProductsBatchPostPutPatchCategory {}

export interface WcV3ProductsBatchPostPutPatchTag {}

export interface WcV3ProductsBatchPostPutPatchImage {}

export interface WcV3ProductsBatchPostPutPatchAttribute {}

export interface WcV3ProductsBatchPostPutPatchDefaultAttribute {}

export interface WcV3ProductsBatchPostPutPatchMetaDatum {}

export interface WcV3ProductsBatchPostPutPatchArgs {
  /** Product name. */
  name?: string;
  /** Product slug. */
  slug?: string;
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** Product status (post status). */
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Featured product. */
  featured?: boolean;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** Product description. */
  description?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Product sale price. */
  sale_price?: string;
  /** If the product is virtual. */
  virtual?: boolean;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product weight (lbs). */
  weight?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** List of categories. */
  categories?: WcV3ProductsBatchPostPutPatchCategory[];
  /** List of tags. */
  tags?: WcV3ProductsBatchPostPutPatchTag[];
  /** List of images. */
  images?: WcV3ProductsBatchPostPutPatchImage[];
  /** List of attributes. */
  attributes?: WcV3ProductsBatchPostPutPatchAttribute[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsBatchPostPutPatchDefaultAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsBatchPostPutPatchMetaDatum[];
}

export interface WcV3ProductsPProductIdDVariationsGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcV3ProductsPProductIdDVariationsPostDownload {}

export interface WcV3ProductsPProductIdDVariationsPostDimension {}

export interface WcV3ProductsPProductIdDVariationsPostImage {}

export interface WcV3ProductsPProductIdDVariationsPostAttribute {}

export interface WcV3ProductsPProductIdDVariationsPostMetaDatum {}

export interface WcV3ProductsPProductIdDVariationsPostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsPostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsPostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsPostImage;
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsPostAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsPostMetaDatum[];
}

export interface WcV3ProductsPProductIdDVariationsPIdDGetArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchDownload {}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchDimension {}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchImage {}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchAttribute {}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum {}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchMetaDatum[];
}

export interface WcV3ProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Unique identifier for the variation. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchDownload {}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchDimension {}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchImage {}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchAttribute {}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchMetaDatum {}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchImage;
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchMetaDatum[];
}

export interface WcV3ProductsPProductIdDVariationsGeneratePostDownload {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostDimension {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostImage {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostAttribute {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostMetaDatum {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgs {
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation description. */
  description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsGeneratePostDownload[];
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Tax class. */
  tax_class?: string;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation weight (lbs). */
  weight?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsGeneratePostDimension;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsGeneratePostImage;
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsGeneratePostAttribute[];
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsGeneratePostMetaDatum[];
}

export interface WcV3ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV3ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
}

export interface WcV3ReportsOrdersTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsProductsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsCustomersTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsCouponsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsReviewsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3SettingsGetArgs {}

export interface WcV3SettingsBatchPostPutPatchArgs {}

export interface WcV3SettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV3SettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV3SettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3SettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3ShippingZonesGetArgs {}

export interface WcV3ShippingZonesPostArgs {
  /** Shipping zone name. */
  name: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV3ShippingZonesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV3ShippingZonesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone name. */
  name?: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV3ShippingZonesPIdDDeleteArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3ShippingZonesPIdDLocationsGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV3ShippingZonesPIdDLocationsPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone location code. */
  code?: string;
  /** Shipping zone location type. */
  type?: 'postcode' | 'state' | 'country' | 'continent';
}

export interface WcV3ShippingZonesPZoneIdDMethodsGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPostSetting {}

export interface WcV3ShippingZonesPZoneIdDMethodsPostArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method settings. */
  settings?: WcV3ShippingZonesPZoneIdDMethodsPostSetting;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchSetting {}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method settings. */
  settings?: WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchSetting;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
}

export interface WcV3TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV3TaxesClassesPSlugWWSGetArgs {
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV3TaxesClassesPSlugWWSDeleteArgs {
  /** Unique slug for the resource. */
  slug?: string;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3TaxesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'order' | 'priority';
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
}

export interface WcV3TaxesPostArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcV3TaxesPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3TaxesPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcV3TaxesPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3TaxesBatchPostPutPatchArgs {
  /** Country ISO 3166 code. */
  country?: string;
  /** State code. */
  state?: string;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax rate. */
  rate?: string;
  /** Tax rate name. */
  name?: string;
  /** Tax priority. */
  priority?: number;
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
}

export interface WcV3WebhooksGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'title';
  /** Limit result set to webhooks assigned a specific status. */
  status?: 'all' | 'active' | 'paused' | 'disabled';
}

export interface WcV3WebhooksPostArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook delivery URL. */
  delivery_url: string;
}

export interface WcV3WebhooksPIdDGetArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3WebhooksPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV3WebhooksPIdDDeleteArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
}

export interface WcV3WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
}

export interface WcV3SystemStatusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3SystemStatusToolsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3SystemStatusToolsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3SystemStatusToolsPIdWPostPutPatchArgs {
  /** A unique identifier for the tool. */
  id?: string;
  /** Tool name. */
  name?: string;
  /** What running the tool will do. */
  action?: string;
  /** Tool description. */
  description?: string;
  /** Did the tool run successfully? */
  success?: boolean;
  /** Tool return message. */
  message?: string;
}

export interface WcV3ShippingMethodsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ShippingMethodsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3PaymentGatewaysGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3PaymentGatewaysPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3PaymentGatewaysPIdWPostPutPatchSetting {}

export interface WcV3PaymentGatewaysPIdWPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: string;
  /** Payment gateway title on checkout. */
  title?: string;
  /** Payment gateway description on checkout. */
  description?: string;
  /** Payment gateway sort order. */
  order?: number;
  /** Payment gateway enabled status. */
  enabled?: boolean;
  /** Payment gateway settings. */
  settings?: WcV3PaymentGatewaysPIdWPostPutPatchSetting;
}

export interface WcV3DataGetArgs {}

export interface WcV3DataContinentsGetArgs {}

export interface WcV3DataContinentsPLocationWGetArgs {
  /** 2 character continent code. */
  continent?: string;
}

export interface WcV3DataCountriesGetArgs {}

export interface WcV3DataCountriesPLocationWGetArgs {
  /** ISO3166 alpha-2 country code. */
  location?: string;
}

export interface WcV3DataCurrenciesGetArgs {}

export interface WcV3DataCurrenciesCurrentGetArgs {}

export interface WcV3DataCurrenciesPCurrencyW3GetArgs {
  /** ISO4217 currency code. */
  location?: string;
}

export interface WcTelemetryGetArgs {}

export interface WcTelemetryTrackerPostArgs {
  /** Platform to track. */
  platform: string;
  /** Platform version to track. */
  version: string;
}

export interface WccomSiteV1GetArgs {}

export interface WccomSiteV1InstallerGetArgs {}

export interface WccomSiteV1InstallerPostProduct {}

export interface WccomSiteV1InstallerPostArgs {
  products: WccomSiteV1InstallerPostProduct;
}

export interface WccomSiteV1InstallerDeleteArgs {}

export interface WccomSiteV1SsrGetArgs {}

export interface WccomSiteV2GetArgs {}

export interface WccomSiteV2InstallerPostPutPatchArgs {
  'product-id': number;
  'run-until-step':
    | 'get_product_info'
    | 'download_product'
    | 'unpack_product'
    | 'move_product'
    | 'activate_product';
  'idempotency-key': string;
}

export interface WccomSiteV2InstallerDeleteArgs {
  'product-id': number;
  'idempotency-key': string;
}

export interface MailpoetV1GetArgs {}

export interface MailpoetV1AutomationsGetArgs {
  status?: number[];
}

export interface MailpoetV1AutomationsPIdDPutStep {}

export interface MailpoetV1AutomationsPIdDPutMetum {}

export interface MailpoetV1AutomationsPIdDPutArgs {
  id: number;
  name?: string;
  status?: string;
  steps?: MailpoetV1AutomationsPIdDPutStep;
  meta?: MailpoetV1AutomationsPIdDPutMetum;
}

export interface MailpoetV1AutomationsPIdDDeleteArgs {
  id: number;
}

export interface MailpoetV1AutomationsPIdDDuplicatePostArgs {
  id: number;
}

export interface MailpoetV1AutomationsCreateFromTemplatePostArgs {
  slug: string;
}

export interface MailpoetV1AutomationTemplatesGetArgs {
  category?: string;
}

export interface MailpoetV1AutomationAnalyticsOverviewGetQuery {}

export interface MailpoetV1AutomationAnalyticsOverviewGetArgs {
  id: number;
  query?: MailpoetV1AutomationAnalyticsOverviewGetQuery;
}

export interface WpV2GetArgs {}

export interface WpV2PostsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
  /** Limit result set to items that are sticky. */
  sticky?: boolean;
}

export interface WpV2PostsPostTitle {}

export interface WpV2PostsPostContent {}

export interface WpV2PostsPostExcerpt {}

export interface WpV2PostsPostMetum {}

export interface WpV2PostsPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2PostsPostTitle;
  /** The content for the post. */
  content?: WpV2PostsPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: WpV2PostsPostMetum;
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
}

export interface WpV2PostsPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2PostsPIdDPostPutPatchTitle {}

export interface WpV2PostsPIdDPostPutPatchContent {}

export interface WpV2PostsPIdDPostPutPatchExcerpt {}

export interface WpV2PostsPIdDPostPutPatchMetum {}

export interface WpV2PostsPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2PostsPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2PostsPIdDPostPutPatchContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPIdDPostPutPatchExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: WpV2PostsPIdDPostPutPatchMetum;
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
}

export interface WpV2PostsPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2PostsPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2PostsPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2PostsPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2PostsPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2PostsPIdDAutosavesPostTitle {}

export interface WpV2PostsPIdDAutosavesPostContent {}

export interface WpV2PostsPIdDAutosavesPostExcerpt {}

export interface WpV2PostsPIdDAutosavesPostMetum {}

export interface WpV2PostsPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2PostsPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2PostsPIdDAutosavesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPIdDAutosavesPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: WpV2PostsPIdDAutosavesPostMetum;
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
}

export interface WpV2PostsPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2PagesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order'
    | 'rand'
    | 'menu_order';
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2PagesPostTitle {}

export interface WpV2PagesPostContent {}

export interface WpV2PagesPostExcerpt {}

export interface WpV2PagesPostMetum {}

export interface WpV2PagesPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The ID for the parent of the post. */
  parent?: number;
  /** The title for the post. */
  title?: WpV2PagesPostTitle;
  /** The content for the post. */
  content?: WpV2PagesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2PagesPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2PagesPIdDPostPutPatchTitle {}

export interface WpV2PagesPIdDPostPutPatchContent {}

export interface WpV2PagesPIdDPostPutPatchExcerpt {}

export interface WpV2PagesPIdDPostPutPatchMetum {}

export interface WpV2PagesPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The ID for the parent of the post. */
  parent?: number;
  /** The title for the post. */
  title?: WpV2PagesPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2PagesPIdDPostPutPatchContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPIdDPostPutPatchExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2PagesPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2PagesPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2PagesPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2PagesPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2PagesPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2PagesPIdDAutosavesPostTitle {}

export interface WpV2PagesPIdDAutosavesPostContent {}

export interface WpV2PagesPIdDAutosavesPostExcerpt {}

export interface WpV2PagesPIdDAutosavesPostMetum {}

export interface WpV2PagesPIdDAutosavesPostArgs {
  /** The ID for the parent of the post. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2PagesPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2PagesPIdDAutosavesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPIdDAutosavesPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPIdDAutosavesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2PagesPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MediaGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set to attachments of a particular media type. */
  media_type?: 'image' | 'video' | 'text' | 'application' | 'audio' | 'font';
  /** Limit result set to attachments of a particular MIME type. */
  mime_type?: string;
}

export interface WpV2MediaPostTitle {}

export interface WpV2MediaPostMetum {}

export interface WpV2MediaPostCaption {}

export interface WpV2MediaPostDescription {}

export interface WpV2MediaPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The title for the post. */
  title?: WpV2MediaPostTitle;
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** Meta fields. */
  meta?: WpV2MediaPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: WpV2MediaPostCaption;
  /** The attachment description. */
  description?: WpV2MediaPostDescription;
  /** The ID for the associated post of the attachment. */
  post?: number;
}

export interface WpV2MediaPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MediaPIdDPostPutPatchTitle {}

export interface WpV2MediaPIdDPostPutPatchMetum {}

export interface WpV2MediaPIdDPostPutPatchCaption {}

export interface WpV2MediaPIdDPostPutPatchDescription {}

export interface WpV2MediaPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The title for the post. */
  title?: WpV2MediaPIdDPostPutPatchTitle;
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** Meta fields. */
  meta?: WpV2MediaPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The attachment caption. */
  caption?: WpV2MediaPIdDPostPutPatchCaption;
  /** The attachment description. */
  description?: WpV2MediaPIdDPostPutPatchDescription;
  /** The ID for the associated post of the attachment. */
  post?: number;
}

export interface WpV2MediaPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2MediaPIdDPostProcessPostArgs {
  /** Unique identifier for the attachment. */
  id?: number;
  action: 'create-image-subsizes';
}

export interface WpV2MediaPIdDEditPostModifier {}

export interface WpV2MediaPIdDEditPostArgs {
  /** URL to the edited image file. */
  src: string;
  /** Array of image edits. */
  modifiers?: WpV2MediaPIdDEditPostModifier[];
  /** The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead. */
  rotation?: number;
  /** As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  x?: number;
  /** As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  y?: number;
  /** As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead. */
  width?: number;
  /** As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead. */
  height?: number;
}

export interface WpV2MenuItemsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
}

export interface WpV2MenuItemsPostMetum {}

export interface WpV2MenuItemsPostArgs {
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the parent of the object. */
  parent?: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPostMetum;
}

export interface WpV2MenuItemsPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MenuItemsPIdDPostPutPatchMetum {}

export interface WpV2MenuItemsPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the parent of the object. */
  parent?: number;
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPIdDPostPutPatchMetum;
}

export interface WpV2MenuItemsPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2MenuItemsPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MenuItemsPIdDAutosavesPostMetum {}

export interface WpV2MenuItemsPIdDAutosavesPostArgs {
  /** The ID for the parent of the object. */
  parent?: number;
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPIdDAutosavesPostMetum;
}

export interface WpV2MenuItemsPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2BlocksGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2BlocksPostTitle {}

export interface WpV2BlocksPostContent {}

export interface WpV2BlocksPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2BlocksPostTitle;
  /** The content for the post. */
  content?: WpV2BlocksPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2BlocksPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2BlocksPIdDPostPutPatchTitle {}

export interface WpV2BlocksPIdDPostPutPatchContent {}

export interface WpV2BlocksPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2BlocksPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2BlocksPIdDPostPutPatchContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2BlocksPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2BlocksPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2BlocksPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2BlocksPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2BlocksPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2BlocksPIdDAutosavesPostTitle {}

export interface WpV2BlocksPIdDAutosavesPostContent {}

export interface WpV2BlocksPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2BlocksPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2BlocksPIdDAutosavesPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2BlocksPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit to the specified post id. */
  wp_id?: number;
  /** Limit to the specified template part area. */
  area?: string;
  /** Post type to get the templates for. */
  post_type?: string;
}

export interface WpV2TemplatesPostArgs {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
}

export interface WpV2TemplatesLookupGetArgs {
  /** The slug of the template to get the fallback for */
  slug: string;
  /** Indicates if a template is custom or part of the template hierarchy */
  is_custom?: boolean;
  /** The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy` */
  template_prefix?: string;
}

export interface WpV2TemplatesPIdWGetArgs {
  /** The id of a template */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatesPIdWPostPutPatchArgs {
  /** The id of a template */
  id?: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
}

export interface WpV2TemplatesPIdWDeleteArgs {
  /** The id of a template */
  id?: string;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2TemplatesPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2TemplatesPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatesPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2TemplatesPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatesPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
}

export interface WpV2TemplatesPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatePartsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit to the specified post id. */
  wp_id?: number;
  /** Limit to the specified template part area. */
  area?: string;
  /** Post type to get the templates for. */
  post_type?: string;
}

export interface WpV2TemplatePartsPostArgs {
  /** Unique slug identifying the template. */
  slug: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
}

export interface WpV2TemplatePartsLookupGetArgs {
  /** The slug of the template to get the fallback for */
  slug: string;
  /** Indicates if a template is custom or part of the template hierarchy */
  is_custom?: boolean;
  /** The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy` */
  template_prefix?: string;
}

export interface WpV2TemplatePartsPIdWGetArgs {
  /** The id of a template */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatePartsPIdWPostPutPatchArgs {
  /** The id of a template */
  id?: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
}

export interface WpV2TemplatePartsPIdWDeleteArgs {
  /** The id of a template */
  id?: string;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2TemplatePartsPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2TemplatePartsPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatePartsPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2TemplatePartsPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TemplatePartsPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Description of template. */
  description?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The ID for the author of the template. */
  author?: number;
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
}

export interface WpV2TemplatePartsPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2NavigationGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2NavigationPostTitle {}

export interface WpV2NavigationPostContent {}

export interface WpV2NavigationPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2NavigationPostTitle;
  /** The content for the post. */
  content?: WpV2NavigationPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2NavigationPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2NavigationPIdDPostPutPatchTitle {}

export interface WpV2NavigationPIdDPostPutPatchContent {}

export interface WpV2NavigationPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2NavigationPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2NavigationPIdDPostPutPatchContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2NavigationPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2NavigationPParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2NavigationPParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2NavigationPParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2NavigationPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2NavigationPIdDAutosavesPostTitle {}

export interface WpV2NavigationPIdDAutosavesPostContent {}

export interface WpV2NavigationPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2NavigationPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2NavigationPIdDAutosavesPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2NavigationPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2ProductGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
}

export interface WpV2ProductPostTitle {}

export interface WpV2ProductPostContent {}

export interface WpV2ProductPostExcerpt {}

export interface WpV2ProductPostMetum {}

export interface WpV2ProductPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2ProductPostTitle;
  /** The content for the post. */
  content?: WpV2ProductPostContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2ProductPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
}

export interface WpV2ProductPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2ProductPIdDPostPutPatchTitle {}

export interface WpV2ProductPIdDPostPutPatchContent {}

export interface WpV2ProductPIdDPostPutPatchExcerpt {}

export interface WpV2ProductPIdDPostPutPatchMetum {}

export interface WpV2ProductPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2ProductPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2ProductPIdDPostPutPatchContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPIdDPostPutPatchExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2ProductPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
}

export interface WpV2ProductPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2ProductPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2ProductPIdDAutosavesPostTitle {}

export interface WpV2ProductPIdDAutosavesPostContent {}

export interface WpV2ProductPIdDAutosavesPostExcerpt {}

export interface WpV2ProductPIdDAutosavesPostMetum {}

export interface WpV2ProductPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2ProductPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2ProductPIdDAutosavesPostContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPIdDAutosavesPostExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2ProductPIdDAutosavesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
}

export interface WpV2ProductPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2FeedbackGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2FeedbackPostTitle {}

export interface WpV2FeedbackPostContent {}

export interface WpV2FeedbackPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPostTitle;
  /** The content for the post. */
  content?: WpV2FeedbackPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2FeedbackPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2FeedbackPIdDPostPutPatchTitle {}

export interface WpV2FeedbackPIdDPostPutPatchContent {}

export interface WpV2FeedbackPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2FeedbackPIdDPostPutPatchContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2FeedbackPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2FeedbackPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2FeedbackPIdDAutosavesPostTitle {}

export interface WpV2FeedbackPIdDAutosavesPostContent {}

export interface WpV2FeedbackPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2FeedbackPIdDAutosavesPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2FeedbackPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2KadenceLottieGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2KadenceLottiePostTitle {}

export interface WpV2KadenceLottiePostContent {}

export interface WpV2KadenceLottiePostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePostTitle;
  /** The content for the post. */
  content?: WpV2KadenceLottiePostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2KadenceLottiePIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2KadenceLottiePIdDPostPutPatchTitle {}

export interface WpV2KadenceLottiePIdDPostPutPatchContent {}

export interface WpV2KadenceLottiePIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2KadenceLottiePIdDPostPutPatchContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2KadenceLottiePIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2KadenceLottiePParentDRevisionsGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
}

export interface WpV2KadenceLottiePParentDRevisionsPIdDGetArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2KadenceLottiePParentDRevisionsPIdDDeleteArgs {
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Unique identifier for the revision. */
  id?: number;
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
}

export interface WpV2KadenceLottiePIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2KadenceLottiePIdDAutosavesPostTitle {}

export interface WpV2KadenceLottiePIdDAutosavesPostContent {}

export interface WpV2KadenceLottiePIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2KadenceLottiePIdDAutosavesPostContent;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2KadenceLottiePParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2SpectraPopupGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2SpectraPopupPostTitle {}

export interface WpV2SpectraPopupPostContent {}

export interface WpV2SpectraPopupPostMetum {}

export interface WpV2SpectraPopupPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPostTitle;
  /** The content for the post. */
  content?: WpV2SpectraPopupPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2SpectraPopupPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2SpectraPopupPIdDPostPutPatchTitle {}

export interface WpV2SpectraPopupPIdDPostPutPatchContent {}

export interface WpV2SpectraPopupPIdDPostPutPatchMetum {}

export interface WpV2SpectraPopupPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2SpectraPopupPIdDPostPutPatchContent;
  /** The ID for the author of the post. */
  author?: number;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2SpectraPopupPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2SpectraPopupPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2SpectraPopupPIdDAutosavesPostTitle {}

export interface WpV2SpectraPopupPIdDAutosavesPostContent {}

export interface WpV2SpectraPopupPIdDAutosavesPostMetum {}

export interface WpV2SpectraPopupPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2SpectraPopupPIdDAutosavesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPIdDAutosavesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2SpectraPopupPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2JpPayOrderGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2JpPayOrderPostExcerpt {}

export interface WpV2JpPayOrderPostMetum {}

export interface WpV2JpPayOrderPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPostExcerpt;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2JpPayOrderPIdDPostPutPatchExcerpt {}

export interface WpV2JpPayOrderPIdDPostPutPatchMetum {}

export interface WpV2JpPayOrderPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPIdDPostPutPatchExcerpt;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2JpPayOrderPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2JpPayOrderPIdDAutosavesPostExcerpt {}

export interface WpV2JpPayOrderPIdDAutosavesPostMetum {}

export interface WpV2JpPayOrderPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPIdDAutosavesPostExcerpt;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPIdDAutosavesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2JpPayProductGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2JpPayProductPostTitle {}

export interface WpV2JpPayProductPostContent {}

export interface WpV2JpPayProductPostMetum {}

export interface WpV2JpPayProductPostArgs {
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPostTitle;
  /** The content for the post. */
  content?: WpV2JpPayProductPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayProductPIdDGetArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2JpPayProductPIdDPostPutPatchTitle {}

export interface WpV2JpPayProductPIdDPostPutPatchContent {}

export interface WpV2JpPayProductPIdDPostPutPatchMetum {}

export interface WpV2JpPayProductPIdDPostPutPatchArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPIdDPostPutPatchTitle;
  /** The content for the post. */
  content?: WpV2JpPayProductPIdDPostPutPatchContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPIdDPostPutPatchMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayProductPIdDDeleteArgs {
  /** Unique identifier for the post. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
}

export interface WpV2JpPayProductPIdDAutosavesGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2JpPayProductPIdDAutosavesPostTitle {}

export interface WpV2JpPayProductPIdDAutosavesPostContent {}

export interface WpV2JpPayProductPIdDAutosavesPostMetum {}

export interface WpV2JpPayProductPIdDAutosavesPostArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPIdDAutosavesPostTitle;
  /** The content for the post. */
  content?: WpV2JpPayProductPIdDAutosavesPostContent;
  /** The ID for the author of the post. */
  author?: number;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPIdDAutosavesPostMetum;
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayProductPParentDAutosavesPIdDGetArgs {
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** The ID for the autosave. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TypesPTypeWGetArgs {
  /** An alphanumeric identifier for the post type. */
  type?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2StatusesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2StatusesPStatusWGetArgs {
  /** An alphanumeric identifier for the status. */
  status?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TaxonomiesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit results to taxonomies associated with a specific post type. */
  type?: string;
}

export interface WpV2TaxonomiesPTaxonomyWGetArgs {
  /** An alphanumeric identifier for the taxonomy. */
  taxonomy?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2CategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific parent. */
  parent?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2CategoriesPostMetum {}

export interface WpV2CategoriesPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: WpV2CategoriesPostMetum;
}

export interface WpV2CategoriesPIdDGetArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2CategoriesPIdDPostPutPatchMetum {}

export interface WpV2CategoriesPIdDPostPutPatchArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: WpV2CategoriesPIdDPostPutPatchMetum;
}

export interface WpV2CategoriesPIdDDeleteArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
}

export interface WpV2TagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2TagsPostMetum {}

export interface WpV2TagsPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2TagsPostMetum;
}

export interface WpV2TagsPIdDGetArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TagsPIdDPostPutPatchMetum {}

export interface WpV2TagsPIdDPostPutPatchArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2TagsPIdDPostPutPatchMetum;
}

export interface WpV2TagsPIdDDeleteArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
}

export interface WpV2MenusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2MenusPostMetum {}

export interface WpV2MenusPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2MenusPostMetum;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
}

export interface WpV2MenusPIdDGetArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MenusPIdDPostPutPatchMetum {}

export interface WpV2MenusPIdDPostPutPatchArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2MenusPIdDPostPutPatchMetum;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
}

export interface WpV2MenusPIdDDeleteArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
}

export interface WpV2ProductCatGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific parent. */
  parent?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2ProductCatPostMetum {}

export interface WpV2ProductCatPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: WpV2ProductCatPostMetum;
}

export interface WpV2ProductCatPIdDGetArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2ProductCatPIdDPostPutPatchMetum {}

export interface WpV2ProductCatPIdDPostPutPatchArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** The parent term ID. */
  parent?: number;
  /** Meta fields. */
  meta?: WpV2ProductCatPIdDPostPutPatchMetum;
}

export interface WpV2ProductCatPIdDDeleteArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
}

export interface WpV2ProductTagGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2ProductTagPostMetum {}

export interface WpV2ProductTagPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2ProductTagPostMetum;
}

export interface WpV2ProductTagPIdDGetArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2ProductTagPIdDPostPutPatchMetum {}

export interface WpV2ProductTagPIdDPostPutPatchArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** HTML description of the term. */
  description?: string;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Meta fields. */
  meta?: WpV2ProductTagPIdDPostPutPatchMetum;
}

export interface WpV2ProductTagPIdDDeleteArgs {
  /** Unique identifier for the term. */
  id?: number;
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
}

export interface WpV2UsersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by user attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'registered_date'
    | 'slug'
    | 'include_slugs'
    | 'email'
    | 'url';
  /** Limit result set to users with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to users matching at least one specific role provided. Accepts csv list or single role. */
  roles?: number[];
  /** Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability. */
  capabilities?: number[];
  /** Limit result set to users who are considered authors. */
  who?: 'authors';
}

export interface WpV2UsersPostMetum {}

export interface WpV2UsersPostArgs {
  /** Login name for the user. */
  username: string;
  /** Display name for the user. */
  name?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** The email address for the user. */
  email: string;
  /** URL of the user. */
  url?: string;
  /** Description of the user. */
  description?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** The nickname for the user. */
  nickname?: string;
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** Password for the user (never included). */
  password: string;
  /** Meta fields. */
  meta?: WpV2UsersPostMetum;
}

export interface WpV2UsersPIdDGetArgs {
  /** Unique identifier for the user. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPIdDPostPutPatchMetum {}

export interface WpV2UsersPIdDPostPutPatchArgs {
  /** Unique identifier for the user. */
  id?: number;
  /** Login name for the user. */
  username?: string;
  /** Display name for the user. */
  name?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** The email address for the user. */
  email?: string;
  /** URL of the user. */
  url?: string;
  /** Description of the user. */
  description?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** The nickname for the user. */
  nickname?: string;
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** Password for the user (never included). */
  password?: string;
  /** Meta fields. */
  meta?: WpV2UsersPIdDPostPutPatchMetum;
}

export interface WpV2UsersPIdDDeleteArgs {
  /** Unique identifier for the user. */
  id?: number;
  /** Required to be true, as users do not support trashing. */
  force?: boolean;
  /** Reassign the deleted user's posts and links to this user ID. */
  reassign: number;
}

export interface WpV2UsersMeGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersMePostPutPatchMetum {}

export interface WpV2UsersMePostPutPatchArgs {
  /** Login name for the user. */
  username?: string;
  /** Display name for the user. */
  name?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** The email address for the user. */
  email?: string;
  /** URL of the user. */
  url?: string;
  /** Description of the user. */
  description?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** The nickname for the user. */
  nickname?: string;
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** Password for the user (never included). */
  password?: string;
  /** Meta fields. */
  meta?: WpV2UsersMePostPutPatchMetum;
}

export interface WpV2UsersMeDeleteArgs {
  /** Required to be true, as users do not support trashing. */
  force?: boolean;
  /** Reassign the deleted user's posts and links to this user ID. */
  reassign: number;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPostArgs {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name: string;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsDeleteArgs {}

export interface WpV2UsersPUserIdDMeApplicationPasswordsIntrospectGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostPutPatchArgs {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name?: string;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWDeleteArgs {}

export interface WpV2CommentsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit response to comments published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
  author?: number[];
  /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
  author_exclude?: number[];
  /** Limit result set to that from a specific author email. Requires authorization. */
  author_email?: string;
  /** Limit response to comments published before a given ISO8601 compliant date. */
  before?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by comment attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
  /** Limit result set to comments of specific parent IDs. */
  parent?: number[];
  /** Ensure result set excludes specific parent IDs. */
  parent_exclude?: number[];
  /** Limit result set to comments assigned to specific post IDs. */
  post?: number[];
  /** Limit result set to comments assigned a specific status. Requires authorization. */
  status?: string;
  /** Limit result set to comments assigned a specific type. Requires authorization. */
  type?: string;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2CommentsPostContent {}

export interface WpV2CommentsPostMetum {}

export interface WpV2CommentsPostArgs {
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: WpV2CommentsPostContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Meta fields. */
  meta?: WpV2CommentsPostMetum;
}

export interface WpV2CommentsPIdDGetArgs {
  /** Unique identifier for the comment. */
  id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
}

export interface WpV2CommentsPIdDPostPutPatchContent {}

export interface WpV2CommentsPIdDPostPutPatchMetum {}

export interface WpV2CommentsPIdDPostPutPatchArgs {
  /** Unique identifier for the comment. */
  id?: number;
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: WpV2CommentsPIdDPostPutPatchContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Meta fields. */
  meta?: WpV2CommentsPIdDPostPutPatchMetum;
}

export interface WpV2CommentsPIdDDeleteArgs {
  /** Unique identifier for the comment. */
  id?: number;
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
}

export interface WpV2SearchGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to items of an object type. */
  type?: 'post' | 'term' | 'post-format';
  /** Limit results to items of one or more object subtypes. */
  subtype?: number[];
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
}

export interface WpV2BlockRendererPNameAZ09AZ09GetPostAttribute {}

export interface WpV2BlockRendererPNameAZ09AZ09GetPostArgs {
  /** Unique registered name for the block. */
  name?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'edit';
  /** Attributes for the block. */
  attributes?: WpV2BlockRendererPNameAZ09AZ09GetPostAttribute;
  /** ID of the post context. */
  post_id?: number;
}

export interface WpV2BlockTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Block namespace. */
  namespace?: string;
}

export interface WpV2BlockTypesPNamespaceAZaZ09GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Block namespace. */
  namespace?: string;
}

export interface WpV2BlockTypesPNamespaceAZaZ09PNameAZaZ09GetArgs {
  /** Block name. */
  name?: string;
  /** Block namespace. */
  namespace?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2GlobalStylesThemesPStylesheetSWVariationsGetArgs {
  /** The theme identifier */
  stylesheet?: string;
}

export interface WpV2GlobalStylesThemesPStylesheetGetArgs {
  /** The theme identifier */
  stylesheet?: string;
}

export interface WpV2GlobalStylesPIdWGetArgs {
  /** The id of a template */
  id?: string;
}

export interface WpV2GlobalStylesPIdWPostPutPatchArgs {}

export interface WpV2SettingsGetArgs {}

export interface WpV2SettingsPostPutPatchPickupLocationSetting {}

export interface WpV2SettingsPostPutPatchPickupLocation {}

export interface WpV2SettingsPostPutPatchArgs {
  /** Config Kadence Block Defaults */
  kadence_blocks_config_blocks?: string;
  /** Config Kadence Block Settings View */
  kadence_blocks_settings_blocks?: string;
  /** Config Kadence Blocks Color Palette */
  kadence_blocks_colors?: string;
  /** Config Kadence Blocks Global Settings */
  kadence_blocks_global?: string;
  /** Google reCaptcha Site Key */
  kadence_blocks_recaptcha_site_key?: string;
  /** Google reCaptcha Secret Key */
  kadence_blocks_recaptcha_secret_key?: string;
  /** Google reCaptcha Language */
  kadence_blocks_recaptcha_language?: string;
  /** MailerLite API Key */
  kadence_blocks_mailerlite_api?: string;
  /** Google Maps API Key */
  kadence_blocks_google_maps_api?: string;
  /** Config Kadence Blocks Cloud */
  kadence_blocks_cloud?: string;
  /** Subscribe to Wireframe library */
  kadence_blocks_wire_subscribe?: boolean;
  /** ConvertKit API Key */
  kadence_blocks_convertkit_api?: string;
  /** ConvertKit API Key */
  kadence_blocks_activecampaign_api_key?: string;
  /** ConvertKit API Key */
  kadence_blocks_activecampaign_api_base?: string;
  /** Site title. */
  title?: string;
  /** Site tagline. */
  description?: string;
  /** Site URL. */
  url?: string;
  /** This address is used for admin purposes, like new user notification. */
  email?: string;
  /** A city in the same timezone as you. */
  timezone?: string;
  /** A date format for all date strings. */
  date_format?: string;
  /** A time format for all time strings. */
  time_format?: string;
  /** A day number of the week that the week should start on. */
  start_of_week?: number;
  /** WordPress locale code. */
  language?: string;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies?: boolean;
  /** Default post category. */
  default_category?: number;
  /** Default post format. */
  default_post_format?: string;
  /** Blog pages show at most. */
  posts_per_page?: number;
  /** What to show on the front page */
  show_on_front?: string;
  /** The ID of the page that should be displayed on the front page */
  page_on_front?: number;
  /** The ID of the page that should display the latest posts */
  page_for_posts?: number;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status?: 'open' | 'closed';
  /** Allow people to submit comments on new posts. */
  default_comment_status?: 'open' | 'closed';
  /** Site logo. */
  site_logo?: number;
  /** Site icon. */
  site_icon?: number;
  /** WooCommerce Local Pickup Method Settings */
  pickup_location_settings?: WpV2SettingsPostPutPatchPickupLocationSetting;
  /** WooCommerce Local Pickup Locations */
  pickup_locations?: WpV2SettingsPostPutPatchPickupLocation[];
}

export interface WpV2ThemesGetArgs {
  /** Limit result set to themes assigned one or more statuses. */
  status?: number[];
}

export interface WpV2ThemesPStylesheetGetArgs {
  /** The theme's stylesheet. This uniquely identifies the theme. */
  stylesheet?: string;
}

export interface WpV2PluginsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit results to those matching a string. */
  search?: string;
  /** Limits results to plugins with the given status. */
  status?: number[];
}

export interface WpV2PluginsPostArgs {
  /** WordPress.org plugin directory slug. */
  slug: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
}

export interface WpV2PluginsPPluginGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
}

export interface WpV2PluginsPPluginPostPutPatchArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
}

export interface WpV2PluginsPPluginDeleteArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
}

export interface WpV2SidebarsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2SidebarsPIdWGetArgs {
  /** The id of a registered sidebar */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2SidebarsPIdWPostPutPatchWidget {}

export interface WpV2SidebarsPIdWPostPutPatchArgs {
  /** Nested widgets. */
  widgets?: WpV2SidebarsPIdWPostPutPatchWidget[];
}

export interface WpV2WidgetTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2WidgetTypesPIdAZaZ09GetArgs {
  /** The widget type id. */
  id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2WidgetTypesPIdAZaZ09EncodePostInstance {}

export interface WpV2WidgetTypesPIdAZaZ09EncodePostArgs {
  /** The widget type id. */
  id: string;
  /** Current instance settings of the widget. */
  instance?: WpV2WidgetTypesPIdAZaZ09EncodePostInstance;
  /** Serialized widget form data to encode into instance settings. */
  form_data?: string;
}

export interface WpV2WidgetTypesPIdAZaZ09RenderPostInstance {}

export interface WpV2WidgetTypesPIdAZaZ09RenderPostArgs {
  /** The widget type id. */
  id: string;
  /** Current instance settings of the widget. */
  instance?: WpV2WidgetTypesPIdAZaZ09RenderPostInstance;
}

export interface WpV2WidgetsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The sidebar to return widgets for. */
  sidebar?: string;
}

export interface WpV2WidgetsPostInstance {}

export interface WpV2WidgetsPostArgs {
  /** Unique identifier for the widget. */
  id?: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** The sidebar the widget belongs to. */
  sidebar: string;
  /** Instance settings of the widget, if supported. */
  instance?: WpV2WidgetsPostInstance;
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
}

export interface WpV2WidgetsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2WidgetsPIdWPostPutPatchInstance {}

export interface WpV2WidgetsPIdWPostPutPatchArgs {
  /** Unique identifier for the widget. */
  id?: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** The sidebar the widget belongs to. */
  sidebar?: string;
  /** Instance settings of the widget, if supported. */
  instance?: WpV2WidgetsPIdWPostPutPatchInstance;
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
}

export interface WpV2WidgetsPIdWDeleteArgs {
  /** Whether to force removal of the widget, or move it to the inactive sidebar. */
  force?: boolean;
}

export interface WpV2BlockDirectorySearchGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to blocks matching the search term. */
  term: string;
}

export interface WpV2PatternDirectoryPatternsGetSlug {}

export interface WpV2PatternDirectoryPatternsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to those matching a category ID. */
  category?: number;
  /** Limit results to those matching a keyword ID. */
  keyword?: number;
  /** Limit results to those matching a pattern (slug). */
  slug?: WpV2PatternDirectoryPatternsGetSlug[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'favorite_count';
}

export interface WpV2BlockPatternsPatternsGetArgs {}

export interface WpV2BlockPatternsCategoriesGetArgs {}

export interface WpSiteHealthV1GetArgs {}

export interface WpSiteHealthV1TestsBackgroundUpdatesGetArgs {}

export interface WpSiteHealthV1TestsLoopbackRequestsGetArgs {}

export interface WpSiteHealthV1TestsHttpsStatusGetArgs {}

export interface WpSiteHealthV1TestsDotorgCommunicationGetArgs {}

export interface WpSiteHealthV1TestsAuthorizationHeaderGetArgs {}

export interface WpSiteHealthV1DirectorySizesGetArgs {}

export interface WpSiteHealthV1TestsPageCacheGetArgs {}

export interface WpBlockEditorV1GetArgs {}

export interface WpBlockEditorV1UrlDetailsGetArgs {
  /** The URL to process. */
  url: string;
}

export interface WpV2MenuLocationsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MenuLocationsPLocationWGetArgs {
  /** An alphanumeric identifier for the menu location. */
  location?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpBlockEditorV1ExportGetArgs {}
