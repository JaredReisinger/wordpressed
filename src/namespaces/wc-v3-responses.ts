// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "wc/v3" responses

/**
 * Response for `/wc/v3` route when calling GET method.
 */
export interface WcV3GetResponse {}

/**
 * Response for `/wc/v3/coupons` route when calling GET method.
 */
export interface WcV3CouponsGetResponse {}

/**
 * Response for `/wc/v3/coupons` route when calling POST method.
 */
export interface WcV3CouponsPostResponse {}

/**
 * Response for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3CouponsPIdDGetResponse {}

/**
 * Response for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3CouponsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3CouponsPIdDPostResponse {}

/**
 * Response for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3CouponsPIdDPutResponse {}

/**
 * Response for `/wc/v3/coupons/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3CouponsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/coupons/batch` route when calling PATCH method.
 */
export interface WcV3CouponsBatchPatchResponse {}

/**
 * Response for `/wc/v3/coupons/batch` route when calling POST method.
 */
export interface WcV3CouponsBatchPostResponse {}

/**
 * Response for `/wc/v3/coupons/batch` route when calling PUT method.
 */
export interface WcV3CouponsBatchPutResponse {}

/**
 * Response for `/wc/v3/customers` route when calling GET method.
 */
export interface WcV3CustomersGetResponse {}

/**
 * Response for `/wc/v3/customers` route when calling POST method.
 */
export interface WcV3CustomersPostResponse {}

/**
 * Response for `/wc/v3/customers/(?P<customer_id>[\d]+)/downloads` route when calling GET method.
 */
export interface WcV3CustomersPCustomerIdDDownloadsGetResponse {}

/**
 * Response for `/wc/v3/customers/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3CustomersPIdDGetResponse {}

/**
 * Response for `/wc/v3/customers/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3CustomersPIdDPatchResponse {}

/**
 * Response for `/wc/v3/customers/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3CustomersPIdDPostResponse {}

/**
 * Response for `/wc/v3/customers/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3CustomersPIdDPutResponse {}

/**
 * Response for `/wc/v3/customers/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3CustomersPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/customers/batch` route when calling PATCH method.
 */
export interface WcV3CustomersBatchPatchResponse {}

/**
 * Response for `/wc/v3/customers/batch` route when calling POST method.
 */
export interface WcV3CustomersBatchPostResponse {}

/**
 * Response for `/wc/v3/customers/batch` route when calling PUT method.
 */
export interface WcV3CustomersBatchPutResponse {}

/**
 * Response for `/wc/v3/data` route when calling GET method.
 */
export interface WcV3DataGetResponse {}

/**
 * Response for `/wc/v3/data/continents` route when calling GET method.
 */
export interface WcV3DataContinentsGetResponse {}

/**
 * Response for `/wc/v3/data/continents/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WcV3DataContinentsPLocationWGetResponse {}

/**
 * Response for `/wc/v3/data/countries` route when calling GET method.
 */
export interface WcV3DataCountriesGetResponse {}

/**
 * Response for `/wc/v3/data/countries/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WcV3DataCountriesPLocationWGetResponse {}

/**
 * Response for `/wc/v3/data/currencies` route when calling GET method.
 */
export interface WcV3DataCurrenciesGetResponse {}

/**
 * Response for `/wc/v3/data/currencies/(?P<currency>[\w-]{3})` route when calling GET method.
 */
export interface WcV3DataCurrenciesPCurrencyW3GetResponse {}

/**
 * Response for `/wc/v3/data/currencies/current` route when calling GET method.
 */
export interface WcV3DataCurrenciesCurrentGetResponse {}

/**
 * Response for `/wc/v3/orders` route when calling GET method.
 */
export interface WcV3OrdersGetResponse {}

/**
 * Response for `/wc/v3/orders` route when calling POST method.
 */
export interface WcV3OrdersPostResponse {}

/**
 * Response for `/wc/v3/orders/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPIdDGetResponse {}

/**
 * Response for `/wc/v3/orders/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3OrdersPIdDPatchResponse {}

/**
 * Response for `/wc/v3/orders/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3OrdersPIdDPostResponse {}

/**
 * Response for `/wc/v3/orders/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3OrdersPIdDPutResponse {}

/**
 * Response for `/wc/v3/orders/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/notes` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDNotesGetResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/notes` route when calling POST method.
 */
export interface WcV3OrdersPOrderIdDNotesPostResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDNotesPIdDGetResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/notes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPOrderIdDNotesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDRefundsGetResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds` route when calling POST method.
 */
export interface WcV3OrdersPOrderIdDRefundsPostResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3OrdersPOrderIdDRefundsPIdDGetResponse {}

/**
 * Response for `/wc/v3/orders/(?P<order_id>[\d]+)/refunds/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3OrdersPOrderIdDRefundsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/orders/batch` route when calling PATCH method.
 */
export interface WcV3OrdersBatchPatchResponse {}

/**
 * Response for `/wc/v3/orders/batch` route when calling POST method.
 */
export interface WcV3OrdersBatchPostResponse {}

/**
 * Response for `/wc/v3/orders/batch` route when calling PUT method.
 */
export interface WcV3OrdersBatchPutResponse {}

/**
 * Response for `/wc/v3/payment_gateways` route when calling GET method.
 */
export interface WcV3PaymentGatewaysGetResponse {}

/**
 * Response for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3PaymentGatewaysPIdWGetResponse {}

/**
 * Response for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling PATCH method.
 */
export interface WcV3PaymentGatewaysPIdWPatchResponse {}

/**
 * Response for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling POST method.
 */
export interface WcV3PaymentGatewaysPIdWPostResponse {}

/**
 * Response for `/wc/v3/payment_gateways/(?P<id>[\w-]+)` route when calling PUT method.
 */
export interface WcV3PaymentGatewaysPIdWPutResponse {}

/**
 * Response for `/wc/v3/products` route when calling GET method.
 */
export interface WcV3ProductsGetResponse {}

/**
 * Response for `/wc/v3/products` route when calling POST method.
 */
export interface WcV3ProductsPostResponse {}

/**
 * Response for `/wc/v3/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations` route when calling GET method.
 */
export interface WcV3ProductsPProductIdDVariationsGetResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsPostResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsPProductIdDVariationsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/batch` route when calling PATCH method.
 */
export interface WcV3ProductsPProductIdDVariationsBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/batch` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsBatchPostResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/batch` route when calling PUT method.
 */
export interface WcV3ProductsPProductIdDVariationsBatchPutResponse {}

/**
 * Response for `/wc/v3/products/(?P<product_id>[\d]+)/variations/generate` route when calling POST method.
 */
export interface WcV3ProductsPProductIdDVariationsGeneratePostResponse {}

/**
 * Response for `/wc/v3/products/attributes` route when calling GET method.
 */
export interface WcV3ProductsAttributesGetResponse {}

/**
 * Response for `/wc/v3/products/attributes` route when calling POST method.
 */
export interface WcV3ProductsAttributesPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsGetResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling POST method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PATCH method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling POST method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PUT method.
 */
export interface WcV3ProductsAttributesPAttributeIdDTermsBatchPutResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsAttributesPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsAttributesPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsAttributesPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsAttributesPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/attributes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsAttributesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/attributes/batch` route when calling PATCH method.
 */
export interface WcV3ProductsAttributesBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/attributes/batch` route when calling POST method.
 */
export interface WcV3ProductsAttributesBatchPostResponse {}

/**
 * Response for `/wc/v3/products/attributes/batch` route when calling PUT method.
 */
export interface WcV3ProductsAttributesBatchPutResponse {}

/**
 * Response for `/wc/v3/products/batch` route when calling PATCH method.
 */
export interface WcV3ProductsBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/batch` route when calling POST method.
 */
export interface WcV3ProductsBatchPostResponse {}

/**
 * Response for `/wc/v3/products/batch` route when calling PUT method.
 */
export interface WcV3ProductsBatchPutResponse {}

/**
 * Response for `/wc/v3/products/categories` route when calling GET method.
 */
export interface WcV3ProductsCategoriesGetResponse {}

/**
 * Response for `/wc/v3/products/categories` route when calling POST method.
 */
export interface WcV3ProductsCategoriesPostResponse {}

/**
 * Response for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsCategoriesPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsCategoriesPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsCategoriesPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsCategoriesPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/categories/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsCategoriesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/categories/batch` route when calling PATCH method.
 */
export interface WcV3ProductsCategoriesBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/categories/batch` route when calling POST method.
 */
export interface WcV3ProductsCategoriesBatchPostResponse {}

/**
 * Response for `/wc/v3/products/categories/batch` route when calling PUT method.
 */
export interface WcV3ProductsCategoriesBatchPutResponse {}

/**
 * Response for `/wc/v3/products/reviews` route when calling GET method.
 */
export interface WcV3ProductsReviewsGetResponse {}

/**
 * Response for `/wc/v3/products/reviews` route when calling POST method.
 */
export interface WcV3ProductsReviewsPostResponse {}

/**
 * Response for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsReviewsPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsReviewsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsReviewsPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsReviewsPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/reviews/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsReviewsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/reviews/batch` route when calling PATCH method.
 */
export interface WcV3ProductsReviewsBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/reviews/batch` route when calling POST method.
 */
export interface WcV3ProductsReviewsBatchPostResponse {}

/**
 * Response for `/wc/v3/products/reviews/batch` route when calling PUT method.
 */
export interface WcV3ProductsReviewsBatchPutResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes` route when calling GET method.
 */
export interface WcV3ProductsShippingClassesGetResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes` route when calling POST method.
 */
export interface WcV3ProductsShippingClassesPostResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsShippingClassesPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsShippingClassesPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsShippingClassesPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsShippingClassesPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsShippingClassesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/batch` route when calling PATCH method.
 */
export interface WcV3ProductsShippingClassesBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/batch` route when calling POST method.
 */
export interface WcV3ProductsShippingClassesBatchPostResponse {}

/**
 * Response for `/wc/v3/products/shipping_classes/batch` route when calling PUT method.
 */
export interface WcV3ProductsShippingClassesBatchPutResponse {}

/**
 * Response for `/wc/v3/products/tags` route when calling GET method.
 */
export interface WcV3ProductsTagsGetResponse {}

/**
 * Response for `/wc/v3/products/tags` route when calling POST method.
 */
export interface WcV3ProductsTagsPostResponse {}

/**
 * Response for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ProductsTagsPIdDGetResponse {}

/**
 * Response for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ProductsTagsPIdDPatchResponse {}

/**
 * Response for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ProductsTagsPIdDPostResponse {}

/**
 * Response for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ProductsTagsPIdDPutResponse {}

/**
 * Response for `/wc/v3/products/tags/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ProductsTagsPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/products/tags/batch` route when calling PATCH method.
 */
export interface WcV3ProductsTagsBatchPatchResponse {}

/**
 * Response for `/wc/v3/products/tags/batch` route when calling POST method.
 */
export interface WcV3ProductsTagsBatchPostResponse {}

/**
 * Response for `/wc/v3/products/tags/batch` route when calling PUT method.
 */
export interface WcV3ProductsTagsBatchPutResponse {}

/**
 * Response for `/wc/v3/reports` route when calling GET method.
 */
export interface WcV3ReportsGetResponse {}

/**
 * Response for `/wc/v3/reports/coupons/totals` route when calling GET method.
 */
export interface WcV3ReportsCouponsTotalsGetResponse {}

/**
 * Response for `/wc/v3/reports/customers/totals` route when calling GET method.
 */
export interface WcV3ReportsCustomersTotalsGetResponse {}

/**
 * Response for `/wc/v3/reports/orders/totals` route when calling GET method.
 */
export interface WcV3ReportsOrdersTotalsGetResponse {}

/**
 * Response for `/wc/v3/reports/products/totals` route when calling GET method.
 */
export interface WcV3ReportsProductsTotalsGetResponse {}

/**
 * Response for `/wc/v3/reports/reviews/totals` route when calling GET method.
 */
export interface WcV3ReportsReviewsTotalsGetResponse {}

/**
 * Response for `/wc/v3/reports/sales` route when calling GET method.
 */
export interface WcV3ReportsSalesGetResponse {}

/**
 * Response for `/wc/v3/reports/top_sellers` route when calling GET method.
 */
export interface WcV3ReportsTopSellersGetResponse {}

/**
 * Response for `/wc/v3/settings` route when calling GET method.
 */
export interface WcV3SettingsGetResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SettingsPGroupIdWGetResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SettingsPGroupIdWPIdWGetResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PATCH method.
 */
export interface WcV3SettingsPGroupIdWPIdWPatchResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling POST method.
 */
export interface WcV3SettingsPGroupIdWPIdWPostResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PUT method.
 */
export interface WcV3SettingsPGroupIdWPIdWPutResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/batch` route when calling PATCH method.
 */
export interface WcV3SettingsPGroupIdWBatchPatchResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/batch` route when calling POST method.
 */
export interface WcV3SettingsPGroupIdWBatchPostResponse {}

/**
 * Response for `/wc/v3/settings/(?P<group_id>[\w-]+)/batch` route when calling PUT method.
 */
export interface WcV3SettingsPGroupIdWBatchPutResponse {}

/**
 * Response for `/wc/v3/settings/batch` route when calling PATCH method.
 */
export interface WcV3SettingsBatchPatchResponse {}

/**
 * Response for `/wc/v3/settings/batch` route when calling POST method.
 */
export interface WcV3SettingsBatchPostResponse {}

/**
 * Response for `/wc/v3/settings/batch` route when calling PUT method.
 */
export interface WcV3SettingsBatchPutResponse {}

/**
 * Response for `/wc/v3/shipping_methods` route when calling GET method.
 */
export interface WcV3ShippingMethodsGetResponse {}

/**
 * Response for `/wc/v3/shipping_methods/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3ShippingMethodsPIdWGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones` route when calling GET method.
 */
export interface WcV3ShippingZonesGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones` route when calling POST method.
 */
export interface WcV3ShippingZonesPostResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3ShippingZonesPIdDGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ShippingZonesPIdDPatchResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3ShippingZonesPIdDPostResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ShippingZonesPIdDPutResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ShippingZonesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling GET method.
 */
export interface WcV3ShippingZonesPIdDLocationsGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling PATCH method.
 */
export interface WcV3ShippingZonesPIdDLocationsPatchResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling POST method.
 */
export interface WcV3ShippingZonesPIdDLocationsPostResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<id>[\d]+)/locations` route when calling PUT method.
 */
export interface WcV3ShippingZonesPIdDLocationsPutResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling GET method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods` route when calling POST method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPostResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling GET method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDGetResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPatchResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling POST method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPostResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling PUT method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDPutResponse {}

/**
 * Response for `/wc/v3/shipping/zones/(?P<zone_id>[\d]+)/methods/(?P<instance_id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3ShippingZonesPZoneIdDMethodsPInstanceIdDDeleteResponse {}

/**
 * Response for `/wc/v3/system_status` route when calling GET method.
 */
export interface WcV3SystemStatusGetResponse {}

/**
 * Response for `/wc/v3/system_status/tools` route when calling GET method.
 */
export interface WcV3SystemStatusToolsGetResponse {}

/**
 * Response for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcV3SystemStatusToolsPIdWGetResponse {}

/**
 * Response for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling PATCH method.
 */
export interface WcV3SystemStatusToolsPIdWPatchResponse {}

/**
 * Response for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling POST method.
 */
export interface WcV3SystemStatusToolsPIdWPostResponse {}

/**
 * Response for `/wc/v3/system_status/tools/(?P<id>[\w-]+)` route when calling PUT method.
 */
export interface WcV3SystemStatusToolsPIdWPutResponse {}

/**
 * Response for `/wc/v3/taxes` route when calling GET method.
 */
export interface WcV3TaxesGetResponse {}

/**
 * Response for `/wc/v3/taxes` route when calling POST method.
 */
export interface WcV3TaxesPostResponse {}

/**
 * Response for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3TaxesPIdDGetResponse {}

/**
 * Response for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3TaxesPIdDPatchResponse {}

/**
 * Response for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3TaxesPIdDPostResponse {}

/**
 * Response for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3TaxesPIdDPutResponse {}

/**
 * Response for `/wc/v3/taxes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3TaxesPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/taxes/batch` route when calling PATCH method.
 */
export interface WcV3TaxesBatchPatchResponse {}

/**
 * Response for `/wc/v3/taxes/batch` route when calling POST method.
 */
export interface WcV3TaxesBatchPostResponse {}

/**
 * Response for `/wc/v3/taxes/batch` route when calling PUT method.
 */
export interface WcV3TaxesBatchPutResponse {}

/**
 * Response for `/wc/v3/taxes/classes` route when calling GET method.
 */
export interface WcV3TaxesClassesGetResponse {}

/**
 * Response for `/wc/v3/taxes/classes` route when calling POST method.
 */
export interface WcV3TaxesClassesPostResponse {}

/**
 * Response for `/wc/v3/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling GET method.
 */
export interface WcV3TaxesClassesPSlugWWSGetResponse {}

/**
 * Response for `/wc/v3/taxes/classes/(?P<slug>\w[\w\s\-]*)` route when calling DELETE method.
 */
export interface WcV3TaxesClassesPSlugWWSDeleteResponse {}

/**
 * Response for `/wc/v3/webhooks` route when calling GET method.
 */
export interface WcV3WebhooksGetResponse {}

/**
 * Response for `/wc/v3/webhooks` route when calling POST method.
 */
export interface WcV3WebhooksPostResponse {}

/**
 * Response for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcV3WebhooksPIdDGetResponse {}

/**
 * Response for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcV3WebhooksPIdDPatchResponse {}

/**
 * Response for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcV3WebhooksPIdDPostResponse {}

/**
 * Response for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcV3WebhooksPIdDPutResponse {}

/**
 * Response for `/wc/v3/webhooks/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcV3WebhooksPIdDDeleteResponse {}

/**
 * Response for `/wc/v3/webhooks/batch` route when calling PATCH method.
 */
export interface WcV3WebhooksBatchPatchResponse {}

/**
 * Response for `/wc/v3/webhooks/batch` route when calling POST method.
 */
export interface WcV3WebhooksBatchPostResponse {}

/**
 * Response for `/wc/v3/webhooks/batch` route when calling PUT method.
 */
export interface WcV3WebhooksBatchPutResponse {}
