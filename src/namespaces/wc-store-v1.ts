// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc/store/v1" namespace

/**
 * Arguments for `/wc/store/v1` route when calling GET method.
 */
export interface WcStoreV1GetArgs {}

export interface WcStoreV1BatchPostArgsRequests {}

/**
 * Arguments for `/wc/store/v1/batch` route when calling POST method.
 */
export interface WcStoreV1BatchPostArgs {
  requests: WcStoreV1BatchPostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

/**
 * Arguments for `/wc/store/v1/cart` route when calling GET method.
 */
export interface WcStoreV1CartGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartAddItemPostArgsVariation {}

/**
 * Arguments for `/wc/store/v1/cart/add-item` route when calling POST method.
 */
export interface WcStoreV1CartAddItemPostArgs {
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
  variation?: WcStoreV1CartAddItemPostArgsVariation[];
}

/**
 * Arguments for `/wc/store/v1/cart/apply-coupon` route when calling POST method.
 */
export interface WcStoreV1CartApplyCouponPostArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/coupons` route when calling GET method.
 */
export interface WcStoreV1CartCouponsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/store/v1/cart/coupons` route when calling POST method.
 */
export interface WcStoreV1CartCouponsPostArgs {
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
 * Arguments for `/wc/store/v1/cart/coupons` route when calling DELETE method.
 */
export interface WcStoreV1CartCouponsDeleteArgs {}

/**
 * Arguments for `/wc/store/v1/cart/coupons/(?P<code>[\w-]+)` route when calling GET method.
 */
export interface WcStoreV1CartCouponsPCodeWGetArgs {
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
 * Arguments for `/wc/store/v1/cart/coupons/(?P<code>[\w-]+)` route when calling DELETE method.
 */
export interface WcStoreV1CartCouponsPCodeWDeleteArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

export interface WcStoreV1CartExtensionsPostArgsData {}

/**
 * Arguments for `/wc/store/v1/cart/extensions` route when calling POST method.
 */
export interface WcStoreV1CartExtensionsPostArgs {
  /**
   * Additional data to pass to the extension
   */
  data?: WcStoreV1CartExtensionsPostArgsData;
  /**
   * Extension's name - this will be used to ensure the data in the request is routed appropriately.
   */
  namespace?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/items` route when calling GET method.
 */
export interface WcStoreV1CartItemsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartItemsPostArgsExtensions {}

/**
 * Arguments for `/wc/store/v1/cart/items` route when calling POST method.
 */
export interface WcStoreV1CartItemsPostArgs {
  extensions?: WcStoreV1CartItemsPostArgsExtensions;
}

/**
 * Arguments for `/wc/store/v1/cart/items` route when calling DELETE method.
 */
export interface WcStoreV1CartItemsDeleteArgs {}

/**
 * Arguments for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling GET method.
 */
export interface WcStoreV1CartItemsPKeyW32GetArgs {
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

export interface WcStoreV1CartItemsPKeyW32PatchPostPutArgsExtensions {}

/**
 * Arguments for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling PATCH, POST, and PUT methods.
 */
export interface WcStoreV1CartItemsPKeyW32PatchPostPutArgs {
  extensions?: WcStoreV1CartItemsPKeyW32PatchPostPutArgsExtensions;
  /**
   * Unique identifier for the item within the cart.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/items/(?P<key>[\w-]{32})` route when calling DELETE method.
 */
export interface WcStoreV1CartItemsPKeyW32DeleteArgs {
  /**
   * Unique identifier for the item within the cart.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/remove-coupon` route when calling POST method.
 */
export interface WcStoreV1CartRemoveCouponPostArgs {
  /**
   * Unique identifier for the coupon within the cart.
   */
  code?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/remove-item` route when calling POST method.
 */
export interface WcStoreV1CartRemoveItemPostArgs {
  /**
   * Unique identifier (key) for the cart item.
   */
  key?: string;
}

/**
 * Arguments for `/wc/store/v1/cart/select-shipping-rate` route when calling POST method.
 */
export interface WcStoreV1CartSelectShippingRatePostArgs {
  /**
   * The chosen rate ID for the package.
   */
  rate_id: string;
}

export interface WcStoreV1CartUpdateCustomerPostArgsBillingAddress {}

export interface WcStoreV1CartUpdateCustomerPostArgsShippingAddress {}

/**
 * Arguments for `/wc/store/v1/cart/update-customer` route when calling POST method.
 */
export interface WcStoreV1CartUpdateCustomerPostArgs {
  /**
   * Billing address.
   */
  billing_address?: WcStoreV1CartUpdateCustomerPostArgsBillingAddress;
  /**
   * Shipping address.
   */
  shipping_address?: WcStoreV1CartUpdateCustomerPostArgsShippingAddress;
}

/**
 * Arguments for `/wc/store/v1/cart/update-item` route when calling POST method.
 */
export interface WcStoreV1CartUpdateItemPostArgs {
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
 * Arguments for `/wc/store/v1/checkout` route when calling GET method.
 */
export interface WcStoreV1CheckoutGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CheckoutPostArgsBillingAddress {}

export interface WcStoreV1CheckoutPostArgsExtensions {}

export interface WcStoreV1CheckoutPostArgsPaymentData {}

export interface WcStoreV1CheckoutPostArgsShippingAddress {}

/**
 * Arguments for `/wc/store/v1/checkout` route when calling POST method.
 */
export interface WcStoreV1CheckoutPostArgs {
  /**
   * Billing address.
   */
  billing_address: WcStoreV1CheckoutPostArgsBillingAddress;
  /**
   * Whether to create a new user account as part of order processing.
   */
  create_account?: boolean;
  /**
   * Note added to the order by the customer during checkout.
   */
  customer_note?: string;
  extensions?: WcStoreV1CheckoutPostArgsExtensions;
  /**
   * Data to pass through to the payment method when processing payment.
   */
  payment_data?: WcStoreV1CheckoutPostArgsPaymentData[];
  /**
   * The ID of the payment method being used to process the payment.
   */
  payment_method?: 'ppcp-gateway' | 'bacs' | 'cheque' | 'cod';
  /**
   * Shipping address.
   */
  shipping_address?: WcStoreV1CheckoutPostArgsShippingAddress;
}

export interface WcStoreV1ProductsGetArgsAttributes {}

/**
 * Arguments for `/wc/store/v1/products` route when calling GET method.
 */
export interface WcStoreV1ProductsGetArgs {
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
  attributes?: WcStoreV1ProductsGetArgsAttributes[];
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
 * Arguments for `/wc/store/v1/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsPIdDGetArgs {
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
 * Arguments for `/wc/store/v1/products/(?P<slug>[\S]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsPSlugSGetArgs {
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
 * Arguments for `/wc/store/v1/products/attributes` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/store/v1/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesPAttributeIdDTermsGetArgs {
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
 * Arguments for `/wc/store/v1/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsAttributesPIdDGetArgs {
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
 * Arguments for `/wc/store/v1/products/categories` route when calling GET method.
 */
export interface WcStoreV1ProductsCategoriesGetArgs {
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
 * Arguments for `/wc/store/v1/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcStoreV1ProductsCategoriesPIdDGetArgs {
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

export interface WcStoreV1ProductsCollectionDataGetArgsAttributes {}

export interface WcStoreV1ProductsCollectionDataGetArgsCalculateAttributeCounts {}

/**
 * Arguments for `/wc/store/v1/products/collection-data` route when calling GET method.
 */
export interface WcStoreV1ProductsCollectionDataGetArgs {
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
  attributes?: WcStoreV1ProductsCollectionDataGetArgsAttributes[];
  /**
   * Limit response to resources created before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * If requested, calculates attribute term counts for products in the collection.
   * @default
   */
  calculate_attribute_counts?: WcStoreV1ProductsCollectionDataGetArgsCalculateAttributeCounts[];
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
 * Arguments for `/wc/store/v1/products/reviews` route when calling GET method.
 */
export interface WcStoreV1ProductsReviewsGetArgs {
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
 * Arguments for `/wc/store/v1/products/tags` route when calling GET method.
 */
export interface WcStoreV1ProductsTagsGetArgs {
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
 * All "wc/store/v1" DELETE routes.
 */
export interface WcStoreV1DeleteRoutes {
  '/wc/store/v1/cart/coupons': WcStoreV1CartCouponsDeleteArgs;
  '/wc/store/v1/cart/coupons/(?P<code>[\\w-]+)': WcStoreV1CartCouponsPCodeWDeleteArgs;
  '/wc/store/v1/cart/items': WcStoreV1CartItemsDeleteArgs;
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32DeleteArgs;
}

/**
 * All "wc/store/v1" GET routes.
 */
export interface WcStoreV1GetRoutes {
  '/wc/store/v1': WcStoreV1GetArgs;
  '/wc/store/v1/cart': WcStoreV1CartGetArgs;
  '/wc/store/v1/cart/coupons': WcStoreV1CartCouponsGetArgs;
  '/wc/store/v1/cart/coupons/(?P<code>[\\w-]+)': WcStoreV1CartCouponsPCodeWGetArgs;
  '/wc/store/v1/cart/items': WcStoreV1CartItemsGetArgs;
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32GetArgs;
  '/wc/store/v1/checkout': WcStoreV1CheckoutGetArgs;
  '/wc/store/v1/products': WcStoreV1ProductsGetArgs;
  '/wc/store/v1/products/(?P<id>[\\d]+)': WcStoreV1ProductsPIdDGetArgs;
  '/wc/store/v1/products/(?P<slug>[\\S]+)': WcStoreV1ProductsPSlugSGetArgs;
  '/wc/store/v1/products/attributes': WcStoreV1ProductsAttributesGetArgs;
  '/wc/store/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcStoreV1ProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc/store/v1/products/attributes/(?P<id>[\\d]+)': WcStoreV1ProductsAttributesPIdDGetArgs;
  '/wc/store/v1/products/categories': WcStoreV1ProductsCategoriesGetArgs;
  '/wc/store/v1/products/categories/(?P<id>[\\d]+)': WcStoreV1ProductsCategoriesPIdDGetArgs;
  '/wc/store/v1/products/collection-data': WcStoreV1ProductsCollectionDataGetArgs;
  '/wc/store/v1/products/reviews': WcStoreV1ProductsReviewsGetArgs;
  '/wc/store/v1/products/tags': WcStoreV1ProductsTagsGetArgs;
}

/**
 * All "wc/store/v1" PATCH routes.
 */
export interface WcStoreV1PatchRoutes {
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PatchPostPutArgs;
}

/**
 * All "wc/store/v1" POST routes.
 */
export interface WcStoreV1PostRoutes {
  '/wc/store/v1/batch': WcStoreV1BatchPostArgs;
  '/wc/store/v1/cart/add-item': WcStoreV1CartAddItemPostArgs;
  '/wc/store/v1/cart/apply-coupon': WcStoreV1CartApplyCouponPostArgs;
  '/wc/store/v1/cart/coupons': WcStoreV1CartCouponsPostArgs;
  '/wc/store/v1/cart/extensions': WcStoreV1CartExtensionsPostArgs;
  '/wc/store/v1/cart/items': WcStoreV1CartItemsPostArgs;
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PatchPostPutArgs;
  '/wc/store/v1/cart/remove-coupon': WcStoreV1CartRemoveCouponPostArgs;
  '/wc/store/v1/cart/remove-item': WcStoreV1CartRemoveItemPostArgs;
  '/wc/store/v1/cart/select-shipping-rate': WcStoreV1CartSelectShippingRatePostArgs;
  '/wc/store/v1/cart/update-customer': WcStoreV1CartUpdateCustomerPostArgs;
  '/wc/store/v1/cart/update-item': WcStoreV1CartUpdateItemPostArgs;
  '/wc/store/v1/checkout': WcStoreV1CheckoutPostArgs;
}

/**
 * All "wc/store/v1" PUT routes.
 */
export interface WcStoreV1PutRoutes {
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PatchPostPutArgs;
}

/**
 * All "wc/store/v1" WordPress REST API methods/routes.
 */
export interface WcStoreV1Routes {
  Delete: WcStoreV1DeleteRoutes;
  Get: WcStoreV1GetRoutes;
  Patch: WcStoreV1PatchRoutes;
  Post: WcStoreV1PostRoutes;
  Put: WcStoreV1PutRoutes;
}
