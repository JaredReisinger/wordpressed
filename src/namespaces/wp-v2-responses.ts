// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "wp/v2" responses

/**
 * Response for `/wp/v2` route when calling GET method.
 */
export interface WpV2GetResponse {}

/**
 * Response for `/wp/v2/block-directory/search` route when calling GET method.
 */
export interface WpV2BlockDirectorySearchGetResponse {}

/**
 * Response for `/wp/v2/block-patterns/categories` route when calling GET method.
 */
export interface WpV2BlockPatternsCategoriesGetResponse {}

/**
 * Response for `/wp/v2/block-patterns/patterns` route when calling GET method.
 */
export interface WpV2BlockPatternsPatternsGetResponse {}

/**
 * Response for `/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)` route when calling GET method.
 */
export interface WpV2BlockRendererPNameAZ09AZ09GetResponse {}

/**
 * Response for `/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)` route when calling POST method.
 */
export interface WpV2BlockRendererPNameAZ09AZ09PostResponse {}

/**
 * Response for `/wp/v2/block-types` route when calling GET method.
 */
export interface WpV2BlockTypesGetResponse {}

/**
 * Response for `/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)` route when calling GET method.
 */
export interface WpV2BlockTypesPNamespaceAZaZ09GetResponse {}

/**
 * Response for `/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)` route when calling GET method.
 */
export interface WpV2BlockTypesPNamespaceAZaZ09PNameAZaZ09GetResponse {}

/**
 * Response for `/wp/v2/blocks` route when calling GET method.
 */
export interface WpV2BlocksGetResponse {}

/**
 * Response for `/wp/v2/blocks` route when calling POST method.
 */
export interface WpV2BlocksPostResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2BlocksPIdDGetResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2BlocksPIdDPatchResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2BlocksPIdDPostResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2BlocksPIdDPutResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2BlocksPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2BlocksPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2BlocksPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2BlocksPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2BlocksPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2BlocksPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/blocks/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2BlocksPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/categories` route when calling GET method.
 */
export interface WpV2CategoriesGetResponse {}

/**
 * Response for `/wp/v2/categories` route when calling POST method.
 */
export interface WpV2CategoriesPostResponse {}

/**
 * Response for `/wp/v2/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2CategoriesPIdDGetResponse {}

/**
 * Response for `/wp/v2/categories/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2CategoriesPIdDPatchResponse {}

/**
 * Response for `/wp/v2/categories/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2CategoriesPIdDPostResponse {}

/**
 * Response for `/wp/v2/categories/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2CategoriesPIdDPutResponse {}

/**
 * Response for `/wp/v2/categories/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2CategoriesPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/comments` route when calling GET method.
 */
export interface WpV2CommentsGetResponse {}

/**
 * Response for `/wp/v2/comments` route when calling POST method.
 */
export interface WpV2CommentsPostResponse {}

/**
 * Response for `/wp/v2/comments/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2CommentsPIdDGetResponse {}

/**
 * Response for `/wp/v2/comments/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2CommentsPIdDPatchResponse {}

/**
 * Response for `/wp/v2/comments/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2CommentsPIdDPostResponse {}

/**
 * Response for `/wp/v2/comments/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2CommentsPIdDPutResponse {}

/**
 * Response for `/wp/v2/comments/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2CommentsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/feedback` route when calling GET method.
 */
export interface WpV2FeedbackGetResponse {}

/**
 * Response for `/wp/v2/feedback` route when calling POST method.
 */
export interface WpV2FeedbackPostResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2FeedbackPIdDGetResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2FeedbackPIdDPatchResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2FeedbackPIdDPostResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2FeedbackPIdDPutResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2FeedbackPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2FeedbackPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2FeedbackPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/feedback/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2FeedbackPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/global-styles/(?P<id>[\/\w-]+)` route when calling GET method.
 */
export interface WpV2GlobalStylesPIdWGetResponse {}

/**
 * Response for `/wp/v2/global-styles/(?P<id>[\/\w-]+)` route when calling PATCH method.
 */
export interface WpV2GlobalStylesPIdWPatchResponse {}

/**
 * Response for `/wp/v2/global-styles/(?P<id>[\/\w-]+)` route when calling POST method.
 */
export interface WpV2GlobalStylesPIdWPostResponse {}

/**
 * Response for `/wp/v2/global-styles/(?P<id>[\/\w-]+)` route when calling PUT method.
 */
export interface WpV2GlobalStylesPIdWPutResponse {}

/**
 * Response for `/wp/v2/global-styles/themes/(?P<stylesheet>[\/\s%\w\.\(\)\[\]\@_\-]+)/variations` route when calling GET method.
 */
export interface WpV2GlobalStylesThemesPStylesheetSWVariationsGetResponse {}

/**
 * Response for `/wp/v2/global-styles/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)` route when calling GET method.
 */
export interface WpV2GlobalStylesThemesPStylesheetGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_order` route when calling GET method.
 */
export interface WpV2JpPayOrderGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_order` route when calling POST method.
 */
export interface WpV2JpPayOrderPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2JpPayOrderPIdDGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2JpPayOrderPIdDPatchResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2JpPayOrderPIdDPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2JpPayOrderPIdDPutResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2JpPayOrderPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2JpPayOrderPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2JpPayOrderPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_order/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2JpPayOrderPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_product` route when calling GET method.
 */
export interface WpV2JpPayProductGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_product` route when calling POST method.
 */
export interface WpV2JpPayProductPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2JpPayProductPIdDGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2JpPayProductPIdDPatchResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2JpPayProductPIdDPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2JpPayProductPIdDPutResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2JpPayProductPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2JpPayProductPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2JpPayProductPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/jp_pay_product/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2JpPayProductPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie` route when calling GET method.
 */
export interface WpV2KadenceLottieGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie` route when calling POST method.
 */
export interface WpV2KadenceLottiePostResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2KadenceLottiePIdDGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2KadenceLottiePIdDPatchResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2KadenceLottiePIdDPostResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2KadenceLottiePIdDPutResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2KadenceLottiePIdDDeleteResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2KadenceLottiePIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2KadenceLottiePIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2KadenceLottiePParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2KadenceLottiePParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2KadenceLottiePParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/kadence_lottie/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2KadenceLottiePParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/media` route when calling GET method.
 */
export interface WpV2MediaGetResponse {}

/**
 * Response for `/wp/v2/media` route when calling POST method.
 */
export interface WpV2MediaPostResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2MediaPIdDGetResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2MediaPIdDPatchResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2MediaPIdDPostResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2MediaPIdDPutResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2MediaPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)/edit` route when calling POST method.
 */
export interface WpV2MediaPIdDEditPostResponse {}

/**
 * Response for `/wp/v2/media/(?P<id>[\d]+)/post-process` route when calling POST method.
 */
export interface WpV2MediaPIdDPostProcessPostResponse {}

/**
 * Response for `/wp/v2/menu-items` route when calling GET method.
 */
export interface WpV2MenuItemsGetResponse {}

/**
 * Response for `/wp/v2/menu-items` route when calling POST method.
 */
export interface WpV2MenuItemsPostResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2MenuItemsPIdDGetResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2MenuItemsPIdDPatchResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2MenuItemsPIdDPostResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2MenuItemsPIdDPutResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2MenuItemsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2MenuItemsPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2MenuItemsPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/menu-items/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2MenuItemsPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/menu-locations` route when calling GET method.
 */
export interface WpV2MenuLocationsGetResponse {}

/**
 * Response for `/wp/v2/menu-locations/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WpV2MenuLocationsPLocationWGetResponse {}

/**
 * Response for `/wp/v2/menus` route when calling GET method.
 */
export interface WpV2MenusGetResponse {}

/**
 * Response for `/wp/v2/menus` route when calling POST method.
 */
export interface WpV2MenusPostResponse {}

/**
 * Response for `/wp/v2/menus/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2MenusPIdDGetResponse {}

/**
 * Response for `/wp/v2/menus/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2MenusPIdDPatchResponse {}

/**
 * Response for `/wp/v2/menus/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2MenusPIdDPostResponse {}

/**
 * Response for `/wp/v2/menus/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2MenusPIdDPutResponse {}

/**
 * Response for `/wp/v2/menus/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2MenusPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/navigation` route when calling GET method.
 */
export interface WpV2NavigationGetResponse {}

/**
 * Response for `/wp/v2/navigation` route when calling POST method.
 */
export interface WpV2NavigationPostResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2NavigationPIdDGetResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2NavigationPIdDPatchResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2NavigationPIdDPostResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2NavigationPIdDPutResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2NavigationPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2NavigationPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2NavigationPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2NavigationPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2NavigationPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2NavigationPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/navigation/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2NavigationPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/pages` route when calling GET method.
 */
export interface WpV2PagesGetResponse {}

/**
 * Response for `/wp/v2/pages` route when calling POST method.
 */
export interface WpV2PagesPostResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PagesPIdDGetResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2PagesPIdDPatchResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2PagesPIdDPostResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2PagesPIdDPutResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2PagesPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2PagesPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/pages/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2PagesPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/pages/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PagesPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/pages/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2PagesPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PagesPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2PagesPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/pattern-directory/patterns` route when calling GET method.
 */
export interface WpV2PatternDirectoryPatternsGetResponse {}

/**
 * Response for `/wp/v2/plugins` route when calling GET method.
 */
export interface WpV2PluginsGetResponse {}

/**
 * Response for `/wp/v2/plugins` route when calling POST method.
 */
export interface WpV2PluginsPostResponse {}

/**
 * Response for `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling GET method.
 */
export interface WpV2PluginsPPluginGetResponse {}

/**
 * Response for `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling PATCH method.
 */
export interface WpV2PluginsPPluginPatchResponse {}

/**
 * Response for `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling POST method.
 */
export interface WpV2PluginsPPluginPostResponse {}

/**
 * Response for `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling PUT method.
 */
export interface WpV2PluginsPPluginPutResponse {}

/**
 * Response for `/wp/v2/plugins/(?P<plugin>[^.\/]+(?:\/[^.\/]+)?)` route when calling DELETE method.
 */
export interface WpV2PluginsPPluginDeleteResponse {}

/**
 * Response for `/wp/v2/posts` route when calling GET method.
 */
export interface WpV2PostsGetResponse {}

/**
 * Response for `/wp/v2/posts` route when calling POST method.
 */
export interface WpV2PostsPostResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PostsPIdDGetResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2PostsPIdDPatchResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2PostsPIdDPostResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2PostsPIdDPutResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2PostsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2PostsPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/posts/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2PostsPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/posts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PostsPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/posts/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2PostsPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2PostsPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2PostsPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/product` route when calling GET method.
 */
export interface WpV2ProductGetResponse {}

/**
 * Response for `/wp/v2/product` route when calling POST method.
 */
export interface WpV2ProductPostResponse {}

/**
 * Response for `/wp/v2/product_cat` route when calling GET method.
 */
export interface WpV2ProductCatGetResponse {}

/**
 * Response for `/wp/v2/product_cat` route when calling POST method.
 */
export interface WpV2ProductCatPostResponse {}

/**
 * Response for `/wp/v2/product_cat/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2ProductCatPIdDGetResponse {}

/**
 * Response for `/wp/v2/product_cat/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2ProductCatPIdDPatchResponse {}

/**
 * Response for `/wp/v2/product_cat/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2ProductCatPIdDPostResponse {}

/**
 * Response for `/wp/v2/product_cat/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2ProductCatPIdDPutResponse {}

/**
 * Response for `/wp/v2/product_cat/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2ProductCatPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/product_tag` route when calling GET method.
 */
export interface WpV2ProductTagGetResponse {}

/**
 * Response for `/wp/v2/product_tag` route when calling POST method.
 */
export interface WpV2ProductTagPostResponse {}

/**
 * Response for `/wp/v2/product_tag/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2ProductTagPIdDGetResponse {}

/**
 * Response for `/wp/v2/product_tag/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2ProductTagPIdDPatchResponse {}

/**
 * Response for `/wp/v2/product_tag/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2ProductTagPIdDPostResponse {}

/**
 * Response for `/wp/v2/product_tag/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2ProductTagPIdDPutResponse {}

/**
 * Response for `/wp/v2/product_tag/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2ProductTagPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2ProductPIdDGetResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2ProductPIdDPatchResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2ProductPIdDPostResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2ProductPIdDPutResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2ProductPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2ProductPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/product/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2ProductPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/product/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2ProductPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/search` route when calling GET method.
 */
export interface WpV2SearchGetResponse {}

/**
 * Response for `/wp/v2/settings` route when calling GET method.
 */
export interface WpV2SettingsGetResponse {}

/**
 * Response for `/wp/v2/settings` route when calling PATCH method.
 */
export interface WpV2SettingsPatchResponse {}

/**
 * Response for `/wp/v2/settings` route when calling POST method.
 */
export interface WpV2SettingsPostResponse {}

/**
 * Response for `/wp/v2/settings` route when calling PUT method.
 */
export interface WpV2SettingsPutResponse {}

/**
 * Response for `/wp/v2/sidebars` route when calling GET method.
 */
export interface WpV2SidebarsGetResponse {}

/**
 * Response for `/wp/v2/sidebars/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WpV2SidebarsPIdWGetResponse {}

/**
 * Response for `/wp/v2/sidebars/(?P<id>[\w-]+)` route when calling PATCH method.
 */
export interface WpV2SidebarsPIdWPatchResponse {}

/**
 * Response for `/wp/v2/sidebars/(?P<id>[\w-]+)` route when calling POST method.
 */
export interface WpV2SidebarsPIdWPostResponse {}

/**
 * Response for `/wp/v2/sidebars/(?P<id>[\w-]+)` route when calling PUT method.
 */
export interface WpV2SidebarsPIdWPutResponse {}

/**
 * Response for `/wp/v2/spectra-popup` route when calling GET method.
 */
export interface WpV2SpectraPopupGetResponse {}

/**
 * Response for `/wp/v2/spectra-popup` route when calling POST method.
 */
export interface WpV2SpectraPopupPostResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2SpectraPopupPIdDGetResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2SpectraPopupPIdDPatchResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2SpectraPopupPIdDPostResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2SpectraPopupPIdDPutResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2SpectraPopupPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2SpectraPopupPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2SpectraPopupPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/spectra-popup/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2SpectraPopupPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/statuses` route when calling GET method.
 */
export interface WpV2StatusesGetResponse {}

/**
 * Response for `/wp/v2/statuses/(?P<status>[\w-]+)` route when calling GET method.
 */
export interface WpV2StatusesPStatusWGetResponse {}

/**
 * Response for `/wp/v2/tags` route when calling GET method.
 */
export interface WpV2TagsGetResponse {}

/**
 * Response for `/wp/v2/tags` route when calling POST method.
 */
export interface WpV2TagsPostResponse {}

/**
 * Response for `/wp/v2/tags/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2TagsPIdDGetResponse {}

/**
 * Response for `/wp/v2/tags/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2TagsPIdDPatchResponse {}

/**
 * Response for `/wp/v2/tags/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2TagsPIdDPostResponse {}

/**
 * Response for `/wp/v2/tags/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2TagsPIdDPutResponse {}

/**
 * Response for `/wp/v2/tags/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2TagsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/taxonomies` route when calling GET method.
 */
export interface WpV2TaxonomiesGetResponse {}

/**
 * Response for `/wp/v2/taxonomies/(?P<taxonomy>[\w-]+)` route when calling GET method.
 */
export interface WpV2TaxonomiesPTaxonomyWGetResponse {}

/**
 * Response for `/wp/v2/template-parts` route when calling GET method.
 */
export interface WpV2TemplatePartsGetResponse {}

/**
 * Response for `/wp/v2/template-parts` route when calling POST method.
 */
export interface WpV2TemplatePartsPostResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling GET method.
 */
export interface WpV2TemplatePartsPIdWGetResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling PATCH method.
 */
export interface WpV2TemplatePartsPIdWPatchResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling POST method.
 */
export interface WpV2TemplatePartsPIdWPostResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling PUT method.
 */
export interface WpV2TemplatePartsPIdWPutResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling DELETE method.
 */
export interface WpV2TemplatePartsPIdWDeleteResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2TemplatePartsPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2TemplatePartsPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2TemplatePartsPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2TemplatePartsPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2TemplatePartsPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/template-parts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2TemplatePartsPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/template-parts/lookup` route when calling GET method.
 */
export interface WpV2TemplatePartsLookupGetResponse {}

/**
 * Response for `/wp/v2/templates` route when calling GET method.
 */
export interface WpV2TemplatesGetResponse {}

/**
 * Response for `/wp/v2/templates` route when calling POST method.
 */
export interface WpV2TemplatesPostResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling GET method.
 */
export interface WpV2TemplatesPIdWGetResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling PATCH method.
 */
export interface WpV2TemplatesPIdWPatchResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling POST method.
 */
export interface WpV2TemplatesPIdWPostResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling PUT method.
 */
export interface WpV2TemplatesPIdWPutResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>([^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)[\/\w%-]+)` route when calling DELETE method.
 */
export interface WpV2TemplatesPIdWDeleteResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>[\d]+)/autosaves` route when calling GET method.
 */
export interface WpV2TemplatesPIdDAutosavesGetResponse {}

/**
 * Response for `/wp/v2/templates/(?P<id>[\d]+)/autosaves` route when calling POST method.
 */
export interface WpV2TemplatesPIdDAutosavesPostResponse {}

/**
 * Response for `/wp/v2/templates/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2TemplatesPParentDAutosavesPIdDGetResponse {}

/**
 * Response for `/wp/v2/templates/(?P<parent>[\d]+)/revisions` route when calling GET method.
 */
export interface WpV2TemplatesPParentDRevisionsGetResponse {}

/**
 * Response for `/wp/v2/templates/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2TemplatesPParentDRevisionsPIdDGetResponse {}

/**
 * Response for `/wp/v2/templates/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2TemplatesPParentDRevisionsPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/templates/lookup` route when calling GET method.
 */
export interface WpV2TemplatesLookupGetResponse {}

/**
 * Response for `/wp/v2/themes` route when calling GET method.
 */
export interface WpV2ThemesGetResponse {}

/**
 * Response for `/wp/v2/themes/(?P<stylesheet>[^\/:<>\*\?"\|]+(?:\/[^\/:<>\*\?"\|]+)?)` route when calling GET method.
 */
export interface WpV2ThemesPStylesheetGetResponse {}

/**
 * Response for `/wp/v2/types` route when calling GET method.
 */
export interface WpV2TypesGetResponse {}

/**
 * Response for `/wp/v2/types/(?P<type>[\w-]+)` route when calling GET method.
 */
export interface WpV2TypesPTypeWGetResponse {}

/**
 * Response for `/wp/v2/users` route when calling GET method.
 */
export interface WpV2UsersGetResponse {}

/**
 * Response for `/wp/v2/users` route when calling POST method.
 */
export interface WpV2UsersPostResponse {}

/**
 * Response for `/wp/v2/users/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WpV2UsersPIdDGetResponse {}

/**
 * Response for `/wp/v2/users/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WpV2UsersPIdDPatchResponse {}

/**
 * Response for `/wp/v2/users/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WpV2UsersPIdDPostResponse {}

/**
 * Response for `/wp/v2/users/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WpV2UsersPIdDPutResponse {}

/**
 * Response for `/wp/v2/users/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WpV2UsersPIdDDeleteResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords` route when calling GET method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsGetResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords` route when calling POST method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPostResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords` route when calling DELETE method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsDeleteResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)` route when calling GET method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWGetResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)` route when calling PATCH method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPatchResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)` route when calling POST method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)` route when calling PUT method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPutResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/(?P<uuid>[\w\-]+)` route when calling DELETE method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWDeleteResponse {}

/**
 * Response for `/wp/v2/users/(?P<user_id>(?:[\d]+|me))/application-passwords/introspect` route when calling GET method.
 */
export interface WpV2UsersPUserIdDMeApplicationPasswordsIntrospectGetResponse {}

/**
 * Response for `/wp/v2/users/me` route when calling GET method.
 */
export interface WpV2UsersMeGetResponse {}

/**
 * Response for `/wp/v2/users/me` route when calling PATCH method.
 */
export interface WpV2UsersMePatchResponse {}

/**
 * Response for `/wp/v2/users/me` route when calling POST method.
 */
export interface WpV2UsersMePostResponse {}

/**
 * Response for `/wp/v2/users/me` route when calling PUT method.
 */
export interface WpV2UsersMePutResponse {}

/**
 * Response for `/wp/v2/users/me` route when calling DELETE method.
 */
export interface WpV2UsersMeDeleteResponse {}

/**
 * Response for `/wp/v2/widget-types` route when calling GET method.
 */
export interface WpV2WidgetTypesGetResponse {}

/**
 * Response for `/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)` route when calling GET method.
 */
export interface WpV2WidgetTypesPIdAZaZ09GetResponse {}

/**
 * Response for `/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode` route when calling POST method.
 */
export interface WpV2WidgetTypesPIdAZaZ09EncodePostResponse {}

/**
 * Response for `/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/render` route when calling POST method.
 */
export interface WpV2WidgetTypesPIdAZaZ09RenderPostResponse {}

/**
 * Response for `/wp/v2/widgets` route when calling GET method.
 */
export interface WpV2WidgetsGetResponse {}

/**
 * Response for `/wp/v2/widgets` route when calling POST method.
 */
export interface WpV2WidgetsPostResponse {}

/**
 * Response for `/wp/v2/widgets/(?P<id>[\w\-]+)` route when calling GET method.
 */
export interface WpV2WidgetsPIdWGetResponse {}

/**
 * Response for `/wp/v2/widgets/(?P<id>[\w\-]+)` route when calling PATCH method.
 */
export interface WpV2WidgetsPIdWPatchResponse {}

/**
 * Response for `/wp/v2/widgets/(?P<id>[\w\-]+)` route when calling POST method.
 */
export interface WpV2WidgetsPIdWPostResponse {}

/**
 * Response for `/wp/v2/widgets/(?P<id>[\w\-]+)` route when calling PUT method.
 */
export interface WpV2WidgetsPIdWPutResponse {}

/**
 * Response for `/wp/v2/widgets/(?P<id>[\w\-]+)` route when calling DELETE method.
 */
export interface WpV2WidgetsPIdWDeleteResponse {}
