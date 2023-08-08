// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "wc/store" responses

/**
 * Response for `/wc/store` route when calling GET method.
 */
export interface WcStoreGetResponse {}

/**
 * Response for `/wc/store/batch` route when calling POST method.
 */
export interface WcStoreBatchPostResponse {}

/**
 * Response for `/wc/store/cart` route when calling GET method.
 */
export interface WcStoreCartGetResponse {}

/**
 * Response for `/wc/store/cart/add-item` route when calling POST method.
 */
export interface WcStoreCartAddItemPostResponse {}

/**
 * Response for `/wc/store/cart/apply-coupon` route when calling POST method.
 */
export interface WcStoreCartApplyCouponPostResponse {}

/**
 * Response for `/wc/store/cart/coupons` route when calling GET method.
 */
export interface WcStoreCartCouponsGetResponse {}

/**
 * Response for `/wc/store/cart/coupons` route when calling POST method.
 */
export interface WcStoreCartCouponsPostResponse {}

/**
 * Response for `/wc/store/cart/coupons` route when calling DELETE method.
 */
export interface WcStoreCartCouponsDeleteResponse {}

/**
 * Response for `/wc/store/cart/coupons/(?P<code>[\w-]+)` route when calling GET method.
 */
export interface WcStoreCartCouponsPCodeWGetResponse {}

/**
 * Response for `/wc/store/cart/coupons/(?P<code>[\w-]+)` route when calling DELETE method.
 */
export interface WcStoreCartCouponsPCodeWDeleteResponse {}

/**
 * Response for `/wc/store/cart/extensions` route when calling POST method.
 */
export interface WcStoreCartExtensionsPostResponse {}

/**
 * Response for `/wc/store/cart/items` route when calling GET method.
 */
export interface WcStoreCartItemsGetResponse {}

/**
 * Response for `/wc/store/cart/items` route when calling POST method.
 */
export interface WcStoreCartItemsPostResponse {}

/**
 * Response for `/wc/store/cart/items` route when calling DELETE method.
 */
export interface WcStoreCartItemsDeleteResponse {}

/**
 * Response for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling GET method.
 */
export interface WcStoreCartItemsPKeyW32GetResponse {}

/**
 * Response for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling PATCH method.
 */
export interface WcStoreCartItemsPKeyW32PatchResponse {}

/**
 * Response for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling POST method.
 */
export interface WcStoreCartItemsPKeyW32PostResponse {}

/**
 * Response for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling PUT method.
 */
export interface WcStoreCartItemsPKeyW32PutResponse {}

/**
 * Response for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling DELETE method.
 */
export interface WcStoreCartItemsPKeyW32DeleteResponse {}

/**
 * Response for `/wc/store/cart/remove-coupon` route when calling POST method.
 */
export interface WcStoreCartRemoveCouponPostResponse {}

/**
 * Response for `/wc/store/cart/remove-item` route when calling POST method.
 */
export interface WcStoreCartRemoveItemPostResponse {}

/**
 * Response for `/wc/store/cart/select-shipping-rate` route when calling POST method.
 */
export interface WcStoreCartSelectShippingRatePostResponse {}

/**
 * Response for `/wc/store/cart/update-customer` route when calling POST method.
 */
export interface WcStoreCartUpdateCustomerPostResponse {}

/**
 * Response for `/wc/store/cart/update-item` route when calling POST method.
 */
export interface WcStoreCartUpdateItemPostResponse {}

/**
 * Response for `/wc/store/checkout` route when calling GET method.
 */
export interface WcStoreCheckoutGetResponse {}

/**
 * Response for `/wc/store/checkout` route when calling POST method.
 */
export interface WcStoreCheckoutPostResponse {}

/**
 * Response for `/wc/store/products` route when calling GET method.
 */
export interface WcStoreProductsGetResponse {}

/**
 * Response for `/wc/store/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsPIdDGetResponse {}

/**
 * Response for `/wc/store/products/(?P<slug>[\S]+)` route when calling GET method.
 */
export interface WcStoreProductsPSlugSGetResponse {}

/**
 * Response for `/wc/store/products/attributes` route when calling GET method.
 */
export interface WcStoreProductsAttributesGetResponse {}

/**
 * Response for `/wc/store/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcStoreProductsAttributesPAttributeIdDTermsGetResponse {}

/**
 * Response for `/wc/store/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsAttributesPIdDGetResponse {}

/**
 * Response for `/wc/store/products/categories` route when calling GET method.
 */
export interface WcStoreProductsCategoriesGetResponse {}

/**
 * Response for `/wc/store/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsCategoriesPIdDGetResponse {}

/**
 * Response for `/wc/store/products/collection-data` route when calling GET method.
 */
export interface WcStoreProductsCollectionDataGetResponse {}

/**
 * Response for `/wc/store/products/reviews` route when calling GET method.
 */
export interface WcStoreProductsReviewsGetResponse {}

/**
 * Response for `/wc/store/products/tags` route when calling GET method.
 */
export interface WcStoreProductsTagsGetResponse {}
