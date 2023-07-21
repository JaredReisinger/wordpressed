export interface WcV2GetArgs {
}

export interface WcV2CouponsGetArgs {
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

export interface WcV2CouponsPostArgsMetaData {
}


export interface WcV2CouponsPostArgs {
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
  meta_data?: WcV2CouponsPostArgsMetaData[];
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

export interface WcV2CouponsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2CouponsPIdDPostPutPatchArgsMetaData {
}


export interface WcV2CouponsPIdDPostPutPatchArgs {
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
  meta_data?: WcV2CouponsPIdDPostPutPatchArgsMetaData[];
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

export interface WcV2CouponsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2CouponsBatchPostPutPatchArgsMetaData {
}


export interface WcV2CouponsBatchPostPutPatchArgs {
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
  meta_data?: WcV2CouponsBatchPostPutPatchArgsMetaData[];
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

export interface WcV2CustomersGetArgs {
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

export interface WcV2CustomersPostArgsBilling {
}


export interface WcV2CustomersPostArgsMetaData {
}


export interface WcV2CustomersPostArgsShipping {
}


export interface WcV2CustomersPostArgs {
  /** List of billing address data. */
  billing?: WcV2CustomersPostArgsBilling;
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV2CustomersPostArgsMetaData[];
  /** New user password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV2CustomersPostArgsShipping;
  /** New user username. */
  username?: string;
}

export interface WcV2CustomersPCustomerIdDDownloadsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Unique identifier for the resource. */
  customer_id?: number;
}

export interface WcV2CustomersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2CustomersPIdDPostPutPatchArgsBilling {
}


export interface WcV2CustomersPIdDPostPutPatchArgsMetaData {
}


export interface WcV2CustomersPIdDPostPutPatchArgsShipping {
}


export interface WcV2CustomersPIdDPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV2CustomersPIdDPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV2CustomersPIdDPostPutPatchArgsMetaData[];
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV2CustomersPIdDPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV2CustomersPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV2CustomersBatchPostPutPatchArgsBilling {
}


export interface WcV2CustomersBatchPostPutPatchArgsMetaData {
}


export interface WcV2CustomersBatchPostPutPatchArgsShipping {
}


export interface WcV2CustomersBatchPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV2CustomersBatchPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Meta data. */
  meta_data?: WcV2CustomersBatchPostPutPatchArgsMetaData[];
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV2CustomersBatchPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV2OrdersGetArgs {
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
  /** Limit result set to orders assigned a specific status. */
  status?: 'any' | 'trash' | 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
}

export interface WcV2OrdersPostArgsBilling {
}


export interface WcV2OrdersPostArgsCouponLines {
}


export interface WcV2OrdersPostArgsFeeLines {
}


export interface WcV2OrdersPostArgsLineItems {
}


export interface WcV2OrdersPostArgsMetaData {
}


export interface WcV2OrdersPostArgsShipping {
}


export interface WcV2OrdersPostArgsShippingLines {
}


export interface WcV2OrdersPostArgs {
  /** Billing address. */
  billing?: WcV2OrdersPostArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersPostArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV2OrdersPostArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV2OrdersPostArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV2OrdersPostArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV2OrdersPostArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersPostArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV2OrdersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2OrdersPIdDPostPutPatchArgsBilling {
}


export interface WcV2OrdersPIdDPostPutPatchArgsCouponLines {
}


export interface WcV2OrdersPIdDPostPutPatchArgsFeeLines {
}


export interface WcV2OrdersPIdDPostPutPatchArgsLineItems {
}


export interface WcV2OrdersPIdDPostPutPatchArgsMetaData {
}


export interface WcV2OrdersPIdDPostPutPatchArgsShipping {
}


export interface WcV2OrdersPIdDPostPutPatchArgsShippingLines {
}


export interface WcV2OrdersPIdDPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV2OrdersPIdDPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersPIdDPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV2OrdersPIdDPostPutPatchArgsFeeLines[];
  /** Unique identifier for the resource. */
  id?: number;
  /** Line items data. */
  line_items?: WcV2OrdersPIdDPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV2OrdersPIdDPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV2OrdersPIdDPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersPIdDPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV2OrdersPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2OrdersPOrderIdDNotesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** The order ID. */
  order_id?: number;
  /** Limit result to customers or internal notes. */
  type?: 'any' | 'customer' | 'internal';
}

export interface WcV2OrdersPOrderIdDNotesPostArgs {
  /** If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only. */
  customer_note?: boolean;
  /** Order note content. */
  note: string;
  /** The order ID. */
  order_id?: number;
}

export interface WcV2OrdersPOrderIdDNotesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV2OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV2OrdersPOrderIdDRefundsGetArgs {
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

export interface WcV2OrdersPOrderIdDRefundsPostArgsMetaData {
}


export interface WcV2OrdersPOrderIdDRefundsPostArgs {
  /** Refund amount. */
  amount?: string;
  /** When true, the payment gateway API is used to generate the refund. */
  api_refund?: boolean;
  /** Meta data. */
  meta_data?: WcV2OrdersPOrderIdDRefundsPostArgsMetaData[];
  /** The order ID. */
  order_id?: number;
  /** Reason for refund. */
  reason?: string;
  /** User ID of user who created the refund. */
  refunded_by?: number;
}

export interface WcV2OrdersPOrderIdDRefundsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV2OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV2OrdersBatchPostPutPatchArgsBilling {
}


export interface WcV2OrdersBatchPostPutPatchArgsCouponLines {
}


export interface WcV2OrdersBatchPostPutPatchArgsFeeLines {
}


export interface WcV2OrdersBatchPostPutPatchArgsLineItems {
}


export interface WcV2OrdersBatchPostPutPatchArgsMetaData {
}


export interface WcV2OrdersBatchPostPutPatchArgsShipping {
}


export interface WcV2OrdersBatchPostPutPatchArgsShippingLines {
}


export interface WcV2OrdersBatchPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV2OrdersBatchPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV2OrdersBatchPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV2OrdersBatchPostPutPatchArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV2OrdersBatchPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcV2OrdersBatchPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV2OrdersBatchPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV2OrdersBatchPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'auto-draft' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV2PaymentGatewaysGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2PaymentGatewaysPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2PaymentGatewaysPIdWPostPutPatchArgsSettings {
}


export interface WcV2PaymentGatewaysPIdWPostPutPatchArgs {
  /** Payment gateway description on checkout. */
  description?: string;
  /** Payment gateway enabled status. */
  enabled?: boolean;
  /** Unique identifier for the resource. */
  id?: string;
  /** Payment gateway sort order. */
  order?: number;
  /** Payment gateway settings. */
  settings?: WcV2PaymentGatewaysPIdWPostPutPatchArgsSettings;
  /** Payment gateway title on checkout. */
  title?: string;
}

export interface WcV2ProductsGetArgs {
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
  /** Limit result set to products in stock or out of stock. */
  in_stock?: boolean;
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
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified' | 'rand' | 'menu_order' | 'popularity' | 'rating' | 'menu_order';
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
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV2ProductsPostArgsAttributes {
}


export interface WcV2ProductsPostArgsCategories {
}


export interface WcV2ProductsPostArgsDefaultAttributes {
}


export interface WcV2ProductsPostArgsDimensions {
}


export interface WcV2ProductsPostArgsDownloads {
}


export interface WcV2ProductsPostArgsImages {
}


export interface WcV2ProductsPostArgsMetaData {
}


export interface WcV2ProductsPostArgsTags {
}


export interface WcV2ProductsPostArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV2ProductsPostArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsPostArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPostArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** List of images. */
  images?: WcV2ProductsPostArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPostArgsMetaData[];
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
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Stock quantity. */
  stock_quantity?: number;
  /** List of tags. */
  tags?: WcV2ProductsPostArgsTags[];
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

export interface WcV2ProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsPIdDPostPutPatchArgsAttributes {
}


export interface WcV2ProductsPIdDPostPutPatchArgsCategories {
}


export interface WcV2ProductsPIdDPostPutPatchArgsDefaultAttributes {
}


export interface WcV2ProductsPIdDPostPutPatchArgsDimensions {
}


export interface WcV2ProductsPIdDPostPutPatchArgsDownloads {
}


export interface WcV2ProductsPIdDPostPutPatchArgsImages {
}


export interface WcV2ProductsPIdDPostPutPatchArgsMetaData {
}


export interface WcV2ProductsPIdDPostPutPatchArgsTags {
}


export interface WcV2ProductsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV2ProductsPIdDPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsPIdDPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPIdDPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** Unique identifier for the resource. */
  id?: number;
  /** List of images. */
  images?: WcV2ProductsPIdDPostPutPatchArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPIdDPostPutPatchArgsMetaData[];
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
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Stock quantity. */
  stock_quantity?: number;
  /** List of tags. */
  tags?: WcV2ProductsPIdDPostPutPatchArgsTags[];
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

export interface WcV2ProductsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsPProductIdDReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDReviewsPostArgs {
  /** Email of the reviewer. */
  email: string;
  /** Unique identifier for the variation. */
  id?: number;
  /** Name of the reviewer. */
  name: string;
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Review rating (0 to 5). */
  rating?: number;
  /** Review content. */
  review: string;
}

export interface WcV2ProductsPProductIdDReviewsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDReviewsPIdDPostPutPatchArgs {
  /** Reviewer email. */
  email?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Reviewer name. */
  name?: string;
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Review rating (0 to 5). */
  rating?: number;
  /** The content of the review. */
  review?: string;
}

export interface WcV2ProductsPProductIdDReviewsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDReviewsBatchPostPutPatchArgs {
  /** Reviewer email. */
  email?: string;
  /** Reviewer name. */
  name?: string;
  /** Unique identifier for the variable product. */
  product_id?: number;
  /** Review rating (0 to 5). */
  rating?: number;
  /** The content of the review. */
  review?: string;
}

export interface WcV2ProductsPProductIdDVariationsGetArgs {
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
  /** Limit result set to products in stock or out of stock. */
  in_stock?: boolean;
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
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'trash' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV2ProductsPProductIdDVariationsPostArgsAttributes {
}


export interface WcV2ProductsPProductIdDVariationsPostArgsDimensions {
}


export interface WcV2ProductsPProductIdDVariationsPostArgsDownloads {
}


export interface WcV2ProductsPProductIdDVariationsPostArgsImage {
}


export interface WcV2ProductsPProductIdDVariationsPostArgsMetaData {
}


export interface WcV2ProductsPProductIdDVariationsPostArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsPostArgsDownloads[];
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsPostArgsImage;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsPostArgsMetaData[];
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
  /** Stock quantity. */
  stock_quantity?: number;
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV2ProductsPProductIdDVariationsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes {
}


export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions {
}


export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads {
}


export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsImage {
}


export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData {
}


export interface WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads[];
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsImage;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData[];
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
  /** Stock quantity. */
  stock_quantity?: number;
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV2ProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes {
}


export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions {
}


export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads {
}


export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsImage {
}


export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData {
}


export interface WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads[];
  /** Variation image data. */
  image?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsImage;
  /** Controls whether or not the variation is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData[];
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
  /** Stock quantity. */
  stock_quantity?: number;
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Define if the variation is visible on the product's page. */
  visible?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcV2ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2ProductsAttributesPostArgs {
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

export interface WcV2ProductsAttributesPAttributeIdDTermsGetArgs {
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

export interface WcV2ProductsAttributesPAttributeIdDTermsPostArgs {
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

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
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

export interface WcV2ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
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

export interface WcV2ProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsAttributesPIdDPostPutPatchArgs {
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

export interface WcV2ProductsAttributesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsAttributesBatchPostPutPatchArgs {
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

export interface WcV2ProductsBatchPostPutPatchArgsAttributes {
}


export interface WcV2ProductsBatchPostPutPatchArgsCategories {
}


export interface WcV2ProductsBatchPostPutPatchArgsDefaultAttributes {
}


export interface WcV2ProductsBatchPostPutPatchArgsDimensions {
}


export interface WcV2ProductsBatchPostPutPatchArgsDownloads {
}


export interface WcV2ProductsBatchPostPutPatchArgsImages {
}


export interface WcV2ProductsBatchPostPutPatchArgsMetaData {
}


export interface WcV2ProductsBatchPostPutPatchArgsTags {
}


export interface WcV2ProductsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV2ProductsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV2ProductsBatchPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcV2ProductsBatchPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV2ProductsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV2ProductsBatchPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of grouped products ID. */
  grouped_products?: number[];
  /** List of images. */
  images?: WcV2ProductsBatchPostPutPatchArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcV2ProductsBatchPostPutPatchArgsMetaData[];
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
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
  /** Stock quantity. */
  stock_quantity?: number;
  /** List of tags. */
  tags?: WcV2ProductsBatchPostPutPatchArgsTags[];
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

export interface WcV2ProductsCategoriesGetArgs {
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

export interface WcV2ProductsCategoriesPostArgsImage {
}


export interface WcV2ProductsCategoriesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV2ProductsCategoriesPostArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Name for the resource. */
  name: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsCategoriesPIdDPostPutPatchArgsImage {
}


export interface WcV2ProductsCategoriesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Unique identifier for the resource. */
  id?: number;
  /** Image data. */
  image?: WcV2ProductsCategoriesPIdDPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsCategoriesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsCategoriesBatchPostPutPatchArgsImage {
}


export interface WcV2ProductsCategoriesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV2ProductsCategoriesBatchPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsShippingClassesGetArgs {
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

export interface WcV2ProductsShippingClassesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsShippingClassesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsShippingClassesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsShippingClassesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsShippingClassesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsTagsGetArgs {
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

export interface WcV2ProductsTagsPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsTagsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsTagsPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ProductsTagsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2ProductsTagsBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV2ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV2ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV2SettingsGetArgs {
}

export interface WcV2SettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV2SettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2SettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2SettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcV2ShippingMethodsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2ShippingMethodsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2ShippingZonesGetArgs {
}

export interface WcV2ShippingZonesPostArgs {
  /** Shipping zone name. */
  name: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV2ShippingZonesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV2ShippingZonesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone name. */
  name?: string;
  /** Shipping zone order. */
  order?: number;
}

export interface WcV2ShippingZonesPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV2ShippingZonesPIdDLocationsGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcV2ShippingZonesPIdDLocationsPostPutPatchArgs {
  /** Shipping zone location code. */
  code?: string;
  /** Unique ID for the resource. */
  id?: number;
  /** Shipping zone location type. */
  type?: 'postcode' | 'state' | 'country' | 'continent';
}

export interface WcV2ShippingZonesPZoneIdDMethodsGetArgs {
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPostArgsSettings {
}


export interface WcV2ShippingZonesPZoneIdDMethodsPostArgs {
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method settings. */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPostArgsSettings;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDGetArgs {
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgsSettings {
}


export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs {
  /** Shipping method enabled status. */
  enabled?: boolean;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Shipping method sort order. */
  order?: number;
  /** Shipping method settings. */
  settings?: WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgsSettings;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique ID for the instance. */
  instance_id?: number;
  /** Unique ID for the zone. */
  zone_id?: number;
}

export interface WcV2SystemStatusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV2SystemStatusToolsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2SystemStatusToolsPIdWGetArgs {
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcV2SystemStatusToolsPIdWPostPutPatchArgs {
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

export interface WcV2TaxesGetArgs {
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

export interface WcV2TaxesPostArgs {
  /** City name. */
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
  /** Postcode / ZIP. */
  postcode?: string;
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV2TaxesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2TaxesPIdDPostPutPatchArgs {
  /** City name. */
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
  /** Postcode / ZIP. */
  postcode?: string;
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV2TaxesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2TaxesBatchPostPutPatchArgs {
  /** City name. */
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
  /** Postcode / ZIP. */
  postcode?: string;
  /** Tax priority. */
  priority?: number;
  /** Tax rate. */
  rate?: string;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: boolean;
  /** State code. */
  state?: string;
}

export interface WcV2TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV2TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV2TaxesClassesPSlugWWSGetArgs {
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV2TaxesClassesPSlugWWSDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV2WebhooksGetArgs {
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

export interface WcV2WebhooksPostArgs {
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

export interface WcV2WebhooksPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2WebhooksPIdDPostPutPatchArgs {
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

export interface WcV2WebhooksPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV2WebhooksPWebhookIdDDeliveriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the webhook. */
  webhook_id?: number;
}

export interface WcV2WebhooksPWebhookIdDDeliveriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the webhook. */
  webhook_id?: number;
}

export interface WcV2WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
}


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

export interface WcV2PatchRoutes {
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPostPutPatchArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPostPutPatchArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPostPutPatchArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPostPutPatchArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPostPutPatchArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPostPutPatchArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPostPutPatchArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPostPutPatchArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPostPutPatchArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPostPutPatchArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPostPutPatchArgs;
}

export interface WcV2PostRoutes {
  '/wc/v2/coupons': WcV2CouponsPostArgs;
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPostPutPatchArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPostPutPatchArgs;
  '/wc/v2/customers': WcV2CustomersPostArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPostPutPatchArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPostPutPatchArgs;
  '/wc/v2/orders': WcV2OrdersPostArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPostPutPatchArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/notes': WcV2OrdersPOrderIdDNotesPostArgs;
  '/wc/v2/orders/(?P<order_id>[\\d]+)/refunds': WcV2OrdersPOrderIdDRefundsPostArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPostPutPatchArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v2/products': WcV2ProductsPostArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews': WcV2ProductsPProductIdDReviewsPostArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations': WcV2ProductsPProductIdDVariationsPostArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes': WcV2ProductsAttributesPostArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV2ProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPostPutPatchArgs;
  '/wc/v2/products/categories': WcV2ProductsCategoriesPostArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v2/products/shipping_classes': WcV2ProductsShippingClassesPostArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v2/products/tags': WcV2ProductsTagsPostArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v2/shipping/zones': WcV2ShippingZonesPostArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods': WcV2ShippingZonesPZoneIdDMethodsPostArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v2/taxes': WcV2TaxesPostArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPostPutPatchArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPostPutPatchArgs;
  '/wc/v2/taxes/classes': WcV2TaxesClassesPostArgs;
  '/wc/v2/webhooks': WcV2WebhooksPostArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPostPutPatchArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPostPutPatchArgs;
}

export interface WcV2PutRoutes {
  '/wc/v2/coupons/(?P<id>[\\d]+)': WcV2CouponsPIdDPostPutPatchArgs;
  '/wc/v2/coupons/batch': WcV2CouponsBatchPostPutPatchArgs;
  '/wc/v2/customers/(?P<id>[\\d]+)': WcV2CustomersPIdDPostPutPatchArgs;
  '/wc/v2/customers/batch': WcV2CustomersBatchPostPutPatchArgs;
  '/wc/v2/orders/(?P<id>[\\d]+)': WcV2OrdersPIdDPostPutPatchArgs;
  '/wc/v2/orders/batch': WcV2OrdersBatchPostPutPatchArgs;
  '/wc/v2/payment_gateways/(?P<id>[\\w-]+)': WcV2PaymentGatewaysPIdWPostPutPatchArgs;
  '/wc/v2/products/(?P<id>[\\d]+)': WcV2ProductsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV2ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/reviews/batch': WcV2ProductsPProductIdDReviewsBatchPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcV2ProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc/v2/products/(?P<product_id>[\\d]+)/variations/batch': WcV2ProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV2ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV2ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v2/products/attributes/(?P<id>[\\d]+)': WcV2ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v2/products/attributes/batch': WcV2ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v2/products/batch': WcV2ProductsBatchPostPutPatchArgs;
  '/wc/v2/products/categories/(?P<id>[\\d]+)': WcV2ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v2/products/categories/batch': WcV2ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v2/products/shipping_classes/(?P<id>[\\d]+)': WcV2ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v2/products/shipping_classes/batch': WcV2ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v2/products/tags/(?P<id>[\\d]+)': WcV2ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v2/products/tags/batch': WcV2ProductsTagsBatchPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcV2SettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc/v2/settings/(?P<group_id>[\\w-]+)/batch': WcV2SettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)': WcV2ShippingZonesPIdDPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<id>[\\d]+)/locations': WcV2ShippingZonesPIdDLocationsPostPutPatchArgs;
  '/wc/v2/shipping/zones/(?P<zone_id>[\\d]+)/methods/(?P<instance_id>[\\d]+)': WcV2ShippingZonesPZoneIdDMethodsPInstanceIdDPostPutPatchArgs;
  '/wc/v2/system_status/tools/(?P<id>[\\w-]+)': WcV2SystemStatusToolsPIdWPostPutPatchArgs;
  '/wc/v2/taxes/(?P<id>[\\d]+)': WcV2TaxesPIdDPostPutPatchArgs;
  '/wc/v2/taxes/batch': WcV2TaxesBatchPostPutPatchArgs;
  '/wc/v2/webhooks/(?P<id>[\\d]+)': WcV2WebhooksPIdDPostPutPatchArgs;
  '/wc/v2/webhooks/batch': WcV2WebhooksBatchPostPutPatchArgs;
}
