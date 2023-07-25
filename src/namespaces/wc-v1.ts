export interface WcV1GetArgs {
}

export interface WcV1CouponsGetArgsFilter {
}


export interface WcV1CouponsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to resources with a specific code. */
  code?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1CouponsGetArgsFilter;
  /** Limit result set to specific ids. */
  include?: number[];
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

export interface WcV1CouponsPostArgs {
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
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV1CouponsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1CouponsPIdDPostPutPatchArgs {
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
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
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
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV1CouponsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1CouponsBatchPostPutPatchArgs {
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
  /** List of product IDs the coupon cannot be used on. */
  exclude_product_ids?: number[];
  /** If true, this coupon will not be applied to items that have sale prices. */
  exclude_sale_items?: boolean;
  /** List of category IDs the coupon does not apply to. */
  excluded_product_categories?: number[];
  /** If true and if the free shipping method requires a coupon, this coupon will enable free shipping. */
  free_shipping?: boolean;
  /** If true, the coupon can only be used individually. Other applied coupons will be removed from the cart. */
  individual_use?: boolean;
  /** Max number of items in the cart the coupon can be applied to. */
  limit_usage_to_x_items?: number;
  /** Maximum order amount allowed when using the coupon. */
  maximum_amount?: string;
  /** Minimum order amount that needs to be in the cart before coupon applies. */
  minimum_amount?: string;
  /** List of category IDs the coupon applies to. */
  product_categories?: number[];
  /** List of product IDs the coupon can be used on. */
  product_ids?: number[];
  /** How many times the coupon can be used in total. */
  usage_limit?: number;
  /** How many times the coupon can be used per customer. */
  usage_limit_per_user?: number;
}

export interface WcV1CustomersGetArgs {
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

export interface WcV1CustomersPostArgsBilling {
}


export interface WcV1CustomersPostArgsShipping {
}


export interface WcV1CustomersPostArgs {
  /** List of billing address data. */
  billing?: WcV1CustomersPostArgsBilling;
  /** New user email address. */
  email: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** New user password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV1CustomersPostArgsShipping;
  /** New user username. */
  username?: string;
}

export interface WcV1CustomersPCustomerIdDDownloadsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Unique identifier for the resource. */
  customer_id?: number;
}

export interface WcV1CustomersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1CustomersPIdDPostPutPatchArgsBilling {
}


export interface WcV1CustomersPIdDPostPutPatchArgsShipping {
}


export interface WcV1CustomersPIdDPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV1CustomersPIdDPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Customer last name. */
  last_name?: string;
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV1CustomersPIdDPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV1CustomersPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** ID to reassign posts to. */
  reassign?: number;
}

export interface WcV1CustomersBatchPostPutPatchArgsBilling {
}


export interface WcV1CustomersBatchPostPutPatchArgsShipping {
}


export interface WcV1CustomersBatchPostPutPatchArgs {
  /** List of billing address data. */
  billing?: WcV1CustomersBatchPostPutPatchArgsBilling;
  /** The email address for the customer. */
  email?: string;
  /** Customer first name. */
  first_name?: string;
  /** Customer last name. */
  last_name?: string;
  /** Customer password. */
  password?: string;
  /** List of shipping address data. */
  shipping?: WcV1CustomersBatchPostPutPatchArgsShipping;
  /** Customer login name. */
  username?: string;
}

export interface WcV1OrdersGetArgsFilter {
}


export interface WcV1OrdersGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1OrdersGetArgsFilter;
  /** Limit result set to specific ids. */
  include?: number[];
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
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to orders assigned a specific status. */
  status?: 'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
}

export interface WcV1OrdersPostArgsBilling {
}


export interface WcV1OrdersPostArgsCouponLines {
}


export interface WcV1OrdersPostArgsFeeLines {
}


export interface WcV1OrdersPostArgsLineItems {
}


export interface WcV1OrdersPostArgsShipping {
}


export interface WcV1OrdersPostArgsShippingLines {
}


export interface WcV1OrdersPostArgs {
  /** Billing address. */
  billing?: WcV1OrdersPostArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersPostArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV1OrdersPostArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV1OrdersPostArgsLineItems[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV1OrdersPostArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersPostArgsShippingLines[];
  /** Order status. */
  status?: 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV1OrdersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1OrdersPIdDPostPutPatchArgsBilling {
}


export interface WcV1OrdersPIdDPostPutPatchArgsCouponLines {
}


export interface WcV1OrdersPIdDPostPutPatchArgsFeeLines {
}


export interface WcV1OrdersPIdDPostPutPatchArgsLineItems {
}


export interface WcV1OrdersPIdDPostPutPatchArgsShipping {
}


export interface WcV1OrdersPIdDPostPutPatchArgsShippingLines {
}


export interface WcV1OrdersPIdDPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV1OrdersPIdDPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersPIdDPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV1OrdersPIdDPostPutPatchArgsFeeLines[];
  /** Unique identifier for the resource. */
  id?: number;
  /** Line items data. */
  line_items?: WcV1OrdersPIdDPostPutPatchArgsLineItems[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV1OrdersPIdDPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersPIdDPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV1OrdersPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1OrdersPOrderIdDNotesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersPOrderIdDNotesPostArgs {
  /** Shows/define if the note is only for reference or for the customer (the user will be notified). */
  customer_note?: boolean;
  /** Order note content. */
  note: string;
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersPOrderIdDNotesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersPOrderIdDNotesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersPOrderIdDRefundsGetArgsFilter {
}


export interface WcV1OrdersPOrderIdDRefundsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to orders assigned a specific customer. */
  customer?: number;
  /** Number of decimal points to use in each resource. */
  dp?: number;
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1OrdersPOrderIdDRefundsGetArgsFilter;
  /** Limit result set to specific ids. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** The order ID. */
  order_id?: number;
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'id' | 'include' | 'title' | 'slug' | 'modified';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to orders assigned a specific product. */
  product?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to orders assigned a specific status. */
  status?: 'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
}

export interface WcV1OrdersPOrderIdDRefundsPostArgs {
  /** Refund amount. */
  amount?: string;
  /** The order ID. */
  order_id?: number;
  /** Reason for refund. */
  reason?: string;
}

export interface WcV1OrdersPOrderIdDRefundsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersPOrderIdDRefundsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** The order ID. */
  order_id?: number;
}

export interface WcV1OrdersBatchPostPutPatchArgsBilling {
}


export interface WcV1OrdersBatchPostPutPatchArgsCouponLines {
}


export interface WcV1OrdersBatchPostPutPatchArgsFeeLines {
}


export interface WcV1OrdersBatchPostPutPatchArgsLineItems {
}


export interface WcV1OrdersBatchPostPutPatchArgsShipping {
}


export interface WcV1OrdersBatchPostPutPatchArgsShippingLines {
}


export interface WcV1OrdersBatchPostPutPatchArgs {
  /** Billing address. */
  billing?: WcV1OrdersBatchPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcV1OrdersBatchPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
  currency?: 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GGP' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'IMP' | 'INR' | 'IQD' | 'IRR' | 'IRT' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PRB' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEF' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW';
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcV1OrdersBatchPostPutPatchArgsFeeLines[];
  /** Line items data. */
  line_items?: WcV1OrdersBatchPostPutPatchArgsLineItems[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcV1OrdersBatchPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcV1OrdersBatchPostPutPatchArgsShippingLines[];
  /** Order status. */
  status?: 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'checkout-draft';
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcV1ProductsGetArgsFilter {
}


export interface WcV1ProductsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to products with a specific attribute. */
  attribute?: string;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attribute_term?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to products assigned a specific category ID. */
  category?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Use WP Query arguments to modify the response; private query vars require appropriate authorization. */
  filter?: WcV1ProductsGetArgsFilter;
  /** Limit result set to specific ids. */
  include?: number[];
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
  /** Limit result set to products assigned a specific shipping class ID. */
  shipping_class?: string;
  /** Limit result set to products with a specific SKU. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?: 'any' | 'future' | 'draft' | 'pending' | 'private' | 'publish';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcV1ProductsPostArgsAttributes {
}


export interface WcV1ProductsPostArgsCategories {
}


export interface WcV1ProductsPostArgsDefaultAttributes {
}


export interface WcV1ProductsPostArgsDimensions {
}


export interface WcV1ProductsPostArgsDownloads {
}


export interface WcV1ProductsPostArgsImages {
}


export interface WcV1ProductsPostArgsTags {
}


export interface WcV1ProductsPostArgsVariations {
}


export interface WcV1ProductsPostArgs {
  /** List of attributes. */
  attributes?: WcV1ProductsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV1ProductsPostArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsPostArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsPostArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcV1ProductsPostArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
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
  tags?: WcV1ProductsPostArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of variations. */
  variations?: WcV1ProductsPostArgsVariations[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV1ProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsPIdDPostPutPatchArgsAttributes {
}


export interface WcV1ProductsPIdDPostPutPatchArgsCategories {
}


export interface WcV1ProductsPIdDPostPutPatchArgsDefaultAttributes {
}


export interface WcV1ProductsPIdDPostPutPatchArgsDimensions {
}


export interface WcV1ProductsPIdDPostPutPatchArgsDownloads {
}


export interface WcV1ProductsPIdDPostPutPatchArgsImages {
}


export interface WcV1ProductsPIdDPostPutPatchArgsTags {
}


export interface WcV1ProductsPIdDPostPutPatchArgsVariations {
}


export interface WcV1ProductsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV1ProductsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV1ProductsPIdDPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsPIdDPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsPIdDPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** List of images. */
  images?: WcV1ProductsPIdDPostPutPatchArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
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
  tags?: WcV1ProductsPIdDPostPutPatchArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of variations. */
  variations?: WcV1ProductsPIdDPostPutPatchArgsVariations[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV1ProductsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsPProductIdDReviewsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV1ProductsPProductIdDReviewsPostArgs {
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

export interface WcV1ProductsPProductIdDReviewsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV1ProductsPProductIdDReviewsPIdDPostPutPatchArgs {
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

export interface WcV1ProductsPProductIdDReviewsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcV1ProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1ProductsAttributesPostArgs {
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

export interface WcV1ProductsAttributesPAttributeIdDTermsGetArgs {
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

export interface WcV1ProductsAttributesPAttributeIdDTermsPostArgs {
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

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
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

export interface WcV1ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
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

export interface WcV1ProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsAttributesPIdDPostPutPatchArgs {
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

export interface WcV1ProductsAttributesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsAttributesBatchPostPutPatchArgs {
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

export interface WcV1ProductsBatchPostPutPatchArgsAttributes {
}


export interface WcV1ProductsBatchPostPutPatchArgsCategories {
}


export interface WcV1ProductsBatchPostPutPatchArgsDefaultAttributes {
}


export interface WcV1ProductsBatchPostPutPatchArgsDimensions {
}


export interface WcV1ProductsBatchPostPutPatchArgsDownloads {
}


export interface WcV1ProductsBatchPostPutPatchArgsImages {
}


export interface WcV1ProductsBatchPostPutPatchArgsTags {
}


export interface WcV1ProductsBatchPostPutPatchArgsVariations {
}


export interface WcV1ProductsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcV1ProductsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcV1ProductsBatchPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Start date of sale price. */
  date_on_sale_from?: string;
  /** End date of sale price. */
  date_on_sale_to?: string;
  /** Defaults variation attributes. */
  default_attributes?: WcV1ProductsBatchPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcV1ProductsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** Download type, this controls the schema on the front-end. */
  download_type?: 'standard';
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcV1ProductsBatchPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcV1ProductsBatchPostPutPatchArgsImages[];
  /** Controls whether or not the product is listed as "in stock" or "out of stock" on the frontend. */
  in_stock?: boolean;
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
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
  tags?: WcV1ProductsBatchPostPutPatchArgsTags[];
  /** Tax class. */
  tax_class?: string;
  /** Tax status. */
  tax_status?: 'taxable' | 'shipping' | 'none';
  /** Product type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
  /** List of upsell products IDs. */
  upsell_ids?: number[];
  /** List of variations. */
  variations?: WcV1ProductsBatchPostPutPatchArgsVariations[];
  /** If the product is virtual. */
  virtual?: boolean;
  /** Product weight (lbs). */
  weight?: string;
}

export interface WcV1ProductsCategoriesGetArgs {
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

export interface WcV1ProductsCategoriesPostArgsImage {
}


export interface WcV1ProductsCategoriesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV1ProductsCategoriesPostArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Name for the resource. */
  name: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsCategoriesPIdDPostPutPatchArgsImage {
}


export interface WcV1ProductsCategoriesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Unique identifier for the resource. */
  id?: number;
  /** Image data. */
  image?: WcV1ProductsCategoriesPIdDPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsCategoriesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsCategoriesBatchPostPutPatchArgsImage {
}


export interface WcV1ProductsCategoriesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcV1ProductsCategoriesBatchPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsShippingClassesGetArgs {
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

export interface WcV1ProductsShippingClassesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsShippingClassesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsShippingClassesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsShippingClassesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsShippingClassesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Shipping class name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsTagsGetArgs {
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

export interface WcV1ProductsTagsPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Name for the resource. */
  name: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsTagsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsTagsPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Unique identifier for the resource. */
  id?: number;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ProductsTagsPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1ProductsTagsBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Tag name. */
  name?: string;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcV1ReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcV1ReportsSalesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV1ReportsTopSellersGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Return sales for a specific end date, the date need to be in the YYYY-MM-DD format. */
  date_max?: string;
  /** Return sales for a specific start date, the date need to be in the YYYY-MM-DD format. */
  date_min?: string;
  /** Report period. */
  period?: 'week' | 'month' | 'last_month' | 'year';
}

export interface WcV1TaxesGetArgs {
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

export interface WcV1TaxesPostArgs {
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

export interface WcV1TaxesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1TaxesPIdDPostPutPatchArgs {
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

export interface WcV1TaxesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1TaxesBatchPostPutPatchArgs {
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

export interface WcV1TaxesClassesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcV1TaxesClassesPostArgs {
  /** Tax class name. */
  name: string;
}

export interface WcV1TaxesClassesPSlugWWSDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique slug for the resource. */
  slug?: string;
}

export interface WcV1WebhooksGetArgs {
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

export interface WcV1WebhooksPostArgs {
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

export interface WcV1WebhooksPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1WebhooksPIdDPostPutPatchArgs {
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

export interface WcV1WebhooksPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcV1WebhooksPWebhookIdDDeliveriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the webhook. */
  webhook_id?: number;
}

export interface WcV1WebhooksPWebhookIdDDeliveriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
  /** Unique identifier for the webhook. */
  webhook_id?: number;
}

export interface WcV1WebhooksBatchPostPutPatchArgs {
  /** A friendly name for the webhook. */
  name?: string;
  /** Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided. */
  secret?: string;
  /** Webhook status. */
  status?: 'active' | 'paused' | 'disabled';
  /** Webhook topic. */
  topic?: string;
}


export interface WcV1DeleteRoutes {
  '/wc/v1/coupons/(?P<id>[\\d]+)': WcV1CouponsPIdDDeleteArgs;
  '/wc/v1/customers/(?P<id>[\\d]+)': WcV1CustomersPIdDDeleteArgs;
  '/wc/v1/orders/(?P<id>[\\d]+)': WcV1OrdersPIdDDeleteArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV1OrdersPOrderIdDNotesPIdDDeleteArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV1OrdersPOrderIdDRefundsPIdDDeleteArgs;
  '/wc/v1/products/(?P<id>[\\d]+)': WcV1ProductsPIdDDeleteArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV1ProductsPProductIdDReviewsPIdDDeleteArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV1ProductsAttributesPAttributeIdDTermsPIdDDeleteArgs;
  '/wc/v1/products/attributes/(?P<id>[\\d]+)': WcV1ProductsAttributesPIdDDeleteArgs;
  '/wc/v1/products/categories/(?P<id>[\\d]+)': WcV1ProductsCategoriesPIdDDeleteArgs;
  '/wc/v1/products/shipping_classes/(?P<id>[\\d]+)': WcV1ProductsShippingClassesPIdDDeleteArgs;
  '/wc/v1/products/tags/(?P<id>[\\d]+)': WcV1ProductsTagsPIdDDeleteArgs;
  '/wc/v1/taxes/(?P<id>[\\d]+)': WcV1TaxesPIdDDeleteArgs;
  '/wc/v1/taxes/classes/(?P<slug>\\w[\\w\\s\\-]*)': WcV1TaxesClassesPSlugWWSDeleteArgs;
  '/wc/v1/webhooks/(?P<id>[\\d]+)': WcV1WebhooksPIdDDeleteArgs;
}

export interface WcV1GetRoutes {
  '/wc/v1': WcV1GetArgs;
  '/wc/v1/coupons': WcV1CouponsGetArgs;
  '/wc/v1/coupons/(?P<id>[\\d]+)': WcV1CouponsPIdDGetArgs;
  '/wc/v1/customers': WcV1CustomersGetArgs;
  '/wc/v1/customers/(?P<customer_id>[\\d]+)/downloads': WcV1CustomersPCustomerIdDDownloadsGetArgs;
  '/wc/v1/customers/(?P<id>[\\d]+)': WcV1CustomersPIdDGetArgs;
  '/wc/v1/orders': WcV1OrdersGetArgs;
  '/wc/v1/orders/(?P<id>[\\d]+)': WcV1OrdersPIdDGetArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/notes': WcV1OrdersPOrderIdDNotesGetArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/notes/(?P<id>[\\d]+)': WcV1OrdersPOrderIdDNotesPIdDGetArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/refunds': WcV1OrdersPOrderIdDRefundsGetArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/refunds/(?P<id>[\\d]+)': WcV1OrdersPOrderIdDRefundsPIdDGetArgs;
  '/wc/v1/products': WcV1ProductsGetArgs;
  '/wc/v1/products/(?P<id>[\\d]+)': WcV1ProductsPIdDGetArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews': WcV1ProductsPProductIdDReviewsGetArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV1ProductsPProductIdDReviewsPIdDGetArgs;
  '/wc/v1/products/attributes': WcV1ProductsAttributesGetArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV1ProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV1ProductsAttributesPAttributeIdDTermsPIdDGetArgs;
  '/wc/v1/products/attributes/(?P<id>[\\d]+)': WcV1ProductsAttributesPIdDGetArgs;
  '/wc/v1/products/categories': WcV1ProductsCategoriesGetArgs;
  '/wc/v1/products/categories/(?P<id>[\\d]+)': WcV1ProductsCategoriesPIdDGetArgs;
  '/wc/v1/products/shipping_classes': WcV1ProductsShippingClassesGetArgs;
  '/wc/v1/products/shipping_classes/(?P<id>[\\d]+)': WcV1ProductsShippingClassesPIdDGetArgs;
  '/wc/v1/products/tags': WcV1ProductsTagsGetArgs;
  '/wc/v1/products/tags/(?P<id>[\\d]+)': WcV1ProductsTagsPIdDGetArgs;
  '/wc/v1/reports': WcV1ReportsGetArgs;
  '/wc/v1/reports/sales': WcV1ReportsSalesGetArgs;
  '/wc/v1/reports/top_sellers': WcV1ReportsTopSellersGetArgs;
  '/wc/v1/taxes': WcV1TaxesGetArgs;
  '/wc/v1/taxes/(?P<id>[\\d]+)': WcV1TaxesPIdDGetArgs;
  '/wc/v1/taxes/classes': WcV1TaxesClassesGetArgs;
  '/wc/v1/webhooks': WcV1WebhooksGetArgs;
  '/wc/v1/webhooks/(?P<id>[\\d]+)': WcV1WebhooksPIdDGetArgs;
  '/wc/v1/webhooks/(?P<webhook_id>[\\d]+)/deliveries': WcV1WebhooksPWebhookIdDDeliveriesGetArgs;
  '/wc/v1/webhooks/(?P<webhook_id>[\\d]+)/deliveries/(?P<id>[\\d]+)': WcV1WebhooksPWebhookIdDDeliveriesPIdDGetArgs;
}

export interface WcV1PatchRoutes {
  '/wc/v1/coupons/(?P<id>[\\d]+)': WcV1CouponsPIdDPostPutPatchArgs;
  '/wc/v1/coupons/batch': WcV1CouponsBatchPostPutPatchArgs;
  '/wc/v1/customers/(?P<id>[\\d]+)': WcV1CustomersPIdDPostPutPatchArgs;
  '/wc/v1/customers/batch': WcV1CustomersBatchPostPutPatchArgs;
  '/wc/v1/orders/(?P<id>[\\d]+)': WcV1OrdersPIdDPostPutPatchArgs;
  '/wc/v1/orders/batch': WcV1OrdersBatchPostPutPatchArgs;
  '/wc/v1/products/(?P<id>[\\d]+)': WcV1ProductsPIdDPostPutPatchArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV1ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV1ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV1ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<id>[\\d]+)': WcV1ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/batch': WcV1ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v1/products/batch': WcV1ProductsBatchPostPutPatchArgs;
  '/wc/v1/products/categories/(?P<id>[\\d]+)': WcV1ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v1/products/categories/batch': WcV1ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v1/products/shipping_classes/(?P<id>[\\d]+)': WcV1ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v1/products/shipping_classes/batch': WcV1ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v1/products/tags/(?P<id>[\\d]+)': WcV1ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v1/products/tags/batch': WcV1ProductsTagsBatchPostPutPatchArgs;
  '/wc/v1/taxes/(?P<id>[\\d]+)': WcV1TaxesPIdDPostPutPatchArgs;
  '/wc/v1/taxes/batch': WcV1TaxesBatchPostPutPatchArgs;
  '/wc/v1/webhooks/(?P<id>[\\d]+)': WcV1WebhooksPIdDPostPutPatchArgs;
  '/wc/v1/webhooks/batch': WcV1WebhooksBatchPostPutPatchArgs;
}

export interface WcV1PostRoutes {
  '/wc/v1/coupons': WcV1CouponsPostArgs;
  '/wc/v1/coupons/(?P<id>[\\d]+)': WcV1CouponsPIdDPostPutPatchArgs;
  '/wc/v1/coupons/batch': WcV1CouponsBatchPostPutPatchArgs;
  '/wc/v1/customers': WcV1CustomersPostArgs;
  '/wc/v1/customers/(?P<id>[\\d]+)': WcV1CustomersPIdDPostPutPatchArgs;
  '/wc/v1/customers/batch': WcV1CustomersBatchPostPutPatchArgs;
  '/wc/v1/orders': WcV1OrdersPostArgs;
  '/wc/v1/orders/(?P<id>[\\d]+)': WcV1OrdersPIdDPostPutPatchArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/notes': WcV1OrdersPOrderIdDNotesPostArgs;
  '/wc/v1/orders/(?P<order_id>[\\d]+)/refunds': WcV1OrdersPOrderIdDRefundsPostArgs;
  '/wc/v1/orders/batch': WcV1OrdersBatchPostPutPatchArgs;
  '/wc/v1/products': WcV1ProductsPostArgs;
  '/wc/v1/products/(?P<id>[\\d]+)': WcV1ProductsPIdDPostPutPatchArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews': WcV1ProductsPProductIdDReviewsPostArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV1ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes': WcV1ProductsAttributesPostArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcV1ProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV1ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV1ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<id>[\\d]+)': WcV1ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/batch': WcV1ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v1/products/batch': WcV1ProductsBatchPostPutPatchArgs;
  '/wc/v1/products/categories': WcV1ProductsCategoriesPostArgs;
  '/wc/v1/products/categories/(?P<id>[\\d]+)': WcV1ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v1/products/categories/batch': WcV1ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v1/products/shipping_classes': WcV1ProductsShippingClassesPostArgs;
  '/wc/v1/products/shipping_classes/(?P<id>[\\d]+)': WcV1ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v1/products/shipping_classes/batch': WcV1ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v1/products/tags': WcV1ProductsTagsPostArgs;
  '/wc/v1/products/tags/(?P<id>[\\d]+)': WcV1ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v1/products/tags/batch': WcV1ProductsTagsBatchPostPutPatchArgs;
  '/wc/v1/taxes': WcV1TaxesPostArgs;
  '/wc/v1/taxes/(?P<id>[\\d]+)': WcV1TaxesPIdDPostPutPatchArgs;
  '/wc/v1/taxes/batch': WcV1TaxesBatchPostPutPatchArgs;
  '/wc/v1/taxes/classes': WcV1TaxesClassesPostArgs;
  '/wc/v1/webhooks': WcV1WebhooksPostArgs;
  '/wc/v1/webhooks/(?P<id>[\\d]+)': WcV1WebhooksPIdDPostPutPatchArgs;
  '/wc/v1/webhooks/batch': WcV1WebhooksBatchPostPutPatchArgs;
}

export interface WcV1PutRoutes {
  '/wc/v1/coupons/(?P<id>[\\d]+)': WcV1CouponsPIdDPostPutPatchArgs;
  '/wc/v1/coupons/batch': WcV1CouponsBatchPostPutPatchArgs;
  '/wc/v1/customers/(?P<id>[\\d]+)': WcV1CustomersPIdDPostPutPatchArgs;
  '/wc/v1/customers/batch': WcV1CustomersBatchPostPutPatchArgs;
  '/wc/v1/orders/(?P<id>[\\d]+)': WcV1OrdersPIdDPostPutPatchArgs;
  '/wc/v1/orders/batch': WcV1OrdersBatchPostPutPatchArgs;
  '/wc/v1/products/(?P<id>[\\d]+)': WcV1ProductsPIdDPostPutPatchArgs;
  '/wc/v1/products/(?P<product_id>[\\d]+)/reviews/(?P<id>[\\d]+)': WcV1ProductsPProductIdDReviewsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcV1ProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcV1ProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc/v1/products/attributes/(?P<id>[\\d]+)': WcV1ProductsAttributesPIdDPostPutPatchArgs;
  '/wc/v1/products/attributes/batch': WcV1ProductsAttributesBatchPostPutPatchArgs;
  '/wc/v1/products/batch': WcV1ProductsBatchPostPutPatchArgs;
  '/wc/v1/products/categories/(?P<id>[\\d]+)': WcV1ProductsCategoriesPIdDPostPutPatchArgs;
  '/wc/v1/products/categories/batch': WcV1ProductsCategoriesBatchPostPutPatchArgs;
  '/wc/v1/products/shipping_classes/(?P<id>[\\d]+)': WcV1ProductsShippingClassesPIdDPostPutPatchArgs;
  '/wc/v1/products/shipping_classes/batch': WcV1ProductsShippingClassesBatchPostPutPatchArgs;
  '/wc/v1/products/tags/(?P<id>[\\d]+)': WcV1ProductsTagsPIdDPostPutPatchArgs;
  '/wc/v1/products/tags/batch': WcV1ProductsTagsBatchPostPutPatchArgs;
  '/wc/v1/taxes/(?P<id>[\\d]+)': WcV1TaxesPIdDPostPutPatchArgs;
  '/wc/v1/taxes/batch': WcV1TaxesBatchPostPutPatchArgs;
  '/wc/v1/webhooks/(?P<id>[\\d]+)': WcV1WebhooksPIdDPostPutPatchArgs;
  '/wc/v1/webhooks/batch': WcV1WebhooksBatchPostPutPatchArgs;
}

export interface WcV1Routes {
  Delete: WcV1DeleteRoutes;
  Get: WcV1GetRoutes;
  Patch: WcV1PatchRoutes;
  Post: WcV1PostRoutes;
  Put: WcV1PutRoutes;
}
