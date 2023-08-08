// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wpcom/v2" namespace

import {
  WpcomV2GetResponse,
  WpcomV2AdminMenuGetResponse,
  WpcomV2BusinessHoursLocalizedWeekGetResponse,
  WpcomV2CheckgoogledocvisibilityGetResponse,
  WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetResponse,
  WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteResponse,
  WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostResponse,
  WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetResponse,
  WpcomV2FollowingMineGetResponse,
  WpcomV2FormsResponsesGetResponse,
  WpcomV2FormsResponsesBulkActionsPostResponse,
  WpcomV2GutenbergAvailableExtensionsGetResponse,
  WpcomV2HelloGetResponse,
  WpcomV2InstagramGalleryConnectUrlGetResponse,
  WpcomV2InstagramGalleryConnectionsGetResponse,
  WpcomV2InstagramGalleryGalleryGetResponse,
  WpcomV2JetpackAiAiAssistantFeatureGetResponse,
  WpcomV2MailchimpGetResponse,
  WpcomV2MailchimpGroupsGetResponse,
  WpcomV2MembershipsProductPostResponse,
  WpcomV2MembershipsProductsPostResponse,
  WpcomV2MembershipsStatusGetResponse,
  WpcomV2PodcastPlayerGetResponse,
  WpcomV2PodcastPlayerTrackQuantityGetResponse,
  WpcomV2PostsPPostidDPublicizePostResponse,
  WpcomV2PublicizeConnectionTestResultsGetResponse,
  WpcomV2PublicizeConnectionsGetResponse,
  WpcomV2PublicizeServicesGetResponse,
  WpcomV2ResolveRedirectPUrlGetResponse,
  WpcomV2SearchGetResponse,
  WpcomV2SendEmailPreviewPostResponse,
  WpcomV2ServiceApiKeysPServiceAZGetResponse,
  WpcomV2ServiceApiKeysPServiceAZPatchResponse,
  WpcomV2ServiceApiKeysPServiceAZPostResponse,
  WpcomV2ServiceApiKeysPServiceAZPutResponse,
  WpcomV2ServiceApiKeysPServiceAZDeleteResponse,
  WpcomV2TemplateLoaderPTemplateTypeWGetResponse,
  WpcomV2TransientsPNameW1172DeleteResponse,
  WpcomV2TweetstormGatherGetResponse,
  WpcomV2TweetstormGenerateCardsPatchResponse,
  WpcomV2TweetstormGenerateCardsPostResponse,
  WpcomV2TweetstormGenerateCardsPutResponse,
  WpcomV2TweetstormParsePatchResponse,
  WpcomV2TweetstormParsePostResponse,
  WpcomV2TweetstormParsePutResponse,
  WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetResponse,
  WpcomV2VideopressPVideoGuidWPosterGetResponse,
  WpcomV2VideopressPVideoGuidWPosterPatchResponse,
  WpcomV2VideopressPVideoGuidWPosterPostResponse,
  WpcomV2VideopressPVideoGuidWPosterPutResponse,
  WpcomV2VideopressMetaPatchResponse,
  WpcomV2VideopressMetaPostResponse,
  WpcomV2VideopressMetaPutResponse,
  WpcomV2VideopressPlaybackJwtPVideoGuidWPatchResponse,
  WpcomV2VideopressPlaybackJwtPVideoGuidWPostResponse,
  WpcomV2VideopressPlaybackJwtPVideoGuidWPutResponse,
  WpcomV2VideopressUploadJwtPatchResponse,
  WpcomV2VideopressUploadJwtPostResponse,
  WpcomV2VideopressUploadJwtPutResponse,
} from './wpcom-v2-responses.js';

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
  '/wpcom/v2/external-media/connection/(?P<service>google_photos)': {
    args: WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteArgs;
    response: WpcomV2ExternalMediaConnectionPServiceGooglePhotosDeleteResponse;
  };
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': {
    args: WpcomV2ServiceApiKeysPServiceAZDeleteArgs;
    response: WpcomV2ServiceApiKeysPServiceAZDeleteResponse;
  };
  '/wpcom/v2/transients/(?P<name>\\w{1,172})': {
    args: WpcomV2TransientsPNameW1172DeleteArgs;
    response: WpcomV2TransientsPNameW1172DeleteResponse;
  };
}

/**
 * All "wpcom/v2" GET routes.
 */
export interface WpcomV2GetRoutes {
  '/wpcom/v2': {
    args: WpcomV2GetArgs;
    response: WpcomV2GetResponse;
  };
  '/wpcom/v2/admin-menu': {
    args: WpcomV2AdminMenuGetArgs;
    response: WpcomV2AdminMenuGetResponse;
  };
  '/wpcom/v2/business-hours/localized-week': {
    args: WpcomV2BusinessHoursLocalizedWeekGetArgs;
    response: WpcomV2BusinessHoursLocalizedWeekGetResponse;
  };
  '/wpcom/v2/checkGoogleDocVisibility': {
    args: WpcomV2CheckgoogledocvisibilityGetArgs;
    response: WpcomV2CheckgoogledocvisibilityGetResponse;
  };
  '/wpcom/v2/external-media/connection/(?P<service>google_photos)': {
    args: WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetArgs;
    response: WpcomV2ExternalMediaConnectionPServiceGooglePhotosGetResponse;
  };
  '/wpcom/v2/external-media/list/(?P<service>google_photos|openverse|pexels)': {
    args: WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetArgs;
    response: WpcomV2ExternalMediaListPServiceGooglePhotosOpenversePexelsGetResponse;
  };
  '/wpcom/v2/following/mine': {
    args: WpcomV2FollowingMineGetArgs;
    response: WpcomV2FollowingMineGetResponse;
  };
  '/wpcom/v2/forms/responses': {
    args: WpcomV2FormsResponsesGetArgs;
    response: WpcomV2FormsResponsesGetResponse;
  };
  '/wpcom/v2/gutenberg/available-extensions': {
    args: WpcomV2GutenbergAvailableExtensionsGetArgs;
    response: WpcomV2GutenbergAvailableExtensionsGetResponse;
  };
  '/wpcom/v2/hello': {
    args: WpcomV2HelloGetArgs;
    response: WpcomV2HelloGetResponse;
  };
  '/wpcom/v2/instagram-gallery/connect-url': {
    args: WpcomV2InstagramGalleryConnectUrlGetArgs;
    response: WpcomV2InstagramGalleryConnectUrlGetResponse;
  };
  '/wpcom/v2/instagram-gallery/connections': {
    args: WpcomV2InstagramGalleryConnectionsGetArgs;
    response: WpcomV2InstagramGalleryConnectionsGetResponse;
  };
  '/wpcom/v2/instagram-gallery/gallery': {
    args: WpcomV2InstagramGalleryGalleryGetArgs;
    response: WpcomV2InstagramGalleryGalleryGetResponse;
  };
  '/wpcom/v2/jetpack-ai/ai-assistant-feature': {
    args: WpcomV2JetpackAiAiAssistantFeatureGetArgs;
    response: WpcomV2JetpackAiAiAssistantFeatureGetResponse;
  };
  '/wpcom/v2/mailchimp': {
    args: WpcomV2MailchimpGetArgs;
    response: WpcomV2MailchimpGetResponse;
  };
  '/wpcom/v2/mailchimp/groups': {
    args: WpcomV2MailchimpGroupsGetArgs;
    response: WpcomV2MailchimpGroupsGetResponse;
  };
  '/wpcom/v2/memberships/status': {
    args: WpcomV2MembershipsStatusGetArgs;
    response: WpcomV2MembershipsStatusGetResponse;
  };
  '/wpcom/v2/podcast-player': {
    args: WpcomV2PodcastPlayerGetArgs;
    response: WpcomV2PodcastPlayerGetResponse;
  };
  '/wpcom/v2/podcast-player/track-quantity': {
    args: WpcomV2PodcastPlayerTrackQuantityGetArgs;
    response: WpcomV2PodcastPlayerTrackQuantityGetResponse;
  };
  '/wpcom/v2/publicize/connection-test-results': {
    args: WpcomV2PublicizeConnectionTestResultsGetArgs;
    response: WpcomV2PublicizeConnectionTestResultsGetResponse;
  };
  '/wpcom/v2/publicize/connections': {
    args: WpcomV2PublicizeConnectionsGetArgs;
    response: WpcomV2PublicizeConnectionsGetResponse;
  };
  '/wpcom/v2/publicize/services': {
    args: WpcomV2PublicizeServicesGetArgs;
    response: WpcomV2PublicizeServicesGetResponse;
  };
  '/wpcom/v2/resolve-redirect/?(?P<url>.+)?': {
    args: WpcomV2ResolveRedirectPUrlGetArgs;
    response: WpcomV2ResolveRedirectPUrlGetResponse;
  };
  '/wpcom/v2/search': {
    args: WpcomV2SearchGetArgs;
    response: WpcomV2SearchGetResponse;
  };
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': {
    args: WpcomV2ServiceApiKeysPServiceAZGetArgs;
    response: WpcomV2ServiceApiKeysPServiceAZGetResponse;
  };
  '/wpcom/v2/template-loader/(?P<template_type>\\w+)': {
    args: WpcomV2TemplateLoaderPTemplateTypeWGetArgs;
    response: WpcomV2TemplateLoaderPTemplateTypeWGetResponse;
  };
  '/wpcom/v2/tweetstorm/gather': {
    args: WpcomV2TweetstormGatherGetArgs;
    response: WpcomV2TweetstormGatherGetResponse;
  };
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/check-ownership/(?P<post_id>\\d+)': {
    args: WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetArgs;
    response: WpcomV2VideopressPVideoGuidWCheckOwnershipPPostIdDGetResponse;
  };
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': {
    args: WpcomV2VideopressPVideoGuidWPosterGetArgs;
    response: WpcomV2VideopressPVideoGuidWPosterGetResponse;
  };
}

/**
 * All "wpcom/v2" PATCH routes.
 */
export interface WpcomV2PatchRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': {
    args: WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
    response: WpcomV2ServiceApiKeysPServiceAZPatchResponse;
  };
  '/wpcom/v2/tweetstorm/generate-cards': {
    args: WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
    response: WpcomV2TweetstormGenerateCardsPatchResponse;
  };
  '/wpcom/v2/tweetstorm/parse': {
    args: WpcomV2TweetstormParsePatchPostPutArgs;
    response: WpcomV2TweetstormParsePatchResponse;
  };
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': {
    args: WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
    response: WpcomV2VideopressPVideoGuidWPosterPatchResponse;
  };
  '/wpcom/v2/videopress/meta': {
    args: WpcomV2VideopressMetaPatchPostPutArgs;
    response: WpcomV2VideopressMetaPatchResponse;
  };
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': {
    args: WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
    response: WpcomV2VideopressPlaybackJwtPVideoGuidWPatchResponse;
  };
  '/wpcom/v2/videopress/upload-jwt': {
    args: WpcomV2VideopressUploadJwtPatchPostPutArgs;
    response: WpcomV2VideopressUploadJwtPatchResponse;
  };
}

/**
 * All "wpcom/v2" POST routes.
 */
export interface WpcomV2PostRoutes {
  '/wpcom/v2/external-media/copy/(?P<service>google_photos|openverse|pexels)': {
    args: WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostArgs;
    response: WpcomV2ExternalMediaCopyPServiceGooglePhotosOpenversePexelsPostResponse;
  };
  '/wpcom/v2/forms/responses/bulk_actions': {
    args: WpcomV2FormsResponsesBulkActionsPostArgs;
    response: WpcomV2FormsResponsesBulkActionsPostResponse;
  };
  '/wpcom/v2/memberships/product': {
    args: WpcomV2MembershipsProductPostArgs;
    response: WpcomV2MembershipsProductPostResponse;
  };
  '/wpcom/v2/memberships/products': {
    args: WpcomV2MembershipsProductsPostArgs;
    response: WpcomV2MembershipsProductsPostResponse;
  };
  '/wpcom/v2/posts/(?P<postId>\\d+)/publicize': {
    args: WpcomV2PostsPPostidDPublicizePostArgs;
    response: WpcomV2PostsPPostidDPublicizePostResponse;
  };
  '/wpcom/v2/send-email-preview': {
    args: WpcomV2SendEmailPreviewPostArgs;
    response: WpcomV2SendEmailPreviewPostResponse;
  };
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': {
    args: WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
    response: WpcomV2ServiceApiKeysPServiceAZPostResponse;
  };
  '/wpcom/v2/tweetstorm/generate-cards': {
    args: WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
    response: WpcomV2TweetstormGenerateCardsPostResponse;
  };
  '/wpcom/v2/tweetstorm/parse': {
    args: WpcomV2TweetstormParsePatchPostPutArgs;
    response: WpcomV2TweetstormParsePostResponse;
  };
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': {
    args: WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
    response: WpcomV2VideopressPVideoGuidWPosterPostResponse;
  };
  '/wpcom/v2/videopress/meta': {
    args: WpcomV2VideopressMetaPatchPostPutArgs;
    response: WpcomV2VideopressMetaPostResponse;
  };
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': {
    args: WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
    response: WpcomV2VideopressPlaybackJwtPVideoGuidWPostResponse;
  };
  '/wpcom/v2/videopress/upload-jwt': {
    args: WpcomV2VideopressUploadJwtPatchPostPutArgs;
    response: WpcomV2VideopressUploadJwtPostResponse;
  };
}

/**
 * All "wpcom/v2" PUT routes.
 */
export interface WpcomV2PutRoutes {
  '/wpcom/v2/service-api-keys/(?P<service>[a-z\\-_]+)': {
    args: WpcomV2ServiceApiKeysPServiceAZPatchPostPutArgs;
    response: WpcomV2ServiceApiKeysPServiceAZPutResponse;
  };
  '/wpcom/v2/tweetstorm/generate-cards': {
    args: WpcomV2TweetstormGenerateCardsPatchPostPutArgs;
    response: WpcomV2TweetstormGenerateCardsPutResponse;
  };
  '/wpcom/v2/tweetstorm/parse': {
    args: WpcomV2TweetstormParsePatchPostPutArgs;
    response: WpcomV2TweetstormParsePutResponse;
  };
  '/wpcom/v2/videopress/(?P<video_guid>\\w+)/poster': {
    args: WpcomV2VideopressPVideoGuidWPosterPatchPostPutArgs;
    response: WpcomV2VideopressPVideoGuidWPosterPutResponse;
  };
  '/wpcom/v2/videopress/meta': {
    args: WpcomV2VideopressMetaPatchPostPutArgs;
    response: WpcomV2VideopressMetaPutResponse;
  };
  '/wpcom/v2/videopress/playback-jwt/(?P<video_guid>\\w+)': {
    args: WpcomV2VideopressPlaybackJwtPVideoGuidWPatchPostPutArgs;
    response: WpcomV2VideopressPlaybackJwtPVideoGuidWPutResponse;
  };
  '/wpcom/v2/videopress/upload-jwt': {
    args: WpcomV2VideopressUploadJwtPatchPostPutArgs;
    response: WpcomV2VideopressUploadJwtPutResponse;
  };
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
