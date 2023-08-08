// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc/store" namespace

/**
 * Arguments for `/wc/store` route when calling GET method.
 */
export interface WcStoreGetArgs {}

export interface WcStoreBatchPostArgsRequests {}

/**
 * Arguments for `/wc/store/batch` route when calling POST method.
 */
export interface WcStoreBatchPostArgs {
  requests: WcStoreBatchPostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

/**
 * Arguments for `/wc/store/cart` route when calling GET method.
 */
export interface WcStoreCartGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreCartAddItemPostArgsVariation {}

/**
 * Arguments for `/wc/store/cart/add-item` route when calling POST method.
 */
export interface WcStoreCartAddItemPostArgs {
  /**
   * The cart item product or variation ID.
   */
  id?: number;
  /**
   * Quantity of this item to add to the cart.
   */
  quantity?: number;
  /**
   * Chosen attributes (for variations).
   */
  variation?: WcStoreCartAddItemPostArgsVariation[];
}

/**
 * Arguments for `/wc/store/cart/apply-coupon` route when calling POST method.
 */
export interface WcStoreCartApplyCouponPostArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

/**
 * Arguments for `/wc/store/cart/coupons` route when calling GET method.
 */
export interface WcStoreCartCouponsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/store/cart/coupons` route when calling POST method.
 */
export interface WcStoreCartCouponsPostArgs {
  /**
   * The coupon's unique code.
   */
  code?: string;
  /**
   * The discount type for the coupon (e.g. percentage or fixed amount)
   */
  discount_type?: string;
}

/**
 * Arguments for `/wc/store/cart/coupons` route when calling DELETE method.
 */
export interface WcStoreCartCouponsDeleteArgs {}

/**
 * Arguments for `/wc/store/cart/coupons/(?P<code>[\w-]+)` route when calling GET method.
 */
export interface WcStoreCartCouponsPCodeWGetArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/store/cart/coupons/(?P<code>[\w-]+)` route when calling DELETE method.
 */
export interface WcStoreCartCouponsPCodeWDeleteArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

export interface WcStoreCartExtensionsPostArgsData {}

/**
 * Arguments for `/wc/store/cart/extensions` route when calling POST method.
 */
export interface WcStoreCartExtensionsPostArgs {
  /**
   * Additional data to pass to the extension
   */
  data?: WcStoreCartExtensionsPostArgsData;
  /**
   * Extension's name - this will be used to ensure the data in the request is routed appropriately.
   */
  namespace?: string;
}

/**
 * Arguments for `/wc/store/cart/items` route when calling GET method.
 */
export interface WcStoreCartItemsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreCartItemsPostArgsExtensions {}

/**
 * Arguments for `/wc/store/cart/items` route when calling POST method.
 */
export interface WcStoreCartItemsPostArgs {
  extensions?: WcStoreCartItemsPostArgsExtensions;
}

/**
 * Arguments for `/wc/store/cart/items` route when calling DELETE method.
 */
export interface WcStoreCartItemsDeleteArgs {}

/**
 * Arguments for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling GET method.
 */
export interface WcStoreCartItemsPKeyW32GetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the item within the cart.
   */
  key?: string;
}

export interface WcStoreCartItemsPKeyW32PatchPostPutArgsExtensions {}

/**
 * Arguments for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling PATCH, POST, and PUT methods.
 */
export interface WcStoreCartItemsPKeyW32PatchPostPutArgs {
  extensions?: WcStoreCartItemsPKeyW32PatchPostPutArgsExtensions;
  /**
   * Unique identifier for the item within the cart.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/cart/items/(?P<key>[\w-]{32})` route when calling DELETE method.
 */
export interface WcStoreCartItemsPKeyW32DeleteArgs {
  /**
   * Unique identifier for the item within the cart.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/cart/remove-coupon` route when calling POST method.
 */
export interface WcStoreCartRemoveCouponPostArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

/**
 * Arguments for `/wc/store/cart/remove-item` route when calling POST method.
 */
export interface WcStoreCartRemoveItemPostArgs {
  /**
   * Unique identifier (key) for the cart item.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/cart/select-shipping-rate` route when calling POST method.
 */
export interface WcStoreCartSelectShippingRatePostArgs {
  /**
   * The chosen rate ID for the package.
   */
  rate_id: string;
}

export interface WcStoreCartUpdateCustomerPostArgsBillingAddress {}

export interface WcStoreCartUpdateCustomerPostArgsShippingAddress {}

/**
 * Arguments for `/wc/store/cart/update-customer` route when calling POST method.
 */
export interface WcStoreCartUpdateCustomerPostArgs {
  /**
   * Billing address.
   */
  billing_address?: WcStoreCartUpdateCustomerPostArgsBillingAddress;
  /**
   * Shipping address.
   */
  shipping_address?: WcStoreCartUpdateCustomerPostArgsShippingAddress;
}

/**
 * Arguments for `/wc/store/cart/update-item` route when calling POST method.
 */
export interface WcStoreCartUpdateItemPostArgs {
  /**
   * Unique identifier (key) for the cart item to update.
   */
  key?: string;
  /**
   * New quantity of the item in the cart.
   */
  quantity?: number;
}

/**
 * Arguments for `/wc/store/checkout` route when calling GET method.
 */
export interface WcStoreCheckoutGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreCheckoutPostArgsBillingAddress {}

export interface WcStoreCheckoutPostArgsExtensions {}

export interface WcStoreCheckoutPostArgsPaymentData {}

export interface WcStoreCheckoutPostArgsShippingAddress {}

/**
 * Arguments for `/wc/store/checkout` route when calling POST method.
 */
export interface WcStoreCheckoutPostArgs {
  /**
   * Billing address.
   */
  billing_address: WcStoreCheckoutPostArgsBillingAddress;
  /**
   * Whether to create a new user account as part of order processing.
   */
  create_account?: boolean;
  /**
   * Note added to the order by the customer during checkout.
   */
  customer_note?: string;
  extensions?: WcStoreCheckoutPostArgsExtensions;
  /**
   * Data to pass through to the payment method when processing payment.
   */
  payment_data?: WcStoreCheckoutPostArgsPaymentData[];
  /**
   * The ID of the payment method being used to process the payment.
   */
  payment_method?: 'ppcp-gateway' | 'bacs' | 'cheque' | 'cod';
  /**
   * Shipping address.
   */
  shipping_address?: WcStoreCheckoutPostArgsShippingAddress;
}

export interface WcStoreProductsGetArgsAttributes {}

/**
 * Arguments for `/wc/store/products` route when calling GET method.
 */
export interface WcStoreProductsGetArgs {
  /**
   * Limit response to resources created after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * The logical relationship between attributes when filtering across multiple at once.
   * @default "and"
   */
  attribute_relation?: 'in' | 'and';
  /**
   * Limit result set to products with selected global attributes.
   * @default
   */
  attributes?: WcStoreProductsGetArgsAttributes[];
  /**
   * Limit response to resources created before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Determines if hidden or visible catalog products are shown.
   */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /**
   * Limit result set to products assigned a specific category ID.
   */
  category?: string;
  /**
   * Operator to compare product category terms.
   * @default "in"
   */
  category_operator?: 'in' | 'not_in' | 'and';
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * When limiting response using after/before, which date column to compare against.
   * @default "date"
   */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Limit result set to featured products.
   */
  featured?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit result set to products based on a maximum price, provided using the smallest unit of the currency.
   */
  max_price?: string;
  /**
   * Limit result set to products based on a minimum price, provided using the smallest unit of the currency.
   */
  min_price?: string;
  /**
   * Offset the result set by a specific number of items.
   */
  offset?: number;
  /**
   * Limit result set to products on sale.
   */
  on_sale?: boolean;
  /**
   * Order sort attribute ascending or descending.
   * @default "desc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "date"
   */
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
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to those of particular parent IDs.
   * @default
   */
  parent?: number[];
  /**
   * Limit result set to all items except those of a particular parent ID.
   * @default
   */
  parent_exclude?: number[];
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to products with a certain average rating.
   * @default
   */
  rating?: number[];
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to products with specific SKU(s). Use commas to separate.
   */
  sku?: string;
  /**
   * Limit result set to products with specific slug(s). Use commas to separate.
   */
  slug?: string;
  /**
   * Limit result set to products with specified stock status.
   * @default
   */
  stock_status?: number[];
  /**
   * Limit result set to products assigned a specific tag ID.
   */
  tag?: string;
  /**
   * Operator to compare product tags.
   * @default "in"
   */
  tag_operator?: 'in' | 'not_in' | 'and';
  /**
   * Limit result set to products assigned a specific type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
}

/**
 * Arguments for `/wc/store/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/store/products/(?P<slug>[\S]+)` route when calling GET method.
 */
export interface WcStoreProductsPSlugSGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Slug of the resource.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/store/products/attributes` route when calling GET method.
 */
export interface WcStoreProductsAttributesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/store/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcStoreProductsAttributesPAttributeIdDTermsGetArgs {
  /**
   * Unique identifier for the attribute.
   */
  attribute_id?: number;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * If true, empty terms will not be returned.
   * @default true
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Sort ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort by term property.
   * @default "name"
   */
  orderby?: 'name' | 'slug' | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * Arguments for `/wc/store/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsAttributesPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/store/products/categories` route when calling GET method.
 */
export interface WcStoreProductsCategoriesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'embed' | 'edit';
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * If true, empty terms will not be returned.
   * @default true
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Sort ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort by term property.
   * @default "name"
   */
  orderby?: 'name' | 'slug' | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * Arguments for `/wc/store/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreProductsCategoriesPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'embed' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

export interface WcStoreProductsCollectionDataGetArgsAttributes {}

export interface WcStoreProductsCollectionDataGetArgsCalculateAttributeCounts {}

/**
 * Arguments for `/wc/store/products/collection-data` route when calling GET method.
 */
export interface WcStoreProductsCollectionDataGetArgs {
  /**
   * Limit response to resources created after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * The logical relationship between attributes when filtering across multiple at once.
   * @default "and"
   */
  attribute_relation?: 'in' | 'and';
  /**
   * Limit result set to products with selected global attributes.
   * @default
   */
  attributes?: WcStoreProductsCollectionDataGetArgsAttributes[];
  /**
   * Limit response to resources created before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * If requested, calculates attribute term counts for products in the collection.
   * @default
   */
  calculate_attribute_counts?: WcStoreProductsCollectionDataGetArgsCalculateAttributeCounts[];
  /**
   * If true, calculates the minimum and maximum product prices for the collection.
   * @default false
   */
  calculate_price_range?: boolean;
  /**
   * If true, calculates rating counts for products in the collection.
   * @default false
   */
  calculate_rating_counts?: boolean;
  /**
   * If true, calculates stock counts for products in the collection.
   * @default false
   */
  calculate_stock_status_counts?: boolean;
  /**
   * Determines if hidden or visible catalog products are shown.
   */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /**
   * Limit result set to products assigned a specific category ID.
   */
  category?: string;
  /**
   * Operator to compare product category terms.
   * @default "in"
   */
  category_operator?: 'in' | 'not_in' | 'and';
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * When limiting response using after/before, which date column to compare against.
   * @default "date"
   */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Limit result set to featured products.
   */
  featured?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit result set to products based on a maximum price, provided using the smallest unit of the currency.
   */
  max_price?: string;
  /**
   * Limit result set to products based on a minimum price, provided using the smallest unit of the currency.
   */
  min_price?: string;
  /**
   * Offset the result set by a specific number of items.
   */
  offset?: number;
  /**
   * Limit result set to products on sale.
   */
  on_sale?: boolean;
  /**
   * Order sort attribute ascending or descending.
   * @default "desc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "date"
   */
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
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to those of particular parent IDs.
   * @default
   */
  parent?: number[];
  /**
   * Limit result set to all items except those of a particular parent ID.
   * @default
   */
  parent_exclude?: number[];
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to products with a certain average rating.
   * @default
   */
  rating?: number[];
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to products with specific SKU(s). Use commas to separate.
   */
  sku?: string;
  /**
   * Limit result set to products with specific slug(s). Use commas to separate.
   */
  slug?: string;
  /**
   * Limit result set to products with specified stock status.
   * @default
   */
  stock_status?: number[];
  /**
   * Limit result set to products assigned a specific tag ID.
   */
  tag?: string;
  /**
   * Operator to compare product tags.
   * @default "in"
   */
  tag_operator?: 'in' | 'not_in' | 'and';
  /**
   * Limit result set to products assigned a specific type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
}

/**
 * Arguments for `/wc/store/products/reviews` route when calling GET method.
 */
export interface WcStoreProductsReviewsGetArgs {
  /**
   * Limit result set to reviews from specific category IDs.
   */
  category_id?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Offset the result set by a specific number of items.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "desc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "date"
   */
  orderby?: 'date' | 'date_gmt' | 'id' | 'rating' | 'product';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to reviews from specific product IDs.
   */
  product_id?: string;
}

/**
 * Arguments for `/wc/store/products/tags` route when calling GET method.
 */
export interface WcStoreProductsTagsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * If true, empty terms will not be returned.
   * @default true
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Sort ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort by term property.
   * @default "name"
   */
  orderby?: 'name' | 'slug' | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Defaults to no limit if left blank. Constraints: minimum = 0, maximum = 100.
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

/**
 * All "wc/store" DELETE routes.
 */
export interface WcStoreDeleteRoutes {
  '/wc/store/cart/coupons': WcStoreCartCouponsDeleteArgs;
  '/wc/store/cart/coupons/(?P<code>[\\w-]+)': WcStoreCartCouponsPCodeWDeleteArgs;
  '/wc/store/cart/items': WcStoreCartItemsDeleteArgs;
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32DeleteArgs;
}

/**
 * All "wc/store" GET routes.
 */
export interface WcStoreGetRoutes {
  '/wc/store': WcStoreGetArgs;
  '/wc/store/cart': WcStoreCartGetArgs;
  '/wc/store/cart/coupons': WcStoreCartCouponsGetArgs;
  '/wc/store/cart/coupons/(?P<code>[\\w-]+)': WcStoreCartCouponsPCodeWGetArgs;
  '/wc/store/cart/items': WcStoreCartItemsGetArgs;
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32GetArgs;
  '/wc/store/checkout': WcStoreCheckoutGetArgs;
  '/wc/store/products': WcStoreProductsGetArgs;
  '/wc/store/products/(?P<id>[\\d]+)': WcStoreProductsPIdDGetArgs;
  '/wc/store/products/(?P<slug>[\\S]+)': WcStoreProductsPSlugSGetArgs;
  '/wc/store/products/attributes': WcStoreProductsAttributesGetArgs;
  '/wc/store/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcStoreProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc/store/products/attributes/(?P<id>[\\d]+)': WcStoreProductsAttributesPIdDGetArgs;
  '/wc/store/products/categories': WcStoreProductsCategoriesGetArgs;
  '/wc/store/products/categories/(?P<id>[\\d]+)': WcStoreProductsCategoriesPIdDGetArgs;
  '/wc/store/products/collection-data': WcStoreProductsCollectionDataGetArgs;
  '/wc/store/products/reviews': WcStoreProductsReviewsGetArgs;
  '/wc/store/products/tags': WcStoreProductsTagsGetArgs;
}

/**
 * All "wc/store" PATCH routes.
 */
export interface WcStorePatchRoutes {
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PatchPostPutArgs;
}

/**
 * All "wc/store" POST routes.
 */
export interface WcStorePostRoutes {
  '/wc/store/batch': WcStoreBatchPostArgs;
  '/wc/store/cart/add-item': WcStoreCartAddItemPostArgs;
  '/wc/store/cart/apply-coupon': WcStoreCartApplyCouponPostArgs;
  '/wc/store/cart/coupons': WcStoreCartCouponsPostArgs;
  '/wc/store/cart/extensions': WcStoreCartExtensionsPostArgs;
  '/wc/store/cart/items': WcStoreCartItemsPostArgs;
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PatchPostPutArgs;
  '/wc/store/cart/remove-coupon': WcStoreCartRemoveCouponPostArgs;
  '/wc/store/cart/remove-item': WcStoreCartRemoveItemPostArgs;
  '/wc/store/cart/select-shipping-rate': WcStoreCartSelectShippingRatePostArgs;
  '/wc/store/cart/update-customer': WcStoreCartUpdateCustomerPostArgs;
  '/wc/store/cart/update-item': WcStoreCartUpdateItemPostArgs;
  '/wc/store/checkout': WcStoreCheckoutPostArgs;
}

/**
 * All "wc/store" PUT routes.
 */
export interface WcStorePutRoutes {
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PatchPostPutArgs;
}

/**
 * All "wc/store" WordPress REST API methods/routes.
 */
export interface WcStoreRoutes {
  Delete: WcStoreDeleteRoutes;
  Get: WcStoreGetRoutes;
  Patch: WcStorePatchRoutes;
  Post: WcStorePostRoutes;
  Put: WcStorePutRoutes;
}
