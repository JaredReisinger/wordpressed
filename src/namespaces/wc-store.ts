export interface WcStoreGetArgs {}

export interface WcStoreBatchPostArgsRequests {}

export interface WcStoreBatchPostArgs {
  requests: WcStoreBatchPostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

export interface WcStoreCartGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartAddItemPostArgsVariation {}

export interface WcStoreCartAddItemPostArgs {
  /** The cart item product or variation ID. */
  id?: number;
  /** Quantity of this item to add to the cart. */
  quantity?: number;
  /** Chosen attributes (for variations). */
  variation?: WcStoreCartAddItemPostArgsVariation[];
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

export interface WcStoreCartExtensionsPostArgsData {}

export interface WcStoreCartExtensionsPostArgs {
  /** Additional data to pass to the extension */
  data?: WcStoreCartExtensionsPostArgsData;
  /** Extension's name - this will be used to ensure the data in the request is routed appropriately. */
  namespace?: string;
}

export interface WcStoreCartItemsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCartItemsPostArgsExtensions {}

export interface WcStoreCartItemsPostArgs {
  extensions?: WcStoreCartItemsPostArgsExtensions;
}

export interface WcStoreCartItemsDeleteArgs {}

export interface WcStoreCartItemsPKeyW32GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreCartItemsPKeyW32PostPutPatchArgsExtensions {}

export interface WcStoreCartItemsPKeyW32PostPutPatchArgs {
  extensions?: WcStoreCartItemsPKeyW32PostPutPatchArgsExtensions;
  /** Unique identifier for the item within the cart. */
  key?: string;
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

export interface WcStoreCartUpdateCustomerPostArgsBillingAddress {}

export interface WcStoreCartUpdateCustomerPostArgsShippingAddress {}

export interface WcStoreCartUpdateCustomerPostArgs {
  /** Billing address. */
  billing_address?: WcStoreCartUpdateCustomerPostArgsBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreCartUpdateCustomerPostArgsShippingAddress;
}

export interface WcStoreCartUpdateItemPostArgs {
  /** Unique identifier (key) for the cart item to update. */
  key?: string;
  /** New quantity of the item in the cart. */
  quantity?: number;
}

export interface WcStoreCheckoutGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreCheckoutPostArgsBillingAddress {}

export interface WcStoreCheckoutPostArgsExtensions {}

export interface WcStoreCheckoutPostArgsPaymentData {}

export interface WcStoreCheckoutPostArgsShippingAddress {}

export interface WcStoreCheckoutPostArgs {
  /** Billing address. */
  billing_address: WcStoreCheckoutPostArgsBillingAddress;
  /** Whether to create a new user account as part of order processing. */
  create_account?: boolean;
  /** Note added to the order by the customer during checkout. */
  customer_note?: string;
  extensions?: WcStoreCheckoutPostArgsExtensions;
  /** Data to pass through to the payment method when processing payment. */
  payment_data?: WcStoreCheckoutPostArgsPaymentData[];
  /** The ID of the payment method being used to process the payment. */
  payment_method?: 'ppcp-gateway' | 'bacs' | 'cheque' | 'cod';
  /** Shipping address. */
  shipping_address?: WcStoreCheckoutPostArgsShippingAddress;
}

export interface WcStoreProductsGetArgsAttributes {}

export interface WcStoreProductsGetArgs {
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreProductsGetArgsAttributes[];
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
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
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
}

export interface WcStoreProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreProductsPSlugSGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Slug of the resource. */
  slug?: string;
}

export interface WcStoreProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcStoreProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcStoreProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreProductsCollectionDataGetArgsAttributes {}

export interface WcStoreProductsCollectionDataGetArgsCalculateAttributeCounts {}

export interface WcStoreProductsCollectionDataGetArgs {
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreProductsCollectionDataGetArgsAttributes[];
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** If requested, calculates attribute term counts for products in the collection. */
  calculate_attribute_counts?: WcStoreProductsCollectionDataGetArgsCalculateAttributeCounts[];
  /** If true, calculates the minimum and maximum product prices for the collection. */
  calculate_price_range?: boolean;
  /** If true, calculates rating counts for products in the collection. */
  calculate_rating_counts?: boolean;
  /** If true, calculates stock counts for products in the collection. */
  calculate_stock_status_counts?: boolean;
  /** Determines if hidden or visible catalog products are shown. */
  catalog_visibility?: 'any' | 'visible' | 'catalog' | 'search' | 'hidden';
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Operator to compare product category terms. */
  category_operator?: 'in' | 'not_in' | 'and';
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** When limiting response using after/before, which date column to compare against. */
  date_column?: 'date' | 'date_gmt' | 'modified' | 'modified_gmt';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit result set to products based on a maximum price, provided using the smallest unit of the currency. */
  max_price?: string;
  /** Limit result set to products based on a minimum price, provided using the smallest unit of the currency. */
  min_price?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
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
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit result set to products with a certain average rating. */
  rating?: number[];
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with specific slug(s). Use commas to separate. */
  slug?: string;
  /** Limit result set to products with specified stock status. */
  stock_status?: number[];
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Operator to compare product tags. */
  tag_operator?: 'in' | 'not_in' | 'and';
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable' | 'variation';
}

export interface WcStoreProductsReviewsGetArgs {
  /** Limit result set to reviews from specific category IDs. */
  category_id?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'rating' | 'product';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit result set to reviews from specific product IDs. */
  product_id?: string;
}

export interface WcStoreProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** If true, empty terms will not be returned. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Sort ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort by term property. */
  orderby?: 'name' | 'slug' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. Defaults to no limit if left blank. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcStoreDeleteRoutes {
  '/wc/store/cart/coupons': WcStoreCartCouponsDeleteArgs;
  '/wc/store/cart/coupons/(?P<code>[\\w-]+)': WcStoreCartCouponsPCodeWDeleteArgs;
  '/wc/store/cart/items': WcStoreCartItemsDeleteArgs;
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32DeleteArgs;
}

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

export interface WcStorePatchRoutes {
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PostPutPatchArgs;
}

export interface WcStorePostRoutes {
  '/wc/store/batch': WcStoreBatchPostArgs;
  '/wc/store/cart/add-item': WcStoreCartAddItemPostArgs;
  '/wc/store/cart/apply-coupon': WcStoreCartApplyCouponPostArgs;
  '/wc/store/cart/coupons': WcStoreCartCouponsPostArgs;
  '/wc/store/cart/extensions': WcStoreCartExtensionsPostArgs;
  '/wc/store/cart/items': WcStoreCartItemsPostArgs;
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PostPutPatchArgs;
  '/wc/store/cart/remove-coupon': WcStoreCartRemoveCouponPostArgs;
  '/wc/store/cart/remove-item': WcStoreCartRemoveItemPostArgs;
  '/wc/store/cart/select-shipping-rate': WcStoreCartSelectShippingRatePostArgs;
  '/wc/store/cart/update-customer': WcStoreCartUpdateCustomerPostArgs;
  '/wc/store/cart/update-item': WcStoreCartUpdateItemPostArgs;
  '/wc/store/checkout': WcStoreCheckoutPostArgs;
}

export interface WcStorePutRoutes {
  '/wc/store/cart/items/(?P<key>[\\w-]{32})': WcStoreCartItemsPKeyW32PostPutPatchArgs;
}

export interface WcStoreRoutes {
  Delete: WcStoreDeleteRoutes;
  Get: WcStoreGetRoutes;
  Patch: WcStorePatchRoutes;
  Post: WcStorePostRoutes;
  Put: WcStorePutRoutes;
}
