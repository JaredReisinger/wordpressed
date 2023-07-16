export interface WcAnalyticsGetArgs {}

export interface WcAnalyticsAdminNotesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'note_id' | 'date' | 'type' | 'title' | 'status';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Source of note. */
  source?: number[];
  /** Status of note. */
  status?: number[];
  /** Type of note. */
  type?: number[];
}

export interface WcAnalyticsAdminNotesPIdDGetArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcAnalyticsAdminNotesPIdDPostPutPatchArgs {
  /** Unique ID for the resource. */
  id?: number;
}

export interface WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostPutPatchArgs {
  /** Unique ID for the Note Action. */
  action_id?: number;
  /** Unique ID for the Note. */
  note_id?: number;
}

export interface WcAnalyticsAdminNotesDeletePIdDDeleteArgs {}

export interface WcAnalyticsAdminNotesDeleteAllDeleteArgs {
  /** Status of note. */
  status?: number[];
}

export interface WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostPutPatchArgs {}

export interface WcAnalyticsAdminNotesTrackerPNoteIdDUserPUserIdDGetArgs {}

export interface WcAnalyticsAdminNotesUpdatePostPutPatchArgs {}

export interface WcAnalyticsCouponsGetArgs {
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
  /** Limit results to coupons with codes matching a given string. */
  search?: string;
}

export interface WcAnalyticsCouponsPostArgsMetaData {}

export interface WcAnalyticsCouponsPostArgs {
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
  meta_data?: WcAnalyticsCouponsPostArgsMetaData[];
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

export interface WcAnalyticsCouponsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsCouponsPIdDPostPutPatchArgsMetaData {}

export interface WcAnalyticsCouponsPIdDPostPutPatchArgs {
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
  meta_data?: WcAnalyticsCouponsPIdDPostPutPatchArgsMetaData[];
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

export interface WcAnalyticsCouponsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsCouponsBatchPostPutPatchArgsMetaData {}

export interface WcAnalyticsCouponsBatchPostPutPatchArgs {
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
  meta_data?: WcAnalyticsCouponsBatchPostPutPatchArgsMetaData[];
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

export interface WcAnalyticsCustomersGetArgs {
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit result to items with specified customer ids. */
  include?: number[];
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit result to items with specified user ids. */
  users?: number[];
}

export interface WcAnalyticsCustomersPIdDGetArgs {
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Unique ID for the resource. */
  id?: number;
  /** Limit result to items with specified customer ids. */
  include?: number[];
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit result to items with specified user ids. */
  users?: number[];
}

export interface WcAnalyticsDataGetArgs {}

export interface WcAnalyticsDataCountriesGetArgs {}

export interface WcAnalyticsDataCountriesPLocationWGetArgs {
  /** ISO3166 alpha-2 country code. */
  location?: string;
}

export interface WcAnalyticsDataCountriesLocalesGetArgs {}

export interface WcAnalyticsDataDownloadIpsGetArgs {}

export interface WcAnalyticsLeaderboardsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** URL query to persist across links. */
  persisted_query?: string;
}

export interface WcAnalyticsLeaderboardsPLeaderboardWGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  leaderboard?: 'customers' | 'coupons' | 'categories' | 'products';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** URL query to persist across links. */
  persisted_query?: string;
}

export interface WcAnalyticsLeaderboardsAllowedGetArgs {}

export interface WcAnalyticsOrdersGetArgs {
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
  /** Limit result set to orders matching part of an order number. */
  number?: string;
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

export interface WcAnalyticsOrdersPostArgsBilling {}

export interface WcAnalyticsOrdersPostArgsCouponLines {}

export interface WcAnalyticsOrdersPostArgsFeeLines {}

export interface WcAnalyticsOrdersPostArgsLineItems {}

export interface WcAnalyticsOrdersPostArgsMetaData {}

export interface WcAnalyticsOrdersPostArgsShipping {}

export interface WcAnalyticsOrdersPostArgsShippingLines {}

export interface WcAnalyticsOrdersPostArgs {
  /** Billing address. */
  billing?: WcAnalyticsOrdersPostArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersPostArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
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
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersPostArgsFeeLines[];
  /** Line items data. */
  line_items?: WcAnalyticsOrdersPostArgsLineItems[];
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersPostArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersPostArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersPostArgsShippingLines[];
  /** Order status. */
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
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcAnalyticsOrdersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsBilling {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsCouponLines {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsFeeLines {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsLineItems {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsMetaData {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsShipping {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgsShippingLines {}

export interface WcAnalyticsOrdersPIdDPostPutPatchArgs {
  /** Billing address. */
  billing?: WcAnalyticsOrdersPIdDPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersPIdDPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
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
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersPIdDPostPutPatchArgsFeeLines[];
  /** Unique identifier for the resource. */
  id?: number;
  /** Line items data. */
  line_items?: WcAnalyticsOrdersPIdDPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersPIdDPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersPIdDPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersPIdDPostPutPatchArgsShippingLines[];
  /** Order status. */
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
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcAnalyticsOrdersPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsBilling {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsCouponLines {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsFeeLines {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsLineItems {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsMetaData {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsShipping {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgsShippingLines {}

export interface WcAnalyticsOrdersBatchPostPutPatchArgs {
  /** Billing address. */
  billing?: WcAnalyticsOrdersBatchPostPutPatchArgsBilling;
  /** Coupons line data. */
  coupon_lines?: WcAnalyticsOrdersBatchPostPutPatchArgsCouponLines[];
  /** Currency the order was created with, in ISO format. */
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
  /** User ID who owns the order. 0 for guests. */
  customer_id?: number;
  /** Note left by customer during checkout. */
  customer_note?: string;
  /** Fee lines data. */
  fee_lines?: WcAnalyticsOrdersBatchPostPutPatchArgsFeeLines[];
  /** Line items data. */
  line_items?: WcAnalyticsOrdersBatchPostPutPatchArgsLineItems[];
  /** Meta data. */
  meta_data?: WcAnalyticsOrdersBatchPostPutPatchArgsMetaData[];
  /** Parent order ID. */
  parent_id?: number;
  /** Payment method ID. */
  payment_method?: string;
  /** Payment method title. */
  payment_method_title?: string;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  set_paid?: boolean;
  /** Shipping address. */
  shipping?: WcAnalyticsOrdersBatchPostPutPatchArgsShipping;
  /** Shipping lines data. */
  shipping_lines?: WcAnalyticsOrdersBatchPostPutPatchArgsShippingLines[];
  /** Order status. */
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
  /** Unique transaction ID. */
  transaction_id?: string;
}

export interface WcAnalyticsProductsGetArgs {
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
  context?: 'view' | 'embed' | 'edit';
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
  /** Limit result set to products that are low or out of stock. (Deprecated) */
  low_in_stock?: boolean;
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
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Search by similar product name or sku. */
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
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** Limit result set to products assigned a specific tag ID. */
  tag?: string;
  /** Limit result set to products assigned a specific type. */
  type?: 'simple' | 'grouped' | 'external' | 'variable';
}

export interface WcAnalyticsProductsPostArgsAttributes {}

export interface WcAnalyticsProductsPostArgsCategories {}

export interface WcAnalyticsProductsPostArgsDefaultAttributes {}

export interface WcAnalyticsProductsPostArgsDimensions {}

export interface WcAnalyticsProductsPostArgsDownloads {}

export interface WcAnalyticsProductsPostArgsImages {}

export interface WcAnalyticsProductsPostArgsMetaData {}

export interface WcAnalyticsProductsPostArgsTags {}

export interface WcAnalyticsProductsPostArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcAnalyticsProductsPostArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsPostArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPostArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcAnalyticsProductsPostArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPostArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcAnalyticsProductsPostArgsTags[];
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

export interface WcAnalyticsProductsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsAttributes {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsCategories {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsDefaultAttributes {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsDimensions {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsDownloads {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsImages {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsMetaData {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgsTags {}

export interface WcAnalyticsProductsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcAnalyticsProductsPIdDPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsPIdDPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPIdDPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
  /** List of images. */
  images?: WcAnalyticsProductsPIdDPostPutPatchArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPIdDPostPutPatchArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcAnalyticsProductsPIdDPostPutPatchArgsTags[];
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

export interface WcAnalyticsProductsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsGetArgs {
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
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
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
  /** Search by similar product name, sku, or attribute value. */
  search?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgsAttributes {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgsDimensions {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgsDownloads {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgsImage {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgsMetaData {}

export interface WcAnalyticsProductsPProductIdDVariationsPostArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsPostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsPostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsPostArgsDownloads[];
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsPostArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsPostArgsMetaData[];
  /** Product parent name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
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
  /** Product type. */
  type?: 'variation';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsImage {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData {}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsDownloads[];
  /** Unique identifier for the variation. */
  id?: number;
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgsMetaData[];
  /** Product parent name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
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
  /** Product type. */
  type?: 'variation';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcAnalyticsProductsPProductIdDVariationsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the variation. */
  id?: number;
  /** Unique identifier for the variable product. */
  product_id?: number;
}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsImage {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData {}

export interface WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsDownloads[];
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgsMetaData[];
  /** Product parent name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
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
  /** Product type. */
  type?: 'variation';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsAttributes {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsDimensions {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsDownloads {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsImage {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsMetaData {}

export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Variation description. */
  description?: string;
  /** Variation dimensions. */
  dimensions?: WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the variation is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsDownloads[];
  /** Variation image data. */
  image?: WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsImage;
  /** Stock management at variation level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsPProductIdDVariationsGeneratePostArgsMetaData[];
  /** Product parent name. */
  name?: string;
  /** Product parent ID. */
  parent_id?: number;
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
  /** Product type. */
  type?: 'variation';
  /** If the variation is virtual. */
  virtual?: boolean;
  /** Variation weight (lbs). */
  weight?: string;
}

export interface WcAnalyticsProductsAttributesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Search by similar attribute name. */
  search?: string;
}

export interface WcAnalyticsProductsAttributesPostArgs {
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

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsGetArgs {
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
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
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

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPostArgs {
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

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDGetArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs {
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

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDDeleteArgs {
  /** Unique identifier for the attribute of the terms. */
  attribute_id?: number;
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs {
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

export interface WcAnalyticsProductsAttributesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsAttributesPIdDPostPutPatchArgs {
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

export interface WcAnalyticsProductsAttributesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsAttributesPSlugAZ09GetArgs {
  /** Slug identifier for the resource. */
  slug?: string;
}

export interface WcAnalyticsProductsAttributesPSlugAZ09TermsGetArgs {
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
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
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

export interface WcAnalyticsProductsAttributesBatchPostPutPatchArgs {
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

export interface WcAnalyticsProductsBatchPostPutPatchArgsAttributes {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsCategories {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsDefaultAttributes {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsDimensions {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsDownloads {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsImages {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsMetaData {}

export interface WcAnalyticsProductsBatchPostPutPatchArgsTags {}

export interface WcAnalyticsProductsBatchPostPutPatchArgs {
  /** List of attributes. */
  attributes?: WcAnalyticsProductsBatchPostPutPatchArgsAttributes[];
  /** If managing stock, this controls if backorders are allowed. */
  backorders?: 'no' | 'notify' | 'yes';
  /** Product external button text. Only for external products. */
  button_text?: string;
  /** Catalog visibility. */
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  /** List of categories. */
  categories?: WcAnalyticsProductsBatchPostPutPatchArgsCategories[];
  /** List of cross-sell products IDs. */
  cross_sell_ids?: number[];
  /** Defaults variation attributes. */
  default_attributes?: WcAnalyticsProductsBatchPostPutPatchArgsDefaultAttributes[];
  /** Product description. */
  description?: string;
  /** Product dimensions. */
  dimensions?: WcAnalyticsProductsBatchPostPutPatchArgsDimensions;
  /** Number of days until access to downloadable files expires. */
  download_expiry?: number;
  /** Number of times downloadable files can be downloaded after purchase. */
  download_limit?: number;
  /** If the product is downloadable. */
  downloadable?: boolean;
  /** List of downloadable files. */
  downloads?: WcAnalyticsProductsBatchPostPutPatchArgsDownloads[];
  /** Product external URL. Only for external products. */
  external_url?: string;
  /** Featured product. */
  featured?: boolean;
  /** List of images. */
  images?: WcAnalyticsProductsBatchPostPutPatchArgsImages[];
  /** Stock management at product level. */
  manage_stock?: boolean;
  /** Menu order, used to custom sort products. */
  menu_order?: number;
  /** Meta data. */
  meta_data?: WcAnalyticsProductsBatchPostPutPatchArgsMetaData[];
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
  status?:
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish'
    | 'future'
    | 'auto-draft'
    | 'trash';
  /** Stock quantity. */
  stock_quantity?: number;
  /** Controls the stock status of the product. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
  /** List of tags. */
  tags?: WcAnalyticsProductsBatchPostPutPatchArgsTags[];
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

export interface WcAnalyticsProductsCategoriesGetArgs {
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
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';
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

export interface WcAnalyticsProductsCategoriesPostArgsImage {}

export interface WcAnalyticsProductsCategoriesPostArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesPostArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Name for the resource. */
  name: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcAnalyticsProductsCategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsCategoriesPIdDPostPutPatchArgsImage {}

export interface WcAnalyticsProductsCategoriesPIdDPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Unique identifier for the resource. */
  id?: number;
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesPIdDPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcAnalyticsProductsCategoriesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsCategoriesBatchPostPutPatchArgsImage {}

export interface WcAnalyticsProductsCategoriesBatchPostPutPatchArgs {
  /** HTML description of the resource. */
  description?: string;
  /** Category archive display type. */
  display?: 'default' | 'products' | 'subcategories' | 'both';
  /** Image data. */
  image?: WcAnalyticsProductsCategoriesBatchPostPutPatchArgsImage;
  /** Menu order, used to custom sort the resource. */
  menu_order?: number;
  /** Category name. */
  name?: string;
  /** The ID for the parent of the resource. */
  parent?: number;
  /** An alphanumeric identifier for the resource unique to its type. */
  slug?: string;
}

export interface WcAnalyticsProductsLowInStockGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to products assigned a specific status. */
  status?: 'draft' | 'pending' | 'private' | 'publish' | 'future';
}

export interface WcAnalyticsProductsReviewsGetArgs {
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

export interface WcAnalyticsProductsReviewsPostArgs {
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

export interface WcAnalyticsProductsReviewsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsReviewsPIdDPostPutPatchArgs {
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

export interface WcAnalyticsProductsReviewsPIdDDeleteArgs {
  /** Whether to bypass trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsProductsReviewsBatchPostPutPatchArgs {
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

export interface WcAnalyticsReportsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
}

export interface WcAnalyticsReportsPTypeAZExportPostPutPatchArgsReportArgs {}

export interface WcAnalyticsReportsPTypeAZExportPostPutPatchArgs {
  /** When true, email a link to download the export to the requesting user. */
  email?: boolean;
  /** Parameters to pass on to the exported report. */
  report_args?: WcAnalyticsReportsPTypeAZExportPostPutPatchArgsReportArgs;
}

export interface WcAnalyticsReportsPTypeAZExportPExportIdAZ09StatusGetArgs {}

export interface WcAnalyticsReportsCategoriesGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to all items that have the specified term assigned in the categories taxonomy. */
  categories?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Add additional piece of info about each category to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'category_id'
    | 'items_sold'
    | 'net_revenue'
    | 'orders_count'
    | 'products_count'
    | 'category';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
}

export interface WcAnalyticsReportsCouponsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to coupons assigned specific coupon IDs. */
  coupons?: number[];
  /** Add additional piece of info about each coupon to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'coupon_id' | 'code' | 'amount' | 'orders_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
}

export interface WcAnalyticsReportsCouponsStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to coupons assigned specific coupon IDs. */
  coupons?: number[];
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'amount' | 'coupons_count' | 'orders_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'variation' | 'category' | 'coupon';
}

export interface WcAnalyticsReportsCustomersGetArgs {
  /** Limit response to resources with orders published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Limit response to resources with orders published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit result to items with specified customer ids. */
  customers?: number[];
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'username'
    | 'name'
    | 'country'
    | 'city'
    | 'state'
    | 'postcode'
    | 'date_registered'
    | 'date_last_active'
    | 'orders_count'
    | 'total_spend'
    | 'avg_order_value';
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
  /** Limit result to items with specified user ids. */
  users?: number[];
}

export interface WcAnalyticsReportsCustomersStatsGetArgs {
  /** Limit response to objects with an average order spend between two given numbers. */
  avg_order_value_between?: number[];
  /** Limit response to objects with an average order spend less than or equal to given number. */
  avg_order_value_max?: number;
  /** Limit response to objects with an average order spend greater than or equal to given number. */
  avg_order_value_min?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects excluding specific countries. */
  country_excludes?: string;
  /** Limit response to objects with specific countries. */
  country_includes?: string;
  /** Limit result to items with specified customer ids. */
  customers?: number[];
  /** Limit response to objects excluding emails. */
  email_excludes?: string;
  /** Limit response to objects including emails. */
  email_includes?: string;
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit response to objects last active after (or at) a given ISO8601 compliant datetime. */
  last_active_after?: string;
  /** Limit response to objects last active before (or at) a given ISO8601 compliant datetime. */
  last_active_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  last_active_between?: number[];
  /** Limit response to objects with last order after (or at) a given ISO8601 compliant datetime. */
  last_order_after?: string;
  /** Limit response to objects with last order before (or at) a given ISO8601 compliant datetime. */
  last_order_before?: string;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Limit response to objects excluding specific names. */
  name_excludes?: string;
  /** Limit response to objects with specific names. */
  name_includes?: string;
  /** Limit response to objects with an order count between two given integers. */
  orders_count_between?: number[];
  /** Limit response to objects with an order count less than or equal to given integer. */
  orders_count_max?: number;
  /** Limit response to objects with an order count greater than or equal to given integer. */
  orders_count_min?: number;
  /** Limit response to objects registered after (or at) a given ISO8601 compliant datetime. */
  registered_after?: string;
  /** Limit response to objects registered before (or at) a given ISO8601 compliant datetime. */
  registered_before?: string;
  /** Limit response to objects last active between two given ISO8601 compliant datetime. */
  registered_between?: number[];
  /** Limit response to objects with a customer field containing the search term. Searches the field provided by `searchby`. */
  search?: string;
  /** Limit results with `search` and `searchby` to specific fields containing the search term. */
  searchby?: 'name' | 'username' | 'email';
  /** Limit response to objects with a total order spend between two given numbers. */
  total_spend_between?: number[];
  /** Limit response to objects with a total order spend less than or equal to given number. */
  total_spend_max?: number;
  /** Limit response to objects with a total order spend greater than or equal to given number. */
  total_spend_min?: number;
  /** Limit response to objects excluding specific usernames. */
  username_excludes?: string;
  /** Limit response to objects with specific usernames. */
  username_includes?: string;
}

export interface WcAnalyticsReportsDownloadsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects that don't have the specified user ids. */
  customer_excludes?: number[];
  /** Limit response to objects that have the specified user ids. */
  customer_includes?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Limit response to objects that don't have a specified ip address. */
  ip_address_excludes?: number[];
  /** Limit response to objects that have a specified ip address. */
  ip_address_includes?: number[];
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: products, orders, username, ip_address. */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'product';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
}

export interface WcAnalyticsReportsDownloadsStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to objects that don't have the specified customer ids. */
  customer_excludes?: number[];
  /** Limit response to objects that have the specified customer ids. */
  customer_includes?: number[];
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Limit response to objects that don't have a specified ip address. */
  ip_address_excludes?: number[];
  /** Limit response to objects that have a specified ip address. */
  ip_address_includes?: number[];
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'download_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
}

export interface WcAnalyticsReportsImportPostPutPatchArgs {
  /** Number of days to import. */
  days?: number;
  /** Skip importing existing order data. */
  skip_existing?: boolean;
}

export interface WcAnalyticsReportsImportCancelPostPutPatchArgs {}

export interface WcAnalyticsReportsImportDeletePostPutPatchArgs {}

export interface WcAnalyticsReportsImportStatusGetArgs {}

export interface WcAnalyticsReportsImportTotalsGetArgs {
  /** Number of days to import. */
  days?: number;
  /** Skip importing existing order data. */
  skip_existing?: boolean;
}

export interface WcAnalyticsReportsOrdersGetArgsAttributeIs {}

export interface WcAnalyticsReportsOrdersGetArgsAttributeIsNot {}

export interface WcAnalyticsReportsOrdersGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsOrdersGetArgsAttributeIs[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsOrdersGetArgsAttributeIsNot[];
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to items that don't have the specified coupon(s) assigned. */
  coupon_excludes?: number[];
  /** Limit result set to items that have the specified coupon(s) assigned. */
  coupon_includes?: number[];
  /** Limit result set to returning or new customers. */
  customer_type?: '' | 'returning' | 'new';
  /** Add additional piece of info about each coupon to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Limit result set to items that don't have the specified order ids. */
  order_excludes?: number[];
  /** Limit result set to items that have the specified order ids. */
  order_includes?: number[];
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'num_items_sold' | 'net_total';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to specific types of refunds. */
  refunds?: '' | 'all' | 'partial' | 'full' | 'none';
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
  /** Limit result set to items that don't have the specified tax rate(s) assigned. */
  tax_rate_excludes?: number[];
  /** Limit result set to items that have the specified tax rate(s) assigned. */
  tax_rate_includes?: number[];
  /** Limit result set to items that don't have the specified variation(s) assigned. */
  variation_excludes?: number[];
  /** Limit result set to items that have the specified variation(s) assigned. */
  variation_includes?: number[];
}

export interface WcAnalyticsReportsOrdersStatsGetArgsAttributeIs {}

export interface WcAnalyticsReportsOrdersStatsGetArgsAttributeIsNot {}

export interface WcAnalyticsReportsOrdersStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsOrdersStatsGetArgsAttributeIs[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsOrdersStatsGetArgsAttributeIsNot[];
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to items that don't have the specified coupon(s) assigned. */
  coupon_excludes?: number[];
  /** Limit result set to items that have the specified coupon(s) assigned. */
  coupon_includes?: number[];
  /** Alias for customer_type (deprecated). */
  customer?: 'new' | 'returning';
  /** Limit result set to orders that have the specified customer_type */
  customer_type?: 'new' | 'returning';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'net_revenue' | 'orders_count' | 'avg_order_value';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified product(s) assigned. */
  product_excludes?: number[];
  /** Limit result set to items that have the specified product(s) assigned. */
  product_includes?: number[];
  /** Limit result set to specific types of refunds. */
  refunds?: '' | 'all' | 'partial' | 'full' | 'none';
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation' | 'coupon' | 'customer_type';
  /** Limit result set to items that have the specified order status. */
  status_is?: number[];
  /** Limit result set to items that don't have the specified order status. */
  status_is_not?: number[];
  /** Limit result set to items that don't have the specified tax rate(s) assigned. */
  tax_rate_excludes?: number[];
  /** Limit result set to items that have the specified tax rate(s) assigned. */
  tax_rate_includes?: number[];
  /** Limit result set to items that don't have the specified variation(s) assigned. */
  variation_excludes?: number[];
  /** Limit result set to items that have the specified variation(s) assigned. */
  variation_includes?: number[];
}

export interface WcAnalyticsReportsPerformanceIndicatorsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to specific report stats. Allowed values: . */
  stats?: number[];
}

export interface WcAnalyticsReportsPerformanceIndicatorsAllowedGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit response to specific report stats. Allowed values: . */
  stats?: number[];
}

export interface WcAnalyticsReportsProductsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result to items from the specified categories. */
  categories?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Add additional piece of info about each product to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold'
    | 'product_name'
    | 'variations'
    | 'sku';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result to items with specified product ids. */
  products?: number[];
}

export interface WcAnalyticsReportsProductsStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result to items from the specified categories. */
  categories?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result to items with specified product ids. */
  products?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation';
  /** Limit result to items with specified variation ids. */
  variations?: number[];
}

export interface WcAnalyticsReportsRevenueStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'total_sales'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold'
    | 'gross_sales';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation' | 'coupon' | 'customer_type';
}

export interface WcAnalyticsReportsStockGetArgs {
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
  orderby?:
    | 'stock_status'
    | 'stock_quantity'
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'sku';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items assigned a stock report type. */
  type?: 'all' | 'lowstock' | 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsReportsStockStatsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
}

export interface WcAnalyticsReportsTaxesGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'name'
    | 'tax_rate_id'
    | 'tax_code'
    | 'rate'
    | 'order_tax'
    | 'total_tax'
    | 'shipping_tax'
    | 'orders_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items assigned one or more tax rates. */
  taxes?: number[];
}

export interface WcAnalyticsReportsTaxesStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'items_sold'
    | 'total_sales'
    | 'orders_count'
    | 'products_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Segment the response by additional constraint. */
  segmentby?: 'tax_rate_id';
  /** Limit result set to all items that have the specified term assigned in the taxes taxonomy. */
  taxes?: number[];
}

export interface WcAnalyticsReportsVariationsGetArgsAttributeIs {}

export interface WcAnalyticsReportsVariationsGetArgsAttributeIsNot {}

export interface WcAnalyticsReportsVariationsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to variations that include the specified attributes. */
  attribute_is?: WcAnalyticsReportsVariationsGetArgsAttributeIs[];
  /** Limit result set to variations that don't include the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsVariationsGetArgsAttributeIsNot[];
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to variations not in the specified categories. */
  category_excludes?: number[];
  /** Limit result set to variations in the specified categories. */
  category_includes?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Add additional piece of info about each variation to the report. */
  extended_info?: boolean;
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?: 'date' | 'net_revenue' | 'orders_count' | 'items_sold' | 'sku';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified parent product(s). */
  product_excludes?: number[];
  /** Limit result set to items that have the specified parent product(s). */
  product_includes?: number[];
  /** Limit result to items with specified variation ids. */
  variations?: number[];
}

export interface WcAnalyticsReportsVariationsStatsGetArgsAttributeIs {}

export interface WcAnalyticsReportsVariationsStatsGetArgsAttributeIsNot {}

export interface WcAnalyticsReportsVariationsStatsGetArgs {
  /** Limit response to resources published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to orders that include products with the specified attributes. */
  attribute_is?: WcAnalyticsReportsVariationsStatsGetArgsAttributeIs[];
  /** Limit result set to orders that don't include products with the specified attributes. */
  attribute_is_not?: WcAnalyticsReportsVariationsStatsGetArgsAttributeIsNot[];
  /** Limit response to resources published before a given ISO8601 compliant date. */
  before?: string;
  /** Limit result set to variations not in the specified categories. */
  category_excludes?: number[];
  /** Limit result to items from the specified categories. */
  category_includes?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit stats fields to the specified items. */
  fields?: number[];
  /** Force retrieval of fresh data instead of from the cache. */
  force_cache_refresh?: boolean;
  /** Time interval to use for buckets in the returned data. */
  interval?: 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
  /** Indicates whether all the conditions should be true for the resulting set, or if any one of them is sufficient. Match affects the following parameters: status_is, status_is_not, product_includes, product_excludes, coupon_includes, coupon_excludes, customer, categories */
  match?: 'all' | 'any';
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'net_revenue'
    | 'coupons'
    | 'refunds'
    | 'shipping'
    | 'taxes'
    | 'net_revenue'
    | 'orders_count'
    | 'items_sold';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to items that don't have the specified parent product(s). */
  product_excludes?: number[];
  /** Limit result set to items that have the specified parent product(s). */
  product_includes?: number[];
  /** Segment the response by additional constraint. */
  segmentby?: 'product' | 'category' | 'variation';
  /** Limit result to items with specified variation ids. */
  variations?: number[];
}

export interface WcAnalyticsSettingsPGroupIdWGetArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcAnalyticsSettingsPGroupIdWPIdWGetArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcAnalyticsSettingsPGroupIdWPIdWPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
  /** Unique identifier for the resource. */
  id?: string;
}

export interface WcAnalyticsSettingsPGroupIdWBatchPostPutPatchArgs {
  /** Settings group ID. */
  group?: string;
}

export interface WcAnalyticsTaxesGetArgs {
  /** Sort by tax class. */
  class?: 'standard' | 'reduced-rate' | 'zero-rate';
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Limit result set to items that have the specified rate ID(s) assigned. */
  include?: number[];
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
  /** Search by similar tax code. */
  search?: string;
}

export interface WcAnalyticsTaxesPostArgs {
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

export interface WcAnalyticsTaxesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'edit';
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsTaxesPIdDPostPutPatchArgs {
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

export interface WcAnalyticsTaxesPIdDDeleteArgs {
  /** Required to be true, as resource does not support trashing. */
  force?: boolean;
  /** Unique identifier for the resource. */
  id?: number;
}

export interface WcAnalyticsTaxesBatchPostPutPatchArgs {
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

export interface WcAnalyticsVariationsGetArgs {
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
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'title'
    | 'slug'
    | 'modified'
    | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to those of particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Search by similar product name, sku, or attribute value. */
  search?: string;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: string;
  /** Limit result set to products with a specific slug. */
  slug?: string;
  /** Limit result set to products assigned a specific status. */
  status?:
    | 'any'
    | 'future'
    | 'trash'
    | 'draft'
    | 'pending'
    | 'private'
    | 'publish';
  /** Limit result set to products with specified stock status. */
  stock_status?: 'instock' | 'outofstock' | 'onbackorder';
}

export interface WcAnalyticsDeleteRoutes {
  '/wc-analytics/admin/notes/delete/(?P<id>[\\d-]+)': WcAnalyticsAdminNotesDeletePIdDDeleteArgs;
  '/wc-analytics/admin/notes/delete/all': WcAnalyticsAdminNotesDeleteAllDeleteArgs;
  '/wc-analytics/coupons/(?P<id>[\\d]+)': WcAnalyticsCouponsPIdDDeleteArgs;
  '/wc-analytics/orders/(?P<id>[\\d]+)': WcAnalyticsOrdersPIdDDeleteArgs;
  '/wc-analytics/products/(?P<id>[\\d]+)': WcAnalyticsProductsPIdDDeleteArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcAnalyticsProductsPProductIdDVariationsPIdDDeleteArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDDeleteArgs;
  '/wc-analytics/products/attributes/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPIdDDeleteArgs;
  '/wc-analytics/products/categories/(?P<id>[\\d]+)': WcAnalyticsProductsCategoriesPIdDDeleteArgs;
  '/wc-analytics/products/reviews/(?P<id>[\\d]+)': WcAnalyticsProductsReviewsPIdDDeleteArgs;
  '/wc-analytics/taxes/(?P<id>[\\d]+)': WcAnalyticsTaxesPIdDDeleteArgs;
}

export interface WcAnalyticsGetRoutes {
  '/wc-analytics': WcAnalyticsGetArgs;
  '/wc-analytics/admin/notes': WcAnalyticsAdminNotesGetArgs;
  '/wc-analytics/admin/notes/(?P<id>[\\d-]+)': WcAnalyticsAdminNotesPIdDGetArgs;
  '/wc-analytics/admin/notes/tracker/(?P<note_id>[\\d-]+)/user/(?P<user_id>[\\d-]+)': WcAnalyticsAdminNotesTrackerPNoteIdDUserPUserIdDGetArgs;
  '/wc-analytics/coupons': WcAnalyticsCouponsGetArgs;
  '/wc-analytics/coupons/(?P<id>[\\d]+)': WcAnalyticsCouponsPIdDGetArgs;
  '/wc-analytics/customers': WcAnalyticsCustomersGetArgs;
  '/wc-analytics/customers/(?P<id>[\\d-]+)': WcAnalyticsCustomersPIdDGetArgs;
  '/wc-analytics/data': WcAnalyticsDataGetArgs;
  '/wc-analytics/data/countries': WcAnalyticsDataCountriesGetArgs;
  '/wc-analytics/data/countries/(?P<location>[\\w-]+)': WcAnalyticsDataCountriesPLocationWGetArgs;
  '/wc-analytics/data/countries/locales': WcAnalyticsDataCountriesLocalesGetArgs;
  '/wc-analytics/data/download-ips': WcAnalyticsDataDownloadIpsGetArgs;
  '/wc-analytics/leaderboards': WcAnalyticsLeaderboardsGetArgs;
  '/wc-analytics/leaderboards/(?P<leaderboard>\\w+)': WcAnalyticsLeaderboardsPLeaderboardWGetArgs;
  '/wc-analytics/leaderboards/allowed': WcAnalyticsLeaderboardsAllowedGetArgs;
  '/wc-analytics/orders': WcAnalyticsOrdersGetArgs;
  '/wc-analytics/orders/(?P<id>[\\d]+)': WcAnalyticsOrdersPIdDGetArgs;
  '/wc-analytics/products': WcAnalyticsProductsGetArgs;
  '/wc-analytics/products/(?P<id>[\\d]+)': WcAnalyticsProductsPIdDGetArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations': WcAnalyticsProductsPProductIdDVariationsGetArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcAnalyticsProductsPProductIdDVariationsPIdDGetArgs;
  '/wc-analytics/products/attributes': WcAnalyticsProductsAttributesGetArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcAnalyticsProductsAttributesPAttributeIdDTermsGetArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDGetArgs;
  '/wc-analytics/products/attributes/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPIdDGetArgs;
  '/wc-analytics/products/attributes/(?P<slug>[a-z0-9_\\-]+)': WcAnalyticsProductsAttributesPSlugAZ09GetArgs;
  '/wc-analytics/products/attributes/(?P<slug>[a-z0-9_\\-]+)/terms': WcAnalyticsProductsAttributesPSlugAZ09TermsGetArgs;
  '/wc-analytics/products/categories': WcAnalyticsProductsCategoriesGetArgs;
  '/wc-analytics/products/categories/(?P<id>[\\d]+)': WcAnalyticsProductsCategoriesPIdDGetArgs;
  '/wc-analytics/products/low-in-stock': WcAnalyticsProductsLowInStockGetArgs;
  '/wc-analytics/products/reviews': WcAnalyticsProductsReviewsGetArgs;
  '/wc-analytics/products/reviews/(?P<id>[\\d]+)': WcAnalyticsProductsReviewsPIdDGetArgs;
  '/wc-analytics/reports': WcAnalyticsReportsGetArgs;
  '/wc-analytics/reports/(?P<type>[a-z]+)/export/(?P<export_id>[a-z0-9]+)/status': WcAnalyticsReportsPTypeAZExportPExportIdAZ09StatusGetArgs;
  '/wc-analytics/reports/categories': WcAnalyticsReportsCategoriesGetArgs;
  '/wc-analytics/reports/coupons': WcAnalyticsReportsCouponsGetArgs;
  '/wc-analytics/reports/coupons/stats': WcAnalyticsReportsCouponsStatsGetArgs;
  '/wc-analytics/reports/customers': WcAnalyticsReportsCustomersGetArgs;
  '/wc-analytics/reports/customers/stats': WcAnalyticsReportsCustomersStatsGetArgs;
  '/wc-analytics/reports/downloads': WcAnalyticsReportsDownloadsGetArgs;
  '/wc-analytics/reports/downloads/stats': WcAnalyticsReportsDownloadsStatsGetArgs;
  '/wc-analytics/reports/import/status': WcAnalyticsReportsImportStatusGetArgs;
  '/wc-analytics/reports/import/totals': WcAnalyticsReportsImportTotalsGetArgs;
  '/wc-analytics/reports/orders': WcAnalyticsReportsOrdersGetArgs;
  '/wc-analytics/reports/orders/stats': WcAnalyticsReportsOrdersStatsGetArgs;
  '/wc-analytics/reports/performance-indicators': WcAnalyticsReportsPerformanceIndicatorsGetArgs;
  '/wc-analytics/reports/performance-indicators/allowed': WcAnalyticsReportsPerformanceIndicatorsAllowedGetArgs;
  '/wc-analytics/reports/products': WcAnalyticsReportsProductsGetArgs;
  '/wc-analytics/reports/products/stats': WcAnalyticsReportsProductsStatsGetArgs;
  '/wc-analytics/reports/revenue/stats': WcAnalyticsReportsRevenueStatsGetArgs;
  '/wc-analytics/reports/stock': WcAnalyticsReportsStockGetArgs;
  '/wc-analytics/reports/stock/stats': WcAnalyticsReportsStockStatsGetArgs;
  '/wc-analytics/reports/taxes': WcAnalyticsReportsTaxesGetArgs;
  '/wc-analytics/reports/taxes/stats': WcAnalyticsReportsTaxesStatsGetArgs;
  '/wc-analytics/reports/variations': WcAnalyticsReportsVariationsGetArgs;
  '/wc-analytics/reports/variations/stats': WcAnalyticsReportsVariationsStatsGetArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)': WcAnalyticsSettingsPGroupIdWGetArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcAnalyticsSettingsPGroupIdWPIdWGetArgs;
  '/wc-analytics/taxes': WcAnalyticsTaxesGetArgs;
  '/wc-analytics/taxes/(?P<id>[\\d]+)': WcAnalyticsTaxesPIdDGetArgs;
  '/wc-analytics/variations': WcAnalyticsVariationsGetArgs;
}

export interface WcAnalyticsPatchRoutes {
  '/wc-analytics/admin/notes/(?P<id>[\\d-]+)': WcAnalyticsAdminNotesPIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/(?P<note_id>[\\d-]+)/action/(?P<action_id>[\\d-]+)': WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\\w-]+)': WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostPutPatchArgs;
  '/wc-analytics/admin/notes/update': WcAnalyticsAdminNotesUpdatePostPutPatchArgs;
  '/wc-analytics/coupons/(?P<id>[\\d]+)': WcAnalyticsCouponsPIdDPostPutPatchArgs;
  '/wc-analytics/coupons/batch': WcAnalyticsCouponsBatchPostPutPatchArgs;
  '/wc-analytics/orders/(?P<id>[\\d]+)': WcAnalyticsOrdersPIdDPostPutPatchArgs;
  '/wc-analytics/orders/batch': WcAnalyticsOrdersBatchPostPutPatchArgs;
  '/wc-analytics/products/(?P<id>[\\d]+)': WcAnalyticsProductsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/batch': WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/batch': WcAnalyticsProductsAttributesBatchPostPutPatchArgs;
  '/wc-analytics/products/batch': WcAnalyticsProductsBatchPostPutPatchArgs;
  '/wc-analytics/products/categories/(?P<id>[\\d]+)': WcAnalyticsProductsCategoriesPIdDPostPutPatchArgs;
  '/wc-analytics/products/categories/batch': WcAnalyticsProductsCategoriesBatchPostPutPatchArgs;
  '/wc-analytics/products/reviews/(?P<id>[\\d]+)': WcAnalyticsProductsReviewsPIdDPostPutPatchArgs;
  '/wc-analytics/products/reviews/batch': WcAnalyticsProductsReviewsBatchPostPutPatchArgs;
  '/wc-analytics/reports/(?P<type>[a-z]+)/export': WcAnalyticsReportsPTypeAZExportPostPutPatchArgs;
  '/wc-analytics/reports/import': WcAnalyticsReportsImportPostPutPatchArgs;
  '/wc-analytics/reports/import/cancel': WcAnalyticsReportsImportCancelPostPutPatchArgs;
  '/wc-analytics/reports/import/delete': WcAnalyticsReportsImportDeletePostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcAnalyticsSettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/batch': WcAnalyticsSettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc-analytics/taxes/(?P<id>[\\d]+)': WcAnalyticsTaxesPIdDPostPutPatchArgs;
  '/wc-analytics/taxes/batch': WcAnalyticsTaxesBatchPostPutPatchArgs;
}

export interface WcAnalyticsPostRoutes {
  '/wc-analytics/admin/notes/(?P<id>[\\d-]+)': WcAnalyticsAdminNotesPIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/(?P<note_id>[\\d-]+)/action/(?P<action_id>[\\d-]+)': WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\\w-]+)': WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostPutPatchArgs;
  '/wc-analytics/admin/notes/update': WcAnalyticsAdminNotesUpdatePostPutPatchArgs;
  '/wc-analytics/coupons': WcAnalyticsCouponsPostArgs;
  '/wc-analytics/coupons/(?P<id>[\\d]+)': WcAnalyticsCouponsPIdDPostPutPatchArgs;
  '/wc-analytics/coupons/batch': WcAnalyticsCouponsBatchPostPutPatchArgs;
  '/wc-analytics/orders': WcAnalyticsOrdersPostArgs;
  '/wc-analytics/orders/(?P<id>[\\d]+)': WcAnalyticsOrdersPIdDPostPutPatchArgs;
  '/wc-analytics/orders/batch': WcAnalyticsOrdersBatchPostPutPatchArgs;
  '/wc-analytics/products': WcAnalyticsProductsPostArgs;
  '/wc-analytics/products/(?P<id>[\\d]+)': WcAnalyticsProductsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations': WcAnalyticsProductsPProductIdDVariationsPostArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/batch': WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/generate': WcAnalyticsProductsPProductIdDVariationsGeneratePostArgs;
  '/wc-analytics/products/attributes': WcAnalyticsProductsAttributesPostArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms': WcAnalyticsProductsAttributesPAttributeIdDTermsPostArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/batch': WcAnalyticsProductsAttributesBatchPostPutPatchArgs;
  '/wc-analytics/products/batch': WcAnalyticsProductsBatchPostPutPatchArgs;
  '/wc-analytics/products/categories': WcAnalyticsProductsCategoriesPostArgs;
  '/wc-analytics/products/categories/(?P<id>[\\d]+)': WcAnalyticsProductsCategoriesPIdDPostPutPatchArgs;
  '/wc-analytics/products/categories/batch': WcAnalyticsProductsCategoriesBatchPostPutPatchArgs;
  '/wc-analytics/products/reviews': WcAnalyticsProductsReviewsPostArgs;
  '/wc-analytics/products/reviews/(?P<id>[\\d]+)': WcAnalyticsProductsReviewsPIdDPostPutPatchArgs;
  '/wc-analytics/products/reviews/batch': WcAnalyticsProductsReviewsBatchPostPutPatchArgs;
  '/wc-analytics/reports/(?P<type>[a-z]+)/export': WcAnalyticsReportsPTypeAZExportPostPutPatchArgs;
  '/wc-analytics/reports/import': WcAnalyticsReportsImportPostPutPatchArgs;
  '/wc-analytics/reports/import/cancel': WcAnalyticsReportsImportCancelPostPutPatchArgs;
  '/wc-analytics/reports/import/delete': WcAnalyticsReportsImportDeletePostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcAnalyticsSettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/batch': WcAnalyticsSettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc-analytics/taxes': WcAnalyticsTaxesPostArgs;
  '/wc-analytics/taxes/(?P<id>[\\d]+)': WcAnalyticsTaxesPIdDPostPutPatchArgs;
  '/wc-analytics/taxes/batch': WcAnalyticsTaxesBatchPostPutPatchArgs;
}

export interface WcAnalyticsPutRoutes {
  '/wc-analytics/admin/notes/(?P<id>[\\d-]+)': WcAnalyticsAdminNotesPIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/(?P<note_id>[\\d-]+)/action/(?P<action_id>[\\d-]+)': WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostPutPatchArgs;
  '/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\\w-]+)': WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostPutPatchArgs;
  '/wc-analytics/admin/notes/update': WcAnalyticsAdminNotesUpdatePostPutPatchArgs;
  '/wc-analytics/coupons/(?P<id>[\\d]+)': WcAnalyticsCouponsPIdDPostPutPatchArgs;
  '/wc-analytics/coupons/batch': WcAnalyticsCouponsBatchPostPutPatchArgs;
  '/wc-analytics/orders/(?P<id>[\\d]+)': WcAnalyticsOrdersPIdDPostPutPatchArgs;
  '/wc-analytics/orders/batch': WcAnalyticsOrdersBatchPostPutPatchArgs;
  '/wc-analytics/products/(?P<id>[\\d]+)': WcAnalyticsProductsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/(?P<id>[\\d]+)': WcAnalyticsProductsPProductIdDVariationsPIdDPostPutPatchArgs;
  '/wc-analytics/products/(?P<product_id>[\\d]+)/variations/batch': WcAnalyticsProductsPProductIdDVariationsBatchPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<attribute_id>[\\d]+)/terms/batch': WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostPutPatchArgs;
  '/wc-analytics/products/attributes/(?P<id>[\\d]+)': WcAnalyticsProductsAttributesPIdDPostPutPatchArgs;
  '/wc-analytics/products/attributes/batch': WcAnalyticsProductsAttributesBatchPostPutPatchArgs;
  '/wc-analytics/products/batch': WcAnalyticsProductsBatchPostPutPatchArgs;
  '/wc-analytics/products/categories/(?P<id>[\\d]+)': WcAnalyticsProductsCategoriesPIdDPostPutPatchArgs;
  '/wc-analytics/products/categories/batch': WcAnalyticsProductsCategoriesBatchPostPutPatchArgs;
  '/wc-analytics/products/reviews/(?P<id>[\\d]+)': WcAnalyticsProductsReviewsPIdDPostPutPatchArgs;
  '/wc-analytics/products/reviews/batch': WcAnalyticsProductsReviewsBatchPostPutPatchArgs;
  '/wc-analytics/reports/(?P<type>[a-z]+)/export': WcAnalyticsReportsPTypeAZExportPostPutPatchArgs;
  '/wc-analytics/reports/import': WcAnalyticsReportsImportPostPutPatchArgs;
  '/wc-analytics/reports/import/cancel': WcAnalyticsReportsImportCancelPostPutPatchArgs;
  '/wc-analytics/reports/import/delete': WcAnalyticsReportsImportDeletePostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/(?P<id>[\\w-]+)': WcAnalyticsSettingsPGroupIdWPIdWPostPutPatchArgs;
  '/wc-analytics/settings/(?P<group_id>[\\w-]+)/batch': WcAnalyticsSettingsPGroupIdWBatchPostPutPatchArgs;
  '/wc-analytics/taxes/(?P<id>[\\d]+)': WcAnalyticsTaxesPIdDPostPutPatchArgs;
  '/wc-analytics/taxes/batch': WcAnalyticsTaxesBatchPostPutPatchArgs;
}
