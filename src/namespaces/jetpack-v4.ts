// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack/v4" namespace

/**
 * Arguments for `/jetpack/v4` route when calling GET method.
 */
export interface JetpackV4GetArgs {}

/**
 * Arguments for `/jetpack/v4/backup-helper-script` route when calling POST method.
 */
export interface JetpackV4BackupHelperScriptPostArgs {
  /**
   * base64 encoded Backup Helper Script body.
   */
  helper: string;
}

/**
 * Arguments for `/jetpack/v4/backup-helper-script` route when calling DELETE method.
 */
export interface JetpackV4BackupHelperScriptDeleteArgs {
  /**
   * Path to Backup Helper Script
   */
  path: string;
}

/**
 * Arguments for `/jetpack/v4/comments/(?P<id>\d+)/backup` route when calling GET method.
 */
export interface JetpackV4CommentsPIdDBackupGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection` route when calling GET method.
 */
export interface JetpackV4ConnectionGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ConnectionPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/connection/authorize_url` route when calling GET method.
 */
export interface JetpackV4ConnectionAuthorizeUrlGetArgs {
  /**
   * URI of the admin page where the user should be redirected after connection flow
   */
  redirect_uri?: string;
}

/**
 * Arguments for `/jetpack/v4/connection/data` route when calling GET method.
 */
export interface JetpackV4ConnectionDataGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection/owner` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ConnectionOwnerPatchPostPutArgs {
  /**
   * New owner
   */
  owner: number;
}

/**
 * Arguments for `/jetpack/v4/connection/plugins` route when calling GET method.
 */
export interface JetpackV4ConnectionPluginsGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection/reconnect` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ConnectionReconnectPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/connection/register` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ConnectionRegisterPatchPostPutArgs {
  /**
   * Indicates where the registration action was triggered for tracking/segmentation purposes
   */
  from?: string;
  /**
   * Indicates from what plugin the request is coming from
   */
  plugin_slug?: string;
  /**
   * URI of the admin page where the user should be redirected after connection flow
   */
  redirect_uri?: string;
  /**
   * The registration nonce
   */
  registration_nonce: string;
}

/**
 * Arguments for `/jetpack/v4/connection/test` route when calling GET method.
 */
export interface JetpackV4ConnectionTestGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection/test-wpcom` route when calling GET method.
 */
export interface JetpackV4ConnectionTestWpcomGetArgs {}

/**
 * Arguments for `/jetpack/v4/connection/url` route when calling GET method.
 */
export interface JetpackV4ConnectionUrlGetArgs {
  from?: string;
  redirect?: string;
}

/**
 * Arguments for `/jetpack/v4/connection/user` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ConnectionUserPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/database-object/backup` route when calling GET method.
 */
export interface JetpackV4DatabaseObjectBackupGetArgs {
  /**
   * ID of the database object to fetch
   */
  object_id: number;
}

/**
 * Arguments for `/jetpack/v4/hints` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4HintsPatchPostPutArgs {
  hint: string;
}

/**
 * Arguments for `/jetpack/v4/identity-crisis/confirm-safe-mode` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4IdentityCrisisConfirmSafeModePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/identity-crisis/migrate` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4IdentityCrisisMigratePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/identity-crisis/start-fresh` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4IdentityCrisisStartFreshPatchPostPutArgs {
  /**
   * URI of the admin page where the user should be redirected after connection flow
   */
  redirect_uri?: string;
}

/**
 * Arguments for `/jetpack/v4/intro-offers` route when calling GET method.
 */
export interface JetpackV4IntroOffersGetArgs {}

/**
 * Arguments for `/jetpack/v4/jetpack_crm` route when calling GET method.
 */
export interface JetpackV4JetpackCrmGetArgs {}

/**
 * Arguments for `/jetpack/v4/jetpack_crm` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4JetpackCrmPatchPostPutArgs {
  extension: string;
}

/**
 * Arguments for `/jetpack/v4/jetpack-ai-jwt` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4JetpackAiJwtPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/jitm` route when calling GET method.
 */
export interface JetpackV4JitmGetArgs {}

/**
 * Arguments for `/jetpack/v4/jitm` route when calling POST method.
 */
export interface JetpackV4JitmPostArgs {}

/**
 * Arguments for `/jetpack/v4/licensing/attach-licenses` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4LicensingAttachLicensesPatchPostPutArgs {
  licenses: number[];
}

/**
 * Arguments for `/jetpack/v4/licensing/error` route when calling GET method.
 */
export interface JetpackV4LicensingErrorGetArgs {}

/**
 * Arguments for `/jetpack/v4/licensing/error` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4LicensingErrorPatchPostPutArgs {
  error: string;
}

/**
 * Arguments for `/jetpack/v4/licensing/set-license` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4LicensingSetLicensePatchPostPutArgs {
  license: string;
}

/**
 * Arguments for `/jetpack/v4/licensing/user/activation-notice-dismiss` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4LicensingUserActivationNoticeDismissPatchPostPutArgs {
  last_detached_count: number;
}

/**
 * Arguments for `/jetpack/v4/licensing/user/counts` route when calling GET method.
 */
export interface JetpackV4LicensingUserCountsGetArgs {}

/**
 * Arguments for `/jetpack/v4/licensing/user/licenses` route when calling GET method.
 */
export interface JetpackV4LicensingUserLicensesGetArgs {}

/**
 * Arguments for `/jetpack/v4/marketing/survey` route when calling POST method.
 */
export interface JetpackV4MarketingSurveyPostArgs {}

/**
 * Arguments for `/jetpack/v4/module/(?P<service>[a-z\-]+)/key/check` route when calling GET method.
 */
export interface JetpackV4ModulePServiceAZKeyCheckGetArgs {}

/**
 * Arguments for `/jetpack/v4/module/(?P<service>[a-z\-]+)/key/check` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ModulePServiceAZKeyCheckPatchPostPutArgs {
  api_key?: string;
}

/**
 * Arguments for `/jetpack/v4/module/(?P<slug>[a-z\-]+)` route when calling GET method.
 */
export interface JetpackV4ModulePSlugAZGetArgs {}

export interface JetpackV4ModulePSlugAZPatchPostPutArgsAdvancedSeoTitleFormats {}

export interface JetpackV4ModulePSlugAZPatchPostPutArgsCustom {}

export interface JetpackV4ModulePSlugAZPatchPostPutArgsOnboarding {}

export interface JetpackV4ModulePSlugAZPatchPostPutArgsSharingServices {}

/**
 * Arguments for `/jetpack/v4/module/(?P<slug>[a-z\-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ModulePSlugAZPatchPostPutArgs {
  'action-bar'?: boolean;
  /**
   * Include a small chart in your admin bar with a 48-hour traffic snapshot.
   * @default 1
   */
  admin_bar?: boolean;
  /**
   * Front page meta description.
   * @default ""
   */
  advanced_seo_front_page_description?: string;
  /**
   * SEO page title structures.
   * @default [object Object]
   */
  advanced_seo_title_formats?: JetpackV4ModulePSlugAZPatchPostPutArgsAdvancedSeoTitleFormats;
  akismet_show_user_comments_approved?: boolean;
  /**
   * Bing Webmaster Center
   * @default ""
   */
  bing?: string;
  blaze?: boolean;
  /**
   * Blog ID.
   * @default 0
   */
  blog_id?: boolean;
  /**
   * Button Style
   * @default "icon"
   */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  carousel?: boolean;
  /**
   * Color scheme.
   * @default "black"
   */
  carousel_background_color?: 'black' | 'white';
  /**
   * Show comments area in carousel
   * @default 1
   */
  carousel_display_comments?: boolean;
  /**
   * Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available.
   * @default 0
   */
  carousel_display_exif?: boolean;
  /**
   * Collapse upgrade nudges
   * @default 0
   */
  collapse_nudges?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  /**
   * Count the page views of registered users who are logged in.
   * @default administrator
   */
  count_roles?: number[];
  /**
   * Custom sharing services added by user.
   * @default [object Object]
   */
  custom?: JetpackV4ModulePSlugAZPatchPostPutArgsCustom;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_empty_stats_card?: boolean;
  /**
   * Do not track.
   * @default 1
   */
  do_not_track?: boolean;
  /**
   * Display an ad unit at the top of each page.
   * @default 1
   */
  enable_header_ad?: boolean;
  /**
   * Preview the new Jetpack Stats experience (Experimental).
   * @default 1
   */
  enable_odyssey_stats?: boolean;
  'enhanced-distribution'?: boolean;
  /**
   * Facebook Domain Verification
   * @default ""
   */
  facebook?: string;
  /**
   * Google Search Console
   * @default ""
   */
  google?: string;
  /**
   * Google Analytics
   * @default ""
   */
  google_analytics_tracking_id?: string;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  /**
   * View people&#039;s profiles when you mouse over their Gravatars
   * @default "enabled"
   */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  'gravatar-hovercards'?: boolean;
  /**
   * Has an active Jetpack Search product purchase
   * @default 0
   */
  has_jetpack_search_product?: boolean;
  /**
   * Greeting Text
   * @default "Leave a Reply"
   */
  highlander_comment_form_prompt?: string;
  /**
   * To infinity and beyond
   * @default 1
   */
  infinite_scroll?: boolean;
  /**
   * Use Google Analytics with Infinite Scroll
   * @default 0
   */
  infinite_scroll_google_analytics?: boolean;
  'infinite-scroll'?: boolean;
  /**
   * Enable Instant Search
   * @default 0
   */
  instant_search_enabled?: boolean;
  /**
   * Jetpack Blocks disabled.
   * @default false
   */
  jetpack_blocks_disabled?: boolean;
  /**
   * Color scheme
   * @default "light"
   */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /**
   * Enable or disable Jetpack portfolio post type.
   * @default 0
   */
  jetpack_portfolio?: boolean;
  /**
   * Number of entries to show at most in Portfolio pages.
   * @default 10
   */
  jetpack_portfolio_posts_per_page?: number;
  /**
   * Protect global IP allow list
   * @default ""
   */
  jetpack_protect_global_whitelist?: string;
  /**
   * Protect API key
   * @default ""
   */
  jetpack_protect_key?: string;
  /**
   * Match by Email
   * @default 0
   */
  jetpack_sso_match_by_email?: boolean;
  /**
   * Require Two-Step Authentication
   * @default 0
   */
  jetpack_sso_require_two_step?: boolean;
  /**
   * Enable or disable Jetpack testimonial post type.
   * @default 0
   */
  jetpack_testimonial?: boolean;
  /**
   * Number of entries to show at most in Testimonial pages.
   * @default 10
   */
  jetpack_testimonial_posts_per_page?: number;
  /**
   * Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules.
   * @default false
   */
  jetpack_waf_automatic_rules?: boolean;
  /**
   * Always allowed IP addresses
   * @default ""
   */
  jetpack_waf_ip_allow_list?: string;
  /**
   * Blocked IP addresses
   * @default ""
   */
  jetpack_waf_ip_block_list?: string;
  /**
   * Allow / Block list - Block or allow a specific request IP.
   * @default 0
   */
  jetpack_waf_ip_list?: boolean;
  /**
   * Share data with Jetpack.
   * @default 0
   */
  jetpack_waf_share_data?: boolean;
  /**
   * The Twitter username of the owner of this site&#039;s domain.
   * @default ""
   */
  'jetpack-twitter-cards-site-tag'?: string;
  'json-api'?: boolean;
  /**
   * Primary language for the site.
   * @default "en_US"
   */
  lang_id?: string;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  /**
   * Receive Monitor Email Notifications.
   * @default 0
   */
  monitor_receive_notifications?: boolean;
  notes?: boolean;
  onboarding?: JetpackV4ModulePSlugAZPatchPostPutArgsOnboarding;
  photon?: boolean;
  'photon-cdn'?: boolean;
  /**
   * Pinterest Site Verification
   * @default ""
   */
  pinterest?: string;
  /**
   * Email Address
   * @default "noop"
   */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  /**
   * Select the roles that will be able to view stats reports.
   * @default administrator
   */
  roles?: number[];
  search?: boolean;
  /**
   * Trigger an auto config of instant search
   * @default 0
   */
  search_auto_config?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  /**
   * Disable CSS and JS
   * @default 0
   */
  sharedaddy_disable_resources?: boolean;
  /**
   * Delete custom sharing service.
   * @default ""
   */
  sharing_delete_service?: string;
  /**
   * Sharing Label
   * @default ""
   */
  sharing_label?: string;
  /**
   * Enabled Services and those hidden behind a button
   * @default [object Object]
   */
  sharing_services?: JetpackV4ModulePSlugAZPatchPostPutArgsSharingServices;
  shortcodes?: boolean;
  shortlinks?: boolean;
  /**
   * Views where buttons are shown
   * @default post
   */
  show?: number[];
  /**
   * Highlight related content with a heading
   * @default 1
   */
  show_headline?: boolean;
  /**
   * Show a thumbnail image where available
   * @default 0
   */
  show_thumbnails?: boolean;
  sitemaps?: boolean;
  /**
   * Send email notification when someone likes a post
   * @default 1
   */
  social_notifications_like?: boolean;
  /**
   * Send email notification when someone follows my blog
   * @default 0
   */
  social_notifications_subscribe?: boolean;
  sso?: boolean;
  stats?: boolean;
  /**
   * Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form
   * @default 1
   */
  stb_enabled?: boolean;
  /**
   * Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form
   * @default 1
   */
  stc_enabled?: boolean;
  subscriptions?: boolean;
  /**
   * Display all your gallery pictures in a cool mosaic.
   * @default 0
   */
  tiled_galleries?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  /**
   * Version.
   * @default 9
   */
  version?: number;
  videopress?: boolean;
  /**
   * Video Privacy: Restrict views to members of this site
   * @default 0
   */
  videopress_private_enabled_for_site?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
  /**
   * Is site approved for WordAds?
   * @default 0
   */
  wordads_approved?: boolean;
  /**
   * Enable support for California Consumer Privacy Act
   * @default 0
   */
  wordads_ccpa_enabled?: boolean;
  /**
   * Privacy Policy URL
   * @default ""
   */
  wordads_ccpa_privacy_policy_url?: string;
  /**
   * Custom ads.txt entries
   * @default ""
   */
  wordads_custom_adstxt?: string;
  /**
   * Custom ads.txt
   * @default 0
   */
  wordads_custom_adstxt_enabled?: boolean;
  /**
   * Display ads on archive pages?
   * @default 1
   */
  wordads_display_archive?: boolean;
  /**
   * Display ads on the front page?
   * @default 1
   */
  wordads_display_front_page?: boolean;
  /**
   * Display ads on pages?
   * @default 1
   */
  wordads_display_page?: boolean;
  /**
   * Display ads on posts?
   * @default 1
   */
  wordads_display_post?: boolean;
  /**
   * Display second ad below post?
   * @default 1
   */
  wordads_second_belowpost?: boolean;
  wordpress_api_key?: string;
  /**
   * Use Markdown for comments.
   * @default 0
   */
  wpcom_publish_comments_with_markdown?: boolean;
  /**
   * Use Markdown for posts.
   * @default 0
   */
  wpcom_publish_posts_with_markdown?: boolean;
  /**
   * Show post views in the WordPress.com Reader.
   * @default 1
   */
  wpcom_reader_views_enabled?: boolean;
  /**
   * WordPress.com Likes are
   * @default "on"
   */
  wpl_default?: 'on' | 'off';
  /**
   * Yandex Site Verification
   * @default ""
   */
  yandex?: string;
}

/**
 * Arguments for `/jetpack/v4/module/(?P<slug>[a-z\-]+)/active` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ModulePSlugAZActivePatchPostPutArgs {
  active: boolean;
}

/**
 * Arguments for `/jetpack/v4/module/(?P<slug>[a-z\-]+)/data` route when calling GET method.
 */
export interface JetpackV4ModulePSlugAZDataGetArgs {
  range?: string;
}

/**
 * Arguments for `/jetpack/v4/module/all` route when calling GET method.
 */
export interface JetpackV4ModuleAllGetArgs {}

/**
 * Arguments for `/jetpack/v4/module/all/active` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4ModuleAllActivePatchPostPutArgs {
  active?: boolean;
  modules: number[];
}

/**
 * Arguments for `/jetpack/v4/notice/(?P<notice>[a-z\-_]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4NoticePNoticeAZPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/options/(?P<options>[a-z\-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4OptionsPOptionsAZPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/options/backup` route when calling GET method.
 */
export interface JetpackV4OptionsBackupGetArgs {}

/**
 * Arguments for `/jetpack/v4/plans` route when calling GET method.
 */
export interface JetpackV4PlansGetArgs {}

/**
 * Arguments for `/jetpack/v4/plugin/(?P<plugin>[a-z\/\.\-_]+)` route when calling GET method.
 */
export interface JetpackV4PluginPPluginAZGetArgs {}

/**
 * Arguments for `/jetpack/v4/plugins` route when calling GET method.
 */
export interface JetpackV4PluginsGetArgs {}

/**
 * Arguments for `/jetpack/v4/plugins` route when calling POST method.
 */
export interface JetpackV4PluginsPostArgs {
  /**
   * WordPress.org plugin directory slug. Constraints: pattern = [\w\-]+.
   */
  slug: string;
  source?: string;
  /**
   * The plugin activation status.
   * @default "inactive"
   */
  status?: 'inactive' | 'active';
}

/**
 * Arguments for `/jetpack/v4/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4PluginsPPluginPatchPostPutArgs {
  source?: string;
  status: string;
}

/**
 * Arguments for `/jetpack/v4/posts/(?P<id>\d+)/backup` route when calling GET method.
 */
export interface JetpackV4PostsPIdDBackupGetArgs {}

/**
 * Arguments for `/jetpack/v4/products` route when calling GET method.
 */
export interface JetpackV4ProductsGetArgs {}

/**
 * Arguments for `/jetpack/v4/purchase-token` route when calling GET method.
 */
export interface JetpackV4PurchaseTokenGetArgs {}

/**
 * Arguments for `/jetpack/v4/purchase-token` route when calling POST method.
 */
export interface JetpackV4PurchaseTokenPostArgs {}

/**
 * Arguments for `/jetpack/v4/recommendations/conditional` route when calling GET method.
 */
export interface JetpackV4RecommendationsConditionalGetArgs {}

/**
 * Arguments for `/jetpack/v4/recommendations/data` route when calling GET method.
 */
export interface JetpackV4RecommendationsDataGetArgs {}

export interface JetpackV4RecommendationsDataPatchPostPutArgsData {}

/**
 * Arguments for `/jetpack/v4/recommendations/data` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4RecommendationsDataPatchPostPutArgs {
  data: JetpackV4RecommendationsDataPatchPostPutArgsData;
}

/**
 * Arguments for `/jetpack/v4/recommendations/product-suggestions` route when calling GET method.
 */
export interface JetpackV4RecommendationsProductSuggestionsGetArgs {}

/**
 * Arguments for `/jetpack/v4/recommendations/step` route when calling GET method.
 */
export interface JetpackV4RecommendationsStepGetArgs {}

/**
 * Arguments for `/jetpack/v4/recommendations/step` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4RecommendationsStepPatchPostPutArgs {
  step: string;
}

/**
 * Arguments for `/jetpack/v4/recommendations/upsell` route when calling GET method.
 */
export interface JetpackV4RecommendationsUpsellGetArgs {}

/**
 * Arguments for `/jetpack/v4/remote_authorize` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4RemoteAuthorizePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/rewind` route when calling GET method.
 */
export interface JetpackV4RewindGetArgs {}

/**
 * Arguments for `/jetpack/v4/scan` route when calling GET method.
 */
export interface JetpackV4ScanGetArgs {}

/**
 * Arguments for `/jetpack/v4/search` route when calling GET method.
 */
export interface JetpackV4SearchGetArgs {}

/**
 * Arguments for `/jetpack/v4/search/local-stats` route when calling GET method.
 */
export interface JetpackV4SearchLocalStatsGetArgs {}

/**
 * Arguments for `/jetpack/v4/search/plan` route when calling GET method.
 */
export interface JetpackV4SearchPlanGetArgs {}

/**
 * Arguments for `/jetpack/v4/search/plan/activate` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SearchPlanActivatePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/search/plan/deactivate` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SearchPlanDeactivatePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/search/pricing` route when calling GET method.
 */
export interface JetpackV4SearchPricingGetArgs {}

/**
 * Arguments for `/jetpack/v4/search/settings` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SearchSettingsPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/search/settings` route when calling GET method.
 */
export interface JetpackV4SearchSettingsGetArgs {}

/**
 * Arguments for `/jetpack/v4/search/stats` route when calling GET method.
 */
export interface JetpackV4SearchStatsGetArgs {}

/**
 * Arguments for `/jetpack/v4/seen-wc-connection-modal` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SeenWcConnectionModalPatchPostPutArgs {}

export interface JetpackV4SettingsPatchPostPutArgsAdvancedSeoTitleFormats {}

export interface JetpackV4SettingsPatchPostPutArgsCustom {}

export interface JetpackV4SettingsPatchPostPutArgsOnboarding {}

export interface JetpackV4SettingsPatchPostPutArgsSharingServices {}

/**
 * Arguments for `/jetpack/v4/settings` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SettingsPatchPostPutArgs {
  'action-bar'?: boolean;
  /**
   * Include a small chart in your admin bar with a 48-hour traffic snapshot.
   * @default 1
   */
  admin_bar?: boolean;
  /**
   * Front page meta description.
   * @default ""
   */
  advanced_seo_front_page_description?: string;
  /**
   * SEO page title structures.
   * @default [object Object]
   */
  advanced_seo_title_formats?: JetpackV4SettingsPatchPostPutArgsAdvancedSeoTitleFormats;
  akismet_show_user_comments_approved?: boolean;
  /**
   * Bing Webmaster Center
   * @default ""
   */
  bing?: string;
  blaze?: boolean;
  /**
   * Blog ID.
   * @default 0
   */
  blog_id?: boolean;
  /**
   * Button Style
   * @default "icon"
   */
  button_style?: 'icon-text' | 'icon' | 'text' | 'official';
  carousel?: boolean;
  /**
   * Color scheme.
   * @default "black"
   */
  carousel_background_color?: 'black' | 'white';
  /**
   * Show comments area in carousel
   * @default 1
   */
  carousel_display_comments?: boolean;
  /**
   * Show photo metadata (<a href="https://en.wikipedia.org/wiki/Exchangeable_image_file_format" target="_blank">Exif</a>) in carousel, when available.
   * @default 0
   */
  carousel_display_exif?: boolean;
  /**
   * Collapse upgrade nudges
   * @default 0
   */
  collapse_nudges?: boolean;
  'comment-likes'?: boolean;
  comments?: boolean;
  'contact-form'?: boolean;
  'copy-post'?: boolean;
  /**
   * Count the page views of registered users who are logged in.
   * @default administrator
   */
  count_roles?: number[];
  /**
   * Custom sharing services added by user.
   * @default [object Object]
   */
  custom?: JetpackV4SettingsPatchPostPutArgsCustom;
  'custom-content-types'?: boolean;
  'custom-css'?: boolean;
  dismiss_dash_agencies_learn_more?: boolean;
  dismiss_dash_backup_getting_started?: boolean;
  dismiss_empty_stats_card?: boolean;
  /**
   * Do not track.
   * @default 1
   */
  do_not_track?: boolean;
  /**
   * Display an ad unit at the top of each page.
   * @default 1
   */
  enable_header_ad?: boolean;
  /**
   * Preview the new Jetpack Stats experience (Experimental).
   * @default 1
   */
  enable_odyssey_stats?: boolean;
  'enhanced-distribution'?: boolean;
  /**
   * Facebook Domain Verification
   * @default ""
   */
  facebook?: string;
  /**
   * Google Search Console
   * @default ""
   */
  google?: string;
  /**
   * Google Analytics
   * @default ""
   */
  google_analytics_tracking_id?: string;
  'google-analytics'?: boolean;
  'google-fonts'?: boolean;
  /**
   * View people&#039;s profiles when you mouse over their Gravatars
   * @default "enabled"
   */
  gravatar_disable_hovercards?: 'enabled' | 'disabled';
  'gravatar-hovercards'?: boolean;
  /**
   * Has an active Jetpack Search product purchase
   * @default 0
   */
  has_jetpack_search_product?: boolean;
  /**
   * Greeting Text
   * @default "Leave a Reply"
   */
  highlander_comment_form_prompt?: string;
  /**
   * To infinity and beyond
   * @default 1
   */
  infinite_scroll?: boolean;
  /**
   * Use Google Analytics with Infinite Scroll
   * @default 0
   */
  infinite_scroll_google_analytics?: boolean;
  'infinite-scroll'?: boolean;
  /**
   * Enable Instant Search
   * @default 0
   */
  instant_search_enabled?: boolean;
  /**
   * Jetpack Blocks disabled.
   * @default false
   */
  jetpack_blocks_disabled?: boolean;
  /**
   * Color scheme
   * @default "light"
   */
  jetpack_comment_form_color_scheme?: 'light' | 'dark' | 'transparent';
  /**
   * Enable or disable Jetpack portfolio post type.
   * @default 0
   */
  jetpack_portfolio?: boolean;
  /**
   * Number of entries to show at most in Portfolio pages.
   * @default 10
   */
  jetpack_portfolio_posts_per_page?: number;
  /**
   * Protect global IP allow list
   * @default ""
   */
  jetpack_protect_global_whitelist?: string;
  /**
   * Protect API key
   * @default ""
   */
  jetpack_protect_key?: string;
  /**
   * Match by Email
   * @default 0
   */
  jetpack_sso_match_by_email?: boolean;
  /**
   * Require Two-Step Authentication
   * @default 0
   */
  jetpack_sso_require_two_step?: boolean;
  /**
   * Enable or disable Jetpack testimonial post type.
   * @default 0
   */
  jetpack_testimonial?: boolean;
  /**
   * Number of entries to show at most in Testimonial pages.
   * @default 10
   */
  jetpack_testimonial_posts_per_page?: number;
  /**
   * Enable automatic rules - Protect your site against untrusted traffic sources with automatic security rules.
   * @default false
   */
  jetpack_waf_automatic_rules?: boolean;
  /**
   * Always allowed IP addresses
   * @default ""
   */
  jetpack_waf_ip_allow_list?: string;
  /**
   * Blocked IP addresses
   * @default ""
   */
  jetpack_waf_ip_block_list?: string;
  /**
   * Allow / Block list - Block or allow a specific request IP.
   * @default 0
   */
  jetpack_waf_ip_list?: boolean;
  /**
   * Share data with Jetpack.
   * @default 0
   */
  jetpack_waf_share_data?: boolean;
  /**
   * The Twitter username of the owner of this site&#039;s domain.
   * @default ""
   */
  'jetpack-twitter-cards-site-tag'?: string;
  'json-api'?: boolean;
  /**
   * Primary language for the site.
   * @default "en_US"
   */
  lang_id?: string;
  latex?: boolean;
  'lazy-images'?: boolean;
  likes?: boolean;
  markdown?: boolean;
  masterbar?: boolean;
  monitor?: boolean;
  /**
   * Receive Monitor Email Notifications.
   * @default 0
   */
  monitor_receive_notifications?: boolean;
  notes?: boolean;
  onboarding?: JetpackV4SettingsPatchPostPutArgsOnboarding;
  photon?: boolean;
  'photon-cdn'?: boolean;
  /**
   * Pinterest Site Verification
   * @default ""
   */
  pinterest?: string;
  /**
   * Email Address
   * @default "noop"
   */
  post_by_email_address?: 'noop' | 'create' | 'regenerate' | 'delete';
  'post-by-email'?: boolean;
  'post-list'?: boolean;
  protect?: boolean;
  publicize?: boolean;
  'related-posts'?: boolean;
  /**
   * Select the roles that will be able to view stats reports.
   * @default administrator
   */
  roles?: number[];
  search?: boolean;
  /**
   * Trigger an auto config of instant search
   * @default 0
   */
  search_auto_config?: boolean;
  'seo-tools'?: boolean;
  sharedaddy?: boolean;
  /**
   * Disable CSS and JS
   * @default 0
   */
  sharedaddy_disable_resources?: boolean;
  /**
   * Delete custom sharing service.
   * @default ""
   */
  sharing_delete_service?: string;
  /**
   * Sharing Label
   * @default ""
   */
  sharing_label?: string;
  /**
   * Enabled Services and those hidden behind a button
   * @default [object Object]
   */
  sharing_services?: JetpackV4SettingsPatchPostPutArgsSharingServices;
  shortcodes?: boolean;
  shortlinks?: boolean;
  /**
   * Views where buttons are shown
   * @default post
   */
  show?: number[];
  /**
   * Highlight related content with a heading
   * @default 1
   */
  show_headline?: boolean;
  /**
   * Show a thumbnail image where available
   * @default 0
   */
  show_thumbnails?: boolean;
  sitemaps?: boolean;
  /**
   * Send email notification when someone likes a post
   * @default 1
   */
  social_notifications_like?: boolean;
  /**
   * Send email notification when someone follows my blog
   * @default 0
   */
  social_notifications_subscribe?: boolean;
  sso?: boolean;
  stats?: boolean;
  /**
   * Show a &lt;em&gt;&#039;follow blog&#039;&lt;/em&gt; option in the comment form
   * @default 1
   */
  stb_enabled?: boolean;
  /**
   * Show a &lt;em&gt;&#039;follow comments&#039;&lt;/em&gt; option in the comment form
   * @default 1
   */
  stc_enabled?: boolean;
  subscriptions?: boolean;
  /**
   * Display all your gallery pictures in a cool mosaic.
   * @default 0
   */
  tiled_galleries?: boolean;
  'tiled-gallery'?: boolean;
  vaultpress?: boolean;
  'verification-tools'?: boolean;
  /**
   * Version.
   * @default 9
   */
  version?: number;
  videopress?: boolean;
  /**
   * Video Privacy: Restrict views to members of this site
   * @default 0
   */
  videopress_private_enabled_for_site?: boolean;
  waf?: boolean;
  'widget-visibility'?: boolean;
  widgets?: boolean;
  'woocommerce-analytics'?: boolean;
  wordads?: boolean;
  /**
   * Is site approved for WordAds?
   * @default 0
   */
  wordads_approved?: boolean;
  /**
   * Enable support for California Consumer Privacy Act
   * @default 0
   */
  wordads_ccpa_enabled?: boolean;
  /**
   * Privacy Policy URL
   * @default ""
   */
  wordads_ccpa_privacy_policy_url?: string;
  /**
   * Custom ads.txt entries
   * @default ""
   */
  wordads_custom_adstxt?: string;
  /**
   * Custom ads.txt
   * @default 0
   */
  wordads_custom_adstxt_enabled?: boolean;
  /**
   * Display ads on archive pages?
   * @default 1
   */
  wordads_display_archive?: boolean;
  /**
   * Display ads on the front page?
   * @default 1
   */
  wordads_display_front_page?: boolean;
  /**
   * Display ads on pages?
   * @default 1
   */
  wordads_display_page?: boolean;
  /**
   * Display ads on posts?
   * @default 1
   */
  wordads_display_post?: boolean;
  /**
   * Display second ad below post?
   * @default 1
   */
  wordads_second_belowpost?: boolean;
  wordpress_api_key?: string;
  /**
   * Use Markdown for comments.
   * @default 0
   */
  wpcom_publish_comments_with_markdown?: boolean;
  /**
   * Use Markdown for posts.
   * @default 0
   */
  wpcom_publish_posts_with_markdown?: boolean;
  /**
   * Show post views in the WordPress.com Reader.
   * @default 1
   */
  wpcom_reader_views_enabled?: boolean;
  /**
   * WordPress.com Likes are
   * @default "on"
   */
  wpl_default?: 'on' | 'off';
  /**
   * Yandex Site Verification
   * @default ""
   */
  yandex?: string;
}

/**
 * Arguments for `/jetpack/v4/settings` route when calling GET method.
 */
export interface JetpackV4SettingsGetArgs {}

/**
 * Arguments for `/jetpack/v4/settings/(?P<slug>[a-z\-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SettingsPSlugAZPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/site` route when calling GET method.
 */
export interface JetpackV4SiteGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/activity` route when calling GET method.
 */
export interface JetpackV4SiteActivityGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/benefits` route when calling GET method.
 */
export interface JetpackV4SiteBenefitsGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/discount` route when calling GET method.
 */
export interface JetpackV4SiteDiscountGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/features` route when calling GET method.
 */
export interface JetpackV4SiteFeaturesGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/products` route when calling GET method.
 */
export interface JetpackV4SiteProductsGetArgs {}

/**
 * Arguments for `/jetpack/v4/site/purchases` route when calling GET method.
 */
export interface JetpackV4SitePurchasesGetArgs {}

/**
 * Arguments for `/jetpack/v4/sync/checkout` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncCheckoutPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/sync/close` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncClosePatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/sync/data-check` route when calling GET method.
 */
export interface JetpackV4SyncDataCheckGetArgs {
  /**
   * If text fields should be converted to latin1 in checksum calculation.
   */
  perform_text_conversion?: boolean;
}

export interface JetpackV4SyncDataHistogramPatchPostPutArgsColumns {}

/**
 * Arguments for `/jetpack/v4/sync/data-histogram` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncDataHistogramPatchPostPutArgs {
  /**
   * Number of histogram buckets.
   */
  buckets?: number;
  /**
   * Column mappings
   */
  columns?: JetpackV4SyncDataHistogramPatchPostPutArgsColumns[];
  /**
   * Do we want the checksum or object ids.
   */
  detailed_drilldown?: boolean;
  /**
   * End ID for the histogram
   */
  end_id?: number;
  /**
   * Object Type
   */
  object_type?: string;
  /**
   * Should only range endges be returned
   */
  only_range_edges?: boolean;
  /**
   * If text fields should be converted to latin1 in checksum calculation.
   */
  perform_text_conversion?: boolean;
  /**
   * Shared Salt to use when generating checksum
   */
  shared_salt?: string;
  /**
   * Start ID for the histogram
   */
  start_id?: number;
  /**
   * Strip non-ascii characters?
   */
  strip_non_ascii?: boolean;
}

export interface JetpackV4SyncFullSyncPatchPostPutArgsComments {}

export interface JetpackV4SyncFullSyncPatchPostPutArgsModules {}

export interface JetpackV4SyncFullSyncPatchPostPutArgsPosts {}

/**
 * Arguments for `/jetpack/v4/sync/full-sync` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncFullSyncPatchPostPutArgs {
  /**
   * Comment IDs to include in Full Sync
   */
  comments?: JetpackV4SyncFullSyncPatchPostPutArgsComments[];
  /**
   * Data Modules that should be included in Full Sync
   */
  modules?: JetpackV4SyncFullSyncPatchPostPutArgsModules[];
  /**
   * Post IDs to include in Full Sync
   */
  posts?: JetpackV4SyncFullSyncPatchPostPutArgsPosts[];
}

/**
 * Arguments for `/jetpack/v4/sync/health` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncHealthPatchPostPutArgs {
  /**
   * New Sync health status
   */
  status: string;
}

/**
 * Arguments for `/jetpack/v4/sync/locks` route when calling DELETE method.
 */
export interface JetpackV4SyncLocksDeleteArgs {}

/**
 * Arguments for `/jetpack/v4/sync/now` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncNowPatchPostPutArgs {
  /**
   * Name of Sync queue.
   */
  queue: string;
}

export interface JetpackV4SyncObjectDeleteGetPatchPostPutArgsObjectIds {}

/**
 * Arguments for `/jetpack/v4/sync/object` route when calling DELETE, GET, PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncObjectDeleteGetPatchPostPutArgs {
  /**
   * Name of Sync module
   */
  module_name?: string;
  /**
   * Objects Identifiers
   */
  object_ids?: JetpackV4SyncObjectDeleteGetPatchPostPutArgsObjectIds[];
  /**
   * Object Type
   */
  object_type?: string;
}

/**
 * Arguments for `/jetpack/v4/sync/object-id-range` route when calling GET method.
 */
export interface JetpackV4SyncObjectIdRangeGetArgs {
  /**
   * Size of batches
   */
  batch_size: number;
  /**
   * Name of Sync module.
   */
  sync_module: string;
}

/**
 * Arguments for `/jetpack/v4/sync/settings` route when calling GET method.
 */
export interface JetpackV4SyncSettingsGetArgs {}

/**
 * Arguments for `/jetpack/v4/sync/settings` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncSettingsPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/sync/spawn-sync` route when calling GET method.
 */
export interface JetpackV4SyncSpawnSyncGetArgs {}

/**
 * Arguments for `/jetpack/v4/sync/status` route when calling GET method.
 */
export interface JetpackV4SyncStatusGetArgs {
  /**
   * Comma seperated list of additional fields that should be included in status.
   */
  fields?: string;
}

/**
 * Arguments for `/jetpack/v4/sync/unlock` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4SyncUnlockPatchPostPutArgs {
  /**
   * Name of Sync queue.
   */
  queue: string;
}

/**
 * Arguments for `/jetpack/v4/terms/(?P<id>\d+)/backup` route when calling GET method.
 */
export interface JetpackV4TermsPIdDBackupGetArgs {}

/**
 * Arguments for `/jetpack/v4/tracking/settings` route when calling GET method.
 */
export interface JetpackV4TrackingSettingsGetArgs {}

/**
 * Arguments for `/jetpack/v4/tracking/settings` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4TrackingSettingsPatchPostPutArgs {
  tracks_opt_out?: boolean;
}

/**
 * Arguments for `/jetpack/v4/updates/plugins` route when calling GET method.
 */
export interface JetpackV4UpdatesPluginsGetArgs {}

/**
 * Arguments for `/jetpack/v4/user-token` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4UserTokenPatchPostPutArgs {
  /**
   * Is connection owner
   */
  is_connection_owner?: boolean;
  /**
   * New user token
   */
  user_token: string;
}

/**
 * Arguments for `/jetpack/v4/users/(?P<id>\d+)/backup` route when calling GET method.
 */
export interface JetpackV4UsersPIdDBackupGetArgs {}

/**
 * Arguments for `/jetpack/v4/verify_xmlrpc_error` route when calling POST method.
 */
export interface JetpackV4VerifyXmlrpcErrorPostArgs {
  nonce: string;
}

/**
 * Arguments for `/jetpack/v4/verify-site/(?P<service>[a-z\-_]+)` route when calling GET method.
 */
export interface JetpackV4VerifySitePServiceAZGetArgs {}

/**
 * Arguments for `/jetpack/v4/verify-site/(?P<service>[a-z\-_]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4VerifySitePServiceAZPatchPostPutArgs {
  keyring_id: number;
}

/**
 * Arguments for `/jetpack/v4/verify-site/(?P<service>[a-z\-_]+)/(?<keyring_id>[0-9]+)` route when calling GET method.
 */
export interface JetpackV4VerifySitePServiceAZKeyringId09GetArgs {}

/**
 * Arguments for `/jetpack/v4/waf` route when calling GET method.
 */
export interface JetpackV4WafGetArgs {}

/**
 * Arguments for `/jetpack/v4/waf` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4WafPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/waf/update-rules` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackV4WafUpdateRulesPatchPostPutArgs {}

/**
 * Arguments for `/jetpack/v4/widgets/(?P<id>[0-9a-z\-_]+)` route when calling GET method.
 */
export interface JetpackV4WidgetsPId09aZGetArgs {}

/**
 * All "jetpack/v4" DELETE routes.
 */
export interface JetpackV4DeleteRoutes {
  '/jetpack/v4/backup-helper-script': JetpackV4BackupHelperScriptDeleteArgs;
  '/jetpack/v4/sync/locks': JetpackV4SyncLocksDeleteArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectDeleteGetPatchPostPutArgs;
}

/**
 * All "jetpack/v4" GET routes.
 */
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
  '/jetpack/v4/sync/object': JetpackV4SyncObjectDeleteGetPatchPostPutArgs;
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

/**
 * All "jetpack/v4" PATCH routes.
 */
export interface JetpackV4PatchRoutes {
  '/jetpack/v4/connection': JetpackV4ConnectionPatchPostPutArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPatchPostPutArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPatchPostPutArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPatchPostPutArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPatchPostPutArgs;
  '/jetpack/v4/hints': JetpackV4HintsPatchPostPutArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPatchPostPutArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPatchPostPutArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPatchPostPutArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPatchPostPutArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPatchPostPutArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePatchPostPutArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPatchPostPutArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePatchPostPutArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePatchPostPutArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPatchPostPutArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPatchPostPutArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPatchPostPutArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPatchPostPutArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPatchPostPutArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePatchPostPutArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePatchPostPutArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePatchPostPutArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPatchPostPutArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPatchPostPutArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPatchPostPutArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPatchPostPutArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPatchPostPutArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePatchPostPutArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPatchPostPutArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPatchPostPutArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPatchPostPutArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPatchPostPutArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectDeleteGetPatchPostPutArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPatchPostPutArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPatchPostPutArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPatchPostPutArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPatchPostPutArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPatchPostPutArgs;
  '/jetpack/v4/waf': JetpackV4WafPatchPostPutArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPatchPostPutArgs;
}

/**
 * All "jetpack/v4" POST routes.
 */
export interface JetpackV4PostRoutes {
  '/jetpack/v4/backup-helper-script': JetpackV4BackupHelperScriptPostArgs;
  '/jetpack/v4/connection': JetpackV4ConnectionPatchPostPutArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPatchPostPutArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPatchPostPutArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPatchPostPutArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPatchPostPutArgs;
  '/jetpack/v4/hints': JetpackV4HintsPatchPostPutArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPatchPostPutArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPatchPostPutArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPatchPostPutArgs;
  '/jetpack/v4/jitm': JetpackV4JitmPostArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPatchPostPutArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPatchPostPutArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePatchPostPutArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPatchPostPutArgs;
  '/jetpack/v4/marketing/survey': JetpackV4MarketingSurveyPostArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePatchPostPutArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePatchPostPutArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPatchPostPutArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPatchPostPutArgs;
  '/jetpack/v4/plugins': JetpackV4PluginsPostArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPatchPostPutArgs;
  '/jetpack/v4/purchase-token': JetpackV4PurchaseTokenPostArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPatchPostPutArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPatchPostPutArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePatchPostPutArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePatchPostPutArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePatchPostPutArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPatchPostPutArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPatchPostPutArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPatchPostPutArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPatchPostPutArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPatchPostPutArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePatchPostPutArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPatchPostPutArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPatchPostPutArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPatchPostPutArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPatchPostPutArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectDeleteGetPatchPostPutArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPatchPostPutArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPatchPostPutArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPatchPostPutArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPatchPostPutArgs;
  '/jetpack/v4/verify_xmlrpc_error': JetpackV4VerifyXmlrpcErrorPostArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPatchPostPutArgs;
  '/jetpack/v4/waf': JetpackV4WafPatchPostPutArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPatchPostPutArgs;
}

/**
 * All "jetpack/v4" PUT routes.
 */
export interface JetpackV4PutRoutes {
  '/jetpack/v4/connection': JetpackV4ConnectionPatchPostPutArgs;
  '/jetpack/v4/connection/owner': JetpackV4ConnectionOwnerPatchPostPutArgs;
  '/jetpack/v4/connection/reconnect': JetpackV4ConnectionReconnectPatchPostPutArgs;
  '/jetpack/v4/connection/register': JetpackV4ConnectionRegisterPatchPostPutArgs;
  '/jetpack/v4/connection/user': JetpackV4ConnectionUserPatchPostPutArgs;
  '/jetpack/v4/hints': JetpackV4HintsPatchPostPutArgs;
  '/jetpack/v4/identity-crisis/confirm-safe-mode': JetpackV4IdentityCrisisConfirmSafeModePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/migrate': JetpackV4IdentityCrisisMigratePatchPostPutArgs;
  '/jetpack/v4/identity-crisis/start-fresh': JetpackV4IdentityCrisisStartFreshPatchPostPutArgs;
  '/jetpack/v4/jetpack_crm': JetpackV4JetpackCrmPatchPostPutArgs;
  '/jetpack/v4/jetpack-ai-jwt': JetpackV4JetpackAiJwtPatchPostPutArgs;
  '/jetpack/v4/licensing/attach-licenses': JetpackV4LicensingAttachLicensesPatchPostPutArgs;
  '/jetpack/v4/licensing/error': JetpackV4LicensingErrorPatchPostPutArgs;
  '/jetpack/v4/licensing/set-license': JetpackV4LicensingSetLicensePatchPostPutArgs;
  '/jetpack/v4/licensing/user/activation-notice-dismiss': JetpackV4LicensingUserActivationNoticeDismissPatchPostPutArgs;
  '/jetpack/v4/module/(?P<service>[a-z\\-]+)/key/check': JetpackV4ModulePServiceAZKeyCheckPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)': JetpackV4ModulePSlugAZPatchPostPutArgs;
  '/jetpack/v4/module/(?P<slug>[a-z\\-]+)/active': JetpackV4ModulePSlugAZActivePatchPostPutArgs;
  '/jetpack/v4/module/all/active': JetpackV4ModuleAllActivePatchPostPutArgs;
  '/jetpack/v4/notice/(?P<notice>[a-z\\-_]+)': JetpackV4NoticePNoticeAZPatchPostPutArgs;
  '/jetpack/v4/options/(?P<options>[a-z\\-]+)': JetpackV4OptionsPOptionsAZPatchPostPutArgs;
  '/jetpack/v4/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': JetpackV4PluginsPPluginPatchPostPutArgs;
  '/jetpack/v4/recommendations/data': JetpackV4RecommendationsDataPatchPostPutArgs;
  '/jetpack/v4/recommendations/step': JetpackV4RecommendationsStepPatchPostPutArgs;
  '/jetpack/v4/remote_authorize': JetpackV4RemoteAuthorizePatchPostPutArgs;
  '/jetpack/v4/search/plan/activate': JetpackV4SearchPlanActivatePatchPostPutArgs;
  '/jetpack/v4/search/plan/deactivate': JetpackV4SearchPlanDeactivatePatchPostPutArgs;
  '/jetpack/v4/search/settings': JetpackV4SearchSettingsPatchPostPutArgs;
  '/jetpack/v4/seen-wc-connection-modal': JetpackV4SeenWcConnectionModalPatchPostPutArgs;
  '/jetpack/v4/settings': JetpackV4SettingsPatchPostPutArgs;
  '/jetpack/v4/settings/(?P<slug>[a-z\\-]+)': JetpackV4SettingsPSlugAZPatchPostPutArgs;
  '/jetpack/v4/sync/checkout': JetpackV4SyncCheckoutPatchPostPutArgs;
  '/jetpack/v4/sync/close': JetpackV4SyncClosePatchPostPutArgs;
  '/jetpack/v4/sync/data-histogram': JetpackV4SyncDataHistogramPatchPostPutArgs;
  '/jetpack/v4/sync/full-sync': JetpackV4SyncFullSyncPatchPostPutArgs;
  '/jetpack/v4/sync/health': JetpackV4SyncHealthPatchPostPutArgs;
  '/jetpack/v4/sync/now': JetpackV4SyncNowPatchPostPutArgs;
  '/jetpack/v4/sync/object': JetpackV4SyncObjectDeleteGetPatchPostPutArgs;
  '/jetpack/v4/sync/settings': JetpackV4SyncSettingsPatchPostPutArgs;
  '/jetpack/v4/sync/unlock': JetpackV4SyncUnlockPatchPostPutArgs;
  '/jetpack/v4/tracking/settings': JetpackV4TrackingSettingsPatchPostPutArgs;
  '/jetpack/v4/user-token': JetpackV4UserTokenPatchPostPutArgs;
  '/jetpack/v4/verify-site/(?P<service>[a-z\\-_]+)': JetpackV4VerifySitePServiceAZPatchPostPutArgs;
  '/jetpack/v4/waf': JetpackV4WafPatchPostPutArgs;
  '/jetpack/v4/waf/update-rules': JetpackV4WafUpdateRulesPatchPostPutArgs;
}

/**
 * All "jetpack/v4" WordPress REST API methods/routes.
 */
export interface JetpackV4Routes {
  Delete: JetpackV4DeleteRoutes;
  Get: JetpackV4GetRoutes;
  Patch: JetpackV4PatchRoutes;
  Post: JetpackV4PostRoutes;
  Put: JetpackV4PutRoutes;
}
