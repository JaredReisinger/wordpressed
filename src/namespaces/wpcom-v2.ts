// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wpcom/v2" namespace

/**
 * Arguments for `/wpcom/v2` route when calling GET method.
 */
export interface WpcomV2GetArgs {}

/**
 * Arguments for `/wpcom/v2/admin-menu` route when calling GET method.
 */
export interface WpcomV2AdminMenuGetArgs {}

/**
 * Arguments for `/wpcom/v2/business-hours/localized-week` route when calling GET method.
 */
export interface WpcomV2BusinessHoursLocalizedWeekGetArgs {}

/**
 * Arguments for `/wpcom/v2/checkGoogleDocVisibility` route when calling GET method.
 */
export interface WpcomV2CheckgoogledocvisibilityGetArgs {}

/**
 * Arguments for `/wpcom/v2/external-media/connection/(?P<service>google_photos)` route when calling GET method.
 */
export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetArgs {}

/**
 * Arguments for `/wpcom/v2/external-media/connection/(?P<service>google_photos)` route when calling DELETE method.
 */
export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs {}

export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgsMedia {}

/**
 * Arguments for `/wpcom/v2/external-media/copy/(?P<service>google_photos|openverse|pexels)` route when calling POST method.
 */
export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs {
  /**
   * Media data to copy.
   */
  media: WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgsMedia[];
  /**
   * The post ID to attach the upload to. Constraints: minimum = 0.
   */
  post_id?: number;
}

/**
 * Arguments for `/wpcom/v2/external-media/list/(?P<service>google_photos|openverse|pexels)` route when calling GET method.
 */
export interface WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetArgs {
  /**
   * Number of media items in the request
   * @default 20
   */
  number?: number;
  page_handle?: string;
  path?: string;
  /**
   * Media collection search term.
   */
  search?: string;
}

/**
 * Arguments for `/wpcom/v2/following/mine` route when calling GET method.
 */
export interface WpcomV2FollowingMineGetArgs {
  ignore_user_blogs?: boolean;
}

/**
 * Arguments for `/wpcom/v2/forms/responses` route when calling GET method.
 */
export interface WpcomV2FormsResponsesGetArgs {
  form_id?: number;
  limit?: number;
  offset?: number;
  search?: string;
}

/**
 * Arguments for `/wpcom/v2/forms/responses/bulk_actions` route when calling POST method.
 */
export interface WpcomV2FormsResponsesBulkActionsPostArgs {}

/**
 * Arguments for `/wpcom/v2/gutenberg/available-extensions` route when calling GET method.
 */
export interface WpcomV2GutenbergAvailableExtensionsGetArgs {}

/**
 * Arguments for `/wpcom/v2/hello` route when calling GET method.
 */
export interface WpcomV2HelloGetArgs {}

/**
 * Arguments for `/wpcom/v2/instagram-gallery/connect-url` route when calling GET method.
 */
export interface WpcomV2InstagramGalleryConnectUrlGetArgs {}

/**
 * Arguments for `/wpcom/v2/instagram-gallery/connections` route when calling GET method.
 */
export interface WpcomV2InstagramGalleryConnectionsGetArgs {}

/**
 * Arguments for `/wpcom/v2/instagram-gallery/gallery` route when calling GET method.
 */
export interface WpcomV2InstagramGalleryGalleryGetArgs {
  /**
   * An Instagram Keyring access token. Constraints: minimum = 1.
   */
  access_token: number;
  /**
   * How many Instagram posts? Constraints: minimum = 1.
   */
  count: number;
}

/**
 * Arguments for `/wpcom/v2/jetpack-ai/ai-assistant-feature` route when calling GET method.
 */
export interface WpcomV2JetpackAiAiAssistantFeatureGetArgs {}

/**
 * Arguments for `/wpcom/v2/mailchimp` route when calling GET method.
 */
export interface WpcomV2MailchimpGetArgs {}

/**
 * Arguments for `/wpcom/v2/mailchimp/groups` route when calling GET method.
 */
export interface WpcomV2MailchimpGroupsGetArgs {}

/**
 * Arguments for `/wpcom/v2/memberships/product` route when calling POST method.
 */
export interface WpcomV2MembershipsProductPostArgs {
  buyer_can_change_amount?: boolean;
  currency: string;
  interval: string;
  is_editable?: boolean;
  price: number;
  title: string;
}

/**
 * Arguments for `/wpcom/v2/memberships/products` route when calling POST method.
 */
export interface WpcomV2MembershipsProductsPostArgs {}

/**
 * Arguments for `/wpcom/v2/memberships/status` route when calling GET method.
 */
export interface WpcomV2MembershipsStatusGetArgs {
  is_editable?: boolean;
  source?: string;
  type?: string;
}

export interface WpcomV2PodcastPlayerGetArgsGuids {}

/**
 * Arguments for `/wpcom/v2/podcast-player` route when calling GET method.
 */
export interface WpcomV2PodcastPlayerGetArgs {
  /**
   * Whether we should return the episodes list for use in the selection UI
   */
  'episode-options': boolean;
  /**
   * A list of unique identifiers for fetching specific podcast episodes.
   */
  guids: WpcomV2PodcastPlayerGetArgsGuids[];
  /**
   * The Podcast RSS feed URL.
   */
  url: string;
}

/**
 * Arguments for `/wpcom/v2/podcast-player/track-quantity` route when calling GET method.
 */
export interface WpcomV2PodcastPlayerTrackQuantityGetArgs {}

export interface WpcomV2PostsPPostidDPublicizePostArgsSkippedConnections {}

/**
 * Arguments for `/wpcom/v2/posts/(?P<postId>\d+)/publicize` route when calling POST method.
 */
export interface WpcomV2PostsPPostidDPublicizePostArgs {
  /**
   * The message to share.
   */
  message: string;
  /**
   * Array of external connection IDs to skip sharing.
   */
  skipped_connections?: WpcomV2PostsPPostidDPublicizePostArgsSkippedConnections[];
}

/**
 * Arguments for `/wpcom/v2/publicize/connection-test-results` route when calling GET method.
 */
export interface WpcomV2PublicizeConnectionTestResultsGetArgs {}

/**
 * Arguments for `/wpcom/v2/publicize/connections` route when calling GET method.
 */
export interface WpcomV2PublicizeConnectionsGetArgs {}

/**
 * Arguments for `/wpcom/v2/publicize/services` route when calling GET method.
 */
export interface WpcomV2PublicizeServicesGetArgs {}

/**
 * Arguments for `/wpcom/v2/resolve-redirect/?(?P<url>.+)?` route when calling GET method.
 */
export interface WpcomV2ResolveRedirectPUrlGetArgs {
  /**
   * The URL to check for redirects.
   */
  url: string;
}

/**
 * Arguments for `/wpcom/v2/search` route when calling GET method.
 */
export interface WpcomV2SearchGetArgs {}

/**
 * Arguments for `/wpcom/v2/send-email-preview` route when calling POST method.
 */
export interface WpcomV2SendEmailPreviewPostArgs {
  /**
   * Unique identifier for the post.
   */
  id?: number;
}

/**
 * Arguments for `/wpcom/v2/service-api-keys/(?P<service>[a-z\-_]+)` route when calling GET method.
 */
export interface WpcomV2ServiceApiKeysPServiceAZGetArgs {}

/**
 * Arguments for `/wpcom/v2/service-api-keys/(?P<service>[a-z\-_]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs {
  service_api_key: string;
}

/**
 * Arguments for `/wpcom/v2/service-api-keys/(?P<service>[a-z\-_]+)` route when calling DELETE method.
 */
export interface WpcomV2ServiceApiKeysPServiceAZDeleteArgs {}

/**
 * Arguments for `/wpcom/v2/template-loader/(?P<template_type>\w+)` route when calling GET method.
 */
export interface WpcomV2TemplateLoaderPTemplateTypeWGetArgs {
  /**
   * The type of the template.
   */
  template_type: string;
}

/**
 * Arguments for `/wpcom/v2/transients/(?P<name>\w{1,172})` route when calling DELETE method.
 */
export interface WpcomV2TransientsPNameW1172DeleteArgs {
  /**
   * The name of the transient to delete.
   */
  name: string;
}

/**
 * Arguments for `/wpcom/v2/tweetstorm/gather` route when calling GET method.
 */
export interface WpcomV2TweetstormGatherGetArgs {
  /**
   * The tweet URL to gather from.
   */
  url: string;
}

export interface WpcomV2TweetstormGenerateCardsPatchPostPutArgsUrls {}

/**
 * Arguments for `/wpcom/v2/tweetstorm/generate-cards` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2TweetstormGenerateCardsPatchPostPutArgs {
  /**
   * An array of URLs to generate Twitter card details for.
   */
  urls: WpcomV2TweetstormGenerateCardsPatchPostPutArgsUrls[];
}

export interface WpcomV2TweetstormParsePatchPostPutArgsBlocks {}

/**
 * Arguments for `/wpcom/v2/tweetstorm/parse` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2TweetstormParsePatchPostPutArgs {
  /**
   * An array of serialized blocks, and editor-specific block information.
   */
  blocks: WpcomV2TweetstormParsePatchPostPutArgsBlocks[];
}

/**
 * Arguments for `/wpcom/v2/videopress/(?P<video_guid>\w+)/check-ownership/(?P<post_id>\d+)` route when calling GET method.
 */
export interface WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetArgs {}

/**
 * Arguments for `/wpcom/v2/videopress/(?P<video_guid>\w+)/poster` route when calling GET method.
 */
export interface WpcomV2VideopressPVideoGuidWPosterGetArgs {}

/**
 * Arguments for `/wpcom/v2/videopress/(?P<video_guid>\w+)/poster` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs {
  /**
   * The time in the video to use as the poster frame.
   */
  at_time?: number;
  /**
   * Whether the time is in milliseconds or seconds.
   */
  is_millisec?: boolean;
  /**
   * The attachment id of the poster image.
   */
  poster_attachment_id?: number;
}

/**
 * Arguments for `/wpcom/v2/videopress/meta` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2VideopressMetaPatchPostPutArgs {
  /**
   * Display download option and allow viewers to download this video
   */
  allow_download?: boolean;
  /**
   * The caption of the video.
   */
  caption?: string;
  /**
   * The description of the video.
   */
  description?: string;
  /**
   * Display the share menu in the player.
   */
  display_embed?: boolean;
  /**
   * The post id for the attachment.
   */
  id: number;
  /**
   * How to determine if the video should be public or private
   */
  privacy_setting?: number;
  /**
   * The video content rating. One of G, PG-13 or R-17
   */
  rating?: string;
  /**
   * The title of the video.
   */
  title?: string;
}

/**
 * Arguments for `/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\w+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs {}

/**
 * Arguments for `/wpcom/v2/videopress/upload-jwt` route when calling PATCH, POST, and PUT methods.
 */
export interface WpcomV2VideopressUploadJwtPatchPostPutArgs {}

/**
 * All "wpcom/v2" DELETE routes.
 */
export interface WpcomV2DeleteRoutes {
  '/wpcom/v2/external-media/connection/(?P<service>google_photos)': WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs;
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZDeleteArgs;
  '/wpcom/v2/transients/(?P<name>\\w{1,172})': WpcomV2TransientsPNameW1172DeleteArgs;
}

/**
 * All "wpcom/v2" GET routes.
 */
export interface WpcomV2GetRoutes {
  '/wpcom/v2': WpcomV2GetArgs;
  '/wpcom/v2/admin-menu': WpcomV2AdminMenuGetArgs;
  '/wpcom/v2/business-hours/localized-week': WpcomV2BusinessHoursLocalizedWeekGetArgs;
  '/wpcom/v2/checkGoogleDocVisibility': WpcomV2CheckgoogledocvisibilityGetArgs;
  '/wpcom/v2/external-media/connection/(?P<service>google_photos)': WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetArgs;
  '/wpcom/v2/external-media/list/(?P<service>google_photos|openverse|pexels)': WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetArgs;
  '/wpcom/v2/following/mine': WpcomV2FollowingMineGetArgs;
  '/wpcom/v2/forms/responses': WpcomV2FormsResponsesGetArgs;
  '/wpcom/v2/gutenberg/available-extensions': WpcomV2GutenbergAvailableExtensionsGetArgs;
  '/wpcom/v2/hello': WpcomV2HelloGetArgs;
  '/wpcom/v2/instagram-gallery/connect-url': WpcomV2InstagramGalleryConnectUrlGetArgs;
  '/wpcom/v2/instagram-gallery/connections': WpcomV2InstagramGalleryConnectionsGetArgs;
  '/wpcom/v2/instagram-gallery/gallery': WpcomV2InstagramGalleryGalleryGetArgs;
  '/wpcom/v2/jetpack-ai/ai-assistant-feature': WpcomV2JetpackAiAiAssistantFeatureGetArgs;
  '/wpcom/v2/mailchimp': WpcomV2MailchimpGetArgs;
  '/wpcom/v2/mailchimp/groups': WpcomV2MailchimpGroupsGetArgs;
  '/wpcom/v2/memberships/status': WpcomV2MembershipsStatusGetArgs;
  '/wpcom/v2/podcast-player': WpcomV2PodcastPlayerGetArgs;
  '/wpcom/v2/podcast-player/track-quantity': WpcomV2PodcastPlayerTrackQuantityGetArgs;
  '/wpcom/v2/publicize/connection-test-results': WpcomV2PublicizeConnectionTestResultsGetArgs;
  '/wpcom/v2/publicize/connections': WpcomV2PublicizeConnectionsGetArgs;
  '/wpcom/v2/publicize/services': WpcomV2PublicizeServicesGetArgs;
  '/wpcom/v2/resolve-redirect/?(?P<url>.+)?': WpcomV2ResolveRedirectPUrlGetArgs;
  '/wpcom/v2/search': WpcomV2SearchGetArgs;
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZGetArgs;
  '/wpcom/v2/template-loader/(?P<template_type>\\w+)': WpcomV2TemplateLoaderPTemplateTypeWGetArgs;
  '/wpcom/v2/tweetstorm/gather': WpcomV2TweetstormGatherGetArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/check-ownership/(?P<post_id>\\d+)': WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterGetArgs;
}

/**
 * All "wpcom/v2" PATCH routes.
 */
export interface WpcomV2PatchRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePatchPostPutArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPatchPostPutArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPatchPostPutArgs;
}

/**
 * All "wpcom/v2" POST routes.
 */
export interface WpcomV2PostRoutes {
  '/wpcom/v2/external-media/copy/(?P<service>google_photos|openverse|pexels)': WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs;
  '/wpcom/v2/forms/responses/bulk_actions': WpcomV2FormsResponsesBulkActionsPostArgs;
  '/wpcom/v2/memberships/product': WpcomV2MembershipsProductPostArgs;
  '/wpcom/v2/memberships/products': WpcomV2MembershipsProductsPostArgs;
  '/wpcom/v2/posts/(?P<postId>\\d+)/publicize': WpcomV2PostsPPostidDPublicizePostArgs;
  '/wpcom/v2/send-email-preview': WpcomV2SendEmailPreviewPostArgs;
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePatchPostPutArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPatchPostPutArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPatchPostPutArgs;
}

/**
 * All "wpcom/v2" PUT routes.
 */
export interface WpcomV2PutRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePatchPostPutArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPatchPostPutArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPatchPostPutArgs;
}

/**
 * All "wpcom/v2" WordPress REST API methods/routes.
 */
export interface WpcomV2Routes {
  Delete: WpcomV2DeleteRoutes;
  Get: WpcomV2GetRoutes;
  Patch: WpcomV2PatchRoutes;
  Post: WpcomV2PostRoutes;
  Put: WpcomV2PutRoutes;
}
