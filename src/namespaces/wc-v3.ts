export interface WcV3GetArgs {
}

export interface WcV3CouponsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to resources with a specific code. */
  code?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcV3CouponsPostArgsMetaData {
}


export interface WcV3CouponsPostArgs {
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** Coupon code. */
  code: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** Meta data. */
  meta_data?: WcV3CouponsPostArgsMetaData[];
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV3CouponsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3CouponsPIdDPostPutPatchArgsMetaData {
}


export interface WcV3CouponsPIdDPostPutPatchArgs {
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** Coupon code. */
  code?: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** Meta data. */
  meta_data?: WcV3CouponsPIdDPostPutPatchArgsMetaData[];
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV3CouponsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3CouponsBatchPostPutPatchArgsMetaData {
}


export interface WcV3CouponsBatchPostPutPatchArgs {
  /** The amount of discount. Should always be numeric, even if setting a percentage. */
  amount?: string;
  /** Coupon code. */
  code?: string;
  /** Coupon description. */
  description?: string;
  /** Determines the type of discount that will be applied. */
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product';
  /** List of email addresses that can use this coupon. */
  email_restrictions?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** List of product IDs the coupon cannot be used on. */
  excluded_product_ids?: number[];
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** Meta data. */
  meta_data?: WcV3CouponsBatchPostPutPatchArgsMetaData[];
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** The status of the coupon. Should always be draft, published, or pending review */
  status?: string;
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV3CustomersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to resources with a specific email. */
  email?: string;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'include' | 'name' | 'registered_date';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to resources with a specific role. */
  role?: 'all' | 'administrator' | 'editor' | 'author' | 'contributor' | 'subscriber' | 'customer' | 'shop_manager';
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcV3CustomersPostArgsBilling {
}


export interface WcV3CustomersPostArgsMetaData {
}


export interface WcV3CustomersPostArgsShipping {
}


export interface WcV3CustomersPostArgs {
  /** List of billing address data. */
  billing?: WcV3CustomersPostArgsBilling;
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV3CustomersPostArgsMetaData[];
  /** New user password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV3CustomersPostArgsShipping;
  /** New user username. */
  username?: string;
}

export interface WcV3CustomersPCustomerIdDDownloadsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Unique identifier for the resource. */
  customer_id?: number;
}

export interface WcV3CustomersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3CustomersPIdDPostPutPatchArgsBilling {
}


export interface WcV3CustomersPIdDPostPutPatchArgsMetaData {
}


export interface WcV3CustomersPIdDPostPutPatchArgsShipping {
}


export interface WcV3CustomersPIdDPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV3CustomersPIdDPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV3CustomersPIdDPostPutPatchArgsMetaData[];
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV3CustomersPIdDPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV3CustomersPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV3CustomersBatchPostPutPatchArgsBilling {
}


export interface WcV3CustomersBatchPostPutPatchArgsMetaData {
}


export interface WcV3CustomersBatchPostPutPatchArgsShipping {
}


export interface WcV3CustomersBatchPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV3CustomersBatchPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV3CustomersBatchPostPutPatchArgsMetaData[];
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV3CustomersBatchPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV3DataGetArgs {
}

export interface WcV3DataContinentsGetArgs {
}

export interface WcV3DataContinentsPLocationWGetArgs {
  /** 2 character continent code. */
  continent?: string;
}

export interface WcV3DataCountriesGetArgs {
}

export interface WcV3DataCountriesPLocationWGetArgs {
  /** ISO3166 alpha-2 country code. */
  location?: string;
}

export interface WcV3DataCurrenciesGetArgs {
}

export interface WcV3DataCurrenciesPCurrencyW3GetArgs {
  /** ISO4217 currency code. */
  location?: string;
}

export interface WcV3DataCurrenciesCurrentGetArgs {
}

export interface WcV3OrdersGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to orders which have specific statuses. */
  status?: number[];
}

export interface WcV3OrdersPostArgsBilling {
}


export interface WcV3OrdersPostArgsCouponLines {
}


export interface WcV3OrdersPostArgsFeeLines {
}


export interface WcV3OrdersPostArgsLineItems {
}


export interface WcV3OrdersPostArgsMetaData {
}


export interface WcV3OrdersPostArgsShipping {
}


export interface WcV3OrdersPostArgsShippingLines {
}


export interface WcV3OrdersPostArgs {
  /** Billing address. */
  billing?: WcV3OrdersPostArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersPostArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV3OrdersPostArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV3OrdersPostArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV3OrdersPostArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV3OrdersPostArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersPostArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV3OrdersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3OrdersPIdDPostPutPatchArgsBilling {
}


export interface WcV3OrdersPIdDPostPutPatchArgsCouponLines {
}


export interface WcV3OrdersPIdDPostPutPatchArgsFeeLines {
}


export interface WcV3OrdersPIdDPostPutPatchArgsLineItems {
}


export interface WcV3OrdersPIdDPostPutPatchArgsMetaData {
}


export interface WcV3OrdersPIdDPostPutPatchArgsShipping {
}


export interface WcV3OrdersPIdDPostPutPatchArgsShippingLines {
}


export interface WcV3OrdersPIdDPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV3OrdersPIdDPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersPIdDPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV3OrdersPIdDPostPutPatchArgsFeeLines[];
  /** Unique identifier for the resource. */
  id?: number;
  /** Line items data. */
  line_items?: WcV3OrdersPIdDPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV3OrdersPIdDPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV3OrdersPIdDPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersPIdDPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV3OrdersPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3OrdersPOrderIdDNotesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** The order ID. */
  order_id?: number;
  /** Limit result to customers or internal notes. */
  type?: 'any' | 'customer' | 'internal';
}

export interface WcV3OrdersPOrderIdDNotesPostArgs {
  /** If true, this note will be attributed to the current user. If false, the note will be attributed to the system. */
  added_by_user?: boolean;
  /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
  customer_note?: boolean;
  /** Order note content. */
  note: string;
  /** The order ID. */
  order_id?: number;
}

export interface WcV3OrdersPOrderIdDNotesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV3OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV3OrdersPOrderIdDRefundsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** The order ID. */
  order_id?: number;
  /** Only show meta which is meant to be displayed for an order. */
  order_item_display_meta?: boolean;
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WcV3OrdersPOrderIdDRefundsPostArgsMetaData {
}


export interface WcV3OrdersPOrderIdDRefundsPostArgs {
  /** Refund amount. */
  amount?: string;
  /** When true, the payment gateway API is used to generate the refund. */
  api_refund?: boolean;
  /** When true, refunded items are restocked. */
  api_restock?: boolean;
  /** Meta data. */
  meta_data?: WcV3OrdersPOrderIdDRefundsPostArgsMetaData[];
  /** The order ID. */
  order_id?: number;
  /** Reason for refund. */
  reason?: string;
  /** User ID of user who created the refund. */
  refunded_by?: number;
}

export interface WcV3OrdersPOrderIdDRefundsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV3OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV3OrdersBatchPostPutPatchArgsBilling {
}


export interface WcV3OrdersBatchPostPutPatchArgsCouponLines {
}


export interface WcV3OrdersBatchPostPutPatchArgsFeeLines {
}


export interface WcV3OrdersBatchPostPutPatchArgsLineItems {
}


export interface WcV3OrdersBatchPostPutPatchArgsMetaData {
}


export interface WcV3OrdersBatchPostPutPatchArgsShipping {
}


export interface WcV3OrdersBatchPostPutPatchArgsShippingLines {
}


export interface WcV3OrdersBatchPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV3OrdersBatchPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV3OrdersBatchPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV3OrdersBatchPostPutPatchArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV3OrdersBatchPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV3OrdersBatchPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV3OrdersBatchPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV3OrdersBatchPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV3PaymentGatewaysGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3PaymentGatewaysPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3PaymentGatewaysPIdWPostPutPatchArgsSettings {
}


export interface WcV3PaymentGatewaysPIdWPostPutPatchArgs {
  /** Payment gateway description on checkout. */
  description?: string;
  /** Payment gateway enabled status. */
  enabled?: boolean;
  /** Unique identifier for the resource. */
  id?: string;
  /** Payment gateway sort order. */
  order?: number;
  /** Payment gateway settings. */
  settings?: WcV3PaymentGatewaysPIdWPostPutPatchArgsSettings;
  /** Payment gateway title on checkout. */
  title?: string;
}

export interface WcV3ProductsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to featured products. */
  featured?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'rand' | 'menu_order' | 'popularity' | 'rating' | 'menu_order' | 'price' | 'popularity' | 'rating';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to those with a SKU that partial matches a string. */
  search_sku?: string;
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV3ProductsPostArgsAttributes {
}


export interface WcV3ProductsPostArgsCategories {
}


export interface WcV3ProductsPostArgsDefaultAttributes {
}


export interface WcV3ProductsPostArgsDimensions {
}


export interface WcV3ProductsPostArgsDownloads {
}


export interface WcV3ProductsPostArgsImages {
}


export interface WcV3ProductsPostArgsMetaData {
}


export interface WcV3ProductsPostArgsTags {
}


export interface WcV3ProductsPostArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV3ProductsPostArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsPostArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPostArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcV3ProductsPostArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPostArgsMetaData[];
  /** Product name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** Product sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product slug. */
  slug?: string;
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future' | 'auto-draft' | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcV3ProductsPostArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsPIdDPostPutPatchArgsAttributes {
}


export interface WcV3ProductsPIdDPostPutPatchArgsCategories {
}


export interface WcV3ProductsPIdDPostPutPatchArgsDefaultAttributes {
}


export interface WcV3ProductsPIdDPostPutPatchArgsDimensions {
}


export interface WcV3ProductsPIdDPostPutPatchArgsDownloads {
}


export interface WcV3ProductsPIdDPostPutPatchArgsImages {
}


export interface WcV3ProductsPIdDPostPutPatchArgsMetaData {
}


export interface WcV3ProductsPIdDPostPutPatchArgsTags {
}


export interface WcV3ProductsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV3ProductsPIdDPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsPIdDPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPIdDPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** List of images. */
  images?: WcV3ProductsPIdDPostPutPatchArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPIdDPostPutPatchArgsMetaData[];
  /** Product name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** Product sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product slug. */
  slug?: string;
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future' | 'auto-draft' | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcV3ProductsPIdDPostPutPatchArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsPProductIdDVariationsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Whether to consider GMT post dates when limiting response by published or modified date. */
  dates_are_gmt?: boolean;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Ensure meta_data excludes specific keys. */
  exclude_meta?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Limit meta_data to specific keys. */
  include_meta?: number[];
  /** Limit result set to products based on a maximum price. */
  max_price?: string;
  /** Limit result set to products based on a minimum price. */
  min_price?: string;
  /** Limit response to resources modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to resources modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Limit result set to products on sale. */
  on_sale?: boolean;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcV3ProductsPProductIdDVariationsPostArgsAttributes {
}


export interface WcV3ProductsPProductIdDVariationsPostArgsDimensions {
}


export interface WcV3ProductsPProductIdDVariationsPostArgsDownloads {
}


export interface WcV3ProductsPProductIdDVariationsPostArgsImage {
}


export interface WcV3ProductsPProductIdDVariationsPostArgsMetaData {
}


export interface WcV3ProductsPProductIdDVariationsPostArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsPostArgsDownloads[];
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsPostArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsPostArgsMetaData[];
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsPProductIdDVariationsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes {
}


export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions {
}


export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads {
}


export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsImage {
}


export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData {
}


export interface WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads[];
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData[];
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes {
}


export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions {
}


export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads {
}


export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsImage {
}


export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData {
}


export interface WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads[];
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData[];
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsAttributes {
}


export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsDimensions {
}


export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsDownloads {
}


export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsImage {
}


export interface WcV3ProductsPProductIdDVariationsGeneratePostArgsMetaData {
}


export interface WcV3ProductsPProductIdDVariationsGeneratePostArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsPProductIdDVariationsGeneratePostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV3ProductsPProductIdDVariationsGeneratePostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsPProductIdDVariationsGeneratePostArgsDownloads[];
  /** Variation image data. */
  image?: WcV3ProductsPProductIdDVariationsGeneratePostArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsPProductIdDVariationsGeneratePostArgsMetaData[];
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Variation regular price. */
  regular_price?: string;
  /** Variation sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Unique identifier. */
  sku?: string;
  /** Variation status. */
  status?: 'draft' | 'pending' | 'private' | 'publish';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3ProductsAttributesPostArgs {
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
  /** Name for the resource. */
  name: string;
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
}

export interface WcV3ProductsAttributesPAttributeIdDTermsGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPostArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** HTML description of the resource. */
  description?: string;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Term name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsAttributesPIdDPostPutPatchArgs {
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** Attribute name. */
  name?: string;
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
}

export interface WcV3ProductsAttributesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsAttributesBatchPostPutPatchArgs {
  /** Enable/Disable attribute archives. */
  has_archives?: boolean;
  /** Attribute name. */
  name?: string;
  /** Default sort order. */
  order_by?: 'menu_order' | 'name' | 'name_num' | 'id';
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
  /** Type of attribute. */
  type?: 'select';
}

export interface WcV3ProductsBatchPostPutPatchArgsAttributes {
}


export interface WcV3ProductsBatchPostPutPatchArgsCategories {
}


export interface WcV3ProductsBatchPostPutPatchArgsDefaultAttributes {
}


export interface WcV3ProductsBatchPostPutPatchArgsDimensions {
}


export interface WcV3ProductsBatchPostPutPatchArgsDownloads {
}


export interface WcV3ProductsBatchPostPutPatchArgsImages {
}


export interface WcV3ProductsBatchPostPutPatchArgsMetaData {
}


export interface WcV3ProductsBatchPostPutPatchArgsTags {
}


export interface WcV3ProductsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV3ProductsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV3ProductsBatchPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV3ProductsBatchPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV3ProductsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV3ProductsBatchPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcV3ProductsBatchPostPutPatchArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV3ProductsBatchPostPutPatchArgsMetaData[];
  /** Product name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
  /** Optional note to send the customer after purchase. */
  purchase_note?: string;
  /** Product regular price. */
  regular_price?: string;
  /** Allow reviews. */
  reviews_allowed?: boolean;
  /** Product sale price. */
  sale_price?: string;
  /** Shipping class slug. */
  shipping_class?: string;
  /** Product short description. */
  short_description?: string;
  /** Unique identifier. */
  sku?: string;
  /** Product slug. */
  slug?: string;
  /** Allow one item to be bought in a single order. */
  sold_individually?: boolean;
  /** Product status (post status). */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future' | 'auto-draft' | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcV3ProductsBatchPostPutPatchArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of up-sell products IDs. */
  upsell_ids?: number[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV3ProductsCategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsCategoriesPostArgsImage {
}


export interface WcV3ProductsCategoriesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV3ProductsCategoriesPostArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Name for the resource. */
  name: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsCategoriesPIdDPostPutPatchArgsImage {
}


export interface WcV3ProductsCategoriesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Unique identifier for the resource. */
  id?: number;
  /** Image data. */
  image?: WcV3ProductsCategoriesPIdDPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsCategoriesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsCategoriesBatchPostPutPatchArgsImage {
}


export interface WcV3ProductsCategoriesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV3ProductsCategoriesBatchPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsReviewsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to reviews published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'product';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to reviews assigned to specific product IDs. */
  product?: number[];
  /** Limit result set to reviews assigned to specific user IDs. */
  reviewer?: number[];
  /** Limit result set to that from a specific author email. */
  reviewer_email?: string;
  /** Ensure result set excludes reviews assigned to specific user IDs. */
  reviewer_exclude?: number[];
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to reviews assigned a specific status. */
  status?: 'all' | 'hold' | 'approved' | 'spam' | 'trash';
}

export interface WcV3ProductsReviewsPostArgs {
  /** Unique identifier for the product. */
  product_id: number;
  /** Product name. */
  product_name?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Review content. */
  review: string;
  /** Name of the reviewer. */
  reviewer: string;
  /** Email of the reviewer. */
  reviewer_email: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

export interface WcV3ProductsReviewsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsReviewsPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** The content of the review. */
  review?: string;
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

export interface WcV3ProductsReviewsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsReviewsBatchPostPutPatchArgs {
  /** Unique identifier for the product that the review belongs to. */
  product_id?: number;
  /** Product name. */
  product_name?: string;
  /** Review rating (0 to 5). */
  rating?: number;
  /** The content of the review. */
  review?: string;
  /** Reviewer name. */
  reviewer?: string;
  /** Reviewer email. */
  reviewer_email?: string;
  /** Status of the review. */
  status?: 'approved' | 'hold' | 'spam' | 'unspam' | 'trash' | 'untrash';
}

export interface WcV3ProductsShippingClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsShippingClassesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsShippingClassesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsShippingClassesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsShippingClassesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsShippingClassesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsTagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide resources not assigned to any products. */
  hide_empty?: boolean;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. Applies to hierarchical taxonomies only. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by resource attribute. */
  orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to resources assigned to a specific parent. Applies to hierarchical taxonomies only. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to resources assigned to a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to resources with a specific slug. */
  slug?: string;
}

export interface WcV3ProductsTagsPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsTagsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsTagsPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ProductsTagsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3ProductsTagsBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV3ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsCouponsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsCustomersTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsOrdersTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsProductsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsReviewsTotalsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV3ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV3SettingsGetArgs {
}

export interface WcV3SettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV3SettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3SettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3SettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV3SettingsBatchPostPutPatchArgs {
}

export interface WcV3ShippingMethodsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3ShippingMethodsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3ShippingZonesGetArgs {
}

export interface WcV3ShippingZonesPostArgs {
  /** Shipping zone name. */
  name: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV3ShippingZonesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV3ShippingZonesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone name. */
  name?: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV3ShippingZonesPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV3ShippingZonesPIdDLocationsGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV3ShippingZonesPIdDLocationsPostPutPatchArgs {
  /** Shipping zone location code. */
  code?: string;
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone location type. */
  type?: 'postcode' | 'state' | 'country' | 'continent';
}

export interface WcV3ShippingZonesPZoneIdDMethodsGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPostArgsSettings {
}


export interface WcV3ShippingZonesPZoneIdDMethodsPostArgs {
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method settings. */
  settings?: WcV3ShippingZonesPZoneIdDMethodsPostArgsSettings;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgsSettings {
}


export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs {
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method settings. */
  settings?: WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgsSettings;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV3SystemStatusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV3SystemStatusToolsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3SystemStatusToolsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV3SystemStatusToolsPIdWPostPutPatchArgs {
  /** What running the tool will do. */
  action?: string;
  /** Tool description. */
  description?: string;
  /** A unique identifier for the tool. */
  id?: string;
  /** Tool return message. */
  message?: string;
  /** Tool name. */
  name?: string;
  /** Did the tool run successfully? */
  success?: boolean;
}

export interface WcV3TaxesGetArgs {
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'id' | 'order' | 'priority';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcV3TaxesPostArgs {
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Country ISO 3166 code. */
  country?: string;
  /** Tax rate name. */
  name?: string;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV3TaxesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3TaxesPIdDPostPutPatchArgs {
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Country ISO 3166 code. */
  country?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Tax rate name. */
  name?: string;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV3TaxesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3TaxesBatchPostPutPatchArgs {
  /** List of city names. Introduced in WooCommerce 5.3. */
  cities?: number[];
  /** City name, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'cities' should be used instead. */
  city?: string;
  /** Tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Whether or not this is a compound rate. */
  compound?: boolean;
  /** Country ISO 3166 code. */
  country?: string;
  /** Tax rate name. */
  name?: string;
  /** Indicates the order that will appear in queries. */
  order?: number;
  /** Postcode/ZIP, it doesn't support multiple values. Deprecated as of WooCommerce 5.3, 'postcodes' should be used instead. */
  postcode?: string;
  /** List of postcodes / ZIPs. Introduced in WooCommerce 5.3. */
  postcodes?: number[];
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV3TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV3TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV3TaxesClassesPSlugWWSGetArgs {
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV3TaxesClassesPSlugWWSDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV3WebhooksGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to webhooks assigned a specific status. */
  status?: 'all' | 'active' | 'paused' | 'disabled';
}

export interface WcV3WebhooksPostArgs {
  /** Webhook delivery URL. */
  delivery_url: string;
  /** A friendly name for the webhook. */
  name?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic: string;
}

export interface WcV3WebhooksPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3WebhooksPIdDPostPutPatchArgs {
  /** Unique identifier for the resource. */
  id?: number;
  /** A friendly name for the webhook. */
  name?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
}

export interface WcV3WebhooksPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV3WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
}


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

export interface WcV3PatchRoutes {
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPostPutPatchArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPostPutPatchArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPostPutPatchArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPostPutPatchArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPostPutPatchArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPostPutPatchArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPostPutPatchArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPostPutPatchArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPostPutPatchArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPostPutPatchArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPostPutPatchArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPostPutPatchArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPostPutPatchArgs;
}

export interface WcV3PostRoutes {
  '/wc/v3/coupons': WcV3CouponsPostArgs;
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPostPutPatchArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPostPutPatchArgs;
  '/wc/v3/customers': WcV3CustomersPostArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPostPutPatchArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPostPutPatchArgs;
  '/wc/v3/orders': WcV3OrdersPostArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPostPutPatchArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/notes': WcV3OrdersPOrderIdDNotesPostArgs;
  '/wc/v3/orders/(?P<order_id>[\\d]+)/refunds': WcV3OrdersPOrderIdDRefundsPostArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPostPutPatchArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v3/products': WcV3ProductsPostArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations': WcV3ProductsPProductIdDVariationsPostArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/generate': WcV3ProductsPProductIdDVariationsGeneratePostArgs;
  '/wc/v3/products/attributes': WcV3ProductsAttributesPostArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV3ProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPostPutPatchArgs;
  '/wc/v3/products/categories': WcV3ProductsCategoriesPostArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v3/products/reviews': WcV3ProductsReviewsPostArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPostPutPatchArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPostPutPatchArgs;
  '/wc/v3/products/shipping_classes': WcV3ProductsShippingClassesPostArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v3/products/tags': WcV3ProductsTagsPostArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPostPutPatchArgs;
  '/wc/v3/shipping/zones': WcV3ShippingZonesPostArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV3ShippingZonesPZoneIdDMethodsPostArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v3/taxes': WcV3TaxesPostArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPostPutPatchArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPostPutPatchArgs;
  '/wc/v3/taxes/classes': WcV3TaxesClassesPostArgs;
  '/wc/v3/webhooks': WcV3WebhooksPostArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPostPutPatchArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPostPutPatchArgs;
}

export interface WcV3PutRoutes {
  '/wc/v3/coupons/(?P<id>[\\d]+)': WcV3CouponsPIdDPostPutPatchArgs;
  '/wc/v3/coupons/batch': WcV3CouponsBatchPostPutPatchArgs;
  '/wc/v3/customers/(?P<id>[\\d]+)': WcV3CustomersPIdDPostPutPatchArgs;
  '/wc/v3/customers/batch': WcV3CustomersBatchPostPutPatchArgs;
  '/wc/v3/orders/(?P<id>[\\d]+)': WcV3OrdersPIdDPostPutPatchArgs;
  '/wc/v3/orders/batch': WcV3OrdersBatchPostPutPatchArgs;
  '/wc/v3/payment_gateways/(?P<id>[\\w-]+)': WcV3PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v3/products/(?P<id>[\\d]+)': WcV3ProductsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV3ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v3/products/(?P<product_id>[\\d]+)/variations/batch': WcV3ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV3ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV3ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v3/products/attributes/(?P<id>[\\d]+)': WcV3ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v3/products/attributes/batch': WcV3ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v3/products/batch': WcV3ProductsBatchPostPutPatchArgs;
  '/wc/v3/products/categories/(?P<id>[\\d]+)': WcV3ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v3/products/categories/batch': WcV3ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v3/products/reviews/(?P<id>[\\d]+)': WcV3ProductsReviewsPIdDPostPutPatchArgs;
  '/wc/v3/products/reviews/batch': WcV3ProductsReviewsBatchPostPutPatchArgs;
  '/wc/v3/products/shipping_classes/(?P<id>[\\d]+)': WcV3ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v3/products/shipping_classes/batch': WcV3ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v3/products/tags/(?P<id>[\\d]+)': WcV3ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v3/products/tags/batch': WcV3ProductsTagsBatchPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV3SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v3/settings/(?P<group_id>[\\w-]+)/batch': WcV3SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v3/settings/batch': WcV3SettingsBatchPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)': WcV3ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<id>[\\d]+)/locations': WcV3ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v3/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v3/system_status/tools/(?P<id>[\\w-]+)': WcV3SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v3/taxes/(?P<id>[\\d]+)': WcV3TaxesPIdDPostPutPatchArgs;
  '/wc/v3/taxes/batch': WcV3TaxesBatchPostPutPatchArgs;
  '/wc/v3/webhooks/(?P<id>[\\d]+)': WcV3WebhooksPIdDPostPutPatchArgs;
  '/wc/v3/webhooks/batch': WcV3WebhooksBatchPostPutPatchArgs;
}

export interface WcV3Routes {
  Delete: WcV3DeleteRoutes;
  Get: WcV3GetRoutes;
  Patch: WcV3PatchRoutes;
  Post: WcV3PostRoutes;
  Put: WcV3PutRoutes;
}
