// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc/v2" namespace

/**
 * Arguments for `/wc/v2` route when calling GET method.
 */
export interface WcV2GetArgs {}

/**
 * Arguments for `/wc/v2/coupons` route when calling GET method.
 */
export interface WcV2CouponsGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Limit result set to resources with a specific code.
   */
  code?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Whether to consider GMT post dates when limiting response by published or modified date.
   * @default false
   */
  dates_are_gmt?: boolean;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit response to resources modified after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_after?: string;
  /**
   * Limit response to resources modified before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_before?: string;
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
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

export interface WcV2CouponsPostArgsMetaData {}

/**
 * Arguments for `/wc/v2/coupons` route when calling POST method.
 */
export interface WcV2CouponsPostArgs {
  /**
   * The amount of discount. Should always be numeric, even if setting a percentage.
   */
  amount?: string;
  /**
   * Coupon code.
   */
  code: string;
  /**
   * Coupon description.
   */
  description?: string;
  /**
   * Determines the type of discount that will be applied.
   * @default "fixed_cart"
   */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /**
   * List of email addresses that can use this coupon.
   */
  email_restrictions?: number[];
  /**
   * If true, this coupon will not be applied to items that have sale prices.
   * @default false
   */
  exclude_sale_items?: boolean;
  /**
   * List of category IDs the coupon does not apply to.
   */
  excluded_product_categories?: number[];
  /**
   * List of product IDs the coupon cannot be used on.
   */
  excluded_product_ids?: number[];
  /**
   * If true and if the free shipping method requires a coupon, this coupon will enable free shipping.
   * @default false
   */
  free_shipping?: boolean;
  /**
   * If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.
   * @default false
   */
  individual_use?: boolean;
  /**
   * Max number of items in the cart the coupon can be applied to.
   */
  limit_usage_to_x_items?: number;
  /**
   * Maximum order amount allowed when using the coupon.
   */
  maximum_amount?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CouponsPostArgsMetaData[];
  /**
   * Minimum order amount that needs to be in the cart before coupon applies.
   */
  minimum_amount?: string;
  /**
   * List of category IDs the coupon applies to.
   */
  product_categories?: number[];
  /**
   * List of product IDs the coupon can be used on.
   */
  product_ids?: number[];
  /**
   * The status of the coupon. Should always be draft, published, or pending review
   */
  status?: string;
  /**
   * How many times the coupon can be used in total.
   */
  usage_limit?: number;
  /**
   * How many times the coupon can be used per customer.
   */
  usage_limit_per_user?: number;
}

/**
 * Arguments for `/wc/v2/coupons/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2CouponsPIdDGetArgs {
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

export interface WcV2CouponsPIdDPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v2/coupons/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2CouponsPIdDPatchPostPutArgs {
  /**
   * The amount of discount. Should always be numeric, even if setting a percentage.
   */
  amount?: string;
  /**
   * Coupon code.
   */
  code?: string;
  /**
   * Coupon description.
   */
  description?: string;
  /**
   * Determines the type of discount that will be applied.
   */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /**
   * List of email addresses that can use this coupon.
   */
  email_restrictions?: number[];
  /**
   * If true, this coupon will not be applied to items that have sale prices.
   */
  exclude_sale_items?: boolean;
  /**
   * List of category IDs the coupon does not apply to.
   */
  excluded_product_categories?: number[];
  /**
   * List of product IDs the coupon cannot be used on.
   */
  excluded_product_ids?: number[];
  /**
   * If true and if the free shipping method requires a coupon, this coupon will enable free shipping.
   */
  free_shipping?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.
   */
  individual_use?: boolean;
  /**
   * Max number of items in the cart the coupon can be applied to.
   */
  limit_usage_to_x_items?: number;
  /**
   * Maximum order amount allowed when using the coupon.
   */
  maximum_amount?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CouponsPIdDPatchPostPutArgsMetaData[];
  /**
   * Minimum order amount that needs to be in the cart before coupon applies.
   */
  minimum_amount?: string;
  /**
   * List of category IDs the coupon applies to.
   */
  product_categories?: number[];
  /**
   * List of product IDs the coupon can be used on.
   */
  product_ids?: number[];
  /**
   * The status of the coupon. Should always be draft, published, or pending review
   */
  status?: string;
  /**
   * How many times the coupon can be used in total.
   */
  usage_limit?: number;
  /**
   * How many times the coupon can be used per customer.
   */
  usage_limit_per_user?: number;
}

/**
 * Arguments for `/wc/v2/coupons/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2CouponsPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

export interface WcV2CouponsBatchPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v2/coupons/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2CouponsBatchPatchPostPutArgs {
  /**
   * The amount of discount. Should always be numeric, even if setting a percentage.
   */
  amount?: string;
  /**
   * Coupon code.
   */
  code?: string;
  /**
   * Coupon description.
   */
  description?: string;
  /**
   * Determines the type of discount that will be applied.
   */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /**
   * List of email addresses that can use this coupon.
   */
  email_restrictions?: number[];
  /**
   * If true, this coupon will not be applied to items that have sale prices.
   */
  exclude_sale_items?: boolean;
  /**
   * List of category IDs the coupon does not apply to.
   */
  excluded_product_categories?: number[];
  /**
   * List of product IDs the coupon cannot be used on.
   */
  excluded_product_ids?: number[];
  /**
   * If true and if the free shipping method requires a coupon, this coupon will enable free shipping.
   */
  free_shipping?: boolean;
  /**
   * If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.
   */
  individual_use?: boolean;
  /**
   * Max number of items in the cart the coupon can be applied to.
   */
  limit_usage_to_x_items?: number;
  /**
   * Maximum order amount allowed when using the coupon.
   */
  maximum_amount?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CouponsBatchPatchPostPutArgsMetaData[];
  /**
   * Minimum order amount that needs to be in the cart before coupon applies.
   */
  minimum_amount?: string;
  /**
   * List of category IDs the coupon applies to.
   */
  product_categories?: number[];
  /**
   * List of product IDs the coupon can be used on.
   */
  product_ids?: number[];
  /**
   * The status of the coupon. Should always be draft, published, or pending review
   */
  status?: string;
  /**
   * How many times the coupon can be used in total.
   */
  usage_limit?: number;
  /**
   * How many times the coupon can be used per customer.
   */
  usage_limit_per_user?: number;
}

/**
 * Arguments for `/wc/v2/customers` route when calling GET method.
 */
export interface WcV2CustomersGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Limit result set to resources with a specific email. Constraints: format = email.
   */
  email?: string;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Limit result set to specific IDs.
   * @default
   */
  include?: number[];
  /**
   * Offset the result set by a specific number of items.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "name"
   */
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to resources with a specific role.
   * @default "customer"
   */
  role?:
    | 'all'
    | 'administrator'
    | 'editor'
    | 'author'
    | 'contributor'
    | 'subscriber'
    | 'customer'
    | 'shop_manager';
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

export interface WcV2CustomersPostArgsBilling {}

export interface WcV2CustomersPostArgsMetaData {}

export interface WcV2CustomersPostArgsShipping {}

/**
 * Arguments for `/wc/v2/customers` route when calling POST method.
 */
export interface WcV2CustomersPostArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV2CustomersPostArgsBilling;
  /**
   * New user email address.
   */
  email: string;
  /**
   * Customer first name.
   */
  first_name?: string;
  /**
   * Customer last name.
   */
  last_name?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CustomersPostArgsMetaData[];
  /**
   * New user password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV2CustomersPostArgsShipping;
  /**
   * New user username.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v2/customers/(?P<customer_id>[\d]+)/downloads` route when calling GET method.
 */
export interface WcV2CustomersPCustomerIdDDownloadsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
  /**
   * Unique identifier for the resource.
   */
  customer_id?: number;
}

/**
 * Arguments for `/wc/v2/customers/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2CustomersPIdDGetArgs {
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

export interface WcV2CustomersPIdDPatchPostPutArgsBilling {}

export interface WcV2CustomersPIdDPatchPostPutArgsMetaData {}

export interface WcV2CustomersPIdDPatchPostPutArgsShipping {}

/**
 * Arguments for `/wc/v2/customers/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2CustomersPIdDPatchPostPutArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV2CustomersPIdDPatchPostPutArgsBilling;
  /**
   * The email address for the customer. Constraints: format = email.
   */
  email?: string;
  /**
   * Customer first name.
   */
  first_name?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Customer last name.
   */
  last_name?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CustomersPIdDPatchPostPutArgsMetaData[];
  /**
   * Customer password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV2CustomersPIdDPatchPostPutArgsShipping;
  /**
   * Customer login name.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v2/customers/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2CustomersPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * ID to reassign posts to.
   * @default 0
   */
  reassign?: number;
}

export interface WcV2CustomersBatchPatchPostPutArgsBilling {}

export interface WcV2CustomersBatchPatchPostPutArgsMetaData {}

export interface WcV2CustomersBatchPatchPostPutArgsShipping {}

/**
 * Arguments for `/wc/v2/customers/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2CustomersBatchPatchPostPutArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV2CustomersBatchPatchPostPutArgsBilling;
  /**
   * The email address for the customer. Constraints: format = email.
   */
  email?: string;
  /**
   * Customer first name.
   */
  first_name?: string;
  /**
   * Customer last name.
   */
  last_name?: string;
  /**
   * Meta data.
   */
  meta_data?: WcV2CustomersBatchPatchPostPutArgsMetaData[];
  /**
   * Customer password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV2CustomersBatchPatchPostPutArgsShipping;
  /**
   * Customer login name.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v2/orders` route when calling GET method.
 */
export interface WcV2OrdersGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Limit result set to orders assigned a specific customer.
   */
  customer?: number;
  /**
   * Whether to consider GMT post dates when limiting response by published or modified date.
   * @default false
   */
  dates_are_gmt?: boolean;
  /**
   * Number of decimal points to use in each resource.
   * @default 2
   */
  dp?: number;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Ensure meta_data excludes specific keys.
   * @default
   */
  exclude_meta?: number[];
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit meta_data to specific keys.
   * @default
   */
  include_meta?: number[];
  /**
   * Limit response to resources modified after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_after?: string;
  /**
   * Limit response to resources modified before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_before?: string;
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
   * Only show meta which is meant to be displayed for an order.
   * @default false
   */
  order_item_display_meta?: boolean;
  /**
   * Sort collection by object attribute.
   * @default "date"
   */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
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
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to orders assigned a specific product.
   */
  product?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to orders assigned a specific status.
   * @default "any"
   */
  status?:
    | 'any'
    | 'trash'
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
}

export interface WcV2OrdersPostArgsBilling {}

export interface WcV2OrdersPostArgsCouponLines {}

export interface WcV2OrdersPostArgsFeeLines {}

export interface WcV2OrdersPostArgsLineItems {}

export interface WcV2OrdersPostArgsMetaData {}

export interface WcV2OrdersPostArgsShipping {}

export interface WcV2OrdersPostArgsShippingLines {}

/**
 * Arguments for `/wc/v2/orders` route when calling POST method.
 */
export interface WcV2OrdersPostArgs {
  /**
   * Billing address.
   */
  billing?: WcV2OrdersPostArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV2OrdersPostArgsCouponLines[];
  /**
   * Currency the order was created with, in ISO format.
   * @default "USD"
   */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /**
   * User ID who owns the order. 0 for guests.
   * @default 0
   */
  customer_id?: number;
  /**
   * Note left by customer during checkout.
   */
  customer_note?: string;
  /**
   * Fee lines data.
   */
  fee_lines?: WcV2OrdersPostArgsFeeLines[];
  /**
   * Line items data.
   */
  line_items?: WcV2OrdersPostArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV2OrdersPostArgsMetaData[];
  /**
   * Parent order ID.
   */
  parent_id?: number;
  /**
   * Payment method ID.
   */
  payment_method?: string;
  /**
   * Payment method title.
   */
  payment_method_title?: string;
  /**
   * Define if the order is paid. It will set the status to processing and reduce stock items.
   * @default false
   */
  set_paid?: boolean;
  /**
   * Shipping address.
   */
  shipping?: WcV2OrdersPostArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV2OrdersPostArgsShippingLines[];
  /**
   * Order status.
   * @default "pending"
   */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /**
   * Unique transaction ID.
   */
  transaction_id?: string;
}

/**
 * Arguments for `/wc/v2/orders/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2OrdersPIdDGetArgs {
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

export interface WcV2OrdersPIdDPatchPostPutArgsBilling {}

export interface WcV2OrdersPIdDPatchPostPutArgsCouponLines {}

export interface WcV2OrdersPIdDPatchPostPutArgsFeeLines {}

export interface WcV2OrdersPIdDPatchPostPutArgsLineItems {}

export interface WcV2OrdersPIdDPatchPostPutArgsMetaData {}

export interface WcV2OrdersPIdDPatchPostPutArgsShipping {}

export interface WcV2OrdersPIdDPatchPostPutArgsShippingLines {}

/**
 * Arguments for `/wc/v2/orders/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2OrdersPIdDPatchPostPutArgs {
  /**
   * Billing address.
   */
  billing?: WcV2OrdersPIdDPatchPostPutArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV2OrdersPIdDPatchPostPutArgsCouponLines[];
  /**
   * Currency the order was created with, in ISO format.
   */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /**
   * User ID who owns the order. 0 for guests.
   */
  customer_id?: number;
  /**
   * Note left by customer during checkout.
   */
  customer_note?: string;
  /**
   * Fee lines data.
   */
  fee_lines?: WcV2OrdersPIdDPatchPostPutArgsFeeLines[];
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Line items data.
   */
  line_items?: WcV2OrdersPIdDPatchPostPutArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV2OrdersPIdDPatchPostPutArgsMetaData[];
  /**
   * Parent order ID.
   */
  parent_id?: number;
  /**
   * Payment method ID.
   */
  payment_method?: string;
  /**
   * Payment method title.
   */
  payment_method_title?: string;
  /**
   * Define if the order is paid. It will set the status to processing and reduce stock items.
   */
  set_paid?: boolean;
  /**
   * Shipping address.
   */
  shipping?: WcV2OrdersPIdDPatchPostPutArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV2OrdersPIdDPatchPostPutArgsShippingLines[];
  /**
   * Order status.
   */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /**
   * Unique transaction ID.
   */
  transaction_id?: string;
}

/**
 * Arguments for `/wc/v2/orders/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2OrdersPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/notes` route when calling GET method.
 */
export interface WcV2OrdersPOrderIdDNotesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * The order ID.
   */
  order_id?: number;
  /**
   * Limit result to customers or internal notes.
   * @default "any"
   */
  type?: 'any' | 'customer' | 'internal';
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/notes` route when calling POST method.
 */
export interface WcV2OrdersPOrderIdDNotesPostArgs {
  /**
   * If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only.
   * @default false
   */
  customer_note?: boolean;
  /**
   * Order note content.
   */
  note: string;
  /**
   * The order ID.
   */
  order_id?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2OrdersPOrderIdDNotesPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * The order ID.
   */
  order_id?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2OrdersPOrderIdDNotesPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * The order ID.
   */
  order_id?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/refunds` route when calling GET method.
 */
export interface WcV2OrdersPOrderIdDRefundsGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Whether to consider GMT post dates when limiting response by published or modified date.
   * @default false
   */
  dates_are_gmt?: boolean;
  /**
   * Number of decimal points to use in each resource.
   * @default 2
   */
  dp?: number;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Ensure meta_data excludes specific keys.
   * @default
   */
  exclude_meta?: number[];
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit meta_data to specific keys.
   * @default
   */
  include_meta?: number[];
  /**
   * Limit response to resources modified after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_after?: string;
  /**
   * Limit response to resources modified before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_before?: string;
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
   * The order ID.
   */
  order_id?: number;
  /**
   * Only show meta which is meant to be displayed for an order.
   * @default false
   */
  order_item_display_meta?: boolean;
  /**
   * Sort collection by object attribute.
   * @default "date"
   */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
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
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
}

export interface WcV2OrdersPOrderIdDRefundsPostArgsMetaData {}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/refunds` route when calling POST method.
 */
export interface WcV2OrdersPOrderIdDRefundsPostArgs {
  /**
   * Refund amount.
   */
  amount?: string;
  /**
   * When true, the payment gateway API is used to generate the refund.
   * @default true
   */
  api_refund?: boolean;
  /**
   * Meta data.
   */
  meta_data?: WcV2OrdersPOrderIdDRefundsPostArgsMetaData[];
  /**
   * The order ID.
   */
  order_id?: number;
  /**
   * Reason for refund.
   */
  reason?: string;
  /**
   * User ID of user who created the refund.
   */
  refunded_by?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2OrdersPOrderIdDRefundsPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * The order ID.
   */
  order_id?: number;
}

/**
 * Arguments for `/wc/v2/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default true
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * The order ID.
   */
  order_id?: number;
}

export interface WcV2OrdersBatchPatchPostPutArgsBilling {}

export interface WcV2OrdersBatchPatchPostPutArgsCouponLines {}

export interface WcV2OrdersBatchPatchPostPutArgsFeeLines {}

export interface WcV2OrdersBatchPatchPostPutArgsLineItems {}

export interface WcV2OrdersBatchPatchPostPutArgsMetaData {}

export interface WcV2OrdersBatchPatchPostPutArgsShipping {}

export interface WcV2OrdersBatchPatchPostPutArgsShippingLines {}

/**
 * Arguments for `/wc/v2/orders/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2OrdersBatchPatchPostPutArgs {
  /**
   * Billing address.
   */
  billing?: WcV2OrdersBatchPatchPostPutArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV2OrdersBatchPatchPostPutArgsCouponLines[];
  /**
   * Currency the order was created with, in ISO format.
   */
  currency?:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYR'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'IRT'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PRB'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW';
  /**
   * User ID who owns the order. 0 for guests.
   */
  customer_id?: number;
  /**
   * Note left by customer during checkout.
   */
  customer_note?: string;
  /**
   * Fee lines data.
   */
  fee_lines?: WcV2OrdersBatchPatchPostPutArgsFeeLines[];
  /**
   * Line items data.
   */
  line_items?: WcV2OrdersBatchPatchPostPutArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV2OrdersBatchPatchPostPutArgsMetaData[];
  /**
   * Parent order ID.
   */
  parent_id?: number;
  /**
   * Payment method ID.
   */
  payment_method?: string;
  /**
   * Payment method title.
   */
  payment_method_title?: string;
  /**
   * Define if the order is paid. It will set the status to processing and reduce stock items.
   */
  set_paid?: boolean;
  /**
   * Shipping address.
   */
  shipping?: WcV2OrdersBatchPatchPostPutArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV2OrdersBatchPatchPostPutArgsShippingLines[];
  /**
   * Order status.
   */
  status?:
    | 'auto-draft'
    | 'pending'
    | 'processing'
    | 'on-hold'
    | 'completed'
    | 'cancelled'
    | 'refunded'
    | 'failed'
    | 'checkout-draft';
  /**
   * Unique transaction ID.
   */
  transaction_id?: string;
}

/**
 * Arguments for `/wc/v2/payment_gateways` route when calling GET method.
 */
export interface WcV2PaymentGatewaysGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v2/payment_gateways/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV2PaymentGatewaysPIdWGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

export interface WcV2PaymentGatewaysPIdWPatchPostPutArgsSettings {}

/**
 * Arguments for `/wc/v2/payment_gateways/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2PaymentGatewaysPIdWPatchPostPutArgs {
  /**
   * Payment gateway description on checkout.
   */
  description?: string;
  /**
   * Payment gateway enabled status.
   */
  enabled?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: string;
  /**
   * Payment gateway sort order.
   */
  order?: number;
  /**
   * Payment gateway settings.
   */
  settings?: WcV2PaymentGatewaysPIdWPatchPostPutArgsSettings;
  /**
   * Payment gateway title on checkout.
   */
  title?: string;
}

/**
 * Arguments for `/wc/v2/products` route when calling GET method.
 */
export interface WcV2ProductsGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug.
   */
  attribute?: string;
  /**
   * Limit result set to products with a specific attribute term ID (required an assigned attribute).
   */
  attribute_term?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Limit result set to products assigned a specific category ID.
   */
  category?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Whether to consider GMT post dates when limiting response by published or modified date.
   * @default false
   */
  dates_are_gmt?: boolean;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Ensure meta_data excludes specific keys.
   * @default
   */
  exclude_meta?: number[];
  /**
   * Limit result set to featured products.
   */
  featured?: boolean;
  /**
   * Limit result set to products in stock or out of stock.
   */
  in_stock?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit meta_data to specific keys.
   * @default
   */
  include_meta?: number[];
  /**
   * Limit result set to products based on a maximum price.
   */
  max_price?: string;
  /**
   * Limit result set to products based on a minimum price.
   */
  min_price?: string;
  /**
   * Limit response to resources modified after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_after?: string;
  /**
   * Limit response to resources modified before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_before?: string;
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
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating'
    | 'menu_order';
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
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to products assigned a specific shipping class ID.
   */
  shipping_class?: string;
  /**
   * Limit result set to products with specific SKU(s). Use commas to separate.
   */
  sku?: string;
  /**
   * Limit result set to products with a specific slug.
   */
  slug?: string;
  /**
   * Limit result set to products assigned a specific status.
   * @default "any"
   */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /**
   * Limit result set to products assigned a specific tag ID.
   */
  tag?: string;
  /**
   * Limit result set to products assigned a specific type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV2ProductsPostArgsAttributes {}

export interface WcV2ProductsPostArgsCategories {}

export interface WcV2ProductsPostArgsDefaultAttributes {}

export interface WcV2ProductsPostArgsDimensions {}

export interface WcV2ProductsPostArgsDownloads {}

export interface WcV2ProductsPostArgsImages {}

export interface WcV2ProductsPostArgsMetaData {}

export interface WcV2ProductsPostArgsTags {}

/**
 * Arguments for `/wc/v2/products` route when calling POST method.
 */
export interface WcV2ProductsPostArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsPostArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   * @default "no"
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Product external button text. Only for external products.
   */
  button_text?: string;
  /**
   * Catalog visibility.
   * @default "visible"
   */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /**
   * List of categories.
   */
  categories?: WcV2ProductsPostArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV2ProductsPostArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV2ProductsPostArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   * @default -1
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   * @default -1
   */
  download_limit?: number;
  /**
   * If the product is downloadable.
   * @default false
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsPostArgsDownloads[];
  /**
   * Product external URL. Only for external products. Constraints: format = uri.
   */
  external_url?: string;
  /**
   * Featured product.
   * @default false
   */
  featured?: boolean;
  /**
   * List of grouped products ID.
   */
  grouped_products?: number[];
  /**
   * List of images.
   */
  images?: WcV2ProductsPostArgsImages[];
  /**
   * Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend.
   * @default true
   */
  in_stock?: boolean;
  /**
   * Stock management at product level.
   * @default false
   */
  manage_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsPostArgsMetaData[];
  /**
   * Product name.
   */
  name?: string;
  /**
   * Product parent ID.
   */
  parent_id?: number;
  /**
   * Optional note to send the customer after purchase.
   */
  purchase_note?: string;
  /**
   * Product regular price.
   */
  regular_price?: string;
  /**
   * Allow reviews.
   * @default true
   */
  reviews_allowed?: boolean;
  /**
   * Product sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Product short description.
   */
  short_description?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Product slug.
   */
  slug?: string;
  /**
   * Allow one item to be bought in a single order.
   * @default false
   */
  sold_individually?: boolean;
  /**
   * Product status (post status).
   * @default "publish"
   */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * List of tags.
   */
  tags?: WcV2ProductsPostArgsTags[];
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   * @default "taxable"
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * Product type.
   * @default "simple"
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /**
   * List of up-sell products IDs.
   */
  upsell_ids?: number[];
  /**
   * If the product is virtual.
   * @default false
   */
  virtual?: boolean;
  /**
   * Product weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsPIdDGetArgs {
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

export interface WcV2ProductsPIdDPatchPostPutArgsAttributes {}

export interface WcV2ProductsPIdDPatchPostPutArgsCategories {}

export interface WcV2ProductsPIdDPatchPostPutArgsDefaultAttributes {}

export interface WcV2ProductsPIdDPatchPostPutArgsDimensions {}

export interface WcV2ProductsPIdDPatchPostPutArgsDownloads {}

export interface WcV2ProductsPIdDPatchPostPutArgsImages {}

export interface WcV2ProductsPIdDPatchPostPutArgsMetaData {}

export interface WcV2ProductsPIdDPatchPostPutArgsTags {}

/**
 * Arguments for `/wc/v2/products/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsPIdDPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsPIdDPatchPostPutArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Product external button text. Only for external products.
   */
  button_text?: string;
  /**
   * Catalog visibility.
   */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /**
   * List of categories.
   */
  categories?: WcV2ProductsPIdDPatchPostPutArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV2ProductsPIdDPatchPostPutArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV2ProductsPIdDPatchPostPutArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   */
  download_limit?: number;
  /**
   * If the product is downloadable.
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsPIdDPatchPostPutArgsDownloads[];
  /**
   * Product external URL. Only for external products. Constraints: format = uri.
   */
  external_url?: string;
  /**
   * Featured product.
   */
  featured?: boolean;
  /**
   * List of grouped products ID.
   */
  grouped_products?: number[];
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * List of images.
   */
  images?: WcV2ProductsPIdDPatchPostPutArgsImages[];
  /**
   * Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend.
   */
  in_stock?: boolean;
  /**
   * Stock management at product level.
   */
  manage_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsPIdDPatchPostPutArgsMetaData[];
  /**
   * Product name.
   */
  name?: string;
  /**
   * Product parent ID.
   */
  parent_id?: number;
  /**
   * Optional note to send the customer after purchase.
   */
  purchase_note?: string;
  /**
   * Product regular price.
   */
  regular_price?: string;
  /**
   * Allow reviews.
   */
  reviews_allowed?: boolean;
  /**
   * Product sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Product short description.
   */
  short_description?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Product slug.
   */
  slug?: string;
  /**
   * Allow one item to be bought in a single order.
   */
  sold_individually?: boolean;
  /**
   * Product status (post status).
   */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * List of tags.
   */
  tags?: WcV2ProductsPIdDPatchPostPutArgsTags[];
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * Product type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /**
   * List of up-sell products IDs.
   */
  upsell_ids?: number[];
  /**
   * If the product is virtual.
   */
  virtual?: boolean;
  /**
   * Product weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews` route when calling GET method.
 */
export interface WcV2ProductsPProductIdDReviewsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews` route when calling POST method.
 */
export interface WcV2ProductsPProductIdDReviewsPostArgs {
  /**
   * Email of the reviewer.
   */
  email: string;
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Name of the reviewer.
   */
  name: string;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * Review content.
   */
  review: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsPProductIdDReviewsPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsPProductIdDReviewsPIdDPatchPostPutArgs {
  /**
   * Reviewer email.
   */
  email?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Reviewer name.
   */
  name?: string;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * The content of the review.
   */
  review?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsPProductIdDReviewsPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/reviews/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsPProductIdDReviewsBatchPatchPostPutArgs {
  /**
   * Reviewer email.
   */
  email?: string;
  /**
   * Reviewer name.
   */
  name?: string;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * The content of the review.
   */
  review?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations` route when calling GET method.
 */
export interface WcV2ProductsPProductIdDVariationsGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug.
   */
  attribute?: string;
  /**
   * Limit result set to products with a specific attribute term ID (required an assigned attribute).
   */
  attribute_term?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
  /**
   * Limit result set to products assigned a specific category ID.
   */
  category?: string;
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Whether to consider GMT post dates when limiting response by published or modified date.
   * @default false
   */
  dates_are_gmt?: boolean;
  /**
   * Ensure result set excludes specific IDs.
   * @default
   */
  exclude?: number[];
  /**
   * Ensure meta_data excludes specific keys.
   * @default
   */
  exclude_meta?: number[];
  /**
   * Limit result set to featured products.
   */
  featured?: boolean;
  /**
   * Limit result set to products in stock or out of stock.
   */
  in_stock?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Limit meta_data to specific keys.
   * @default
   */
  include_meta?: number[];
  /**
   * Limit result set to products based on a maximum price.
   */
  max_price?: string;
  /**
   * Limit result set to products based on a minimum price.
   */
  min_price?: string;
  /**
   * Limit response to resources modified after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_after?: string;
  /**
   * Limit response to resources modified before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  modified_before?: string;
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
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
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
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to products assigned a specific shipping class ID.
   */
  shipping_class?: string;
  /**
   * Limit result set to products with specific SKU(s). Use commas to separate.
   */
  sku?: string;
  /**
   * Limit result set to products with a specific slug.
   */
  slug?: string;
  /**
   * Limit result set to products assigned a specific status.
   * @default "any"
   */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /**
   * Limit result set to products assigned a specific tag ID.
   */
  tag?: string;
  /**
   * Limit result set to products assigned a specific type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV2ProductsPProductIdDVariationsPostArgsAttributes {}

export interface WcV2ProductsPProductIdDVariationsPostArgsDimensions {}

export interface WcV2ProductsPProductIdDVariationsPostArgsDownloads {}

export interface WcV2ProductsPProductIdDVariationsPostArgsImage {}

export interface WcV2ProductsPProductIdDVariationsPostArgsMetaData {}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations` route when calling POST method.
 */
export interface WcV2ProductsPProductIdDVariationsPostArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsPProductIdDVariationsPostArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   * @default "no"
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Variation description.
   */
  description?: string;
  /**
   * Variation dimensions.
   */
  dimensions?: WcV2ProductsPProductIdDVariationsPostArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   * @default -1
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   * @default -1
   */
  download_limit?: number;
  /**
   * If the variation is downloadable.
   * @default false
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsPProductIdDVariationsPostArgsDownloads[];
  /**
   * Variation image data.
   */
  image?: WcV2ProductsPProductIdDVariationsPostArgsImage;
  /**
   * Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend.
   * @default true
   */
  in_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsPProductIdDVariationsPostArgsMetaData[];
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Variation regular price.
   */
  regular_price?: string;
  /**
   * Variation sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   * @default "taxable"
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * If the variation is virtual.
   * @default false
   */
  virtual?: boolean;
  /**
   * Define if the variation is visible on the product's page.
   * @default true
   */
  visible?: boolean;
  /**
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsPProductIdDVariationsPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsAttributes {}

export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsDimensions {}

export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsDownloads {}

export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsImage {}

export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Variation description.
   */
  description?: string;
  /**
   * Variation dimensions.
   */
  dimensions?: WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   */
  download_limit?: number;
  /**
   * If the variation is downloadable.
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsDownloads[];
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Variation image data.
   */
  image?: WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsImage;
  /**
   * Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend.
   */
  in_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgsMetaData[];
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Variation regular price.
   */
  regular_price?: string;
  /**
   * Variation sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * If the variation is virtual.
   */
  virtual?: boolean;
  /**
   * Define if the variation is visible on the product's page.
   */
  visible?: boolean;
  /**
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsPProductIdDVariationsPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsAttributes {}

export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsDimensions {}

export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsDownloads {}

export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsImage {}

export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v2/products/(?P<product_id>[\d]+)/variations/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Variation description.
   */
  description?: string;
  /**
   * Variation dimensions.
   */
  dimensions?: WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   */
  download_limit?: number;
  /**
   * If the variation is downloadable.
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsDownloads[];
  /**
   * Variation image data.
   */
  image?: WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsImage;
  /**
   * Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend.
   */
  in_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgsMetaData[];
  /**
   * Unique identifier for the variable product.
   */
  product_id?: number;
  /**
   * Variation regular price.
   */
  regular_price?: string;
  /**
   * Variation sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * If the variation is virtual.
   */
  virtual?: boolean;
  /**
   * Define if the variation is visible on the product's page.
   */
  visible?: boolean;
  /**
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/attributes` route when calling GET method.
 */
export interface WcV2ProductsAttributesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v2/products/attributes` route when calling POST method.
 */
export interface WcV2ProductsAttributesPostArgs {
  /**
   * Enable/Disable attribute archives.
   * @default false
   */
  has_archives?: boolean;
  /**
   * Name for the resource.
   */
  name: string;
  /**
   * Default sort order.
   * @default "menu_order"
   */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
  /**
   * Type of attribute.
   * @default "select"
   */
  type?: 'select';
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsGetArgs {
  /**
   * Unique identifier for the attribute of the terms.
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
   * Whether to hide resources not assigned to any products.
   * @default false
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by resource attribute.
   * @default "name"
   */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.
   */
  parent?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to resources assigned to a specific product.
   * @default null
   */
  product?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to resources with a specific slug.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling POST method.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsPostArgs {
  /**
   * Unique identifier for the attribute of the terms.
   */
  attribute_id?: number;
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Name for the resource.
   */
  name: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /**
   * Unique identifier for the attribute of the terms.
   */
  attribute_id?: number;
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
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs {
  /**
   * Unique identifier for the attribute of the terms.
   */
  attribute_id?: number;
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Term name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /**
   * Unique identifier for the attribute of the terms.
   */
  attribute_id?: number;
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs {
  /**
   * Unique identifier for the attribute of the terms.
   */
  attribute_id?: number;
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Term name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsAttributesPIdDGetArgs {
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
 * Arguments for `/wc/v2/products/attributes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsAttributesPIdDPatchPostPutArgs {
  /**
   * Enable/Disable attribute archives.
   */
  has_archives?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Attribute name.
   */
  name?: string;
  /**
   * Default sort order.
   */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
  /**
   * Type of attribute.
   */
  type?: 'select';
}

/**
 * Arguments for `/wc/v2/products/attributes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsAttributesPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default true
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/products/attributes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsAttributesBatchPatchPostPutArgs {
  /**
   * Enable/Disable attribute archives.
   */
  has_archives?: boolean;
  /**
   * Attribute name.
   */
  name?: string;
  /**
   * Default sort order.
   */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
  /**
   * Type of attribute.
   */
  type?: 'select';
}

export interface WcV2ProductsBatchPatchPostPutArgsAttributes {}

export interface WcV2ProductsBatchPatchPostPutArgsCategories {}

export interface WcV2ProductsBatchPatchPostPutArgsDefaultAttributes {}

export interface WcV2ProductsBatchPatchPostPutArgsDimensions {}

export interface WcV2ProductsBatchPatchPostPutArgsDownloads {}

export interface WcV2ProductsBatchPatchPostPutArgsImages {}

export interface WcV2ProductsBatchPatchPostPutArgsMetaData {}

export interface WcV2ProductsBatchPatchPostPutArgsTags {}

/**
 * Arguments for `/wc/v2/products/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsBatchPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV2ProductsBatchPatchPostPutArgsAttributes[];
  /**
   * If managing stock, this controls if backorders are allowed.
   */
  backorders?: 'no' | 'notify' | 'yes';
  /**
   * Product external button text. Only for external products.
   */
  button_text?: string;
  /**
   * Catalog visibility.
   */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /**
   * List of categories.
   */
  categories?: WcV2ProductsBatchPatchPostPutArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV2ProductsBatchPatchPostPutArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV2ProductsBatchPatchPostPutArgsDimensions;
  /**
   * Number of days until access to downloadable files expires.
   */
  download_expiry?: number;
  /**
   * Number of times downloadable files can be downloaded after purchase.
   */
  download_limit?: number;
  /**
   * If the product is downloadable.
   */
  downloadable?: boolean;
  /**
   * List of downloadable files.
   */
  downloads?: WcV2ProductsBatchPatchPostPutArgsDownloads[];
  /**
   * Product external URL. Only for external products. Constraints: format = uri.
   */
  external_url?: string;
  /**
   * Featured product.
   */
  featured?: boolean;
  /**
   * List of grouped products ID.
   */
  grouped_products?: number[];
  /**
   * List of images.
   */
  images?: WcV2ProductsBatchPatchPostPutArgsImages[];
  /**
   * Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend.
   */
  in_stock?: boolean;
  /**
   * Stock management at product level.
   */
  manage_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV2ProductsBatchPatchPostPutArgsMetaData[];
  /**
   * Product name.
   */
  name?: string;
  /**
   * Product parent ID.
   */
  parent_id?: number;
  /**
   * Optional note to send the customer after purchase.
   */
  purchase_note?: string;
  /**
   * Product regular price.
   */
  regular_price?: string;
  /**
   * Allow reviews.
   */
  reviews_allowed?: boolean;
  /**
   * Product sale price.
   */
  sale_price?: string;
  /**
   * Shipping class slug.
   */
  shipping_class?: string;
  /**
   * Product short description.
   */
  short_description?: string;
  /**
   * Unique identifier.
   */
  sku?: string;
  /**
   * Product slug.
   */
  slug?: string;
  /**
   * Allow one item to be bought in a single order.
   */
  sold_individually?: boolean;
  /**
   * Product status (post status).
   */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * List of tags.
   */
  tags?: WcV2ProductsBatchPatchPostPutArgsTags[];
  /**
   * Tax class.
   */
  tax_class?: string;
  /**
   * Tax status.
   */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /**
   * Product type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /**
   * List of up-sell products IDs.
   */
  upsell_ids?: number[];
  /**
   * If the product is virtual.
   */
  virtual?: boolean;
  /**
   * Product weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v2/products/categories` route when calling GET method.
 */
export interface WcV2ProductsCategoriesGetArgs {
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
   * Whether to hide resources not assigned to any products.
   * @default false
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by resource attribute.
   * @default "name"
   */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.
   */
  parent?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to resources assigned to a specific product.
   * @default null
   */
  product?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to resources with a specific slug.
   */
  slug?: string;
}

export interface WcV2ProductsCategoriesPostArgsImage {}

/**
 * Arguments for `/wc/v2/products/categories` route when calling POST method.
 */
export interface WcV2ProductsCategoriesPostArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Category archive display type.
   * @default "default"
   */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /**
   * Image data.
   */
  image?: WcV2ProductsCategoriesPostArgsImage;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Name for the resource.
   */
  name: string;
  /**
   * The ID for the parent of the resource.
   */
  parent?: number;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsCategoriesPIdDGetArgs {
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

export interface WcV2ProductsCategoriesPIdDPatchPostPutArgsImage {}

/**
 * Arguments for `/wc/v2/products/categories/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsCategoriesPIdDPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Category archive display type.
   */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Image data.
   */
  image?: WcV2ProductsCategoriesPIdDPatchPostPutArgsImage;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Category name.
   */
  name?: string;
  /**
   * The ID for the parent of the resource.
   */
  parent?: number;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/categories/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsCategoriesPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

export interface WcV2ProductsCategoriesBatchPatchPostPutArgsImage {}

/**
 * Arguments for `/wc/v2/products/categories/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsCategoriesBatchPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Category archive display type.
   */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /**
   * Image data.
   */
  image?: WcV2ProductsCategoriesBatchPatchPostPutArgsImage;
  /**
   * Menu order, used to custom sort the resource.
   */
  menu_order?: number;
  /**
   * Category name.
   */
  name?: string;
  /**
   * The ID for the parent of the resource.
   */
  parent?: number;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/shipping_classes` route when calling GET method.
 */
export interface WcV2ProductsShippingClassesGetArgs {
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
   * Whether to hide resources not assigned to any products.
   * @default false
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by resource attribute.
   * @default "name"
   */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.
   */
  parent?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to resources assigned to a specific product.
   * @default null
   */
  product?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to resources with a specific slug.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/shipping_classes` route when calling POST method.
 */
export interface WcV2ProductsShippingClassesPostArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Name for the resource.
   */
  name: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/shipping_classes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsShippingClassesPIdDGetArgs {
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
 * Arguments for `/wc/v2/products/shipping_classes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsShippingClassesPIdDPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Shipping class name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/shipping_classes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsShippingClassesPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/products/shipping_classes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsShippingClassesBatchPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Shipping class name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/tags` route when calling GET method.
 */
export interface WcV2ProductsTagsGetArgs {
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
   * Whether to hide resources not assigned to any products.
   * @default false
   */
  hide_empty?: boolean;
  /**
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
  /**
   * Offset the result set by a specific number of items. Applies to hierarchical taxonomies only.
   */
  offset?: number;
  /**
   * Order sort attribute ascending or descending.
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by resource attribute.
   * @default "name"
   */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only.
   */
  parent?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit result set to resources assigned to a specific product.
   * @default null
   */
  product?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to resources with a specific slug.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/tags` route when calling POST method.
 */
export interface WcV2ProductsTagsPostArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Name for the resource.
   */
  name: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/tags/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ProductsTagsPIdDGetArgs {
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
 * Arguments for `/wc/v2/products/tags/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsTagsPIdDPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Tag name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/products/tags/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ProductsTagsPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/products/tags/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ProductsTagsBatchPatchPostPutArgs {
  /**
   * HTML description of the resource.
   */
  description?: string;
  /**
   * Tag name.
   */
  name?: string;
  /**
   * An alphanumeric identifier for the resource unique to its type.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/reports` route when calling GET method.
 */
export interface WcV2ReportsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v2/reports/sales` route when calling GET method.
 */
export interface WcV2ReportsSalesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
  /**
   * Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. Constraints: format = date.
   */
  date_max?: string;
  /**
   * Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. Constraints: format = date.
   */
  date_min?: string;
  /**
   * Report period.
   */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

/**
 * Arguments for `/wc/v2/reports/top_sellers` route when calling GET method.
 */
export interface WcV2ReportsTopSellersGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
  /**
   * Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. Constraints: format = date.
   */
  date_max?: string;
  /**
   * Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. Constraints: format = date.
   */
  date_min?: string;
  /**
   * Report period.
   */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

/**
 * Arguments for `/wc/v2/settings` route when calling GET method.
 */
export interface WcV2SettingsGetArgs {}

/**
 * Arguments for `/wc/v2/settings/(?P<group_id>[\w-]+)` route when calling GET method.
 */
export interface WcV2SettingsPGroupIdWGetArgs {
  /**
   * Settings group ID.
   */
  group?: string;
}

/**
 * Arguments for `/wc/v2/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV2SettingsPGroupIdWPIdWGetArgs {
  /**
   * Settings group ID.
   */
  group?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

/**
 * Arguments for `/wc/v2/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2SettingsPGroupIdWPIdWPatchPostPutArgs {
  /**
   * Settings group ID.
   */
  group?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

/**
 * Arguments for `/wc/v2/settings/(?P<group_id>[\w-]+)/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2SettingsPGroupIdWBatchPatchPostPutArgs {
  /**
   * Settings group ID.
   */
  group?: string;
}

/**
 * Arguments for `/wc/v2/shipping_methods` route when calling GET method.
 */
export interface WcV2ShippingMethodsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v2/shipping_methods/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV2ShippingMethodsPIdWGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

/**
 * Arguments for `/wc/v2/shipping/zones` route when calling GET method.
 */
export interface WcV2ShippingZonesGetArgs {}

/**
 * Arguments for `/wc/v2/shipping/zones` route when calling POST method.
 */
export interface WcV2ShippingZonesPostArgs {
  /**
   * Shipping zone name.
   */
  name: string;
  /**
   * Shipping zone order.
   */
  order?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2ShippingZonesPIdDGetArgs {
  /**
   * Unique ID for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ShippingZonesPIdDPatchPostPutArgs {
  /**
   * Unique ID for the resource.
   */
  id?: number;
  /**
   * Shipping zone name.
   */
  name?: string;
  /**
   * Shipping zone order.
   */
  order?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ShippingZonesPIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique ID for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<id>[\d]+)/locations` route when calling GET method.
 */
export interface WcV2ShippingZonesPIdDLocationsGetArgs {
  /**
   * Unique ID for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<id>[\d]+)/locations` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ShippingZonesPIdDLocationsPatchPostPutArgs {
  /**
   * Shipping zone location code.
   */
  code?: string;
  /**
   * Unique ID for the resource.
   */
  id?: number;
  /**
   * Shipping zone location type.
   */
  type?: 'postcode' | 'state' | 'country' | 'continent';
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling GET method.
 */
export interface WcV2ShippingZonesPZoneIdDMethodsGetArgs {
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPostArgsSettings {}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling POST method.
 */
export interface WcV2ShippingZonesPZoneIdDMethodsPostArgs {
  /**
   * Shipping method enabled status.
   */
  enabled?: boolean;
  /**
   * Shipping method sort order.
   */
  order?: number;
  /**
   * Shipping method settings.
   */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPostArgsSettings;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling GET method.
 */
export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /**
   * Unique ID for the instance.
   */
  instance_id?: number;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgsSettings {}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs {
  /**
   * Shipping method enabled status.
   */
  enabled?: boolean;
  /**
   * Unique ID for the instance.
   */
  instance_id?: number;
  /**
   * Shipping method sort order.
   */
  order?: number;
  /**
   * Shipping method settings.
   */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgsSettings;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

/**
 * Arguments for `/wc/v2/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
  /**
   * Whether to bypass trash and force deletion.
   * @default false
   */
  force?: boolean;
  /**
   * Unique ID for the instance.
   */
  instance_id?: number;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

/**
 * Arguments for `/wc/v2/system_status` route when calling GET method.
 */
export interface WcV2SystemStatusGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v2/system_status/tools` route when calling GET method.
 */
export interface WcV2SystemStatusToolsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v2/system_status/tools/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV2SystemStatusToolsPIdWGetArgs {
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

/**
 * Arguments for `/wc/v2/system_status/tools/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2SystemStatusToolsPIdWPatchPostPutArgs {
  /**
   * What running the tool will do.
   */
  action?: string;
  /**
   * Tool description.
   */
  description?: string;
  /**
   * A unique identifier for the tool.
   */
  id?: string;
  /**
   * Tool return message.
   */
  message?: string;
  /**
   * Tool name.
   */
  name?: string;
  /**
   * Did the tool run successfully?
   */
  success?: boolean;
}

/**
 * Arguments for `/wc/v2/taxes` route when calling GET method.
 */
export interface WcV2TaxesGetArgs {
  /**
   * Sort by tax class.
   */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
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
   * @default "asc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "order"
   */
  orderby?: 'id' | 'order' | 'priority';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
}

/**
 * Arguments for `/wc/v2/taxes` route when calling POST method.
 */
export interface WcV2TaxesPostArgs {
  /**
   * City name.
   */
  city?: string;
  /**
   * Tax class.
   * @default "standard"
   */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /**
   * Whether or not this is a compound rate.
   * @default false
   */
  compound?: boolean;
  /**
   * Country ISO 3166 code.
   */
  country?: string;
  /**
   * Tax rate name.
   */
  name?: string;
  /**
   * Indicates the order that will appear in queries.
   */
  order?: number;
  /**
   * Postcode / ZIP.
   */
  postcode?: string;
  /**
   * Tax priority.
   * @default 1
   */
  priority?: number;
  /**
   * Tax rate.
   */
  rate?: string;
  /**
   * Whether or not this tax rate also gets applied to shipping.
   * @default true
   */
  shipping?: boolean;
  /**
   * State code.
   */
  state?: string;
}

/**
 * Arguments for `/wc/v2/taxes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2TaxesPIdDGetArgs {
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
 * Arguments for `/wc/v2/taxes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2TaxesPIdDPatchPostPutArgs {
  /**
   * City name.
   */
  city?: string;
  /**
   * Tax class.
   */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /**
   * Whether or not this is a compound rate.
   */
  compound?: boolean;
  /**
   * Country ISO 3166 code.
   */
  country?: string;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Tax rate name.
   */
  name?: string;
  /**
   * Indicates the order that will appear in queries.
   */
  order?: number;
  /**
   * Postcode / ZIP.
   */
  postcode?: string;
  /**
   * Tax priority.
   */
  priority?: number;
  /**
   * Tax rate.
   */
  rate?: string;
  /**
   * Whether or not this tax rate also gets applied to shipping.
   */
  shipping?: boolean;
  /**
   * State code.
   */
  state?: string;
}

/**
 * Arguments for `/wc/v2/taxes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2TaxesPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/taxes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2TaxesBatchPatchPostPutArgs {
  /**
   * City name.
   */
  city?: string;
  /**
   * Tax class.
   */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /**
   * Whether or not this is a compound rate.
   */
  compound?: boolean;
  /**
   * Country ISO 3166 code.
   */
  country?: string;
  /**
   * Tax rate name.
   */
  name?: string;
  /**
   * Indicates the order that will appear in queries.
   */
  order?: number;
  /**
   * Postcode / ZIP.
   */
  postcode?: string;
  /**
   * Tax priority.
   */
  priority?: number;
  /**
   * Tax rate.
   */
  rate?: string;
  /**
   * Whether or not this tax rate also gets applied to shipping.
   */
  shipping?: boolean;
  /**
   * State code.
   */
  state?: string;
}

/**
 * Arguments for `/wc/v2/taxes/classes` route when calling GET method.
 */
export interface WcV2TaxesClassesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v2/taxes/classes` route when calling POST method.
 */
export interface WcV2TaxesClassesPostArgs {
  /**
   * Tax class name.
   */
  name: string;
}

/**
 * Arguments for `/wc/v2/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling GET method.
 */
export interface WcV2TaxesClassesPSlugWWSGetArgs {
  /**
   * Unique slug for the resource.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling DELETE method.
 */
export interface WcV2TaxesClassesPSlugWWSDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique slug for the resource.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v2/webhooks` route when calling GET method.
 */
export interface WcV2WebhooksGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit response to resources published before a given ISO8601 compliant date. Constraints: format = date-time.
   */
  before?: string;
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
   * Limit result set to specific ids.
   * @default
   */
  include?: number[];
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
  orderby?: 'date' | 'id' | 'title';
  /**
   * Current page of the collection. Constraints: minimum = 1.
   * @default 1
   */
  page?: number;
  /**
   * Maximum number of items to be returned in result set. Constraints: minimum = 1, maximum = 100.
   * @default 10
   */
  per_page?: number;
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to webhooks assigned a specific status.
   * @default "all"
   */
  status?: 'all' | 'active' | 'paused' | 'disabled';
}

/**
 * Arguments for `/wc/v2/webhooks` route when calling POST method.
 */
export interface WcV2WebhooksPostArgs {
  /**
   * Webhook delivery URL.
   */
  delivery_url: string;
  /**
   * A friendly name for the webhook.
   */
  name?: string;
  /**
   * Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.
   */
  secret?: string;
  /**
   * Webhook status.
   * @default "active"
   */
  status?: 'active' | 'paused' | 'disabled';
  /**
   * Webhook topic.
   */
  topic: string;
}

/**
 * Arguments for `/wc/v2/webhooks/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2WebhooksPIdDGetArgs {
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
 * Arguments for `/wc/v2/webhooks/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2WebhooksPIdDPatchPostPutArgs {
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * A friendly name for the webhook.
   */
  name?: string;
  /**
   * Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.
   */
  secret?: string;
  /**
   * Webhook status.
   */
  status?: 'active' | 'paused' | 'disabled';
  /**
   * Webhook topic.
   */
  topic?: string;
}

/**
 * Arguments for `/wc/v2/webhooks/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV2WebhooksPIdDDeleteArgs {
  /**
   * Required to be true, as resource does not support trashing.
   * @default false
   */
  force?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v2/webhooks/(?P<webhook_id>[\d]+)/deliveries` route when calling GET method.
 */
export interface WcV2WebhooksPWebhookIdDDeliveriesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the webhook.
   */
  webhook_id?: number;
}

/**
 * Arguments for `/wc/v2/webhooks/(?P<webhook_id>[\d]+)/deliveries/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV2WebhooksPWebhookIdDDeliveriesPIdDGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Unique identifier for the webhook.
   */
  webhook_id?: number;
}

/**
 * Arguments for `/wc/v2/webhooks/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV2WebhooksBatchPatchPostPutArgs {
  /**
   * A friendly name for the webhook.
   */
  name?: string;
  /**
   * Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.
   */
  secret?: string;
  /**
   * Webhook status.
   */
  status?: 'active' | 'paused' | 'disabled';
  /**
   * Webhook topic.
   */
  topic?: string;
}

/**
 * All "wc/v2" DELETE routes.
 */
export interface WcV2DeleteRoutes {
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDDeleteArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDDeleteArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDDeleteArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV2OrdersPOrderIdDNotesPIdDDeleteArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV2OrdersPOrderIdDRefundsPIdDDeleteArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDDeleteArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDDeleteArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDDeleteArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDDeleteArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDDeleteArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDDeleteArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDDeleteArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDDeleteArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDDeleteArgs;
  '/wc/v2/taxes/classes/(?P<slug>\\w[\\w\\s\\-]*)': WcV2TaxesClassesPSlugWWSDeleteArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDDeleteArgs;
}

/**
 * All "wc/v2" GET routes.
 */
export interface WcV2GetRoutes {
  '/wc/v2': WcV2GetArgs;
  '/wc/v2/coupons': WcV2CouponsGetArgs;
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDGetArgs;
  '/wc/v2/customers': WcV2CustomersGetArgs;
  '/wc/v2/customers/(?P<customer_id>[\\d]+)/downloads': WcV2CustomersPCustomerIdDDownloadsGetArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDGetArgs;
  '/wc/v2/orders': WcV2OrdersGetArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDGetArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/notes': WcV2OrdersPOrderIdDNotesGetArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV2OrdersPOrderIdDNotesPIdDGetArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/refunds': WcV2OrdersPOrderIdDRefundsGetArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV2OrdersPOrderIdDRefundsPIdDGetArgs;
  '/wc/v2/payment_gateways': WcV2PaymentGatewaysGetArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWGetArgs;
  '/wc/v2/products': WcV2ProductsGetArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDGetArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews': WcV2ProductsPProductIdDReviewsGetArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDGetArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations': WcV2ProductsPProductIdDVariationsGetArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDGetArgs;
  '/wc/v2/products/attributes': WcV2ProductsAttributesGetArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV2ProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDGetArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDGetArgs;
  '/wc/v2/products/categories': WcV2ProductsCategoriesGetArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDGetArgs;
  '/wc/v2/products/shipping_classes': WcV2ProductsShippingClassesGetArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDGetArgs;
  '/wc/v2/products/tags': WcV2ProductsTagsGetArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDGetArgs;
  '/wc/v2/reports': WcV2ReportsGetArgs;
  '/wc/v2/reports/sales': WcV2ReportsSalesGetArgs;
  '/wc/v2/reports/top_sellers': WcV2ReportsTopSellersGetArgs;
  '/wc/v2/settings': WcV2SettingsGetArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)': WcV2SettingsPGroupIdWGetArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWGetArgs;
  '/wc/v2/shipping_methods': WcV2ShippingMethodsGetArgs;
  '/wc/v2/shipping_methods/(?P<id>[\\w-]+)': WcV2ShippingMethodsPIdWGetArgs;
  '/wc/v2/shipping/zones': WcV2ShippingZonesGetArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDGetArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsGetArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV2ShippingZonesPZoneIdDMethodsGetArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs;
  '/wc/v2/system_status': WcV2SystemStatusGetArgs;
  '/wc/v2/system_status/tools': WcV2SystemStatusToolsGetArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWGetArgs;
  '/wc/v2/taxes': WcV2TaxesGetArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDGetArgs;
  '/wc/v2/taxes/classes': WcV2TaxesClassesGetArgs;
  '/wc/v2/taxes/classes/(?P<slug>\\w[\\w\\s\\-]*)': WcV2TaxesClassesPSlugWWSGetArgs;
  '/wc/v2/webhooks': WcV2WebhooksGetArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDGetArgs;
  '/wc/v2/webhooks/(?P<webhook_id>[\\d]+)/deliveries': WcV2WebhooksPWebhookIdDDeliveriesGetArgs;
  '/wc/v2/webhooks/(?P<webhook_id>[\\d]+)/deliveries/(?P<id>[\\d]+)': WcV2WebhooksPWebhookIdDDeliveriesPIdDGetArgs;
}

/**
 * All "wc/v2" PATCH routes.
 */
export interface WcV2PatchRoutes {
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPatchPostPutArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPatchPostPutArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPatchPostPutArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPatchPostPutArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPatchPostPutArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPatchPostPutArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPatchPostPutArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPatchPostPutArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPatchPostPutArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPatchPostPutArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v2" POST routes.
 */
export interface WcV2PostRoutes {
  '/wc/v2/coupons': WcV2CouponsPostArgs;
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPatchPostPutArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPatchPostPutArgs;
  '/wc/v2/customers': WcV2CustomersPostArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPatchPostPutArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPatchPostPutArgs;
  '/wc/v2/orders': WcV2OrdersPostArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPatchPostPutArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/notes': WcV2OrdersPOrderIdDNotesPostArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/refunds': WcV2OrdersPOrderIdDRefundsPostArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPatchPostPutArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v2/products': WcV2ProductsPostArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews': WcV2ProductsPProductIdDReviewsPostArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations': WcV2ProductsPProductIdDVariationsPostArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes': WcV2ProductsAttributesPostArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV2ProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPatchPostPutArgs;
  '/wc/v2/products/categories': WcV2ProductsCategoriesPostArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v2/products/shipping_classes': WcV2ProductsShippingClassesPostArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v2/products/tags': WcV2ProductsTagsPostArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v2/shipping/zones': WcV2ShippingZonesPostArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV2ShippingZonesPZoneIdDMethodsPostArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v2/taxes': WcV2TaxesPostArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPatchPostPutArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPatchPostPutArgs;
  '/wc/v2/taxes/classes': WcV2TaxesClassesPostArgs;
  '/wc/v2/webhooks': WcV2WebhooksPostArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPatchPostPutArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v2" PUT routes.
 */
export interface WcV2PutRoutes {
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPatchPostPutArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPatchPostPutArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPatchPostPutArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPatchPostPutArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPatchPostPutArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPatchPostPutArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPatchPostPutArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPatchPostPutArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPatchPostPutArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPatchPostPutArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v2" WordPress REST API methods/routes.
 */
export interface WcV2Routes {
  Delete: WcV2DeleteRoutes;
  Get: WcV2GetRoutes;
  Patch: WcV2PatchRoutes;
  Post: WcV2PostRoutes;
  Put: WcV2PutRoutes;
}
