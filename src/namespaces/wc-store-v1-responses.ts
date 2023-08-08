// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "wc/store/v1" responses

/**
 * Response for `/wc/store/v1` route when calling GET method.
 */
export interface WcStoreV1GetResponse {}

/**
 * Response for `/wc/store/v1/batch` route when calling POST method.
 */
export interface WcStoreV1BatchPostResponse {}

/**
 * Response for `/wc/store/v1/cart` route when calling GET method.
 */
export interface WcStoreV1CartGetResponse {}

/**
 * Response for `/wc/store/v1/cart/add-item` route when calling POST method.
 */
export interface WcStoreV1CartAddItemPostResponse {}

/**
 * Response for `/wc/store/v1/cart/apply-coupon` route when calling POST method.
 */
export interface WcStoreV1CartApplyCouponPostResponse {}

/**
 * Response for `/wc/store/v1/cart/coupons` route when calling GET method.
 */
export interface WcStoreV1CartCouponsGetResponse {}

/**
 * Response for `/wc/store/v1/cart/coupons` route when calling POST method.
 */
export interface WcStoreV1CartCouponsPostResponse {}

/**
 * Response for `/wc/store/v1/cart/coupons` route when calling DELETE method.
 */
export interface WcStoreV1CartCouponsDeleteResponse {}

/**
 * Response for `/wc/store/v1/cart/coupons/(?P<code>[\w-]+)` route when calling GET method.
 */
export interface WcStoreV1CartCouponsPCodeWGetResponse {}

/**
 * Response for `/wc/store/v1/cart/coupons/(?P<code>[\w-]+)` route when calling DELETE method.
 */
export interface WcStoreV1CartCouponsPCodeWDeleteResponse {}

/**
 * Response for `/wc/store/v1/cart/extensions` route when calling POST method.
 */
export interface WcStoreV1CartExtensionsPostResponse {}

/**
 * Response for `/wc/store/v1/cart/items` route when calling GET method.
 */
export interface WcStoreV1CartItemsGetResponse {}

/**
 * Response for `/wc/store/v1/cart/items` route when calling POST method.
 */
export interface WcStoreV1CartItemsPostResponse {}

/**
 * Response for `/wc/store/v1/cart/items` route when calling DELETE method.
 */
export interface WcStoreV1CartItemsDeleteResponse {}

/**
 * Response for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling GET method.
 */
export interface WcStoreV1CartItemsPKeyW32GetResponse {}

/**
 * Response for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling PATCH method.
 */
export interface WcStoreV1CartItemsPKeyW32PatchResponse {}

/**
 * Response for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling POST method.
 */
export interface WcStoreV1CartItemsPKeyW32PostResponse {}

/**
 * Response for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling PUT method.
 */
export interface WcStoreV1CartItemsPKeyW32PutResponse {}

/**
 * Response for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling DELETE method.
 */
export interface WcStoreV1CartItemsPKeyW32DeleteResponse {}

/**
 * Response for `/wc/store/v1/cart/remove-coupon` route when calling POST method.
 */
export interface WcStoreV1CartRemoveCouponPostResponse {}

/**
 * Response for `/wc/store/v1/cart/remove-item` route when calling POST method.
 */
export interface WcStoreV1CartRemoveItemPostResponse {}

/**
 * Response for `/wc/store/v1/cart/select-shipping-rate` route when calling POST method.
 */
export interface WcStoreV1CartSelectShippingRatePostResponse {}

/**
 * Response for `/wc/store/v1/cart/update-customer` route when calling POST method.
 */
export interface WcStoreV1CartUpdateCustomerPostResponse {}

/**
 * Response for `/wc/store/v1/cart/update-item` route when calling POST method.
 */
export interface WcStoreV1CartUpdateItemPostResponse {}

/**
 * Response for `/wc/store/v1/checkout` route when calling GET method.
 */
export interface WcStoreV1CheckoutGetResponse {}

/**
 * Response for `/wc/store/v1/checkout` route when calling POST method.
 */
export interface WcStoreV1CheckoutPostResponse {}

/**
 * Response for `/wc/store/v1/products` route when calling GET method.
 */
export interface WcStoreV1ProductsGetResponse {}

/**
 * Response for `/wc/store/v1/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsPIdDGetResponse {}

/**
 * Response for `/wc/store/v1/products/(?P<slug>[\S]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsPSlugSGetResponse {}

/**
 * Response for `/wc/store/v1/products/attributes` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesGetResponse {}

/**
 * Response for `/wc/store/v1/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesPAttributeIdDTermsGetResponse {}

/**
 * Response for `/wc/store/v1/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesPIdDGetResponse {}

/**
 * Response for `/wc/store/v1/products/categories` route when calling GET method.
 */
export interface WcStoreV1ProductsCategoriesGetResponse {}

/**
 * Response for `/wc/store/v1/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsCategoriesPIdDGetResponse {}

/**
 * Response for `/wc/store/v1/products/collection-data` route when calling GET method.
 */
export interface WcStoreV1ProductsCollectionDataGetResponse {}

/**
 * Response for `/wc/store/v1/products/reviews` route when calling GET method.
 */
export interface WcStoreV1ProductsReviewsGetResponse {}

/**
 * Response for `/wc/store/v1/products/tags` route when calling GET method.
 */
export interface WcStoreV1ProductsTagsGetResponse {}
