// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "wc-analytics" responses

/**
 * Response for `/wc-analytics` route when calling GET method.
 */
export interface WcAnalyticsGetResponse {}

/**
 * Response for `/wc-analytics/admin/notes` route when calling GET method.
 */
export interface WcAnalyticsAdminNotesGetResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<id>[\d-]+)` route when calling GET method.
 */
export interface WcAnalyticsAdminNotesPIdDGetResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<id>[\d-]+)` route when calling PATCH method.
 */
export interface WcAnalyticsAdminNotesPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<id>[\d-]+)` route when calling POST method.
 */
export interface WcAnalyticsAdminNotesPIdDPostResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<id>[\d-]+)` route when calling PUT method.
 */
export interface WcAnalyticsAdminNotesPIdDPutResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<note_id>[\d-]+)/action/(?P<action_id>[\d-]+)` route when calling PATCH method.
 */
export interface WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPatchResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<note_id>[\d-]+)/action/(?P<action_id>[\d-]+)` route when calling POST method.
 */
export interface WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPostResponse {}

/**
 * Response for `/wc-analytics/admin/notes/(?P<note_id>[\d-]+)/action/(?P<action_id>[\d-]+)` route when calling PUT method.
 */
export interface WcAnalyticsAdminNotesPNoteIdDActionPActionIdDPutResponse {}

/**
 * Response for `/wc-analytics/admin/notes/delete/(?P<id>[\d-]+)` route when calling DELETE method.
 */
export interface WcAnalyticsAdminNotesDeletePIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/admin/notes/delete/all` route when calling DELETE method.
 */
export interface WcAnalyticsAdminNotesDeleteAllDeleteResponse {}

/**
 * Response for `/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\w-]+)` route when calling PATCH method.
 */
export interface WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPatchResponse {}

/**
 * Response for `/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\w-]+)` route when calling POST method.
 */
export interface WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPostResponse {}

/**
 * Response for `/wc-analytics/admin/notes/experimental-activate-promo/(?P<promo_note_name>[\w-]+)` route when calling PUT method.
 */
export interface WcAnalyticsAdminNotesExperimentalActivatePromoPPromoNoteNameWPutResponse {}

/**
 * Response for `/wc-analytics/admin/notes/tracker/(?P<note_id>[\d-]+)/user/(?P<user_id>[\d-]+)` route when calling GET method.
 */
export interface WcAnalyticsAdminNotesTrackerPNoteIdDUserPUserIdDGetResponse {}

/**
 * Response for `/wc-analytics/admin/notes/update` route when calling PATCH method.
 */
export interface WcAnalyticsAdminNotesUpdatePatchResponse {}

/**
 * Response for `/wc-analytics/admin/notes/update` route when calling POST method.
 */
export interface WcAnalyticsAdminNotesUpdatePostResponse {}

/**
 * Response for `/wc-analytics/admin/notes/update` route when calling PUT method.
 */
export interface WcAnalyticsAdminNotesUpdatePutResponse {}

/**
 * Response for `/wc-analytics/coupons` route when calling GET method.
 */
export interface WcAnalyticsCouponsGetResponse {}

/**
 * Response for `/wc-analytics/coupons` route when calling POST method.
 */
export interface WcAnalyticsCouponsPostResponse {}

/**
 * Response for `/wc-analytics/coupons/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsCouponsPIdDGetResponse {}

/**
 * Response for `/wc-analytics/coupons/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsCouponsPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/coupons/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsCouponsPIdDPostResponse {}

/**
 * Response for `/wc-analytics/coupons/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsCouponsPIdDPutResponse {}

/**
 * Response for `/wc-analytics/coupons/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsCouponsPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/coupons/batch` route when calling PATCH method.
 */
export interface WcAnalyticsCouponsBatchPatchResponse {}

/**
 * Response for `/wc-analytics/coupons/batch` route when calling POST method.
 */
export interface WcAnalyticsCouponsBatchPostResponse {}

/**
 * Response for `/wc-analytics/coupons/batch` route when calling PUT method.
 */
export interface WcAnalyticsCouponsBatchPutResponse {}

/**
 * Response for `/wc-analytics/customers` route when calling GET method.
 */
export interface WcAnalyticsCustomersGetResponse {}

/**
 * Response for `/wc-analytics/customers/(?P<id>[\d-]+)` route when calling GET method.
 */
export interface WcAnalyticsCustomersPIdDGetResponse {}

/**
 * Response for `/wc-analytics/data` route when calling GET method.
 */
export interface WcAnalyticsDataGetResponse {}

/**
 * Response for `/wc-analytics/data/countries` route when calling GET method.
 */
export interface WcAnalyticsDataCountriesGetResponse {}

/**
 * Response for `/wc-analytics/data/countries/(?P<location>[\w-]+)` route when calling GET method.
 */
export interface WcAnalyticsDataCountriesPLocationWGetResponse {}

/**
 * Response for `/wc-analytics/data/countries/locales` route when calling GET method.
 */
export interface WcAnalyticsDataCountriesLocalesGetResponse {}

/**
 * Response for `/wc-analytics/data/download-ips` route when calling GET method.
 */
export interface WcAnalyticsDataDownloadIpsGetResponse {}

/**
 * Response for `/wc-analytics/leaderboards` route when calling GET method.
 */
export interface WcAnalyticsLeaderboardsGetResponse {}

/**
 * Response for `/wc-analytics/leaderboards/(?P<leaderboard>\w+)` route when calling GET method.
 */
export interface WcAnalyticsLeaderboardsPLeaderboardWGetResponse {}

/**
 * Response for `/wc-analytics/leaderboards/allowed` route when calling GET method.
 */
export interface WcAnalyticsLeaderboardsAllowedGetResponse {}

/**
 * Response for `/wc-analytics/orders` route when calling GET method.
 */
export interface WcAnalyticsOrdersGetResponse {}

/**
 * Response for `/wc-analytics/orders` route when calling POST method.
 */
export interface WcAnalyticsOrdersPostResponse {}

/**
 * Response for `/wc-analytics/orders/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsOrdersPIdDGetResponse {}

/**
 * Response for `/wc-analytics/orders/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsOrdersPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/orders/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsOrdersPIdDPostResponse {}

/**
 * Response for `/wc-analytics/orders/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsOrdersPIdDPutResponse {}

/**
 * Response for `/wc-analytics/orders/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsOrdersPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/orders/batch` route when calling PATCH method.
 */
export interface WcAnalyticsOrdersBatchPatchResponse {}

/**
 * Response for `/wc-analytics/orders/batch` route when calling POST method.
 */
export interface WcAnalyticsOrdersBatchPostResponse {}

/**
 * Response for `/wc-analytics/orders/batch` route when calling PUT method.
 */
export interface WcAnalyticsOrdersBatchPutResponse {}

/**
 * Response for `/wc-analytics/products` route when calling GET method.
 */
export interface WcAnalyticsProductsGetResponse {}

/**
 * Response for `/wc-analytics/products` route when calling POST method.
 */
export interface WcAnalyticsProductsPostResponse {}

/**
 * Response for `/wc-analytics/products/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations` route when calling GET method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsGetResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations` route when calling POST method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPostResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsBatchPutResponse {}

/**
 * Response for `/wc-analytics/products/(?P<product_id>[\d]+)/variations/generate` route when calling POST method.
 */
export interface WcAnalyticsProductsPProductIdDVariationsGeneratePostResponse {}

/**
 * Response for `/wc-analytics/products/attributes` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesGetResponse {}

/**
 * Response for `/wc-analytics/products/attributes` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsGetResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<attribute_id>[\d]+)/terms/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsAttributesPAttributeIdDTermsBatchPutResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsAttributesPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsAttributesPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsAttributesPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<slug>[a-z0-9_\-]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesPSlugAZ09GetResponse {}

/**
 * Response for `/wc-analytics/products/attributes/(?P<slug>[a-z0-9_\-]+)/terms` route when calling GET method.
 */
export interface WcAnalyticsProductsAttributesPSlugAZ09TermsGetResponse {}

/**
 * Response for `/wc-analytics/products/attributes/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsAttributesBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/attributes/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsAttributesBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/attributes/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsAttributesBatchPutResponse {}

/**
 * Response for `/wc-analytics/products/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsBatchPutResponse {}

/**
 * Response for `/wc-analytics/products/categories` route when calling GET method.
 */
export interface WcAnalyticsProductsCategoriesGetResponse {}

/**
 * Response for `/wc-analytics/products/categories` route when calling POST method.
 */
export interface WcAnalyticsProductsCategoriesPostResponse {}

/**
 * Response for `/wc-analytics/products/categories/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsCategoriesPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/categories/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsCategoriesPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/categories/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsCategoriesPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/categories/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsCategoriesPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/categories/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsCategoriesPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/categories/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsCategoriesBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/categories/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsCategoriesBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/categories/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsCategoriesBatchPutResponse {}

/**
 * Response for `/wc-analytics/products/low-in-stock` route when calling GET method.
 */
export interface WcAnalyticsProductsLowInStockGetResponse {}

/**
 * Response for `/wc-analytics/products/reviews` route when calling GET method.
 */
export interface WcAnalyticsProductsReviewsGetResponse {}

/**
 * Response for `/wc-analytics/products/reviews` route when calling POST method.
 */
export interface WcAnalyticsProductsReviewsPostResponse {}

/**
 * Response for `/wc-analytics/products/reviews/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsProductsReviewsPIdDGetResponse {}

/**
 * Response for `/wc-analytics/products/reviews/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsProductsReviewsPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/products/reviews/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsProductsReviewsPIdDPostResponse {}

/**
 * Response for `/wc-analytics/products/reviews/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsProductsReviewsPIdDPutResponse {}

/**
 * Response for `/wc-analytics/products/reviews/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsProductsReviewsPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/products/reviews/batch` route when calling PATCH method.
 */
export interface WcAnalyticsProductsReviewsBatchPatchResponse {}

/**
 * Response for `/wc-analytics/products/reviews/batch` route when calling POST method.
 */
export interface WcAnalyticsProductsReviewsBatchPostResponse {}

/**
 * Response for `/wc-analytics/products/reviews/batch` route when calling PUT method.
 */
export interface WcAnalyticsProductsReviewsBatchPutResponse {}

/**
 * Response for `/wc-analytics/reports` route when calling GET method.
 */
export interface WcAnalyticsReportsGetResponse {}

/**
 * Response for `/wc-analytics/reports/(?P<type>[a-z]+)/export` route when calling PATCH method.
 */
export interface WcAnalyticsReportsPTypeAZExportPatchResponse {}

/**
 * Response for `/wc-analytics/reports/(?P<type>[a-z]+)/export` route when calling POST method.
 */
export interface WcAnalyticsReportsPTypeAZExportPostResponse {}

/**
 * Response for `/wc-analytics/reports/(?P<type>[a-z]+)/export` route when calling PUT method.
 */
export interface WcAnalyticsReportsPTypeAZExportPutResponse {}

/**
 * Response for `/wc-analytics/reports/(?P<type>[a-z]+)/export/(?P<export_id>[a-z0-9]+)/status` route when calling GET method.
 */
export interface WcAnalyticsReportsPTypeAZExportPExportIdAZ09StatusGetResponse {}

/**
 * Response for `/wc-analytics/reports/categories` route when calling GET method.
 */
export interface WcAnalyticsReportsCategoriesGetResponse {}

/**
 * Response for `/wc-analytics/reports/coupons` route when calling GET method.
 */
export interface WcAnalyticsReportsCouponsGetResponse {}

/**
 * Response for `/wc-analytics/reports/coupons/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsCouponsStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/customers` route when calling GET method.
 */
export interface WcAnalyticsReportsCustomersGetResponse {}

/**
 * Response for `/wc-analytics/reports/customers/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsCustomersStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/downloads` route when calling GET method.
 */
export interface WcAnalyticsReportsDownloadsGetResponse {}

/**
 * Response for `/wc-analytics/reports/downloads/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsDownloadsStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/import` route when calling PATCH method.
 */
export interface WcAnalyticsReportsImportPatchResponse {}

/**
 * Response for `/wc-analytics/reports/import` route when calling POST method.
 */
export interface WcAnalyticsReportsImportPostResponse {}

/**
 * Response for `/wc-analytics/reports/import` route when calling PUT method.
 */
export interface WcAnalyticsReportsImportPutResponse {}

/**
 * Response for `/wc-analytics/reports/import/cancel` route when calling PATCH method.
 */
export interface WcAnalyticsReportsImportCancelPatchResponse {}

/**
 * Response for `/wc-analytics/reports/import/cancel` route when calling POST method.
 */
export interface WcAnalyticsReportsImportCancelPostResponse {}

/**
 * Response for `/wc-analytics/reports/import/cancel` route when calling PUT method.
 */
export interface WcAnalyticsReportsImportCancelPutResponse {}

/**
 * Response for `/wc-analytics/reports/import/delete` route when calling PATCH method.
 */
export interface WcAnalyticsReportsImportDeletePatchResponse {}

/**
 * Response for `/wc-analytics/reports/import/delete` route when calling POST method.
 */
export interface WcAnalyticsReportsImportDeletePostResponse {}

/**
 * Response for `/wc-analytics/reports/import/delete` route when calling PUT method.
 */
export interface WcAnalyticsReportsImportDeletePutResponse {}

/**
 * Response for `/wc-analytics/reports/import/status` route when calling GET method.
 */
export interface WcAnalyticsReportsImportStatusGetResponse {}

/**
 * Response for `/wc-analytics/reports/import/totals` route when calling GET method.
 */
export interface WcAnalyticsReportsImportTotalsGetResponse {}

/**
 * Response for `/wc-analytics/reports/orders` route when calling GET method.
 */
export interface WcAnalyticsReportsOrdersGetResponse {}

/**
 * Response for `/wc-analytics/reports/orders/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsOrdersStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/performance-indicators` route when calling GET method.
 */
export interface WcAnalyticsReportsPerformanceIndicatorsGetResponse {}

/**
 * Response for `/wc-analytics/reports/performance-indicators/allowed` route when calling GET method.
 */
export interface WcAnalyticsReportsPerformanceIndicatorsAllowedGetResponse {}

/**
 * Response for `/wc-analytics/reports/products` route when calling GET method.
 */
export interface WcAnalyticsReportsProductsGetResponse {}

/**
 * Response for `/wc-analytics/reports/products/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsProductsStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/revenue/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsRevenueStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/stock` route when calling GET method.
 */
export interface WcAnalyticsReportsStockGetResponse {}

/**
 * Response for `/wc-analytics/reports/stock/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsStockStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/taxes` route when calling GET method.
 */
export interface WcAnalyticsReportsTaxesGetResponse {}

/**
 * Response for `/wc-analytics/reports/taxes/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsTaxesStatsGetResponse {}

/**
 * Response for `/wc-analytics/reports/variations` route when calling GET method.
 */
export interface WcAnalyticsReportsVariationsGetResponse {}

/**
 * Response for `/wc-analytics/reports/variations/stats` route when calling GET method.
 */
export interface WcAnalyticsReportsVariationsStatsGetResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)` route when calling GET method.
 */
export interface WcAnalyticsSettingsPGroupIdWGetResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling GET method.
 */
export interface WcAnalyticsSettingsPGroupIdWPIdWGetResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PATCH method.
 */
export interface WcAnalyticsSettingsPGroupIdWPIdWPatchResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling POST method.
 */
export interface WcAnalyticsSettingsPGroupIdWPIdWPostResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/(?P<id>[\w-]+)` route when calling PUT method.
 */
export interface WcAnalyticsSettingsPGroupIdWPIdWPutResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/batch` route when calling PATCH method.
 */
export interface WcAnalyticsSettingsPGroupIdWBatchPatchResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/batch` route when calling POST method.
 */
export interface WcAnalyticsSettingsPGroupIdWBatchPostResponse {}

/**
 * Response for `/wc-analytics/settings/(?P<group_id>[\w-]+)/batch` route when calling PUT method.
 */
export interface WcAnalyticsSettingsPGroupIdWBatchPutResponse {}

/**
 * Response for `/wc-analytics/taxes` route when calling GET method.
 */
export interface WcAnalyticsTaxesGetResponse {}

/**
 * Response for `/wc-analytics/taxes` route when calling POST method.
 */
export interface WcAnalyticsTaxesPostResponse {}

/**
 * Response for `/wc-analytics/taxes/(?P<id>[\d]+)` route when calling GET method.
 */
export interface WcAnalyticsTaxesPIdDGetResponse {}

/**
 * Response for `/wc-analytics/taxes/(?P<id>[\d]+)` route when calling PATCH method.
 */
export interface WcAnalyticsTaxesPIdDPatchResponse {}

/**
 * Response for `/wc-analytics/taxes/(?P<id>[\d]+)` route when calling POST method.
 */
export interface WcAnalyticsTaxesPIdDPostResponse {}

/**
 * Response for `/wc-analytics/taxes/(?P<id>[\d]+)` route when calling PUT method.
 */
export interface WcAnalyticsTaxesPIdDPutResponse {}

/**
 * Response for `/wc-analytics/taxes/(?P<id>[\d]+)` route when calling DELETE method.
 */
export interface WcAnalyticsTaxesPIdDDeleteResponse {}

/**
 * Response for `/wc-analytics/taxes/batch` route when calling PATCH method.
 */
export interface WcAnalyticsTaxesBatchPatchResponse {}

/**
 * Response for `/wc-analytics/taxes/batch` route when calling POST method.
 */
export interface WcAnalyticsTaxesBatchPostResponse {}

/**
 * Response for `/wc-analytics/taxes/batch` route when calling PUT method.
 */
export interface WcAnalyticsTaxesBatchPutResponse {}

/**
 * Response for `/wc-analytics/variations` route when calling GET method.
 */
export interface WcAnalyticsVariationsGetResponse {}
