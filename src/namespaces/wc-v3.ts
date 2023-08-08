// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc/v3" namespace

/**
 * Arguments for `/wc/v3` route when calling GET method.
 */
export interface WcV3GetArgs {}

/**
 * Arguments for `/wc/v3/coupons` route when calling GET method.
 */
export interface WcV3CouponsGetArgs {
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

export interface WcV3CouponsPostArgsMetaData {}

/**
 * Arguments for `/wc/v3/coupons` route when calling POST method.
 */
export interface WcV3CouponsPostArgs {
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
  meta_data?: WcV3CouponsPostArgsMetaData[];
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
 * Arguments for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3CouponsPIdDGetArgs {
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

export interface WcV3CouponsPIdDPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3CouponsPIdDPatchPostPutArgs {
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
  meta_data?: WcV3CouponsPIdDPatchPostPutArgsMetaData[];
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
 * Arguments for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3CouponsPIdDDeleteArgs {
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

export interface WcV3CouponsBatchPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v3/coupons/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3CouponsBatchPatchPostPutArgs {
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
  meta_data?: WcV3CouponsBatchPatchPostPutArgsMetaData[];
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
 * Arguments for `/wc/v3/customers` route when calling GET method.
 */
export interface WcV3CustomersGetArgs {
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

export interface WcV3CustomersPostArgsBilling {}

export interface WcV3CustomersPostArgsMetaData {}

export interface WcV3CustomersPostArgsShipping {}

/**
 * Arguments for `/wc/v3/customers` route when calling POST method.
 */
export interface WcV3CustomersPostArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV3CustomersPostArgsBilling;
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
  meta_data?: WcV3CustomersPostArgsMetaData[];
  /**
   * New user password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV3CustomersPostArgsShipping;
  /**
   * New user username.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v3/customers/(?P<customer_id>[\d]+)/downloads` route when calling GET method.
 */
export interface WcV3CustomersPCustomerIdDDownloadsGetArgs {
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
 * Arguments for `/wc/v3/customers/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3CustomersPIdDGetArgs {
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

export interface WcV3CustomersPIdDPatchPostPutArgsBilling {}

export interface WcV3CustomersPIdDPatchPostPutArgsMetaData {}

export interface WcV3CustomersPIdDPatchPostPutArgsShipping {}

/**
 * Arguments for `/wc/v3/customers/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3CustomersPIdDPatchPostPutArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV3CustomersPIdDPatchPostPutArgsBilling;
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
  meta_data?: WcV3CustomersPIdDPatchPostPutArgsMetaData[];
  /**
   * Customer password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV3CustomersPIdDPatchPostPutArgsShipping;
  /**
   * Customer login name.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v3/customers/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3CustomersPIdDDeleteArgs {
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

export interface WcV3CustomersBatchPatchPostPutArgsBilling {}

export interface WcV3CustomersBatchPatchPostPutArgsMetaData {}

export interface WcV3CustomersBatchPatchPostPutArgsShipping {}

/**
 * Arguments for `/wc/v3/customers/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3CustomersBatchPatchPostPutArgs {
  /**
   * List of billing address data.
   */
  billing?: WcV3CustomersBatchPatchPostPutArgsBilling;
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
  meta_data?: WcV3CustomersBatchPatchPostPutArgsMetaData[];
  /**
   * Customer password.
   */
  password?: string;
  /**
   * List of shipping address data.
   */
  shipping?: WcV3CustomersBatchPatchPostPutArgsShipping;
  /**
   * Customer login name.
   */
  username?: string;
}

/**
 * Arguments for `/wc/v3/data` route when calling GET method.
 */
export interface WcV3DataGetArgs {}

/**
 * Arguments for `/wc/v3/data/continents` route when calling GET method.
 */
export interface WcV3DataContinentsGetArgs {}

/**
 * Arguments for `/wc/v3/data/continents/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WcV3DataContinentsPLocationWGetArgs {
  /**
   * 2 character continent code.
   */
  continent?: string;
}

/**
 * Arguments for `/wc/v3/data/countries` route when calling GET method.
 */
export interface WcV3DataCountriesGetArgs {}

/**
 * Arguments for `/wc/v3/data/countries/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WcV3DataCountriesPLocationWGetArgs {
  /**
   * ISO3166 alpha-2 country code.
   */
  location?: string;
}

/**
 * Arguments for `/wc/v3/data/currencies` route when calling GET method.
 */
export interface WcV3DataCurrenciesGetArgs {}

/**
 * Arguments for `/wc/v3/data/currencies/(?P<currency>[\w-]{3})` route when calling GET method.
 */
export interface WcV3DataCurrenciesPCurrencyW3GetArgs {
  /**
   * ISO4217 currency code.
   */
  location?: string;
}

/**
 * Arguments for `/wc/v3/data/currencies/current` route when calling GET method.
 */
export interface WcV3DataCurrenciesCurrentGetArgs {}

/**
 * Arguments for `/wc/v3/orders` route when calling GET method.
 */
export interface WcV3OrdersGetArgs {
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
   * Limit result set to orders which have specific statuses.
   * @default "any"
   */
  status?: number[];
}

export interface WcV3OrdersPostArgsBilling {}

export interface WcV3OrdersPostArgsCouponLines {}

export interface WcV3OrdersPostArgsFeeLines {}

export interface WcV3OrdersPostArgsLineItems {}

export interface WcV3OrdersPostArgsMetaData {}

export interface WcV3OrdersPostArgsShipping {}

export interface WcV3OrdersPostArgsShippingLines {}

/**
 * Arguments for `/wc/v3/orders` route when calling POST method.
 */
export interface WcV3OrdersPostArgs {
  /**
   * Billing address.
   */
  billing?: WcV3OrdersPostArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV3OrdersPostArgsCouponLines[];
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
  fee_lines?: WcV3OrdersPostArgsFeeLines[];
  /**
   * Line items data.
   */
  line_items?: WcV3OrdersPostArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV3OrdersPostArgsMetaData[];
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
  shipping?: WcV3OrdersPostArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV3OrdersPostArgsShippingLines[];
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
 * Arguments for `/wc/v3/orders/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPIdDGetArgs {
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

export interface WcV3OrdersPIdDPatchPostPutArgsBilling {}

export interface WcV3OrdersPIdDPatchPostPutArgsCouponLines {}

export interface WcV3OrdersPIdDPatchPostPutArgsFeeLines {}

export interface WcV3OrdersPIdDPatchPostPutArgsLineItems {}

export interface WcV3OrdersPIdDPatchPostPutArgsMetaData {}

export interface WcV3OrdersPIdDPatchPostPutArgsShipping {}

export interface WcV3OrdersPIdDPatchPostPutArgsShippingLines {}

/**
 * Arguments for `/wc/v3/orders/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3OrdersPIdDPatchPostPutArgs {
  /**
   * Billing address.
   */
  billing?: WcV3OrdersPIdDPatchPostPutArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV3OrdersPIdDPatchPostPutArgsCouponLines[];
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
  fee_lines?: WcV3OrdersPIdDPatchPostPutArgsFeeLines[];
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Line items data.
   */
  line_items?: WcV3OrdersPIdDPatchPostPutArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV3OrdersPIdDPatchPostPutArgsMetaData[];
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
  shipping?: WcV3OrdersPIdDPatchPostPutArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV3OrdersPIdDPatchPostPutArgsShippingLines[];
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
 * Arguments for `/wc/v3/orders/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/notes` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDNotesGetArgs {
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/notes` route when calling POST method.
 */
export interface WcV3OrdersPOrderIdDNotesPostArgs {
  /**
   * If true, this note will be attributed to the current user. If false, the note will be attributed to the system.
   * @default false
   */
  added_by_user?: boolean;
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDNotesPIdDGetArgs {
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPOrderIdDNotesPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDRefundsGetArgs {
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

export interface WcV3OrdersPOrderIdDRefundsPostArgsMetaData {}

/**
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds` route when calling POST method.
 */
export interface WcV3OrdersPOrderIdDRefundsPostArgs {
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
   * When true, refunded items are restocked.
   * @default true
   */
  api_restock?: boolean;
  /**
   * Meta data.
   */
  meta_data?: WcV3OrdersPOrderIdDRefundsPostArgsMetaData[];
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDRefundsPIdDGetArgs {
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
 * Arguments for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPOrderIdDRefundsPIdDDeleteArgs {
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

export interface WcV3OrdersBatchPatchPostPutArgsBilling {}

export interface WcV3OrdersBatchPatchPostPutArgsCouponLines {}

export interface WcV3OrdersBatchPatchPostPutArgsFeeLines {}

export interface WcV3OrdersBatchPatchPostPutArgsLineItems {}

export interface WcV3OrdersBatchPatchPostPutArgsMetaData {}

export interface WcV3OrdersBatchPatchPostPutArgsShipping {}

export interface WcV3OrdersBatchPatchPostPutArgsShippingLines {}

/**
 * Arguments for `/wc/v3/orders/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3OrdersBatchPatchPostPutArgs {
  /**
   * Billing address.
   */
  billing?: WcV3OrdersBatchPatchPostPutArgsBilling;
  /**
   * Coupons line data.
   */
  coupon_lines?: WcV3OrdersBatchPatchPostPutArgsCouponLines[];
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
  fee_lines?: WcV3OrdersBatchPatchPostPutArgsFeeLines[];
  /**
   * Line items data.
   */
  line_items?: WcV3OrdersBatchPatchPostPutArgsLineItems[];
  /**
   * Meta data.
   */
  meta_data?: WcV3OrdersBatchPatchPostPutArgsMetaData[];
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
  shipping?: WcV3OrdersBatchPatchPostPutArgsShipping;
  /**
   * Shipping lines data.
   */
  shipping_lines?: WcV3OrdersBatchPatchPostPutArgsShippingLines[];
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
 * Arguments for `/wc/v3/payment_gateways` route when calling GET method.
 */
export interface WcV3PaymentGatewaysGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3PaymentGatewaysPIdWGetArgs {
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

export interface WcV3PaymentGatewaysPIdWPatchPostPutArgsSettings {}

/**
 * Arguments for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3PaymentGatewaysPIdWPatchPostPutArgs {
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
  settings?: WcV3PaymentGatewaysPIdWPatchPostPutArgsSettings;
  /**
   * Payment gateway title on checkout.
   */
  title?: string;
}

/**
 * Arguments for `/wc/v3/products` route when calling GET method.
 */
export interface WcV3ProductsGetArgs {
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
    | 'menu_order'
    | 'price'
    | 'popularity'
    | 'rating';
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
   * Limit results to those with a SKU that partial matches a string.
   */
  search_sku?: string;
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
   * Limit result set to products with specified stock status.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /**
   * Limit result set to products assigned a specific tag ID.
   */
  tag?: string;
  /**
   * Limit result set to products assigned a specific type.
   */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV3ProductsPostArgsAttributes {}

export interface WcV3ProductsPostArgsCategories {}

export interface WcV3ProductsPostArgsDefaultAttributes {}

export interface WcV3ProductsPostArgsDimensions {}

export interface WcV3ProductsPostArgsDownloads {}

export interface WcV3ProductsPostArgsImages {}

export interface WcV3ProductsPostArgsMetaData {}

export interface WcV3ProductsPostArgsTags {}

/**
 * Arguments for `/wc/v3/products` route when calling POST method.
 */
export interface WcV3ProductsPostArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPostArgsAttributes[];
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
  categories?: WcV3ProductsPostArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV3ProductsPostArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV3ProductsPostArgsDimensions;
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
  downloads?: WcV3ProductsPostArgsDownloads[];
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
   * List of images.
   */
  images?: WcV3ProductsPostArgsImages[];
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
  meta_data?: WcV3ProductsPostArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   * @default "instock"
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /**
   * List of tags.
   */
  tags?: WcV3ProductsPostArgsTags[];
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
 * Arguments for `/wc/v3/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsPIdDGetArgs {
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

export interface WcV3ProductsPIdDPatchPostPutArgsAttributes {}

export interface WcV3ProductsPIdDPatchPostPutArgsCategories {}

export interface WcV3ProductsPIdDPatchPostPutArgsDefaultAttributes {}

export interface WcV3ProductsPIdDPatchPostPutArgsDimensions {}

export interface WcV3ProductsPIdDPatchPostPutArgsDownloads {}

export interface WcV3ProductsPIdDPatchPostPutArgsImages {}

export interface WcV3ProductsPIdDPatchPostPutArgsMetaData {}

export interface WcV3ProductsPIdDPatchPostPutArgsTags {}

/**
 * Arguments for `/wc/v3/products/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsPIdDPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPIdDPatchPostPutArgsAttributes[];
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
  categories?: WcV3ProductsPIdDPatchPostPutArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV3ProductsPIdDPatchPostPutArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV3ProductsPIdDPatchPostPutArgsDimensions;
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
  downloads?: WcV3ProductsPIdDPatchPostPutArgsDownloads[];
  /**
   * Product external URL. Only for external products. Constraints: format = uri.
   */
  external_url?: string;
  /**
   * Featured product.
   */
  featured?: boolean;
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * List of images.
   */
  images?: WcV3ProductsPIdDPatchPostPutArgsImages[];
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
  meta_data?: WcV3ProductsPIdDPatchPostPutArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /**
   * List of tags.
   */
  tags?: WcV3ProductsPIdDPatchPostPutArgsTags[];
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
 * Arguments for `/wc/v3/products/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations` route when calling GET method.
 */
export interface WcV3ProductsPProductIdDVariationsGetArgs {
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
   * Limit result set to products with specified stock status.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcV3ProductsPProductIdDVariationsPostArgsAttributes {}

export interface WcV3ProductsPProductIdDVariationsPostArgsDimensions {}

export interface WcV3ProductsPProductIdDVariationsPostArgsDownloads {}

export interface WcV3ProductsPProductIdDVariationsPostArgsImage {}

export interface WcV3ProductsPProductIdDVariationsPostArgsMetaData {}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsPostArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPProductIdDVariationsPostArgsAttributes[];
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
  dimensions?: WcV3ProductsPProductIdDVariationsPostArgsDimensions;
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
  downloads?: WcV3ProductsPProductIdDVariationsPostArgsDownloads[];
  /**
   * Variation image data.
   */
  image?: WcV3ProductsPProductIdDVariationsPostArgsImage;
  /**
   * Stock management at variation level.
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
  meta_data?: WcV3ProductsPProductIdDVariationsPostArgsMetaData[];
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
   * Variation status.
   * @default "publish"
   */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   * @default "instock"
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
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
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDGetArgs {
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

export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsAttributes {}

export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsDimensions {}

export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsDownloads {}

export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsImage {}

export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsAttributes[];
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
  dimensions?: WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsDimensions;
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
  downloads?: WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsDownloads[];
  /**
   * Unique identifier for the variation.
   */
  id?: number;
  /**
   * Variation image data.
   */
  image?: WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsImage;
  /**
   * Stock management at variation level.
   */
  manage_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgsMetaData[];
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
   * Variation status.
   */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
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
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDDeleteArgs {
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

export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsAttributes {}

export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsDimensions {}

export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsDownloads {}

export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsImage {}

export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsMetaData {}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsAttributes[];
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
  dimensions?: WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsDimensions;
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
  downloads?: WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsDownloads[];
  /**
   * Variation image data.
   */
  image?: WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsImage;
  /**
   * Stock management at variation level.
   */
  manage_stock?: boolean;
  /**
   * Menu order, used to custom sort products.
   */
  menu_order?: number;
  /**
   * Meta data.
   */
  meta_data?: WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgsMetaData[];
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
   * Variation status.
   */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
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
   * Variation weight (lbs).
   */
  weight?: string;
}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsAttributes {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsDimensions {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsDownloads {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsImage {}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsMetaData {}

/**
 * Arguments for `/wc/v3/products/(?P<product_id>[\d]+)/variations/generate` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsGeneratePostArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsPProductIdDVariationsGeneratePostArgsAttributes[];
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
  dimensions?: WcV3ProductsPProductIdDVariationsGeneratePostArgsDimensions;
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
  downloads?: WcV3ProductsPProductIdDVariationsGeneratePostArgsDownloads[];
  /**
   * Variation image data.
   */
  image?: WcV3ProductsPProductIdDVariationsGeneratePostArgsImage;
  /**
   * Stock management at variation level.
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
  meta_data?: WcV3ProductsPProductIdDVariationsGeneratePostArgsMetaData[];
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
   * Variation status.
   * @default "publish"
   */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   * @default "instock"
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
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
   * Variation weight (lbs).
   */
  weight?: string;
}

/**
 * Arguments for `/wc/v3/products/attributes` route when calling GET method.
 */
export interface WcV3ProductsAttributesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v3/products/attributes` route when calling POST method.
 */
export interface WcV3ProductsAttributesPostArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsGetArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling POST method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPostArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsAttributesPIdDGetArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsAttributesPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsAttributesPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/attributes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsAttributesBatchPatchPostPutArgs {
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

export interface WcV3ProductsBatchPatchPostPutArgsAttributes {}

export interface WcV3ProductsBatchPatchPostPutArgsCategories {}

export interface WcV3ProductsBatchPatchPostPutArgsDefaultAttributes {}

export interface WcV3ProductsBatchPatchPostPutArgsDimensions {}

export interface WcV3ProductsBatchPatchPostPutArgsDownloads {}

export interface WcV3ProductsBatchPatchPostPutArgsImages {}

export interface WcV3ProductsBatchPatchPostPutArgsMetaData {}

export interface WcV3ProductsBatchPatchPostPutArgsTags {}

/**
 * Arguments for `/wc/v3/products/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsBatchPatchPostPutArgs {
  /**
   * List of attributes.
   */
  attributes?: WcV3ProductsBatchPatchPostPutArgsAttributes[];
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
  categories?: WcV3ProductsBatchPatchPostPutArgsCategories[];
  /**
   * List of cross-sell products IDs.
   */
  cross_sell_ids?: number[];
  /**
   * Defaults variation attributes.
   */
  default_attributes?: WcV3ProductsBatchPatchPostPutArgsDefaultAttributes[];
  /**
   * Product description.
   */
  description?: string;
  /**
   * Product dimensions.
   */
  dimensions?: WcV3ProductsBatchPatchPostPutArgsDimensions;
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
  downloads?: WcV3ProductsBatchPatchPostPutArgsDownloads[];
  /**
   * Product external URL. Only for external products. Constraints: format = uri.
   */
  external_url?: string;
  /**
   * Featured product.
   */
  featured?: boolean;
  /**
   * List of images.
   */
  images?: WcV3ProductsBatchPatchPostPutArgsImages[];
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
  meta_data?: WcV3ProductsBatchPatchPostPutArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /**
   * Stock quantity.
   */
  stock_quantity?: number;
  /**
   * Controls the stock status of the product.
   */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /**
   * List of tags.
   */
  tags?: WcV3ProductsBatchPatchPostPutArgsTags[];
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
 * Arguments for `/wc/v3/products/categories` route when calling GET method.
 */
export interface WcV3ProductsCategoriesGetArgs {
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

export interface WcV3ProductsCategoriesPostArgsImage {}

/**
 * Arguments for `/wc/v3/products/categories` route when calling POST method.
 */
export interface WcV3ProductsCategoriesPostArgs {
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
  image?: WcV3ProductsCategoriesPostArgsImage;
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
 * Arguments for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsCategoriesPIdDGetArgs {
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

export interface WcV3ProductsCategoriesPIdDPatchPostPutArgsImage {}

/**
 * Arguments for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsCategoriesPIdDPatchPostPutArgs {
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
  image?: WcV3ProductsCategoriesPIdDPatchPostPutArgsImage;
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
 * Arguments for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsCategoriesPIdDDeleteArgs {
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

export interface WcV3ProductsCategoriesBatchPatchPostPutArgsImage {}

/**
 * Arguments for `/wc/v3/products/categories/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsCategoriesBatchPatchPostPutArgs {
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
  image?: WcV3ProductsCategoriesBatchPatchPostPutArgsImage;
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
 * Arguments for `/wc/v3/products/reviews` route when calling GET method.
 */
export interface WcV3ProductsReviewsGetArgs {
  /**
   * Limit response to resources published after a given ISO8601 compliant date. Constraints: format = date-time.
   */
  after?: string;
  /**
   * Limit response to reviews published before a given ISO8601 compliant date. Constraints: format = date-time.
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
   * @default "desc"
   */
  order?: 'asc' | 'desc';
  /**
   * Sort collection by object attribute.
   * @default "date_gmt"
   */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
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
   * Limit result set to reviews assigned to specific product IDs.
   * @default
   */
  product?: number[];
  /**
   * Limit result set to reviews assigned to specific user IDs.
   */
  reviewer?: number[];
  /**
   * Limit result set to that from a specific author email. Constraints: format = email.
   * @default null
   */
  reviewer_email?: string;
  /**
   * Ensure result set excludes reviews assigned to specific user IDs.
   */
  reviewer_exclude?: number[];
  /**
   * Limit results to those matching a string.
   */
  search?: string;
  /**
   * Limit result set to reviews assigned a specific status.
   * @default "approved"
   */
  status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
}

/**
 * Arguments for `/wc/v3/products/reviews` route when calling POST method.
 */
export interface WcV3ProductsReviewsPostArgs {
  /**
   * Unique identifier for the product.
   */
  product_id: number;
  /**
   * Product name.
   */
  product_name?: string;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * Review content.
   */
  review: string;
  /**
   * Name of the reviewer.
   */
  reviewer: string;
  /**
   * Email of the reviewer.
   */
  reviewer_email: string;
  /**
   * Status of the review.
   * @default "approved"
   */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

/**
 * Arguments for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsReviewsPIdDGetArgs {
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
 * Arguments for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsReviewsPIdDPatchPostPutArgs {
  /**
   * Unique identifier for the resource.
   */
  id?: number;
  /**
   * Unique identifier for the product that the review belongs to.
   */
  product_id?: number;
  /**
   * Product name.
   */
  product_name?: string;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * The content of the review.
   */
  review?: string;
  /**
   * Reviewer name.
   */
  reviewer?: string;
  /**
   * Reviewer email. Constraints: format = email.
   */
  reviewer_email?: string;
  /**
   * Status of the review.
   */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

/**
 * Arguments for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsReviewsPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/reviews/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsReviewsBatchPatchPostPutArgs {
  /**
   * Unique identifier for the product that the review belongs to.
   */
  product_id?: number;
  /**
   * Product name.
   */
  product_name?: string;
  /**
   * Review rating (0 to 5).
   */
  rating?: number;
  /**
   * The content of the review.
   */
  review?: string;
  /**
   * Reviewer name.
   */
  reviewer?: string;
  /**
   * Reviewer email. Constraints: format = email.
   */
  reviewer_email?: string;
  /**
   * Status of the review.
   */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

/**
 * Arguments for `/wc/v3/products/shipping_classes` route when calling GET method.
 */
export interface WcV3ProductsShippingClassesGetArgs {
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
 * Arguments for `/wc/v3/products/shipping_classes` route when calling POST method.
 */
export interface WcV3ProductsShippingClassesPostArgs {
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
 * Arguments for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsShippingClassesPIdDGetArgs {
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
 * Arguments for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsShippingClassesPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsShippingClassesPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/shipping_classes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsShippingClassesBatchPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/tags` route when calling GET method.
 */
export interface WcV3ProductsTagsGetArgs {
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
 * Arguments for `/wc/v3/products/tags` route when calling POST method.
 */
export interface WcV3ProductsTagsPostArgs {
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
 * Arguments for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsTagsPIdDGetArgs {
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
 * Arguments for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsTagsPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsTagsPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/products/tags/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ProductsTagsBatchPatchPostPutArgs {
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
 * Arguments for `/wc/v3/reports` route when calling GET method.
 */
export interface WcV3ReportsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/coupons/totals` route when calling GET method.
 */
export interface WcV3ReportsCouponsTotalsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/customers/totals` route when calling GET method.
 */
export interface WcV3ReportsCustomersTotalsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/orders/totals` route when calling GET method.
 */
export interface WcV3ReportsOrdersTotalsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/products/totals` route when calling GET method.
 */
export interface WcV3ReportsProductsTotalsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/reviews/totals` route when calling GET method.
 */
export interface WcV3ReportsReviewsTotalsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/reports/sales` route when calling GET method.
 */
export interface WcV3ReportsSalesGetArgs {
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
 * Arguments for `/wc/v3/reports/top_sellers` route when calling GET method.
 */
export interface WcV3ReportsTopSellersGetArgs {
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
 * Arguments for `/wc/v3/settings` route when calling GET method.
 */
export interface WcV3SettingsGetArgs {}

/**
 * Arguments for `/wc/v3/settings/(?P<group_id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SettingsPGroupIdWGetArgs {
  /**
   * Settings group ID.
   */
  group?: string;
}

/**
 * Arguments for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SettingsPGroupIdWPIdWGetArgs {
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
 * Arguments for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3SettingsPGroupIdWPIdWPatchPostPutArgs {
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
 * Arguments for `/wc/v3/settings/(?P<group_id>[\w-]+)/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3SettingsPGroupIdWBatchPatchPostPutArgs {
  /**
   * Settings group ID.
   */
  group?: string;
}

/**
 * Arguments for `/wc/v3/settings/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3SettingsBatchPatchPostPutArgs {}

/**
 * Arguments for `/wc/v3/shipping_methods` route when calling GET method.
 */
export interface WcV3ShippingMethodsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/shipping_methods/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3ShippingMethodsPIdWGetArgs {
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
 * Arguments for `/wc/v3/shipping/zones` route when calling GET method.
 */
export interface WcV3ShippingZonesGetArgs {}

/**
 * Arguments for `/wc/v3/shipping/zones` route when calling POST method.
 */
export interface WcV3ShippingZonesPostArgs {
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
 * Arguments for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ShippingZonesPIdDGetArgs {
  /**
   * Unique ID for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ShippingZonesPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ShippingZonesPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling GET method.
 */
export interface WcV3ShippingZonesPIdDLocationsGetArgs {
  /**
   * Unique ID for the resource.
   */
  id?: number;
}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ShippingZonesPIdDLocationsPatchPostPutArgs {
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
 * Arguments for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling GET method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsGetArgs {
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPostArgsSettings {}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling POST method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPostArgs {
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
  settings?: WcV3ShippingZonesPZoneIdDMethodsPostArgsSettings;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling GET method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /**
   * Unique ID for the instance.
   */
  instance_id?: number;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgsSettings {}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs {
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
  settings?: WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgsSettings;
  /**
   * Unique ID for the zone.
   */
  zone_id?: number;
}

/**
 * Arguments for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
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
 * Arguments for `/wc/v3/system_status` route when calling GET method.
 */
export interface WcV3SystemStatusGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view';
}

/**
 * Arguments for `/wc/v3/system_status/tools` route when calling GET method.
 */
export interface WcV3SystemStatusToolsGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SystemStatusToolsPIdWGetArgs {
  /**
   * Unique identifier for the resource.
   */
  id?: string;
}

/**
 * Arguments for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3SystemStatusToolsPIdWPatchPostPutArgs {
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
 * Arguments for `/wc/v3/taxes` route when calling GET method.
 */
export interface WcV3TaxesGetArgs {
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
 * Arguments for `/wc/v3/taxes` route when calling POST method.
 */
export interface WcV3TaxesPostArgs {
  /**
   * List of city names. Introduced in WooCommerce 5.3.
   */
  cities?: number[];
  /**
   * City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.
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
   * Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.
   */
  postcode?: string;
  /**
   * List of postcodes / ZIPs. Introduced in WooCommerce 5.3.
   */
  postcodes?: number[];
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
 * Arguments for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3TaxesPIdDGetArgs {
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
 * Arguments for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3TaxesPIdDPatchPostPutArgs {
  /**
   * List of city names. Introduced in WooCommerce 5.3.
   */
  cities?: number[];
  /**
   * City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.
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
   * Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.
   */
  postcode?: string;
  /**
   * List of postcodes / ZIPs. Introduced in WooCommerce 5.3.
   */
  postcodes?: number[];
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
 * Arguments for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3TaxesPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/taxes/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3TaxesBatchPatchPostPutArgs {
  /**
   * List of city names. Introduced in WooCommerce 5.3.
   */
  cities?: number[];
  /**
   * City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead.
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
   * Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead.
   */
  postcode?: string;
  /**
   * List of postcodes / ZIPs. Introduced in WooCommerce 5.3.
   */
  postcodes?: number[];
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
 * Arguments for `/wc/v3/taxes/classes` route when calling GET method.
 */
export interface WcV3TaxesClassesGetArgs {
  /**
   * Scope under which the request is made; determines fields present in response.
   * @default "view"
   */
  context?: 'view' | 'edit';
}

/**
 * Arguments for `/wc/v3/taxes/classes` route when calling POST method.
 */
export interface WcV3TaxesClassesPostArgs {
  /**
   * Tax class name.
   */
  name: string;
}

/**
 * Arguments for `/wc/v3/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling GET method.
 */
export interface WcV3TaxesClassesPSlugWWSGetArgs {
  /**
   * Unique slug for the resource.
   */
  slug?: string;
}

/**
 * Arguments for `/wc/v3/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling DELETE method.
 */
export interface WcV3TaxesClassesPSlugWWSDeleteArgs {
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
 * Arguments for `/wc/v3/webhooks` route when calling GET method.
 */
export interface WcV3WebhooksGetArgs {
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
 * Arguments for `/wc/v3/webhooks` route when calling POST method.
 */
export interface WcV3WebhooksPostArgs {
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
 * Arguments for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3WebhooksPIdDGetArgs {
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
 * Arguments for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3WebhooksPIdDPatchPostPutArgs {
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
 * Arguments for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3WebhooksPIdDDeleteArgs {
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
 * Arguments for `/wc/v3/webhooks/batch` route when calling PATCH, POST, and PUT methods.
 */
export interface WcV3WebhooksBatchPatchPostPutArgs {
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
 * All "wc/v3" DELETE routes.
 */
export interface WcV3DeleteRoutes {
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDDeleteArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDDeleteArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDDeleteArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV3OrdersPOrderIdDNotesPIdDDeleteArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV3OrdersPOrderIdDRefundsPIdDDeleteArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDDeleteArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDDeleteArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDDeleteArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDDeleteArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDDeleteArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDDeleteArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDDeleteArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDDeleteArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDDeleteArgs;
  '/wc/v3/taxes/classes/(?P<slug>\\w[\\w\\s\\-]*)': WcV3TaxesClassesPSlugWWSDeleteArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDDeleteArgs;
}

/**
 * All "wc/v3" GET routes.
 */
export interface WcV3GetRoutes {
  '/wc/v3': WcV3GetArgs;
  '/wc/v3/coupons': WcV3CouponsGetArgs;
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDGetArgs;
  '/wc/v3/customers': WcV3CustomersGetArgs;
  '/wc/v3/customers/(?P<customer_id>[\\d]+)/downloads': WcV3CustomersPCustomerIdDDownloadsGetArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDGetArgs;
  '/wc/v3/data': WcV3DataGetArgs;
  '/wc/v3/data/continents': WcV3DataContinentsGetArgs;
  '/wc/v3/data/continents/(?P<location>[\\w-]+)': WcV3DataContinentsPLocationWGetArgs;
  '/wc/v3/data/countries': WcV3DataCountriesGetArgs;
  '/wc/v3/data/countries/(?P<location>[\\w-]+)': WcV3DataCountriesPLocationWGetArgs;
  '/wc/v3/data/currencies': WcV3DataCurrenciesGetArgs;
  '/wc/v3/data/currencies/(?P<currency>[\\w-]{3})': WcV3DataCurrenciesPCurrencyW3GetArgs;
  '/wc/v3/data/currencies/current': WcV3DataCurrenciesCurrentGetArgs;
  '/wc/v3/orders': WcV3OrdersGetArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDGetArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/notes': WcV3OrdersPOrderIdDNotesGetArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV3OrdersPOrderIdDNotesPIdDGetArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/refunds': WcV3OrdersPOrderIdDRefundsGetArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV3OrdersPOrderIdDRefundsPIdDGetArgs;
  '/wc/v3/payment_gateways': WcV3PaymentGatewaysGetArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWGetArgs;
  '/wc/v3/products': WcV3ProductsGetArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDGetArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations': WcV3ProductsPProductIdDVariationsGetArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDGetArgs;
  '/wc/v3/products/attributes': WcV3ProductsAttributesGetArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV3ProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDGetArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDGetArgs;
  '/wc/v3/products/categories': WcV3ProductsCategoriesGetArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDGetArgs;
  '/wc/v3/products/reviews': WcV3ProductsReviewsGetArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDGetArgs;
  '/wc/v3/products/shipping_classes': WcV3ProductsShippingClassesGetArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDGetArgs;
  '/wc/v3/products/tags': WcV3ProductsTagsGetArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDGetArgs;
  '/wc/v3/reports': WcV3ReportsGetArgs;
  '/wc/v3/reports/coupons/totals': WcV3ReportsCouponsTotalsGetArgs;
  '/wc/v3/reports/customers/totals': WcV3ReportsCustomersTotalsGetArgs;
  '/wc/v3/reports/orders/totals': WcV3ReportsOrdersTotalsGetArgs;
  '/wc/v3/reports/products/totals': WcV3ReportsProductsTotalsGetArgs;
  '/wc/v3/reports/reviews/totals': WcV3ReportsReviewsTotalsGetArgs;
  '/wc/v3/reports/sales': WcV3ReportsSalesGetArgs;
  '/wc/v3/reports/top_sellers': WcV3ReportsTopSellersGetArgs;
  '/wc/v3/settings': WcV3SettingsGetArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)': WcV3SettingsPGroupIdWGetArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWGetArgs;
  '/wc/v3/shipping_methods': WcV3ShippingMethodsGetArgs;
  '/wc/v3/shipping_methods/(?P<id>[\\w-]+)': WcV3ShippingMethodsPIdWGetArgs;
  '/wc/v3/shipping/zones': WcV3ShippingZonesGetArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDGetArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsGetArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV3ShippingZonesPZoneIdDMethodsGetArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs;
  '/wc/v3/system_status': WcV3SystemStatusGetArgs;
  '/wc/v3/system_status/tools': WcV3SystemStatusToolsGetArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWGetArgs;
  '/wc/v3/taxes': WcV3TaxesGetArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDGetArgs;
  '/wc/v3/taxes/classes': WcV3TaxesClassesGetArgs;
  '/wc/v3/taxes/classes/(?P<slug>\\w[\\w\\s\\-]*)': WcV3TaxesClassesPSlugWWSGetArgs;
  '/wc/v3/webhooks': WcV3WebhooksGetArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDGetArgs;
}

/**
 * All "wc/v3" PATCH routes.
 */
export interface WcV3PatchRoutes {
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPatchPostPutArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPatchPostPutArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPatchPostPutArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPatchPostPutArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPatchPostPutArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPatchPostPutArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPatchPostPutArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPatchPostPutArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPatchPostPutArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPatchPostPutArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPatchPostPutArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPatchPostPutArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v3" POST routes.
 */
export interface WcV3PostRoutes {
  '/wc/v3/coupons': WcV3CouponsPostArgs;
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPatchPostPutArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPatchPostPutArgs;
  '/wc/v3/customers': WcV3CustomersPostArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPatchPostPutArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPatchPostPutArgs;
  '/wc/v3/orders': WcV3OrdersPostArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPatchPostPutArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/notes': WcV3OrdersPOrderIdDNotesPostArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/refunds': WcV3OrdersPOrderIdDRefundsPostArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPatchPostPutArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v3/products': WcV3ProductsPostArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations': WcV3ProductsPProductIdDVariationsPostArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/generate': WcV3ProductsPProductIdDVariationsGeneratePostArgs;
  '/wc/v3/products/attributes': WcV3ProductsAttributesPostArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV3ProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPatchPostPutArgs;
  '/wc/v3/products/categories': WcV3ProductsCategoriesPostArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v3/products/reviews': WcV3ProductsReviewsPostArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPatchPostPutArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPatchPostPutArgs;
  '/wc/v3/products/shipping_classes': WcV3ProductsShippingClassesPostArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v3/products/tags': WcV3ProductsTagsPostArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPatchPostPutArgs;
  '/wc/v3/shipping/zones': WcV3ShippingZonesPostArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV3ShippingZonesPZoneIdDMethodsPostArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v3/taxes': WcV3TaxesPostArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPatchPostPutArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPatchPostPutArgs;
  '/wc/v3/taxes/classes': WcV3TaxesClassesPostArgs;
  '/wc/v3/webhooks': WcV3WebhooksPostArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPatchPostPutArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v3" PUT routes.
 */
export interface WcV3PutRoutes {
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPatchPostPutArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPatchPostPutArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPatchPostPutArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPatchPostPutArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPatchPostPutArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPatchPostPutArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPatchPostPutArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPatchPostPutArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPatchPostPutArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPatchPostPutArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPatchPostPutArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPatchPostPutArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPatchPostPutArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPatchPostPutArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPatchPostPutArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPatchPostPutArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPatchPostPutArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPatchPostPutArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPatchPostPutArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPatchPostPutArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPatchPostPutArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPatchPostPutArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchPostPutArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPatchPostPutArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPatchPostPutArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPatchPostPutArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPatchPostPutArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPatchPostPutArgs;
}

/**
 * All "wc/v3" WordPress REST API methods/routes.
 */
export interface WcV3Routes {
  Delete: WcV3DeleteRoutes;
  Get: WcV3GetRoutes;
  Patch: WcV3PatchRoutes;
  Post: WcV3PostRoutes;
  Put: WcV3PutRoutes;
}
