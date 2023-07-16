export interface WpcomV2GetArgs {}

export interface WpcomV2AdminMenuGetArgs {}

export interface WpcomV2BusinessHoursLocalizedWeekGetArgs {}

export interface WpcomV2CheckgoogledocvisibilityGetArgs {}

export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetArgs {}

export interface WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs {}

export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgsMedia {}

export interface WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs {
  /** Media data to copy. */
  media: WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgsMedia[];
  /** The post ID to attach the upload to. */
  post_id?: number;
}

export interface WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetArgs {
  /** Number of media items in the request */
  number?: number;
  page_handle?: string;
  path?: string;
  /** Media collection search term. */
  search?: string;
}

export interface WpcomV2FollowingMineGetArgs {
  ignore_user_blogs?: boolean;
}

export interface WpcomV2FormsResponsesGetArgs {
  form_id?: number;
  limit?: number;
  offset?: number;
  search?: string;
}

export interface WpcomV2FormsResponsesBulkActionsPostArgs {}

export interface WpcomV2GutenbergAvailableExtensionsGetArgs {}

export interface WpcomV2HelloGetArgs {}

export interface WpcomV2InstagramGalleryConnectUrlGetArgs {}

export interface WpcomV2InstagramGalleryConnectionsGetArgs {}

export interface WpcomV2InstagramGalleryGalleryGetArgs {
  /** An Instagram Keyring access token. */
  access_token: number;
  /** How many Instagram posts? */
  count: number;
}

export interface WpcomV2JetpackAiAiAssistantFeatureGetArgs {}

export interface WpcomV2MailchimpGetArgs {}

export interface WpcomV2MailchimpGroupsGetArgs {}

export interface WpcomV2MembershipsProductPostArgs {
  buyer_can_change_amount?: boolean;
  currency: string;
  interval: string;
  is_editable?: boolean;
  price: number;
  title: string;
}

export interface WpcomV2MembershipsProductsPostArgs {}

export interface WpcomV2MembershipsStatusGetArgs {
  is_editable?: boolean;
  source?: string;
  type?: string;
}

export interface WpcomV2PodcastPlayerGetArgsGuids {}

export interface WpcomV2PodcastPlayerGetArgs {
  /** Whether we should return the episodes list for use in the selection UI */
  'episode-options': boolean;
  /** A list of unique identifiers for fetching specific podcast episodes. */
  guids: WpcomV2PodcastPlayerGetArgsGuids[];
  /** The Podcast RSS feed URL. */
  url: string;
}

export interface WpcomV2PodcastPlayerTrackQuantityGetArgs {}

export interface WpcomV2PostsPPostidDPublicizePostArgsSkippedConnections {}

export interface WpcomV2PostsPPostidDPublicizePostArgs {
  /** The message to share. */
  message: string;
  /** Array of external connection IDs to skip sharing. */
  skipped_connections?: WpcomV2PostsPPostidDPublicizePostArgsSkippedConnections[];
}

export interface WpcomV2PublicizeConnectionTestResultsGetArgs {}

export interface WpcomV2PublicizeConnectionsGetArgs {}

export interface WpcomV2PublicizeServicesGetArgs {}

export interface WpcomV2ResolveRedirectPUrlGetArgs {
  /** The URL to check for redirects. */
  url: string;
}

export interface WpcomV2SearchGetArgs {}

export interface WpcomV2SendEmailPreviewPostArgs {
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpcomV2ServiceApiKeysPServiceAZGetArgs {}

export interface WpcomV2ServiceApiKeysPServiceAZPostPutPatchArgs {
  service_api_key: string;
}

export interface WpcomV2ServiceApiKeysPServiceAZDeleteArgs {}

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

export interface WpcomV2TweetstormGenerateCardsPostPutPatchArgsUrls {}

export interface WpcomV2TweetstormGenerateCardsPostPutPatchArgs {
  /** An array of URLs to generate Twitter card details for. */
  urls: WpcomV2TweetstormGenerateCardsPostPutPatchArgsUrls[];
}

export interface WpcomV2TweetstormParsePostPutPatchArgsBlocks {}

export interface WpcomV2TweetstormParsePostPutPatchArgs {
  /** An array of serialized blocks, and editor-specific block information. */
  blocks: WpcomV2TweetstormParsePostPutPatchArgsBlocks[];
}

export interface WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetArgs {}

export interface WpcomV2VideopressPVideoGuidWPosterGetArgs {}

export interface WpcomV2VideopressPVideoGuidWPosterPostPutPatchArgs {
  /** The time in the video to use as the poster frame. */
  at_time?: number;
  /** Whether the time is in milliseconds or seconds. */
  is_millisec?: boolean;
  /** The attachment id of the poster image. */
  poster_attachment_id?: number;
}

export interface WpcomV2VideopressMetaPostPutPatchArgs {
  /** Display download option and allow viewers to download this video */
  allow_download?: boolean;
  /** The caption of the video. */
  caption?: string;
  /** The description of the video. */
  description?: string;
  /** Display the share menu in the player. */
  display_embed?: boolean;
  /** The post id for the attachment. */
  id: number;
  /** How to determine if the video should be public or private */
  privacy_setting?: number;
  /** The video content rating. One of G, PG-13 or R-17 */
  rating?: string;
  /** The title of the video. */
  title?: string;
}

export interface WpcomV2VideopressPlaybackJwtPVideoGuidWPostPutPatchArgs {}

export interface WpcomV2VideopressUploadJwtPostPutPatchArgs {}

export interface WpcomV2DeleteRoutes {
  '/wpcom/v2/external-media/connection/(?P<service>google_photos)': WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs;
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZDeleteArgs;
  '/wpcom/v2/transients/(?P<name>\\w{1,172})': WpcomV2TransientsPNameW1172DeleteArgs;
}

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

export interface WpcomV2PatchRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePostPutPatchArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPostPutPatchArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPostPutPatchArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPostPutPatchArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPostPutPatchArgs;
}

export interface WpcomV2PostRoutes {
  '/wpcom/v2/external-media/copy/(?P<service>google_photos|openverse|pexels)': WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs;
  '/wpcom/v2/forms/responses/bulk_actions': WpcomV2FormsResponsesBulkActionsPostArgs;
  '/wpcom/v2/memberships/product': WpcomV2MembershipsProductPostArgs;
  '/wpcom/v2/memberships/products': WpcomV2MembershipsProductsPostArgs;
  '/wpcom/v2/posts/(?P<postId>\\d+)/publicize': WpcomV2PostsPPostidDPublicizePostArgs;
  '/wpcom/v2/send-email-preview': WpcomV2SendEmailPreviewPostArgs;
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePostPutPatchArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPostPutPatchArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPostPutPatchArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPostPutPatchArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPostPutPatchArgs;
}

export interface WpcomV2PutRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': WpcomV2ServiceApiKeysPServiceAZPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/generate-cards': WpcomV2TweetstormGenerateCardsPostPutPatchArgs;
  '/wpcom/v2/tweetstorm/parse': WpcomV2TweetstormParsePostPutPatchArgs;
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': WpcomV2VideopressPVideoGuidWPosterPostPutPatchArgs;
  '/wpcom/v2/videopress/meta': WpcomV2VideopressMetaPostPutPatchArgs;
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': WpcomV2VideopressPlaybackJwtPVideoGuidWPostPutPatchArgs;
  '/wpcom/v2/videopress/upload-jwt': WpcomV2VideopressUploadJwtPostPutPatchArgs;
}
