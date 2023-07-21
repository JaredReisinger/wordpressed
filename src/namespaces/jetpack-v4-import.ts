export interface JetpackV4ImportGetArgs {
}

export interface JetpackV4ImportBlocksPostArgsContent {
}


export interface JetpackV4ImportBlocksPostArgsTitle {
}


export interface JetpackV4ImportBlocksPostArgs {
  /** The content for the post. */
  content?: JetpackV4ImportBlocksPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportBlocksPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCategoriesPostArgsMeta {
}


export interface JetpackV4ImportCategoriesPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportCategoriesPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** The parent category slug. */
  parent?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCommentsPostArgsContent {
}


export interface JetpackV4ImportCommentsPostArgsMeta {
}


export interface JetpackV4ImportCommentsPostArgs {
  /** The ID of the user object, if author was a user. */
  author?: number;
  /** Email address for the comment author. */
  author_email?: string;
  /** IP address for the comment author. */
  author_ip?: string;
  /** Display name for the comment author. */
  author_name?: string;
  /** URL for the comment author. */
  author_url?: string;
  /** User agent for the comment author. */
  author_user_agent?: string;
  /** The content for the comment. */
  content?: JetpackV4ImportCommentsPostArgsContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportCommentsPostArgsMeta;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportCustomCssPostArgsTitle {
}


export interface JetpackV4ImportCustomCssPostArgs {
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportCustomCssPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportEndPostArgs {
}

export interface JetpackV4ImportGlobalStylesPostArgsContent {
}


export interface JetpackV4ImportGlobalStylesPostArgsTitle {
}


export interface JetpackV4ImportGlobalStylesPostArgs {
  /** The content for the post. */
  content?: JetpackV4ImportGlobalStylesPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The name of the theme. */
  theme: string;
  /** The title for the post. */
  title?: JetpackV4ImportGlobalStylesPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
}

export interface JetpackV4ImportMediaPostArgsCaption {
}


export interface JetpackV4ImportMediaPostArgsDescription {
}


export interface JetpackV4ImportMediaPostArgsMeta {
}


export interface JetpackV4ImportMediaPostArgsTitle {
}


export interface JetpackV4ImportMediaPostArgs {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The ID for the author of the post. */
  author?: number;
  /** The attachment caption. */
  caption?: JetpackV4ImportMediaPostArgsCaption;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The attachment description. */
  description?: JetpackV4ImportMediaPostArgsDescription;
  /** Meta fields. */
  meta?: JetpackV4ImportMediaPostArgsMeta;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The ID for the associated post of the attachment. */
  post?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportMediaPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
}

export interface JetpackV4ImportMediaPIdDPostPutPatchArgsCaption {
}


export interface JetpackV4ImportMediaPIdDPostPutPatchArgsDescription {
}


export interface JetpackV4ImportMediaPIdDPostPutPatchArgsMeta {
}


export interface JetpackV4ImportMediaPIdDPostPutPatchArgsTitle {
}


export interface JetpackV4ImportMediaPIdDPostPutPatchArgs {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The ID for the author of the post. */
  author?: number;
  /** The attachment caption. */
  caption?: JetpackV4ImportMediaPIdDPostPutPatchArgsCaption;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The attachment description. */
  description?: JetpackV4ImportMediaPIdDPostPutPatchArgsDescription;
  /** Unique identifier for the attachment. */
  id?: number;
  /** Meta fields. */
  meta?: JetpackV4ImportMediaPIdDPostPutPatchArgsMeta;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The ID for the associated post of the attachment. */
  post?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportMediaPIdDPostPutPatchArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id?: number;
}

export interface JetpackV4ImportMediaPIdDPostProcessPostArgs {
  action: 'create-image-subsizes';
  /** Unique identifier for the attachment. */
  id?: number;
}

export interface JetpackV4ImportMenuItemsPostArgsMeta {
}


export interface JetpackV4ImportMenuItemsPostArgs {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The parent menu slug. */
  menus?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportMenuItemsPostArgsMeta;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The ID for the parent of the object. */
  parent?: number;
  /** A named status for the object. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
}

export interface JetpackV4ImportMenusPostArgsMeta {
}


export interface JetpackV4ImportMenusPostArgs {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
  /** HTML description of the term. */
  description?: string;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Meta fields. */
  meta?: JetpackV4ImportMenusPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportNavigationPostArgsContent {
}


export interface JetpackV4ImportNavigationPostArgsTitle {
}


export interface JetpackV4ImportNavigationPostArgs {
  /** The content for the post. */
  content?: JetpackV4ImportNavigationPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportNavigationPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportPagesPostArgsContent {
}


export interface JetpackV4ImportPagesPostArgsExcerpt {
}


export interface JetpackV4ImportPagesPostArgsMeta {
}


export interface JetpackV4ImportPagesPostArgsTitle {
}


export interface JetpackV4ImportPagesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: JetpackV4ImportPagesPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: JetpackV4ImportPagesPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: JetpackV4ImportPagesPostArgsMeta;
  /** The ID for the parent of the post. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportPagesPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportPostsPostArgsContent {
}


export interface JetpackV4ImportPostsPostArgsExcerpt {
}


export interface JetpackV4ImportPostsPostArgsMeta {
}


export interface JetpackV4ImportPostsPostArgsTitle {
}


export interface JetpackV4ImportPostsPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: JetpackV4ImportPostsPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: JetpackV4ImportPostsPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The format for the post. */
  format?: 'standard' | 'aside' | 'chat' | 'gallery' | 'link' | 'image' | 'quote' | 'status' | 'video' | 'audio';
  /** Meta fields. */
  meta?: JetpackV4ImportPostsPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: JetpackV4ImportPostsPostArgsTitle;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportStartGetArgs {
}

export interface JetpackV4ImportTagsPostArgsMeta {
}


export interface JetpackV4ImportTagsPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: JetpackV4ImportTagsPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportTemplatePartsPostArgs {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Status of template. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}

export interface JetpackV4ImportTemplatesPostArgs {
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Status of template. */
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'wc-pending' | 'wc-processing' | 'wc-on-hold' | 'wc-completed' | 'wc-cancelled' | 'wc-refunded' | 'wc-failed' | 'wc-checkout-draft' | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
  /** Jetpack Import unique identifier for the term. */
  unified_importer_id: number;
}


export interface JetpackV4ImportDeleteRoutes {
}

export interface JetpackV4ImportGetRoutes {
  '/jetpack/v4/import': JetpackV4ImportGetArgs;
  '/jetpack/v4/import/start': JetpackV4ImportStartGetArgs;
}

export interface JetpackV4ImportPatchRoutes {
  '/jetpack/v4/import/media/(?P<id>[\\d]+)': JetpackV4ImportMediaPIdDPostPutPatchArgs;
}

export interface JetpackV4ImportPostRoutes {
  '/jetpack/v4/import/blocks': JetpackV4ImportBlocksPostArgs;
  '/jetpack/v4/import/categories': JetpackV4ImportCategoriesPostArgs;
  '/jetpack/v4/import/comments': JetpackV4ImportCommentsPostArgs;
  '/jetpack/v4/import/custom-css': JetpackV4ImportCustomCssPostArgs;
  '/jetpack/v4/import/end': JetpackV4ImportEndPostArgs;
  '/jetpack/v4/import/global-styles': JetpackV4ImportGlobalStylesPostArgs;
  '/jetpack/v4/import/media': JetpackV4ImportMediaPostArgs;
  '/jetpack/v4/import/media/(?P<id>[\\d]+)': JetpackV4ImportMediaPIdDPostPutPatchArgs;
  '/jetpack/v4/import/media/(?P<id>[\\d]+)/post-process': JetpackV4ImportMediaPIdDPostProcessPostArgs;
  '/jetpack/v4/import/menu-items': JetpackV4ImportMenuItemsPostArgs;
  '/jetpack/v4/import/menus': JetpackV4ImportMenusPostArgs;
  '/jetpack/v4/import/navigation': JetpackV4ImportNavigationPostArgs;
  '/jetpack/v4/import/pages': JetpackV4ImportPagesPostArgs;
  '/jetpack/v4/import/posts': JetpackV4ImportPostsPostArgs;
  '/jetpack/v4/import/tags': JetpackV4ImportTagsPostArgs;
  '/jetpack/v4/import/template-parts': JetpackV4ImportTemplatePartsPostArgs;
  '/jetpack/v4/import/templates': JetpackV4ImportTemplatesPostArgs;
}

export interface JetpackV4ImportPutRoutes {
  '/jetpack/v4/import/media/(?P<id>[\\d]+)': JetpackV4ImportMediaPIdDPostPutPatchArgs;
}
