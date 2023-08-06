/* eslint-disable no-use-before-define */
// an attempt at a new and modern WordPress REST API client

export interface WpJson {
  _links: Record<string, WpJsonLink[]>;
  authentication: Record<string, WpJsonAuthentication>;
  description: string;
  gmt_offset: number;
  home: string;
  name: string;
  namespaces: string[];
  routes: Record<string, WpJsonRoute>; // key is "/" + endpoint... plus more?
  site_icon_url: string;
  site_icon: number;
  site_logo: number;
  timezone_string: string;
  url: string;
}

export interface WpJsonLink {
  embeddable?: true;
  href: string;
  type?: string; // site_logo, site_icon
  name?: string;
  templated?: true;
}

export interface WpJsonAuthentication {
  endpoints: {
    authorization: string;
  };
}

export interface WpJsonRoute {
  namespace: string;
  methods: WpJsonEndpointMethod[];
  endpoints: {
    methods: WpJsonEndpointMethod[];
    args: Record<string, WpJsonArgDesc>;
  }[];
  _links?: unknown;
}

export enum WpJsonEndpointMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  // missing: OPTIONS, HEAD, etc.
}

// export type Method = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

// ArgTypes from empirical analysis
export interface WpJsonArgTypes {
  array: WpJsonArgArray & WpJsonArgBase;
  boolean: WpJsonArgBoolean & WpJsonArgBase;
  file: WpJsonArgFile & WpJsonArgBase;
  float: WpJsonArgInteger & WpJsonArgBase;
  int: WpJsonArgInteger & WpJsonArgBase;
  integer: WpJsonArgInteger & WpJsonArgBase;
  null: WpJsonArgNull & WpJsonArgBase;
  number: WpJsonArgInteger & WpJsonArgBase;
  object: WpJsonArgObject & WpJsonArgBase;
  string: WpJsonArgString & WpJsonArgBase;
  text: WpJsonArgString & WpJsonArgBase;
}

// There's also the case of "type: [...]" where an arg is typed as a *list* of
// types... the case of `[foo, null]` just means nullable, but some of the
// others will take some investigation, and some work to represent in
// Typescript.

export type WpJsonArgType = keyof WpJsonArgTypes;

// Arg properties from empirical analysis, to ensure they only apply to the
// appropriate ArgType.

// common to all args
export interface WpJsonArgBase {
  description: string;
  required?: boolean;
  // default is common, but needs to match the type!
}

export interface WpJsonArgArray {
  type: 'array';
  default?: unknown[]; // depends on item type?
  items?: Record<string, unknown>; // *should* be required, some don't use it
  maxItems?: number;
  minItems?: number;
  oneOf?: unknown[];
  uniqueItems?: boolean;
}

export interface WpJsonArgBoolean {
  type: 'boolean';
  default?: boolean;
}

export interface WpJsonArgFile {
  type: 'file';
}

// also used for 'float', 'int', and 'number'
export interface WpJsonArgInteger {
  type: 'integer' | 'float' | 'int' | 'number';
  default?: number;
  exclusiveMaximum?: boolean; // only in 1 case... questionable?
  exclusiveMinimum?: boolean; // only in 1 case... questionable?
  maximum?: number;
  minimum?: number;
  multipleOf?: number;
}

export interface WpJsonArgNull {
  type: 'null';
}

export interface WpJsonArgObject {
  type: 'object';
  default?: unknown;
  oneOf?: unknown[];
  properties: WpJsonObjectProperties; // *should* be required!
}

// also used for 'text'
export interface WpJsonArgString {
  type: 'string' | 'text';
  default?: string;
  enum?: string[];
  format?: string;
  minLength?: number;
  pattern?: string;
}

// The fields for an Arg depend on its type
export type WpJsonArgDesc = WpJsonArgTypes[WpJsonArgType];

// array item properties are similar to args themselves, but not quite (at
// least from what I've seen).  They have far fewer keys/values.
export interface ArrayItem {}

export type WpJsonObjectProperties = Record<string, WpJsonObjectProperty>;

// object properties are similar to args themselves, but not quite (at
// least from what I've seen).  They have far fewer keys/values.
export interface WpJsonObjectProperty {
  description?: string;
  type: WpJsonObjectPropertyType | (WpJsonObjectPropertyType | 'null')[];
  format?: 'email';
  context: ('view' | 'edit')[];
  readonly?: boolean; // true?
}

export type WpJsonObjectPropertyType =
  | 'object'
  | 'string'
  | 'number'
  | 'boolean'
  | 'integer'
  | 'array';
