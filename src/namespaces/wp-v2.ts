export interface WpV2GetArgs {}

export interface WpV2BlockDirectorySearchGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to blocks matching the search term. */
  term: string;
}

export interface WpV2BlockPatternsCategoriesGetArgs {}

export interface WpV2BlockPatternsPatternsGetArgs {}

export interface WpV2BlockRendererPNameAZ09AZ09GetPostArgsAttributes {}

export interface WpV2BlockRendererPNameAZ09AZ09GetPostArgs {
  /** Attributes for the block. */
  attributes?: WpV2BlockRendererPNameAZ09AZ09GetPostArgsAttributes;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'edit';
  /** Unique registered name for the block. */
  name?: string;
  /** ID of the post context. */
  post_id?: number;
}

export interface WpV2BlockTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Block namespace. */
  namespace?: string;
}

export interface WpV2BlockTypesPNamespaceAZaZ09GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Block namespace. */
  namespace?: string;
}

export interface WpV2BlockTypesPNamespaceAZaZ09PNameAZaZ09GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Block name. */
  name?: string;
  /** Block namespace. */
  namespace?: string;
}

export interface WpV2BlocksGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2BlocksPostArgsContent {}

export interface WpV2BlocksPostArgsTitle {}

export interface WpV2BlocksPostArgs {
  /** The content for the post. */
  content?: WpV2BlocksPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2BlocksPostArgsTitle;
}

export interface WpV2BlocksPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2BlocksPIdDPostPutPatchArgsContent {}

export interface WpV2BlocksPIdDPostPutPatchArgsTitle {}

export interface WpV2BlocksPIdDPostPutPatchArgs {
  /** The content for the post. */
  content?: WpV2BlocksPIdDPostPutPatchArgsContent;
  /** Unique identifier for the post. */
  id?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2BlocksPIdDPostPutPatchArgsTitle;
}

export interface WpV2BlocksPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2BlocksPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2BlocksPIdDAutosavesPostArgsContent {}

export interface WpV2BlocksPIdDAutosavesPostArgsTitle {}

export interface WpV2BlocksPIdDAutosavesPostArgs {
  /** The content for the post. */
  content?: WpV2BlocksPIdDAutosavesPostArgsContent;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2BlocksPIdDAutosavesPostArgsTitle;
}

export interface WpV2BlocksPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2BlocksPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2BlocksPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2BlocksPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2CategoriesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to terms assigned to a specific parent. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2CategoriesPostArgsMeta {}

export interface WpV2CategoriesPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: WpV2CategoriesPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** The parent term ID. */
  parent?: number;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2CategoriesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2CategoriesPIdDPostPutPatchArgsMeta {}

export interface WpV2CategoriesPIdDPostPutPatchArgs {
  /** HTML description of the term. */
  description?: string;
  /** Unique identifier for the term. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2CategoriesPIdDPostPutPatchArgsMeta;
  /** HTML title for the term. */
  name?: string;
  /** The parent term ID. */
  parent?: number;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2CategoriesPIdDDeleteArgs {
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2CommentsGetArgs {
  /** Limit response to comments published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to comments assigned to specific user IDs. Requires authorization. */
  author?: number[];
  /** Limit result set to that from a specific author email. Requires authorization. */
  author_email?: string;
  /** Ensure result set excludes comments assigned to specific user IDs. Requires authorization. */
  author_exclude?: number[];
  /** Limit response to comments published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by comment attribute. */
  orderby?: 'date' | 'date_gmt' | 'id' | 'include' | 'post' | 'parent' | 'type';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to comments of specific parent IDs. */
  parent?: number[];
  /** Ensure result set excludes specific parent IDs. */
  parent_exclude?: number[];
  /** The password for the post if it is password protected. */
  password?: string;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to comments assigned to specific post IDs. */
  post?: number[];
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to comments assigned a specific status. Requires authorization. */
  status?: string;
  /** Limit result set to comments assigned a specific type. Requires authorization. */
  type?: string;
}

export interface WpV2CommentsPostArgsContent {}

export interface WpV2CommentsPostArgsMeta {}

export interface WpV2CommentsPostArgs {
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
  content?: WpV2CommentsPostArgsContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** Meta fields. */
  meta?: WpV2CommentsPostArgsMeta;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
}

export interface WpV2CommentsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the comment. */
  id?: number;
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
}

export interface WpV2CommentsPIdDPostPutPatchArgsContent {}

export interface WpV2CommentsPIdDPostPutPatchArgsMeta {}

export interface WpV2CommentsPIdDPostPutPatchArgs {
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
  content?: WpV2CommentsPIdDPostPutPatchArgsContent;
  /** The date the comment was published, in the site's timezone. */
  date?: string;
  /** The date the comment was published, as GMT. */
  date_gmt?: string;
  /** Unique identifier for the comment. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2CommentsPIdDPostPutPatchArgsMeta;
  /** The ID for the parent of the comment. */
  parent?: number;
  /** The ID of the associated post object. */
  post?: number;
  /** State of the comment. */
  status?: string;
}

export interface WpV2CommentsPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the comment. */
  id?: number;
  /** The password for the parent post of the comment (if the post is password protected). */
  password?: string;
}

export interface WpV2FeedbackGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2FeedbackPostArgsContent {}

export interface WpV2FeedbackPostArgsTitle {}

export interface WpV2FeedbackPostArgs {
  /** The content for the post. */
  content?: WpV2FeedbackPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPostArgsTitle;
}

export interface WpV2FeedbackPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2FeedbackPIdDPostPutPatchArgsContent {}

export interface WpV2FeedbackPIdDPostPutPatchArgsTitle {}

export interface WpV2FeedbackPIdDPostPutPatchArgs {
  /** The content for the post. */
  content?: WpV2FeedbackPIdDPostPutPatchArgsContent;
  /** Unique identifier for the post. */
  id?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPIdDPostPutPatchArgsTitle;
}

export interface WpV2FeedbackPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2FeedbackPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2FeedbackPIdDAutosavesPostArgsContent {}

export interface WpV2FeedbackPIdDAutosavesPostArgsTitle {}

export interface WpV2FeedbackPIdDAutosavesPostArgs {
  /** The content for the post. */
  content?: WpV2FeedbackPIdDAutosavesPostArgsContent;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2FeedbackPIdDAutosavesPostArgsTitle;
}

export interface WpV2FeedbackPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2GlobalStylesPIdWGetArgs {
  /** The id of a template */
  id?: string;
}

export interface WpV2GlobalStylesPIdWPostPutPatchArgs {}

export interface WpV2GlobalStylesThemesPStylesheetSWVariationsGetArgs {
  /** The theme identifier */
  stylesheet?: string;
}

export interface WpV2GlobalStylesThemesPStylesheetGetArgs {
  /** The theme identifier */
  stylesheet?: string;
}

export interface WpV2JpPayOrderGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2JpPayOrderPostArgsExcerpt {}

export interface WpV2JpPayOrderPostArgsMeta {}

export interface WpV2JpPayOrderPostArgs {
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPostArgsExcerpt;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2JpPayOrderPIdDPostPutPatchArgsExcerpt {}

export interface WpV2JpPayOrderPIdDPostPutPatchArgsMeta {}

export interface WpV2JpPayOrderPIdDPostPutPatchArgs {
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPIdDPostPutPatchArgsExcerpt;
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPIdDPostPutPatchArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2JpPayOrderPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2JpPayOrderPIdDAutosavesPostArgsExcerpt {}

export interface WpV2JpPayOrderPIdDAutosavesPostArgsMeta {}

export interface WpV2JpPayOrderPIdDAutosavesPostArgs {
  /** The excerpt for the post. */
  excerpt?: WpV2JpPayOrderPIdDAutosavesPostArgsExcerpt;
  /** Meta fields. */
  meta?: WpV2JpPayOrderPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
}

export interface WpV2JpPayOrderPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2JpPayProductGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2JpPayProductPostArgsContent {}

export interface WpV2JpPayProductPostArgsMeta {}

export interface WpV2JpPayProductPostArgsTitle {}

export interface WpV2JpPayProductPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2JpPayProductPostArgsContent;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPostArgsTitle;
}

export interface WpV2JpPayProductPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2JpPayProductPIdDPostPutPatchArgsContent {}

export interface WpV2JpPayProductPIdDPostPutPatchArgsMeta {}

export interface WpV2JpPayProductPIdDPostPutPatchArgsTitle {}

export interface WpV2JpPayProductPIdDPostPutPatchArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2JpPayProductPIdDPostPutPatchArgsContent;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPIdDPostPutPatchArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPIdDPostPutPatchArgsTitle;
}

export interface WpV2JpPayProductPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2JpPayProductPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2JpPayProductPIdDAutosavesPostArgsContent {}

export interface WpV2JpPayProductPIdDAutosavesPostArgsMeta {}

export interface WpV2JpPayProductPIdDAutosavesPostArgsTitle {}

export interface WpV2JpPayProductPIdDAutosavesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2JpPayProductPIdDAutosavesPostArgsContent;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2JpPayProductPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2JpPayProductPIdDAutosavesPostArgsTitle;
}

export interface WpV2JpPayProductPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2KadenceLottieGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2KadenceLottiePostArgsContent {}

export interface WpV2KadenceLottiePostArgsTitle {}

export interface WpV2KadenceLottiePostArgs {
  /** The content for the post. */
  content?: WpV2KadenceLottiePostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePostArgsTitle;
}

export interface WpV2KadenceLottiePIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2KadenceLottiePIdDPostPutPatchArgsContent {}

export interface WpV2KadenceLottiePIdDPostPutPatchArgsTitle {}

export interface WpV2KadenceLottiePIdDPostPutPatchArgs {
  /** The content for the post. */
  content?: WpV2KadenceLottiePIdDPostPutPatchArgsContent;
  /** Unique identifier for the post. */
  id?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePIdDPostPutPatchArgsTitle;
}

export interface WpV2KadenceLottiePIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2KadenceLottiePIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2KadenceLottiePIdDAutosavesPostArgsContent {}

export interface WpV2KadenceLottiePIdDAutosavesPostArgsTitle {}

export interface WpV2KadenceLottiePIdDAutosavesPostArgs {
  /** The content for the post. */
  content?: WpV2KadenceLottiePIdDAutosavesPostArgsContent;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2KadenceLottiePIdDAutosavesPostArgsTitle;
}

export interface WpV2KadenceLottiePParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2KadenceLottiePParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2KadenceLottiePParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2KadenceLottiePParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2MediaGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit result set to attachments of a particular media type. */
  media_type?: 'image' | 'video' | 'text' | 'application' | 'audio' | 'font';
  /** Limit result set to attachments of a particular MIME type. */
  mime_type?: string;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2MediaPostArgsCaption {}

export interface WpV2MediaPostArgsDescription {}

export interface WpV2MediaPostArgsMeta {}

export interface WpV2MediaPostArgsTitle {}

export interface WpV2MediaPostArgs {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The ID for the author of the post. */
  author?: number;
  /** The attachment caption. */
  caption?: WpV2MediaPostArgsCaption;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The attachment description. */
  description?: WpV2MediaPostArgsDescription;
  /** Meta fields. */
  meta?: WpV2MediaPostArgsMeta;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The ID for the associated post of the attachment. */
  post?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2MediaPostArgsTitle;
}

export interface WpV2MediaPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2MediaPIdDPostPutPatchArgsCaption {}

export interface WpV2MediaPIdDPostPutPatchArgsDescription {}

export interface WpV2MediaPIdDPostPutPatchArgsMeta {}

export interface WpV2MediaPIdDPostPutPatchArgsTitle {}

export interface WpV2MediaPIdDPostPutPatchArgs {
  /** Alternative text to display when attachment is not displayed. */
  alt_text?: string;
  /** The ID for the author of the post. */
  author?: number;
  /** The attachment caption. */
  caption?: WpV2MediaPIdDPostPutPatchArgsCaption;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The attachment description. */
  description?: WpV2MediaPIdDPostPutPatchArgsDescription;
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2MediaPIdDPostPutPatchArgsMeta;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** The ID for the associated post of the attachment. */
  post?: number;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2MediaPIdDPostPutPatchArgsTitle;
}

export interface WpV2MediaPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2MediaPIdDEditPostArgsModifiers {}

export interface WpV2MediaPIdDEditPostArgs {
  /** As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead. */
  height?: number;
  /** Array of image edits. */
  modifiers?: WpV2MediaPIdDEditPostArgsModifiers[];
  /** The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead. */
  rotation?: number;
  /** URL to the edited image file. */
  src: string;
  /** As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead. */
  width?: number;
  /** As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  x?: number;
  /** As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead. */
  y?: number;
}

export interface WpV2MediaPIdDPostProcessPostArgs {
  action: 'create-image-subsizes';
  /** Unique identifier for the attachment. */
  id?: number;
}

export interface WpV2MenuItemsGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
}

export interface WpV2MenuItemsPostArgsMeta {}

export interface WpV2MenuItemsPostArgs {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPostArgsMeta;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The ID for the parent of the object. */
  parent?: number;
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
}

export interface WpV2MenuItemsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2MenuItemsPIdDPostPutPatchArgsMeta {}

export interface WpV2MenuItemsPIdDPostPutPatchArgs {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** Unique identifier for the post. */
  id?: number;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPIdDPostPutPatchArgsMeta;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The ID for the parent of the object. */
  parent?: number;
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
}

export interface WpV2MenuItemsPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2MenuItemsPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2MenuItemsPIdDAutosavesPostArgsMeta {}

export interface WpV2MenuItemsPIdDAutosavesPostArgs {
  /** Text for the title attribute of the link element for this menu item. */
  attr_title?: string;
  /** Class names for the link element of this menu item. */
  classes?: number[];
  /** The description of this menu item. */
  description?: string;
  /** The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0. */
  menu_order?: number;
  /** The terms assigned to the object in the nav_menu taxonomy. */
  menus?: number;
  /** Meta fields. */
  meta?: WpV2MenuItemsPIdDAutosavesPostArgsMeta;
  /** The type of object originally represented, such as "category", "post", or "attachment". */
  object?: string;
  /** The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories. */
  object_id?: number;
  /** The ID for the parent of the object. */
  parent?: number;
  /** A named status for the object. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The target attribute of the link element for this menu item. */
  target?: '_blank' | '';
  /** The family of objects originally represented, such as "post_type" or "taxonomy". */
  type?: 'taxonomy' | 'post_type' | 'post_type_archive' | 'custom';
  /** The URL to which this menu item points. */
  url?: string;
  /** The XFN relationship expressed in the link of this menu item. */
  xfn?: number[];
}

export interface WpV2MenuItemsPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2MenuLocationsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2MenuLocationsPLocationWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** An alphanumeric identifier for the menu location. */
  location?: string;
}

export interface WpV2MenusGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2MenusPostArgsMeta {}

export interface WpV2MenusPostArgs {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
  /** HTML description of the term. */
  description?: string;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Meta fields. */
  meta?: WpV2MenusPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2MenusPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2MenusPIdDPostPutPatchArgsMeta {}

export interface WpV2MenusPIdDPostPutPatchArgs {
  /** Whether to automatically add top level pages to this menu. */
  auto_add?: boolean;
  /** HTML description of the term. */
  description?: string;
  /** Unique identifier for the term. */
  id?: number;
  /** The locations assigned to the menu. */
  locations?: number[];
  /** Meta fields. */
  meta?: WpV2MenusPIdDPostPutPatchArgsMeta;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2MenusPIdDDeleteArgs {
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2NavigationGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2NavigationPostArgsContent {}

export interface WpV2NavigationPostArgsTitle {}

export interface WpV2NavigationPostArgs {
  /** The content for the post. */
  content?: WpV2NavigationPostArgsContent;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2NavigationPostArgsTitle;
}

export interface WpV2NavigationPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2NavigationPIdDPostPutPatchArgsContent {}

export interface WpV2NavigationPIdDPostPutPatchArgsTitle {}

export interface WpV2NavigationPIdDPostPutPatchArgs {
  /** The content for the post. */
  content?: WpV2NavigationPIdDPostPutPatchArgsContent;
  /** Unique identifier for the post. */
  id?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2NavigationPIdDPostPutPatchArgsTitle;
}

export interface WpV2NavigationPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2NavigationPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2NavigationPIdDAutosavesPostArgsContent {}

export interface WpV2NavigationPIdDAutosavesPostArgsTitle {}

export interface WpV2NavigationPIdDAutosavesPostArgs {
  /** The content for the post. */
  content?: WpV2NavigationPIdDAutosavesPostArgsContent;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2NavigationPIdDAutosavesPostArgsTitle;
}

export interface WpV2NavigationPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2NavigationPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2NavigationPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2NavigationPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2PagesGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit result set to posts with a specific menu_order value. */
  menu_order?: number;
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'menu_order'
    | 'rand'
    | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to items with particular parent IDs. */
  parent?: number[];
  /** Limit result set to all items except those of a particular parent ID. */
  parent_exclude?: number[];
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2PagesPostArgsContent {}

export interface WpV2PagesPostArgsExcerpt {}

export interface WpV2PagesPostArgsMeta {}

export interface WpV2PagesPostArgsTitle {}

export interface WpV2PagesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PagesPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPostArgsMeta;
  /** The ID for the parent of the post. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PagesPostArgsTitle;
}

export interface WpV2PagesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2PagesPIdDPostPutPatchArgsContent {}

export interface WpV2PagesPIdDPostPutPatchArgsExcerpt {}

export interface WpV2PagesPIdDPostPutPatchArgsMeta {}

export interface WpV2PagesPIdDPostPutPatchArgsTitle {}

export interface WpV2PagesPIdDPostPutPatchArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PagesPIdDPostPutPatchArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPIdDPostPutPatchArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Unique identifier for the post. */
  id?: number;
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPIdDPostPutPatchArgsMeta;
  /** The ID for the parent of the post. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PagesPIdDPostPutPatchArgsTitle;
}

export interface WpV2PagesPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2PagesPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2PagesPIdDAutosavesPostArgsContent {}

export interface WpV2PagesPIdDAutosavesPostArgsExcerpt {}

export interface WpV2PagesPIdDAutosavesPostArgsMeta {}

export interface WpV2PagesPIdDAutosavesPostArgsTitle {}

export interface WpV2PagesPIdDAutosavesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PagesPIdDAutosavesPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PagesPIdDAutosavesPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The order of the post in relation to other posts. */
  menu_order?: number;
  /** Meta fields. */
  meta?: WpV2PagesPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the post. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PagesPIdDAutosavesPostArgsTitle;
}

export interface WpV2PagesPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2PagesPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2PagesPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2PagesPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2PatternDirectoryPatternsGetArgsSlug {}

export interface WpV2PatternDirectoryPatternsGetArgs {
  /** Limit results to those matching a category ID. */
  category?: number;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit results to those matching a keyword ID. */
  keyword?: number;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'favorite_count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to those matching a pattern (slug). */
  slug?: WpV2PatternDirectoryPatternsGetArgsSlug[];
}

export interface WpV2PluginsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit results to those matching a string. */
  search?: string;
  /** Limits results to plugins with the given status. */
  status?: number[];
}

export interface WpV2PluginsPostArgs {
  /** WordPress.org plugin directory slug. */
  slug: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
}

export interface WpV2PluginsPPluginGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
}

export interface WpV2PluginsPPluginPostPutPatchArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
  /** The plugin activation status. */
  status?: 'inactive' | 'active';
}

export interface WpV2PluginsPPluginDeleteArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  plugin?: string;
}

export interface WpV2PostsGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set to items that are sticky. */
  sticky?: boolean;
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
}

export interface WpV2PostsPostArgsContent {}

export interface WpV2PostsPostArgsExcerpt {}

export interface WpV2PostsPostArgsMeta {}

export interface WpV2PostsPostArgsTitle {}

export interface WpV2PostsPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PostsPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: WpV2PostsPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PostsPostArgsTitle;
}

export interface WpV2PostsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2PostsPIdDPostPutPatchArgsContent {}

export interface WpV2PostsPIdDPostPutPatchArgsExcerpt {}

export interface WpV2PostsPIdDPostPutPatchArgsMeta {}

export interface WpV2PostsPIdDPostPutPatchArgsTitle {}

export interface WpV2PostsPIdDPostPutPatchArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PostsPIdDPostPutPatchArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPIdDPostPutPatchArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2PostsPIdDPostPutPatchArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PostsPIdDPostPutPatchArgsTitle;
}

export interface WpV2PostsPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2PostsPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2PostsPIdDAutosavesPostArgsContent {}

export interface WpV2PostsPIdDAutosavesPostArgsExcerpt {}

export interface WpV2PostsPIdDAutosavesPostArgsMeta {}

export interface WpV2PostsPIdDAutosavesPostArgsTitle {}

export interface WpV2PostsPIdDAutosavesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The terms assigned to the post in the category taxonomy. */
  categories?: number[];
  /** Whether or not comments are open on the post. */
  comment_status?: 'open' | 'closed';
  /** The content for the post. */
  content?: WpV2PostsPIdDAutosavesPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2PostsPIdDAutosavesPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** The format for the post. */
  format?:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio';
  /** Meta fields. */
  meta?: WpV2PostsPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** Whether or not the post can be pinged. */
  ping_status?: 'open' | 'closed';
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Whether or not the post should be treated as sticky. */
  sticky?: boolean;
  /** The terms assigned to the post in the post_tag taxonomy. */
  tags?: number[];
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2PostsPIdDAutosavesPostArgsTitle;
}

export interface WpV2PostsPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2PostsPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2PostsPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2PostsPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2ProductGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title'
    | 'rand'
    | 'menu_order'
    | 'popularity'
    | 'rating';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
  /** Limit result set based on relationship between multiple taxonomies. */
  tax_relation?: 'AND' | 'OR';
}

export interface WpV2ProductPostArgsContent {}

export interface WpV2ProductPostArgsExcerpt {}

export interface WpV2ProductPostArgsMeta {}

export interface WpV2ProductPostArgsTitle {}

export interface WpV2ProductPostArgs {
  /** The content for the post. */
  content?: WpV2ProductPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2ProductPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2ProductPostArgsTitle;
}

export interface WpV2ProductCatGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Limit result set to terms assigned to a specific parent. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2ProductCatPostArgsMeta {}

export interface WpV2ProductCatPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: WpV2ProductCatPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** The parent term ID. */
  parent?: number;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2ProductCatPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2ProductCatPIdDPostPutPatchArgsMeta {}

export interface WpV2ProductCatPIdDPostPutPatchArgs {
  /** HTML description of the term. */
  description?: string;
  /** Unique identifier for the term. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2ProductCatPIdDPostPutPatchArgsMeta;
  /** HTML title for the term. */
  name?: string;
  /** The parent term ID. */
  parent?: number;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2ProductCatPIdDDeleteArgs {
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2ProductTagGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2ProductTagPostArgsMeta {}

export interface WpV2ProductTagPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: WpV2ProductTagPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2ProductTagPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2ProductTagPIdDPostPutPatchArgsMeta {}

export interface WpV2ProductTagPIdDPostPutPatchArgs {
  /** HTML description of the term. */
  description?: string;
  /** Unique identifier for the term. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2ProductTagPIdDPostPutPatchArgsMeta;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2ProductTagPIdDDeleteArgs {
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2ProductPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2ProductPIdDPostPutPatchArgsContent {}

export interface WpV2ProductPIdDPostPutPatchArgsExcerpt {}

export interface WpV2ProductPIdDPostPutPatchArgsMeta {}

export interface WpV2ProductPIdDPostPutPatchArgsTitle {}

export interface WpV2ProductPIdDPostPutPatchArgs {
  /** The content for the post. */
  content?: WpV2ProductPIdDPostPutPatchArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPIdDPostPutPatchArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2ProductPIdDPostPutPatchArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2ProductPIdDPostPutPatchArgsTitle;
}

export interface WpV2ProductPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2ProductPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2ProductPIdDAutosavesPostArgsContent {}

export interface WpV2ProductPIdDAutosavesPostArgsExcerpt {}

export interface WpV2ProductPIdDAutosavesPostArgsMeta {}

export interface WpV2ProductPIdDAutosavesPostArgsTitle {}

export interface WpV2ProductPIdDAutosavesPostArgs {
  /** The content for the post. */
  content?: WpV2ProductPIdDAutosavesPostArgsContent;
  /** The excerpt for the post. */
  excerpt?: WpV2ProductPIdDAutosavesPostArgsExcerpt;
  /** The ID of the featured media for the post. */
  featured_media?: number;
  /** Meta fields. */
  meta?: WpV2ProductPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** The terms assigned to the post in the product_cat taxonomy. */
  product_cat?: number[];
  /** The terms assigned to the post in the product_tag taxonomy. */
  product_tag?: number[];
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2ProductPIdDAutosavesPostArgsTitle;
}

export interface WpV2ProductPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2SearchGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit results to items of one or more object subtypes. */
  subtype?: number[];
  /** Limit results to items of an object type. */
  type?: 'post' | 'term' | 'post-format';
}

export interface WpV2SettingsGetArgs {}

export interface WpV2SettingsPostPutPatchArgsPickupLocationSettings {}

export interface WpV2SettingsPostPutPatchArgsPickupLocations {}

export interface WpV2SettingsPostPutPatchArgs {
  /** A date format for all date strings. */
  date_format?: string;
  /** Default post category. */
  default_category?: number;
  /** Allow people to submit comments on new posts. */
  default_comment_status?: 'open' | 'closed';
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  default_ping_status?: 'open' | 'closed';
  /** Default post format. */
  default_post_format?: string;
  /** Site tagline. */
  description?: string;
  /** This address is used for admin purposes, like new user notification. */
  email?: string;
  /** ConvertKit API Key */
  kadence_blocks_activecampaign_api_base?: string;
  /** ConvertKit API Key */
  kadence_blocks_activecampaign_api_key?: string;
  /** Config Kadence Blocks Cloud */
  kadence_blocks_cloud?: string;
  /** Config Kadence Blocks Color Palette */
  kadence_blocks_colors?: string;
  /** Config Kadence Block Defaults */
  kadence_blocks_config_blocks?: string;
  /** ConvertKit API Key */
  kadence_blocks_convertkit_api?: string;
  /** Config Kadence Blocks Global Settings */
  kadence_blocks_global?: string;
  /** Google Maps API Key */
  kadence_blocks_google_maps_api?: string;
  /** MailerLite API Key */
  kadence_blocks_mailerlite_api?: string;
  /** Google reCaptcha Language */
  kadence_blocks_recaptcha_language?: string;
  /** Google reCaptcha Secret Key */
  kadence_blocks_recaptcha_secret_key?: string;
  /** Google reCaptcha Site Key */
  kadence_blocks_recaptcha_site_key?: string;
  /** Config Kadence Block Settings View */
  kadence_blocks_settings_blocks?: string;
  /** Subscribe to Wireframe library */
  kadence_blocks_wire_subscribe?: boolean;
  /** WordPress locale code. */
  language?: string;
  /** The ID of the page that should display the latest posts */
  page_for_posts?: number;
  /** The ID of the page that should be displayed on the front page */
  page_on_front?: number;
  /** WooCommerce Local Pickup Method Settings */
  pickup_location_settings?: WpV2SettingsPostPutPatchArgsPickupLocationSettings;
  /** WooCommerce Local Pickup Locations */
  pickup_locations?: WpV2SettingsPostPutPatchArgsPickupLocations[];
  /** Blog pages show at most. */
  posts_per_page?: number;
  /** What to show on the front page */
  show_on_front?: string;
  /** Site icon. */
  site_icon?: number;
  /** Site logo. */
  site_logo?: number;
  /** A day number of the week that the week should start on. */
  start_of_week?: number;
  /** A time format for all time strings. */
  time_format?: string;
  /** A city in the same timezone as you. */
  timezone?: string;
  /** Site title. */
  title?: string;
  /** Site URL. */
  url?: string;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  use_smilies?: boolean;
}

export interface WpV2SidebarsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2SidebarsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The id of a registered sidebar */
  id?: string;
}

export interface WpV2SidebarsPIdWPostPutPatchArgsWidgets {}

export interface WpV2SidebarsPIdWPostPutPatchArgs {
  /** Nested widgets. */
  widgets?: WpV2SidebarsPIdWPostPutPatchArgsWidgets[];
}

export interface WpV2SpectraPopupGetArgs {
  /** Limit response to posts published after a given ISO8601 compliant date. */
  after?: string;
  /** Limit result set to posts assigned to specific authors. */
  author?: number[];
  /** Ensure result set excludes posts assigned to specific authors. */
  author_exclude?: number[];
  /** Limit response to posts published before a given ISO8601 compliant date. */
  before?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Limit response to posts modified after a given ISO8601 compliant date. */
  modified_after?: string;
  /** Limit response to posts modified before a given ISO8601 compliant date. */
  modified_before?: string;
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by post attribute. */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Array of column names to be searched. */
  search_columns?: number[];
  /** Limit result set to posts with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to posts assigned one or more statuses. */
  status?: number[];
}

export interface WpV2SpectraPopupPostArgsContent {}

export interface WpV2SpectraPopupPostArgsMeta {}

export interface WpV2SpectraPopupPostArgsTitle {}

export interface WpV2SpectraPopupPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2SpectraPopupPostArgsContent;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPostArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPostArgsTitle;
}

export interface WpV2SpectraPopupPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the post. */
  id?: number;
  /** The password for the post if it is password protected. */
  password?: string;
}

export interface WpV2SpectraPopupPIdDPostPutPatchArgsContent {}

export interface WpV2SpectraPopupPIdDPostPutPatchArgsMeta {}

export interface WpV2SpectraPopupPIdDPostPutPatchArgsTitle {}

export interface WpV2SpectraPopupPIdDPostPutPatchArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2SpectraPopupPIdDPostPutPatchArgsContent;
  /** Unique identifier for the post. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPIdDPostPutPatchArgsMeta;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPIdDPostPutPatchArgsTitle;
}

export interface WpV2SpectraPopupPIdDDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** Unique identifier for the post. */
  id?: number;
}

export interface WpV2SpectraPopupPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2SpectraPopupPIdDAutosavesPostArgsContent {}

export interface WpV2SpectraPopupPIdDAutosavesPostArgsMeta {}

export interface WpV2SpectraPopupPIdDAutosavesPostArgsTitle {}

export interface WpV2SpectraPopupPIdDAutosavesPostArgs {
  /** The ID for the author of the post. */
  author?: number;
  /** The content for the post. */
  content?: WpV2SpectraPopupPIdDAutosavesPostArgsContent;
  /** Meta fields. */
  meta?: WpV2SpectraPopupPIdDAutosavesPostArgsMeta;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** A password to protect access to the content and excerpt. */
  password?: string;
  /** An alphanumeric identifier for the post unique to its type. */
  slug?: string;
  /** A named status for the post. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** The theme file to use to display the post. */
  template?: string;
  /** The title for the post. */
  title?: WpV2SpectraPopupPIdDAutosavesPostArgsTitle;
}

export interface WpV2SpectraPopupPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2StatusesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2StatusesPStatusWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** An alphanumeric identifier for the status. */
  status?: string;
}

export interface WpV2TagsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Whether to hide terms not assigned to any posts. */
  hide_empty?: boolean;
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by term attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'include_slugs'
    | 'term_group'
    | 'description'
    | 'count';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to terms assigned to a specific post. */
  post?: number;
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to terms with one or more specific slugs. */
  slug?: number[];
}

export interface WpV2TagsPostArgsMeta {}

export interface WpV2TagsPostArgs {
  /** HTML description of the term. */
  description?: string;
  /** Meta fields. */
  meta?: WpV2TagsPostArgsMeta;
  /** HTML title for the term. */
  name: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2TagsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2TagsPIdDPostPutPatchArgsMeta {}

export interface WpV2TagsPIdDPostPutPatchArgs {
  /** HTML description of the term. */
  description?: string;
  /** Unique identifier for the term. */
  id?: number;
  /** Meta fields. */
  meta?: WpV2TagsPIdDPostPutPatchArgsMeta;
  /** HTML title for the term. */
  name?: string;
  /** An alphanumeric identifier for the term unique to its type. */
  slug?: string;
}

export interface WpV2TagsPIdDDeleteArgs {
  /** Required to be true, as terms do not support trashing. */
  force?: boolean;
  /** Unique identifier for the term. */
  id?: number;
}

export interface WpV2TaxonomiesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Limit results to taxonomies associated with a specific post type. */
  type?: string;
}

export interface WpV2TaxonomiesPTaxonomyWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** An alphanumeric identifier for the taxonomy. */
  taxonomy?: string;
}

export interface WpV2TemplatePartsGetArgs {
  /** Limit to the specified template part area. */
  area?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Post type to get the templates for. */
  post_type?: string;
  /** Limit to the specified post id. */
  wp_id?: number;
}

export interface WpV2TemplatePartsPostArgs {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatePartsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The id of a template */
  id?: string;
}

export interface WpV2TemplatePartsPIdWPostPutPatchArgs {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** The id of a template */
  id?: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatePartsPIdWDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** The id of a template */
  id?: string;
}

export interface WpV2TemplatePartsPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2TemplatePartsPIdDAutosavesPostArgs {
  /** Where the template part is intended for use (header, footer, etc.) */
  area?: string;
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatePartsPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2TemplatePartsPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2TemplatePartsPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2TemplatePartsPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2TemplatePartsLookupGetArgs {
  /** Indicates if a template is custom or part of the template hierarchy */
  is_custom?: boolean;
  /** The slug of the template to get the fallback for */
  slug: string;
  /** The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy` */
  template_prefix?: string;
}

export interface WpV2TemplatesGetArgs {
  /** Limit to the specified template part area. */
  area?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Post type to get the templates for. */
  post_type?: string;
  /** Limit to the specified post id. */
  wp_id?: number;
}

export interface WpV2TemplatesPostArgs {
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** Unique slug identifying the template. */
  slug: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatesPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The id of a template */
  id?: string;
}

export interface WpV2TemplatesPIdWPostPutPatchArgs {
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** The id of a template */
  id?: string;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatesPIdWDeleteArgs {
  /** Whether to bypass Trash and force deletion. */
  force?: boolean;
  /** The id of a template */
  id?: string;
}

export interface WpV2TemplatesPIdDAutosavesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2TemplatesPIdDAutosavesPostArgs {
  /** The ID for the author of the template. */
  author?: number;
  /** Description of template. */
  description?: string;
  /** The ID for the parent of the autosave. */
  parent?: number;
  /** Unique slug identifying the template. */
  slug?: string;
  /** Status of template. */
  status?:
    | 'publish'
    | 'future'
    | 'draft'
    | 'pending'
    | 'private'
    | 'wc-pending'
    | 'wc-processing'
    | 'wc-on-hold'
    | 'wc-completed'
    | 'wc-cancelled'
    | 'wc-refunded'
    | 'wc-failed'
    | 'wc-checkout-draft'
    | 'spam';
  /** Theme identifier for the template. */
  theme?: string;
  /** Type of template. */
  type?: string;
}

export interface WpV2TemplatesPParentDAutosavesPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The ID for the autosave. */
  id?: number;
  /** The ID for the parent of the autosave. */
  parent?: number;
}

export interface WpV2TemplatesPParentDRevisionsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by object attribute. */
  orderby?:
    | 'date'
    | 'id'
    | 'include'
    | 'relevance'
    | 'slug'
    | 'include_slugs'
    | 'title';
  /** Current page of the collection. */
  page?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}

export interface WpV2TemplatesPParentDRevisionsPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2TemplatesPParentDRevisionsPIdDDeleteArgs {
  /** Required to be true, as revisions do not support trashing. */
  force?: boolean;
  /** Unique identifier for the revision. */
  id?: number;
  /** The ID for the parent of the revision. */
  parent?: number;
}

export interface WpV2TemplatesLookupGetArgs {
  /** Indicates if a template is custom or part of the template hierarchy */
  is_custom?: boolean;
  /** The slug of the template to get the fallback for */
  slug: string;
  /** The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy` */
  template_prefix?: string;
}

export interface WpV2ThemesGetArgs {
  /** Limit result set to themes assigned one or more statuses. */
  status?: number[];
}

export interface WpV2ThemesPStylesheetGetArgs {
  /** The theme's stylesheet. This uniquely identifies the theme. */
  stylesheet?: string;
}

export interface WpV2TypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2TypesPTypeWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** An alphanumeric identifier for the post type. */
  type?: string;
}

export interface WpV2UsersGetArgs {
  /** Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability. */
  capabilities?: number[];
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Ensure result set excludes specific IDs. */
  exclude?: number[];
  /** Limit result set to specific IDs. */
  include?: number[];
  /** Offset the result set by a specific number of items. */
  offset?: number;
  /** Order sort attribute ascending or descending. */
  order?: 'asc' | 'desc';
  /** Sort collection by user attribute. */
  orderby?:
    | 'id'
    | 'include'
    | 'name'
    | 'registered_date'
    | 'slug'
    | 'include_slugs'
    | 'email'
    | 'url';
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit result set to users matching at least one specific role provided. Accepts csv list or single role. */
  roles?: number[];
  /** Limit results to those matching a string. */
  search?: string;
  /** Limit result set to users with one or more specific slugs. */
  slug?: number[];
  /** Limit result set to users who are considered authors. */
  who?: 'authors';
}

export interface WpV2UsersPostArgsMeta {}

export interface WpV2UsersPostArgs {
  /** Description of the user. */
  description?: string;
  /** The email address for the user. */
  email: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** Meta fields. */
  meta?: WpV2UsersPostArgsMeta;
  /** Display name for the user. */
  name?: string;
  /** The nickname for the user. */
  nickname?: string;
  /** Password for the user (never included). */
  password: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** URL of the user. */
  url?: string;
  /** Login name for the user. */
  username: string;
}

export interface WpV2UsersPIdDGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** Unique identifier for the user. */
  id?: number;
}

export interface WpV2UsersPIdDPostPutPatchArgsMeta {}

export interface WpV2UsersPIdDPostPutPatchArgs {
  /** Description of the user. */
  description?: string;
  /** The email address for the user. */
  email?: string;
  /** First name for the user. */
  first_name?: string;
  /** Unique identifier for the user. */
  id?: number;
  /** Last name for the user. */
  last_name?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** Meta fields. */
  meta?: WpV2UsersPIdDPostPutPatchArgsMeta;
  /** Display name for the user. */
  name?: string;
  /** The nickname for the user. */
  nickname?: string;
  /** Password for the user (never included). */
  password?: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** URL of the user. */
  url?: string;
  /** Login name for the user. */
  username?: string;
}

export interface WpV2UsersPIdDDeleteArgs {
  /** Required to be true, as users do not support trashing. */
  force?: boolean;
  /** Unique identifier for the user. */
  id?: number;
  /** Reassign the deleted user's posts and links to this user ID. */
  reassign: number;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPostArgs {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name: string;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsDeleteArgs {}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostPutPatchArgs {
  /** A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace. */
  app_id?: string;
  /** The name of the application password. */
  name?: string;
}

export interface WpV2UsersPUserIdDMeApplicationPasswordsPUuidWDeleteArgs {}

export interface WpV2UsersPUserIdDMeApplicationPasswordsIntrospectGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersMeGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2UsersMePostPutPatchArgsMeta {}

export interface WpV2UsersMePostPutPatchArgs {
  /** Description of the user. */
  description?: string;
  /** The email address for the user. */
  email?: string;
  /** First name for the user. */
  first_name?: string;
  /** Last name for the user. */
  last_name?: string;
  /** Locale for the user. */
  locale?: '' | 'en_US';
  /** Meta fields. */
  meta?: WpV2UsersMePostPutPatchArgsMeta;
  /** Display name for the user. */
  name?: string;
  /** The nickname for the user. */
  nickname?: string;
  /** Password for the user (never included). */
  password?: string;
  /** Roles assigned to the user. */
  roles?: number[];
  /** An alphanumeric identifier for the user. */
  slug?: string;
  /** URL of the user. */
  url?: string;
  /** Login name for the user. */
  username?: string;
}

export interface WpV2UsersMeDeleteArgs {
  /** Required to be true, as users do not support trashing. */
  force?: boolean;
  /** Reassign the deleted user's posts and links to this user ID. */
  reassign: number;
}

export interface WpV2WidgetTypesGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2WidgetTypesPIdAZaZ09GetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The widget type id. */
  id?: string;
}

export interface WpV2WidgetTypesPIdAZaZ09EncodePostArgsInstance {}

export interface WpV2WidgetTypesPIdAZaZ09EncodePostArgs {
  /** Serialized widget form data to encode into instance settings. */
  form_data?: string;
  /** The widget type id. */
  id: string;
  /** Current instance settings of the widget. */
  instance?: WpV2WidgetTypesPIdAZaZ09EncodePostArgsInstance;
}

export interface WpV2WidgetTypesPIdAZaZ09RenderPostArgsInstance {}

export interface WpV2WidgetTypesPIdAZaZ09RenderPostArgs {
  /** The widget type id. */
  id: string;
  /** Current instance settings of the widget. */
  instance?: WpV2WidgetTypesPIdAZaZ09RenderPostArgsInstance;
}

export interface WpV2WidgetsGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
  /** The sidebar to return widgets for. */
  sidebar?: string;
}

export interface WpV2WidgetsPostArgsInstance {}

export interface WpV2WidgetsPostArgs {
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
  /** Unique identifier for the widget. */
  id?: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** Instance settings of the widget, if supported. */
  instance?: WpV2WidgetsPostArgsInstance;
  /** The sidebar the widget belongs to. */
  sidebar: string;
}

export interface WpV2WidgetsPIdWGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: 'view' | 'embed' | 'edit';
}

export interface WpV2WidgetsPIdWPostPutPatchArgsInstance {}

export interface WpV2WidgetsPIdWPostPutPatchArgs {
  /** URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only. */
  form_data?: string;
  /** Unique identifier for the widget. */
  id?: string;
  /** The type of the widget. Corresponds to ID in widget-types endpoint. */
  id_base?: string;
  /** Instance settings of the widget, if supported. */
  instance?: WpV2WidgetsPIdWPostPutPatchArgsInstance;
  /** The sidebar the widget belongs to. */
  sidebar?: string;
}

export interface WpV2WidgetsPIdWDeleteArgs {
  /** Whether to force removal of the widget, or move it to the inactive sidebar. */
  force?: boolean;
}

export interface WpV2DeleteRoutes {
  '/wp/v2/blocks/(?P<id>[\\d]+)': WpV2BlocksPIdDDeleteArgs;
  '/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2BlocksPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/categories/(?P<id>[\\d]+)': WpV2CategoriesPIdDDeleteArgs;
  '/wp/v2/comments/(?P<id>[\\d]+)': WpV2CommentsPIdDDeleteArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)': WpV2FeedbackPIdDDeleteArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)': WpV2JpPayOrderPIdDDeleteArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)': WpV2JpPayProductPIdDDeleteArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)': WpV2KadenceLottiePIdDDeleteArgs;
  '/wp/v2/kadence_lottie/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2KadenceLottiePParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/media/(?P<id>[\\d]+)': WpV2MediaPIdDDeleteArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)': WpV2MenuItemsPIdDDeleteArgs;
  '/wp/v2/menus/(?P<id>[\\d]+)': WpV2MenusPIdDDeleteArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)': WpV2NavigationPIdDDeleteArgs;
  '/wp/v2/navigation/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2NavigationPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)': WpV2PagesPIdDDeleteArgs;
  '/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2PagesPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': WpV2PluginsPPluginDeleteArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)': WpV2PostsPIdDDeleteArgs;
  '/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2PostsPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/product_cat/(?P<id>[\\d]+)': WpV2ProductCatPIdDDeleteArgs;
  '/wp/v2/product_tag/(?P<id>[\\d]+)': WpV2ProductTagPIdDDeleteArgs;
  '/wp/v2/product/(?P<id>[\\d]+)': WpV2ProductPIdDDeleteArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)': WpV2SpectraPopupPIdDDeleteArgs;
  '/wp/v2/tags/(?P<id>[\\d]+)': WpV2TagsPIdDDeleteArgs;
  '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatePartsPIdWDeleteArgs;
  '/wp/v2/template-parts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2TemplatePartsPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatesPIdWDeleteArgs;
  '/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2TemplatesPParentDRevisionsPIdDDeleteArgs;
  '/wp/v2/users/(?P<id>[\\d]+)': WpV2UsersPIdDDeleteArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords': WpV2UsersPUserIdDMeApplicationPasswordsDeleteArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)': WpV2UsersPUserIdDMeApplicationPasswordsPUuidWDeleteArgs;
  '/wp/v2/users/me': WpV2UsersMeDeleteArgs;
  '/wp/v2/widgets/(?P<id>[\\w\\-]+)': WpV2WidgetsPIdWDeleteArgs;
}

export interface WpV2GetRoutes {
  '/wp/v2': WpV2GetArgs;
  '/wp/v2/block-directory/search': WpV2BlockDirectorySearchGetArgs;
  '/wp/v2/block-patterns/categories': WpV2BlockPatternsCategoriesGetArgs;
  '/wp/v2/block-patterns/patterns': WpV2BlockPatternsPatternsGetArgs;
  '/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)': WpV2BlockRendererPNameAZ09AZ09GetPostArgs;
  '/wp/v2/block-types': WpV2BlockTypesGetArgs;
  '/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)': WpV2BlockTypesPNamespaceAZaZ09GetArgs;
  '/wp/v2/block-types/(?P<namespace>[a-zA-Z0-9_-]+)/(?P<name>[a-zA-Z0-9_-]+)': WpV2BlockTypesPNamespaceAZaZ09PNameAZaZ09GetArgs;
  '/wp/v2/blocks': WpV2BlocksGetArgs;
  '/wp/v2/blocks/(?P<id>[\\d]+)': WpV2BlocksPIdDGetArgs;
  '/wp/v2/blocks/(?P<id>[\\d]+)/autosaves': WpV2BlocksPIdDAutosavesGetArgs;
  '/wp/v2/blocks/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2BlocksPParentDAutosavesPIdDGetArgs;
  '/wp/v2/blocks/(?P<parent>[\\d]+)/revisions': WpV2BlocksPParentDRevisionsGetArgs;
  '/wp/v2/blocks/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2BlocksPParentDRevisionsPIdDGetArgs;
  '/wp/v2/categories': WpV2CategoriesGetArgs;
  '/wp/v2/categories/(?P<id>[\\d]+)': WpV2CategoriesPIdDGetArgs;
  '/wp/v2/comments': WpV2CommentsGetArgs;
  '/wp/v2/comments/(?P<id>[\\d]+)': WpV2CommentsPIdDGetArgs;
  '/wp/v2/feedback': WpV2FeedbackGetArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)': WpV2FeedbackPIdDGetArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)/autosaves': WpV2FeedbackPIdDAutosavesGetArgs;
  '/wp/v2/feedback/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2FeedbackPParentDAutosavesPIdDGetArgs;
  '/wp/v2/global-styles/(?P<id>[\\/\\w-]+)': WpV2GlobalStylesPIdWGetArgs;
  '/wp/v2/global-styles/themes/(?P<stylesheet>[\\/\\s%\\w\\.\\(\\)\\[\\]\\@_\\-]+)/variations': WpV2GlobalStylesThemesPStylesheetSWVariationsGetArgs;
  '/wp/v2/global-styles/themes/(?P<stylesheet>[^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)': WpV2GlobalStylesThemesPStylesheetGetArgs;
  '/wp/v2/jp_pay_order': WpV2JpPayOrderGetArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)': WpV2JpPayOrderPIdDGetArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)/autosaves': WpV2JpPayOrderPIdDAutosavesGetArgs;
  '/wp/v2/jp_pay_order/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2JpPayOrderPParentDAutosavesPIdDGetArgs;
  '/wp/v2/jp_pay_product': WpV2JpPayProductGetArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)': WpV2JpPayProductPIdDGetArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)/autosaves': WpV2JpPayProductPIdDAutosavesGetArgs;
  '/wp/v2/jp_pay_product/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2JpPayProductPParentDAutosavesPIdDGetArgs;
  '/wp/v2/kadence_lottie': WpV2KadenceLottieGetArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)': WpV2KadenceLottiePIdDGetArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)/autosaves': WpV2KadenceLottiePIdDAutosavesGetArgs;
  '/wp/v2/kadence_lottie/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2KadenceLottiePParentDAutosavesPIdDGetArgs;
  '/wp/v2/kadence_lottie/(?P<parent>[\\d]+)/revisions': WpV2KadenceLottiePParentDRevisionsGetArgs;
  '/wp/v2/kadence_lottie/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2KadenceLottiePParentDRevisionsPIdDGetArgs;
  '/wp/v2/media': WpV2MediaGetArgs;
  '/wp/v2/media/(?P<id>[\\d]+)': WpV2MediaPIdDGetArgs;
  '/wp/v2/menu-items': WpV2MenuItemsGetArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)': WpV2MenuItemsPIdDGetArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)/autosaves': WpV2MenuItemsPIdDAutosavesGetArgs;
  '/wp/v2/menu-items/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2MenuItemsPParentDAutosavesPIdDGetArgs;
  '/wp/v2/menu-locations': WpV2MenuLocationsGetArgs;
  '/wp/v2/menu-locations/(?P<location>[\\w-]+)': WpV2MenuLocationsPLocationWGetArgs;
  '/wp/v2/menus': WpV2MenusGetArgs;
  '/wp/v2/menus/(?P<id>[\\d]+)': WpV2MenusPIdDGetArgs;
  '/wp/v2/navigation': WpV2NavigationGetArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)': WpV2NavigationPIdDGetArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)/autosaves': WpV2NavigationPIdDAutosavesGetArgs;
  '/wp/v2/navigation/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2NavigationPParentDAutosavesPIdDGetArgs;
  '/wp/v2/navigation/(?P<parent>[\\d]+)/revisions': WpV2NavigationPParentDRevisionsGetArgs;
  '/wp/v2/navigation/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2NavigationPParentDRevisionsPIdDGetArgs;
  '/wp/v2/pages': WpV2PagesGetArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)': WpV2PagesPIdDGetArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)/autosaves': WpV2PagesPIdDAutosavesGetArgs;
  '/wp/v2/pages/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2PagesPParentDAutosavesPIdDGetArgs;
  '/wp/v2/pages/(?P<parent>[\\d]+)/revisions': WpV2PagesPParentDRevisionsGetArgs;
  '/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2PagesPParentDRevisionsPIdDGetArgs;
  '/wp/v2/pattern-directory/patterns': WpV2PatternDirectoryPatternsGetArgs;
  '/wp/v2/plugins': WpV2PluginsGetArgs;
  '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': WpV2PluginsPPluginGetArgs;
  '/wp/v2/posts': WpV2PostsGetArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)': WpV2PostsPIdDGetArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)/autosaves': WpV2PostsPIdDAutosavesGetArgs;
  '/wp/v2/posts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2PostsPParentDAutosavesPIdDGetArgs;
  '/wp/v2/posts/(?P<parent>[\\d]+)/revisions': WpV2PostsPParentDRevisionsGetArgs;
  '/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2PostsPParentDRevisionsPIdDGetArgs;
  '/wp/v2/product': WpV2ProductGetArgs;
  '/wp/v2/product_cat': WpV2ProductCatGetArgs;
  '/wp/v2/product_cat/(?P<id>[\\d]+)': WpV2ProductCatPIdDGetArgs;
  '/wp/v2/product_tag': WpV2ProductTagGetArgs;
  '/wp/v2/product_tag/(?P<id>[\\d]+)': WpV2ProductTagPIdDGetArgs;
  '/wp/v2/product/(?P<id>[\\d]+)': WpV2ProductPIdDGetArgs;
  '/wp/v2/product/(?P<id>[\\d]+)/autosaves': WpV2ProductPIdDAutosavesGetArgs;
  '/wp/v2/product/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2ProductPParentDAutosavesPIdDGetArgs;
  '/wp/v2/search': WpV2SearchGetArgs;
  '/wp/v2/settings': WpV2SettingsGetArgs;
  '/wp/v2/sidebars': WpV2SidebarsGetArgs;
  '/wp/v2/sidebars/(?P<id>[\\w-]+)': WpV2SidebarsPIdWGetArgs;
  '/wp/v2/spectra-popup': WpV2SpectraPopupGetArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)': WpV2SpectraPopupPIdDGetArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)/autosaves': WpV2SpectraPopupPIdDAutosavesGetArgs;
  '/wp/v2/spectra-popup/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2SpectraPopupPParentDAutosavesPIdDGetArgs;
  '/wp/v2/statuses': WpV2StatusesGetArgs;
  '/wp/v2/statuses/(?P<status>[\\w-]+)': WpV2StatusesPStatusWGetArgs;
  '/wp/v2/tags': WpV2TagsGetArgs;
  '/wp/v2/tags/(?P<id>[\\d]+)': WpV2TagsPIdDGetArgs;
  '/wp/v2/taxonomies': WpV2TaxonomiesGetArgs;
  '/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)': WpV2TaxonomiesPTaxonomyWGetArgs;
  '/wp/v2/template-parts': WpV2TemplatePartsGetArgs;
  '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatePartsPIdWGetArgs;
  '/wp/v2/template-parts/(?P<id>[\\d]+)/autosaves': WpV2TemplatePartsPIdDAutosavesGetArgs;
  '/wp/v2/template-parts/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2TemplatePartsPParentDAutosavesPIdDGetArgs;
  '/wp/v2/template-parts/(?P<parent>[\\d]+)/revisions': WpV2TemplatePartsPParentDRevisionsGetArgs;
  '/wp/v2/template-parts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2TemplatePartsPParentDRevisionsPIdDGetArgs;
  '/wp/v2/template-parts/lookup': WpV2TemplatePartsLookupGetArgs;
  '/wp/v2/templates': WpV2TemplatesGetArgs;
  '/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatesPIdWGetArgs;
  '/wp/v2/templates/(?P<id>[\\d]+)/autosaves': WpV2TemplatesPIdDAutosavesGetArgs;
  '/wp/v2/templates/(?P<parent>[\\d]+)/autosaves/(?P<id>[\\d]+)': WpV2TemplatesPParentDAutosavesPIdDGetArgs;
  '/wp/v2/templates/(?P<parent>[\\d]+)/revisions': WpV2TemplatesPParentDRevisionsGetArgs;
  '/wp/v2/templates/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)': WpV2TemplatesPParentDRevisionsPIdDGetArgs;
  '/wp/v2/templates/lookup': WpV2TemplatesLookupGetArgs;
  '/wp/v2/themes': WpV2ThemesGetArgs;
  '/wp/v2/themes/(?P<stylesheet>[^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)': WpV2ThemesPStylesheetGetArgs;
  '/wp/v2/types': WpV2TypesGetArgs;
  '/wp/v2/types/(?P<type>[\\w-]+)': WpV2TypesPTypeWGetArgs;
  '/wp/v2/users': WpV2UsersGetArgs;
  '/wp/v2/users/(?P<id>[\\d]+)': WpV2UsersPIdDGetArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords': WpV2UsersPUserIdDMeApplicationPasswordsGetArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)': WpV2UsersPUserIdDMeApplicationPasswordsPUuidWGetArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/introspect': WpV2UsersPUserIdDMeApplicationPasswordsIntrospectGetArgs;
  '/wp/v2/users/me': WpV2UsersMeGetArgs;
  '/wp/v2/widget-types': WpV2WidgetTypesGetArgs;
  '/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)': WpV2WidgetTypesPIdAZaZ09GetArgs;
  '/wp/v2/widgets': WpV2WidgetsGetArgs;
  '/wp/v2/widgets/(?P<id>[\\w\\-]+)': WpV2WidgetsPIdWGetArgs;
}

export interface WpV2PatchRoutes {
  '/wp/v2/blocks/(?P<id>[\\d]+)': WpV2BlocksPIdDPostPutPatchArgs;
  '/wp/v2/categories/(?P<id>[\\d]+)': WpV2CategoriesPIdDPostPutPatchArgs;
  '/wp/v2/comments/(?P<id>[\\d]+)': WpV2CommentsPIdDPostPutPatchArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)': WpV2FeedbackPIdDPostPutPatchArgs;
  '/wp/v2/global-styles/(?P<id>[\\/\\w-]+)': WpV2GlobalStylesPIdWPostPutPatchArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)': WpV2JpPayOrderPIdDPostPutPatchArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)': WpV2JpPayProductPIdDPostPutPatchArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)': WpV2KadenceLottiePIdDPostPutPatchArgs;
  '/wp/v2/media/(?P<id>[\\d]+)': WpV2MediaPIdDPostPutPatchArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)': WpV2MenuItemsPIdDPostPutPatchArgs;
  '/wp/v2/menus/(?P<id>[\\d]+)': WpV2MenusPIdDPostPutPatchArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)': WpV2NavigationPIdDPostPutPatchArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)': WpV2PagesPIdDPostPutPatchArgs;
  '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': WpV2PluginsPPluginPostPutPatchArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)': WpV2PostsPIdDPostPutPatchArgs;
  '/wp/v2/product_cat/(?P<id>[\\d]+)': WpV2ProductCatPIdDPostPutPatchArgs;
  '/wp/v2/product_tag/(?P<id>[\\d]+)': WpV2ProductTagPIdDPostPutPatchArgs;
  '/wp/v2/product/(?P<id>[\\d]+)': WpV2ProductPIdDPostPutPatchArgs;
  '/wp/v2/settings': WpV2SettingsPostPutPatchArgs;
  '/wp/v2/sidebars/(?P<id>[\\w-]+)': WpV2SidebarsPIdWPostPutPatchArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)': WpV2SpectraPopupPIdDPostPutPatchArgs;
  '/wp/v2/tags/(?P<id>[\\d]+)': WpV2TagsPIdDPostPutPatchArgs;
  '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatePartsPIdWPostPutPatchArgs;
  '/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatesPIdWPostPutPatchArgs;
  '/wp/v2/users/(?P<id>[\\d]+)': WpV2UsersPIdDPostPutPatchArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)': WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostPutPatchArgs;
  '/wp/v2/users/me': WpV2UsersMePostPutPatchArgs;
  '/wp/v2/widgets/(?P<id>[\\w\\-]+)': WpV2WidgetsPIdWPostPutPatchArgs;
}

export interface WpV2PostRoutes {
  '/wp/v2/block-renderer/(?P<name>[a-z0-9-]+/[a-z0-9-]+)': WpV2BlockRendererPNameAZ09AZ09GetPostArgs;
  '/wp/v2/blocks': WpV2BlocksPostArgs;
  '/wp/v2/blocks/(?P<id>[\\d]+)': WpV2BlocksPIdDPostPutPatchArgs;
  '/wp/v2/blocks/(?P<id>[\\d]+)/autosaves': WpV2BlocksPIdDAutosavesPostArgs;
  '/wp/v2/categories': WpV2CategoriesPostArgs;
  '/wp/v2/categories/(?P<id>[\\d]+)': WpV2CategoriesPIdDPostPutPatchArgs;
  '/wp/v2/comments': WpV2CommentsPostArgs;
  '/wp/v2/comments/(?P<id>[\\d]+)': WpV2CommentsPIdDPostPutPatchArgs;
  '/wp/v2/feedback': WpV2FeedbackPostArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)': WpV2FeedbackPIdDPostPutPatchArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)/autosaves': WpV2FeedbackPIdDAutosavesPostArgs;
  '/wp/v2/global-styles/(?P<id>[\\/\\w-]+)': WpV2GlobalStylesPIdWPostPutPatchArgs;
  '/wp/v2/jp_pay_order': WpV2JpPayOrderPostArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)': WpV2JpPayOrderPIdDPostPutPatchArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)/autosaves': WpV2JpPayOrderPIdDAutosavesPostArgs;
  '/wp/v2/jp_pay_product': WpV2JpPayProductPostArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)': WpV2JpPayProductPIdDPostPutPatchArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)/autosaves': WpV2JpPayProductPIdDAutosavesPostArgs;
  '/wp/v2/kadence_lottie': WpV2KadenceLottiePostArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)': WpV2KadenceLottiePIdDPostPutPatchArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)/autosaves': WpV2KadenceLottiePIdDAutosavesPostArgs;
  '/wp/v2/media': WpV2MediaPostArgs;
  '/wp/v2/media/(?P<id>[\\d]+)': WpV2MediaPIdDPostPutPatchArgs;
  '/wp/v2/media/(?P<id>[\\d]+)/edit': WpV2MediaPIdDEditPostArgs;
  '/wp/v2/media/(?P<id>[\\d]+)/post-process': WpV2MediaPIdDPostProcessPostArgs;
  '/wp/v2/menu-items': WpV2MenuItemsPostArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)': WpV2MenuItemsPIdDPostPutPatchArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)/autosaves': WpV2MenuItemsPIdDAutosavesPostArgs;
  '/wp/v2/menus': WpV2MenusPostArgs;
  '/wp/v2/menus/(?P<id>[\\d]+)': WpV2MenusPIdDPostPutPatchArgs;
  '/wp/v2/navigation': WpV2NavigationPostArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)': WpV2NavigationPIdDPostPutPatchArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)/autosaves': WpV2NavigationPIdDAutosavesPostArgs;
  '/wp/v2/pages': WpV2PagesPostArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)': WpV2PagesPIdDPostPutPatchArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)/autosaves': WpV2PagesPIdDAutosavesPostArgs;
  '/wp/v2/plugins': WpV2PluginsPostArgs;
  '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': WpV2PluginsPPluginPostPutPatchArgs;
  '/wp/v2/posts': WpV2PostsPostArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)': WpV2PostsPIdDPostPutPatchArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)/autosaves': WpV2PostsPIdDAutosavesPostArgs;
  '/wp/v2/product': WpV2ProductPostArgs;
  '/wp/v2/product_cat': WpV2ProductCatPostArgs;
  '/wp/v2/product_cat/(?P<id>[\\d]+)': WpV2ProductCatPIdDPostPutPatchArgs;
  '/wp/v2/product_tag': WpV2ProductTagPostArgs;
  '/wp/v2/product_tag/(?P<id>[\\d]+)': WpV2ProductTagPIdDPostPutPatchArgs;
  '/wp/v2/product/(?P<id>[\\d]+)': WpV2ProductPIdDPostPutPatchArgs;
  '/wp/v2/product/(?P<id>[\\d]+)/autosaves': WpV2ProductPIdDAutosavesPostArgs;
  '/wp/v2/settings': WpV2SettingsPostPutPatchArgs;
  '/wp/v2/sidebars/(?P<id>[\\w-]+)': WpV2SidebarsPIdWPostPutPatchArgs;
  '/wp/v2/spectra-popup': WpV2SpectraPopupPostArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)': WpV2SpectraPopupPIdDPostPutPatchArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)/autosaves': WpV2SpectraPopupPIdDAutosavesPostArgs;
  '/wp/v2/tags': WpV2TagsPostArgs;
  '/wp/v2/tags/(?P<id>[\\d]+)': WpV2TagsPIdDPostPutPatchArgs;
  '/wp/v2/template-parts': WpV2TemplatePartsPostArgs;
  '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatePartsPIdWPostPutPatchArgs;
  '/wp/v2/template-parts/(?P<id>[\\d]+)/autosaves': WpV2TemplatePartsPIdDAutosavesPostArgs;
  '/wp/v2/templates': WpV2TemplatesPostArgs;
  '/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatesPIdWPostPutPatchArgs;
  '/wp/v2/templates/(?P<id>[\\d]+)/autosaves': WpV2TemplatesPIdDAutosavesPostArgs;
  '/wp/v2/users': WpV2UsersPostArgs;
  '/wp/v2/users/(?P<id>[\\d]+)': WpV2UsersPIdDPostPutPatchArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords': WpV2UsersPUserIdDMeApplicationPasswordsPostArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)': WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostPutPatchArgs;
  '/wp/v2/users/me': WpV2UsersMePostPutPatchArgs;
  '/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/encode': WpV2WidgetTypesPIdAZaZ09EncodePostArgs;
  '/wp/v2/widget-types/(?P<id>[a-zA-Z0-9_-]+)/render': WpV2WidgetTypesPIdAZaZ09RenderPostArgs;
  '/wp/v2/widgets': WpV2WidgetsPostArgs;
  '/wp/v2/widgets/(?P<id>[\\w\\-]+)': WpV2WidgetsPIdWPostPutPatchArgs;
}

export interface WpV2PutRoutes {
  '/wp/v2/blocks/(?P<id>[\\d]+)': WpV2BlocksPIdDPostPutPatchArgs;
  '/wp/v2/categories/(?P<id>[\\d]+)': WpV2CategoriesPIdDPostPutPatchArgs;
  '/wp/v2/comments/(?P<id>[\\d]+)': WpV2CommentsPIdDPostPutPatchArgs;
  '/wp/v2/feedback/(?P<id>[\\d]+)': WpV2FeedbackPIdDPostPutPatchArgs;
  '/wp/v2/global-styles/(?P<id>[\\/\\w-]+)': WpV2GlobalStylesPIdWPostPutPatchArgs;
  '/wp/v2/jp_pay_order/(?P<id>[\\d]+)': WpV2JpPayOrderPIdDPostPutPatchArgs;
  '/wp/v2/jp_pay_product/(?P<id>[\\d]+)': WpV2JpPayProductPIdDPostPutPatchArgs;
  '/wp/v2/kadence_lottie/(?P<id>[\\d]+)': WpV2KadenceLottiePIdDPostPutPatchArgs;
  '/wp/v2/media/(?P<id>[\\d]+)': WpV2MediaPIdDPostPutPatchArgs;
  '/wp/v2/menu-items/(?P<id>[\\d]+)': WpV2MenuItemsPIdDPostPutPatchArgs;
  '/wp/v2/menus/(?P<id>[\\d]+)': WpV2MenusPIdDPostPutPatchArgs;
  '/wp/v2/navigation/(?P<id>[\\d]+)': WpV2NavigationPIdDPostPutPatchArgs;
  '/wp/v2/pages/(?P<id>[\\d]+)': WpV2PagesPIdDPostPutPatchArgs;
  '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)': WpV2PluginsPPluginPostPutPatchArgs;
  '/wp/v2/posts/(?P<id>[\\d]+)': WpV2PostsPIdDPostPutPatchArgs;
  '/wp/v2/product_cat/(?P<id>[\\d]+)': WpV2ProductCatPIdDPostPutPatchArgs;
  '/wp/v2/product_tag/(?P<id>[\\d]+)': WpV2ProductTagPIdDPostPutPatchArgs;
  '/wp/v2/product/(?P<id>[\\d]+)': WpV2ProductPIdDPostPutPatchArgs;
  '/wp/v2/settings': WpV2SettingsPostPutPatchArgs;
  '/wp/v2/sidebars/(?P<id>[\\w-]+)': WpV2SidebarsPIdWPostPutPatchArgs;
  '/wp/v2/spectra-popup/(?P<id>[\\d]+)': WpV2SpectraPopupPIdDPostPutPatchArgs;
  '/wp/v2/tags/(?P<id>[\\d]+)': WpV2TagsPIdDPostPutPatchArgs;
  '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatePartsPIdWPostPutPatchArgs;
  '/wp/v2/templates/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)': WpV2TemplatesPIdWPostPutPatchArgs;
  '/wp/v2/users/(?P<id>[\\d]+)': WpV2UsersPIdDPostPutPatchArgs;
  '/wp/v2/users/(?P<user_id>(?:[\\d]+|me))/application-passwords/(?P<uuid>[\\w\\-]+)': WpV2UsersPUserIdDMeApplicationPasswordsPUuidWPostPutPatchArgs;
  '/wp/v2/users/me': WpV2UsersMePostPutPatchArgs;
  '/wp/v2/widgets/(?P<id>[\\w\\-]+)': WpV2WidgetsPIdWPostPutPatchArgs;
}

export interface WpV2Routes {
  Delete: WpV2DeleteRoutes;
  Get: WpV2GetRoutes;
  Patch: WpV2PatchRoutes;
  Post: WpV2PostRoutes;
  Put: WpV2PutRoutes;
}
