export interface WcStoreV1GetArgs {
}

export interface WcStoreV1BatchPostArgsRequests {
}


export interface WcStoreV1BatchPostArgs {
  requests: WcStoreV1BatchPostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

export interface WcStoreV1CartGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartAddItemPostArgsVariation {
}


export interface WcStoreV1CartAddItemPostArgs {
  /** The cart item product or variation ID. */
  id?: number;
  /** Quantity of this item to add to the cart. */
  quantity?: number;
  /** Chosen attributes (for variations). */
  variation?: WcStoreV1CartAddItemPostArgsVariation[];
}

export interface WcStoreV1CartApplyCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartCouponsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartCouponsPostArgs {
  /** The coupon's unique code. */
  code?: string;
  /** The discount type for the coupon (e.g. percentage or fixed amount) */
  discount_type?: string;
}

export interface WcStoreV1CartCouponsDeleteArgs {
}

export interface WcStoreV1CartCouponsPCodeWGetArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartCouponsPCodeWDeleteArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartExtensionsPostArgsData {
}


export interface WcStoreV1CartExtensionsPostArgs {
  /** Additional data to pass to the extension */
  data?: WcStoreV1CartExtensionsPostArgsData;
  /** Extension's name - this will be used to ensure the data in the request is routed appropriately. */
  namespace?: string;
}

export interface WcStoreV1CartItemsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CartItemsPostArgsExtensions {
}


export interface WcStoreV1CartItemsPostArgs {
  extensions?: WcStoreV1CartItemsPostArgsExtensions;
}

export interface WcStoreV1CartItemsDeleteArgs {
}

export interface WcStoreV1CartItemsPKeyW32GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreV1CartItemsPKeyW32PostPutPatchArgsExtensions {
}


export interface WcStoreV1CartItemsPKeyW32PostPutPatchArgs {
  extensions?: WcStoreV1CartItemsPKeyW32PostPutPatchArgsExtensions;
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreV1CartItemsPKeyW32DeleteArgs {
  /** Unique identifier for the item within the cart. */
  key?: string;
}

export interface WcStoreV1CartRemoveCouponPostArgs {
  /** Unique identifier for the coupon within the cart. */
  code?: string;
}

export interface WcStoreV1CartRemoveItemPostArgs {
  /** Unique identifier (key) for the cart item. */
  key?: string;
}

export interface WcStoreV1CartSelectShippingRatePostArgs {
  /** The chosen rate ID for the package. */
  rate_id: string;
}

export interface WcStoreV1CartUpdateCustomerPostArgsBillingAddress {
}


export interface WcStoreV1CartUpdateCustomerPostArgsShippingAddress {
}


export interface WcStoreV1CartUpdateCustomerPostArgs {
  /** Billing address. */
  billing_address?: WcStoreV1CartUpdateCustomerPostArgsBillingAddress;
  /** Shipping address. */
  shipping_address?: WcStoreV1CartUpdateCustomerPostArgsShippingAddress;
}

export interface WcStoreV1CartUpdateItemPostArgs {
  /** Unique identifier (key) for the cart item to update. */
  key?: string;
  /** New quantity of the item in the cart. */
  quantity?: number;
}

export interface WcStoreV1CheckoutGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1CheckoutPostArgsBillingAddress {
}


export interface WcStoreV1CheckoutPostArgsExtensions {
}


export interface WcStoreV1CheckoutPostArgsPaymentData {
}


export interface WcStoreV1CheckoutPostArgsShippingAddress {
}


export interface WcStoreV1CheckoutPostArgs {
  /** Billing address. */
  billing_address: WcStoreV1CheckoutPostArgsBillingAddress;
  /** Whether to create a new user account as part of order processing. */
  create_account?: boolean;
  /** Note added to the order by the customer during checkout. */
  customer_note?: string;
  extensions?: WcStoreV1CheckoutPostArgsExtensions;
  /** Data to pass through to the payment method when processing payment. */
  payment_data?: WcStoreV1CheckoutPostArgsPaymentData[];
  /** The ID of the payment method being used to process the payment. */
  payment_method?: 'ppcp-gateway' | 'bacs' | 'cheque' | 'cod';
  /** Shipping address. */
  shipping_address?: WcStoreV1CheckoutPostArgsShippingAddress;
}

export interface WcStoreV1ProductsGetArgsAttributes {
}


export interface WcStoreV1ProductsGetArgs {
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreV1ProductsGetArgsAttributes[];
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
  orderby?: 'date' | 'modified' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating' | 'menu_order' | 'comment_count';
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

export interface WcStoreV1ProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreV1ProductsPSlugSGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Slug of the resource. */
  slug?: string;
}

export interface WcStoreV1ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcStoreV1ProductsAttributesPAttributeIdDTermsGetArgs {
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

export interface WcStoreV1ProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreV1ProductsCategoriesGetArgs {
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

export interface WcStoreV1ProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcStoreV1ProductsCollectionDataGetArgsAttributes {
}


export interface WcStoreV1ProductsCollectionDataGetArgsCalculateAttributeCounts {
}


export interface WcStoreV1ProductsCollectionDataGetArgs {
  /** Limit response to resources created after a given ISO8601 compliant date. */
  after?: string;
  /** The logical relationship between attributes when filtering across multiple at once. */
  attribute_relation?: 'in' | 'and';
  /** Limit result set to products with selected global attributes. */
  attributes?: WcStoreV1ProductsCollectionDataGetArgsAttributes[];
  /** Limit response to resources created before a given ISO8601 compliant date. */
  before?: string;
  /** If requested, calculates attribute term counts for products in the collection. */
  calculate_attribute_counts?: WcStoreV1ProductsCollectionDataGetArgsCalculateAttributeCounts[];
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
  orderby?: 'date' | 'modified' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating' | 'menu_order' | 'comment_count';
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

export interface WcStoreV1ProductsReviewsGetArgs {
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

export interface WcStoreV1ProductsTagsGetArgs {
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


export interface WcStoreV1DeleteRoutes {
  '/wc/store/v1/cart/coupons': WcStoreV1CartCouponsDeleteArgs;
  '/wc/store/v1/cart/coupons/(?P<code>[\\w-]+)': WcStoreV1CartCouponsPCodeWDeleteArgs;
  '/wc/store/v1/cart/items': WcStoreV1CartItemsDeleteArgs;
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32DeleteArgs;
}

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

export interface WcStoreV1PatchRoutes {
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PostPutPatchArgs;
}

export interface WcStoreV1PostRoutes {
  '/wc/store/v1/batch': WcStoreV1BatchPostArgs;
  '/wc/store/v1/cart/add-item': WcStoreV1CartAddItemPostArgs;
  '/wc/store/v1/cart/apply-coupon': WcStoreV1CartApplyCouponPostArgs;
  '/wc/store/v1/cart/coupons': WcStoreV1CartCouponsPostArgs;
  '/wc/store/v1/cart/extensions': WcStoreV1CartExtensionsPostArgs;
  '/wc/store/v1/cart/items': WcStoreV1CartItemsPostArgs;
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PostPutPatchArgs;
  '/wc/store/v1/cart/remove-coupon': WcStoreV1CartRemoveCouponPostArgs;
  '/wc/store/v1/cart/remove-item': WcStoreV1CartRemoveItemPostArgs;
  '/wc/store/v1/cart/select-shipping-rate': WcStoreV1CartSelectShippingRatePostArgs;
  '/wc/store/v1/cart/update-customer': WcStoreV1CartUpdateCustomerPostArgs;
  '/wc/store/v1/cart/update-item': WcStoreV1CartUpdateItemPostArgs;
  '/wc/store/v1/checkout': WcStoreV1CheckoutPostArgs;
}

export interface WcStoreV1PutRoutes {
  '/wc/store/v1/cart/items/(?P<key>[\\w-]{32})': WcStoreV1CartItemsPKeyW32PostPutPatchArgs;
}

export interface WcStoreV1Routes {
  Delete: WcStoreV1DeleteRoutes;
  Get: WcStoreV1GetRoutes;
  Patch: WcStoreV1PatchRoutes;
  Post: WcStoreV1PostRoutes;
  Put: WcStoreV1PutRoutes;
}
