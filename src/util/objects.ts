// import yaml from 'yaml';
// import { stringifyString } from 'yaml/util';
// import type { Schema as YamlSchema } from 'yaml/types';
//
// import { DateTime, Duration, Interval } from 'luxon';

// export function arrayify<T>(itemOrArray?: T | T[] | null) {
//   return !itemOrArray
//     ? []
//     : Array.isArray(itemOrArray)
//     ? itemOrArray
//     : [itemOrArray];
// }

// A brief primer on Typescript type mapping, so I don't forget:
//
// The typing on the `K` generic type paramter for mapify deserves a little
// explaining as it uses some less-common tricks.  The goal is for `K` to
// represent the type of the `field` parameter, which (a) must be a property of
// the type `T` (the elements of the input `array`), and (b) should be
// restricted to only those properties whose values could concievably be used as
// keys in a map object.
//
// Working from the inside out, the curly-brace construction defines an object
// type on the fly using "type mapping" to create a new type based on another
// type. The
//
//   [P in keyof T ...]: T[P]
//
// means "take all the keys/properties of `T`, and include them with the types
// they already have (`T[P]`)".  The "as" that follows the `P in keyof T ...`
// allows us to perform some additional type magic, in this case, providing an
// additional contraint on each property `P`.  It says:
//
//   T[P] extends PropertyKey ? P : never
//
// which is a ternary that says "if the type of the property (`T[P]`) is itself
// a valid property key type (string|number|symbol), then include the property,
// otherwise omit the property (`never`)".  What we're left with is an type that
// describes contains only the fields of `T` whose types are `string | number |
// symbol`.  The outer
//
//   K extends keyof { ... }
//
// then simply (ha!) says "the type `K` is the list of keys/properties of the
// crazy type we've derived from `T`".
//
// You can uncomment the example below to see how `strProp` and `numProp` are
// allowed as mapify fields given an array typed as `Example[]`:
//
//   interface Example {
//     strProp: string;
//     numProp: number;
//     arrProp: string[];
//     objProp: { };
//     optProp?: string;
//   }
//
//   mapify([] as Example[], 'strProp')  // valid
//   mapify([] as Example[], 'numProp')  // valid
//   mapify([] as Example[], 'arrProp')  // INVALID -- arrays cannot be keys
//   mapify([] as Example[], 'objProp')  // INVALID -- objects cannot be keys
//   mapify([] as Example[], 'optProp')  // INVALID -- undefined cannot be key

// /**
//  * Converts an array of values into a key/value map based on a given
//  * unique-valued property.
//  * @param array the array to convert
//  * @param field the name of the property whose values will get used as the key
//  * @returns a key/value map where `returnedValue[fieldValue]` is the `value`
//  */
// export function mapify<
//   T,
//   // `K` is crazy!  See primer above and (*) note below!
//   K extends keyof {
//     [P in keyof T as T[P] extends PropertyKey ? P : never]: T[P];
//   },
// >(
//   array: T[] | undefined,
//   field: K
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore -- see note (*) below
// ): Record<T[K], T> {
//   return (array || []).reduce(
//     (memo, val) => {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore -- see note (*) below
//       memo[val[field]] = val;
//       return memo;

//       // (*) Note: Okay... so Typescript's generic contraints (the "K
//       // extends...") are not really used in the *body* of the function, only in
//       // callers *to* this function.  That means that Typescript thinks `T[K]`
//       // isn't valid, because it doesn't "know" that K is, in fact, a valid key
//       // of T.  Thus, we have to add a @ts-ignore before every line that uses
//       // `T[K]` or `val[field]`.  If we could avoid listing K as a separate
//       // generic parameter, that would help, but there's no way to specify
//       // `T[field]` to get the type of the *value* of `array[field]`.  Using
//       // `T[K]` is our only option.  Fortuntely, *uses* of mapify will work,
//       // correctly evaluating `T[K]` for the keys on the returned object.
//     },
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore -- see note (*) above
//     {} as Record<T[K], T>
//   );
// }

// /**
//  * Groups an array of values into a key/value[] map based on a given
//  * non-unique-valued property.
//  * @param array the array to process
//  * @param field the name of the property whose values will get used as the key
//  * @param keyFn an optional key modification function to help normalize key
//  * values
//  * @returns a key/value[] map where `returnedValue[fieldValue]` is an array of
//  * all `value`s with the given key value
//  */
// export function groupify<
//   T,
//   // crazy `K` definition like mapify... see note there.
//   K extends keyof {
//     [P in keyof T as T[P] extends PropertyKey ? P : never]: T[P];
//   },
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore -- see note (*) above in mapify
//   K2 extends PropertyKey = T[K],
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore -- see note (*) above in mapify
// >(array: T[], field: K, keyFn: (_key: T[K]) => K2 = identity): Record<K2, T[]> {
//   return (array || []).reduce(
//     (memo, val) => {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-ignore -- see note (*) above in mapify
//       const key = keyFn(val[field]);
//       memo[key] = (memo[key] || []).concat(val);
//       return memo;
//     },
//     {} as Record<K2, T[]>
//   );
// }

/**
 * exists is a helper for Array.filter(), to remove null/undefined values
 * @param self the value to check
 * @returns `true` if truthy
 */
export function exists<T>(self: T | undefined | null | false | ''): self is T {
  return !!self;
}

// // since we can't rely on Array.flatMap() yet...
// export function flatMap<T, R>(
//   arr: T[],
//   fn: (value: T, index: number, array: T[]) => R[] | R
// ) {
//   return ([] as R[]).concat(...arr.map(fn));
// }

// export function firstLetterUpperCase(string: string) {
//   return string.charAt(0).toUpperCase() + string.substring(1);
// }

// // While it might seem "obvious" to put the keyFn first, we are using this to
// // map the *values* 99% of the time.  Keys only rarely change.

// export type ValuesOf<T extends object> = T[keyof T];

// /**
//  * Performs an "object-equivalent" version of `Array.prototype.map`, allowing
//  * the caller to return a new object which alters both the values and the keys
//  * from the original object.
//  *
//  * Note that `valueFn` and `optionalKeyFn` are defined to optimize for the
//  * most-typical use cases; `mapObject` is usually used for modifying the values,
//  * so that's the first argument, and likely only needs the existing value so
//  * that one's first.  Then, *if* you want to modify the keys, you can optionally
//  * provide a function for that, but it takes the *key* as the first argument,
//  * because most new key names will be based on the existing key name.
//  *
//  * @param obj the initial object
//  * @param valueFn the value-mapping function (takes the existing *value* as
//  * first arg)
//  * @param optionalKeyFn the key-mapping function (takes the existing *key* as
//  * first arg)
//  * @returns the newly-created object
//  */
// export function mapObject<
//   T extends object,
//   VR,
//   KR extends PropertyKey,
//   K = keyof T,
//   V = ValuesOf<T>,
// >(obj: T, valueFn: (_v: V, _k: K) => VR, optionalKeyFn?: (_k: K, _v: V) => KR) {
//   // export function mapObject<K extends PropertyKey, V, VR, KR extends PropertyKey>(
//   //   obj: Record<K, V>,
//   //   valueFn: (_v: V, _k: K) => VR,
//   //   optionalKeyFn?: (_k: K, _v: V) => KR
//   // ) {
//   const keyFn = optionalKeyFn || identity;

//   // Object.entries() is poorly typed and assumes that the key is a string!
//   const newEntries = (Object.entries(obj) as [K, V][]).map(([key, value]) => {
//     const newKey = keyFn(key, value);
//     const newValue = valueFn(value, key);
//     return [newKey, newValue] as const;
//   });

//   return Object.fromEntries(newEntries) as Record<KR, VR>;
// }

// /** An "identity" pass-through helper. */
// export function identity<T>(x: T) {
//   return x;
// }

// /**
//  * Creates a plain-text rendering for debug output by using YAML syntax.  Why
//  * YAML?  Because it's less verbose than JSON, and (in my opinion) much easier
//  * to read.
//  * @param obj the object to render
//  * @returns a YAML-formatted string that represents the input object
//  */
// export function textifyObj(obj: object) {
//   return yaml.stringify(obj, {
//     // ensure functions in objects don't cause YAML to explode, also some Luxon
//     // types
//     customTags: [
//       defineCustomTag(
//         'function',
//         (value) => typeof value === 'function',
//         () => '(body omitted)',
//       ),
//       defineCustomTag(
//         'DateTime',
//         (value) => value instanceof DateTime,
//         (value) => value.toISO(),
//       ),
//       defineCustomTag(
//         'Duration',
//         (value) => value instanceof Duration,
//         (value) => value.toISO(),
//       ),
//       defineCustomTag(
//         'Interval',
//         (value) => value instanceof Interval,
//         (value) => value.toISO(),
//       ),
//     ],
//   });
// }

// function defineCustomTag(
//   name: string,
//   identifyFn: (value: any) => boolean,
//   valueFn: (value: any) => string,
// ) {
//   return {
//     identify: identifyFn,
//     tag: `!${name}`,
//     resolve: (doc, cst) => name,
//     // The custom tag "stringify" function has a bizarre syntax that has to be
//     // "just so" for things to work.  All we really care about is taking a value
//     // and returning a string, so here's a helper for the other stuff.
//     //
//     // @ts-ignore - the typing on Node (first arg) doesn't include `value`!
//     stringify: ({ comment, type, value }, ctx, onComment, onChompKeep) =>
//       stringifyString(
//         // @ts-ignore - it doesn't like `type`!
//         { comment, type, value: valueFn(value) },
//         ctx,
//         onComment,
//         onChompKeep,
//       ),
//   } as YamlSchema.CustomTag;
// }

// /**
//  * Sorts an array based on the order of another array.  This is used in several
//  * block-sorting scenarios, and was designed for that.
//  * @param toSort the array to sort
//  * @param sortBy the array that defines the final ordering
//  * @param toSortProperty optional property in toSort elements to match against
//  * @param sortByProperty optional property in sortBy elements to match against
//  * @returns the original `toSort` array, sorted in-place
//  */
// export function sortByArrayId<T, B>(
//   toSort: T[],
//   sortBy: B[],
//   toSortProperty?: keyof T,
//   sortByProperty?: keyof B
// ) {
//   // Found myself sorting an array of blocks by another array of blocks in
//   // several places. Rather than doing it specifically everywhere, decided to do
//   // it as a helper.
//   //
//   // REVIEW: I'm not sure this is the best way to handle the 'sometimes we use a
//   // property in the sort' issue... maybe it should be more like:
//   //
//   //   toSort: {array, property} sortBy: {array, property} ?

//   function sortByIndexFinder(ts: T, sb: B) {
//     return (
//       (sortByProperty ? sb[sortByProperty] : sb) ===
//       (toSortProperty ? ts[toSortProperty] : ts)
//     );
//   }

//   return toSort.sort((a, b) => {
//     let indexA = sortBy.findIndex((item) => sortByIndexFinder(a, item));
//     let indexB = sortBy.findIndex((item) => sortByIndexFinder(b, item));

//     // If not present in array put it at the end
//     if (indexA === -1) indexA = sortBy.length - 1;
//     if (indexB === -1) indexB = sortBy.length - 1;
//     return indexA - indexB;
//   });
// }

// function to pass to Array.sort()
/**
 * Helper for sorting an array by the values of one property.
 * @param propName the property to sort on
 * @param compareFn an optional comparison function
 * @returns a comparison function to pass to sort
 */
export function byProperty<T>(propName: keyof T, compareFn = defaultComparer) {
  return function (a: T, b: T) {
    return compareFn(a[propName], b[propName]);
  };
}

// replicates the logic inside Array.sort() when no comparer is given  (see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters):
// convert to strings, and then sort by Unicode code point value.
function defaultComparer(a: unknown, b: unknown) {
  const aStr = String(a);
  const bStr = String(b);

  // instead of Unicode code point value, though, we use localeCompare...
  return aStr.localeCompare(bStr, 'en', { sensitivity: 'base' });
}

export const compareStrings = defaultComparer;

// /**
//  * Returns the index of the last element in the array where predicate is true,
//  * and -1 otherwise.
//  * @param array The source array to search in
//  * @param predicate find calls predicate once for each element of the array, in
//  * descending order, until it finds one where predicate returns true. If such an
//  * element is found, findLastIndex immediately returns that element index.
//  * Otherwise, findLastIndex returns -1.
//  */
// export function findLastIndex<T>(
//   array: Array<T>,
//   predicate: (value: T, index: number, obj: T[]) => boolean
// ): number {
//   let l = array.length;
//   while (l > 0) {
//     l = l - 1;
//     if (predicate(array[l], l, array)) return l;
//   }
//   return -1;
// }

// /**
//  * Perform "minimally-invasive" changes to an object to reduce churn in Redux
//  * state.  Given an original and new (target) object, returns an object with the
//  * least number of changes from the original as possible; in many cases, it can
//  * simply return the original unchanged!
//  */
// export function deltaUpdate<T>(
//   origObj: any,
//   newObj: T,
//   allowExtraOrigProps = false
// ): T {
//   // Because of the way that React deals with changes, we want to minimize
//   // changes to a given object any time we update/overwrite it "in-place".  The
//   // way that immutable objects work, any parent layers to a change will
//   // necessarily be new objects, but the unchanged sub-properties within them
//   // can and should stay unchanged!
//   if (Object.is(newObj, origObj)) {
//     // console.log('deltaUpdate(): returning original value!');
//     return origObj;
//   }

//   const origType = typeof origObj;
//   const newType = typeof newObj;

//   // If we're changing types, we just need to use the new object in its
//   // entirety.
//   if (newType !== origType) {
//     // console.log('deltaUpdate(): returning new value!');
//     return newObj;
//   }

//   // We can be "smart" about objects and arrays (which are both type 'object'),
//   // for for everything else we just fallback to the new object.
//   if (newType !== 'object') {
//     return newObj;
//   }

//   const origArray = Array.isArray(origObj);
//   const newArray = Array.isArray(newObj);

//   if (newArray !== origArray) {
//     // console.log('deltaUpdate(): returning new value!');
//     return newObj;
//   }

//   if (newArray) {
//     // For arrays, we "map" the new values by using deltaUpdate recursively. In
//     // the pathological case, we *might* end up creating a new array object that
//     // is 100% simply the elements from newObj... but since the newObj array
//     // hasn't been seen by React yet, that isn't a "change", per se.  It's not
//     // worth pre-checking all the elements just to avoid this case.
//     const origLength = origObj.length;
//     const candidate = (newObj as unknown as any[]).map((n, i) =>
//       deltaUpdate(i < origLength ? origObj[i] : undefined, n)
//     );

//     // *after* creating the candidate, we can see if it's actually just a new
//     // array of the old items... and if so, return the original value unchanged.
//     if (
//       candidate.length === origLength &&
//       candidate.every((c, i) => Object.is(c, origObj[i]))
//     ) {
//       // console.log('deltaUpdate(): returning original array!');
//       return origObj;
//     }
//     // console.log('deltaUpdate(): returning candidate array!');

//     return candidate as unknown as T;
//   } else {
//     // For objects, we have to do per-prop delta-updating, analogous to the per-
//     // element updating for an array.  The "is it really just the original
//     // object" check at the end it a bit more complicated, but conceptually the
//     // same.
//     const candidate = mapObject(
//       newObj as Record<PropertyKey, any>,
//       (val, key) => deltaUpdate(origObj[key], val)
//     );

//     const origKeys = Object.getOwnPropertyNames(origObj).sort();
//     const newKeys = Object.getOwnPropertyNames(candidate).sort();

//     if (
//       (newKeys.length === origKeys.length || allowExtraOrigProps) &&
//       newKeys.every((k) => Object.is(candidate[k], origObj[k]))
//     ) {
//       // console.log('deltaUpdate(): returning original object!');
//       return origObj;
//     }

//     // If we allow extra props from the original, bring those in so that they
//     // don't get lost.  This allows us to return deltaUpdate directly from the
//     // caller for merging, and avoids constructs like:
//     //
//     //   {...orig, ...deltaUpdate(orig, newObj) }
//     //
//     // which inadvertently create a new wrapper object *every* time!
//     if (allowExtraOrigProps) {
//       origKeys.forEach((k) => {
//         if (!newKeys.includes(k)) {
//           candidate[k] = origObj[k];
//         }
//       });
//     }
//     // console.log('deltaUpdate(): returning candidate object!', {
//     //   origKeys,
//     //   newKeys,
//     // });
//     return candidate;
//   }
// }

// /**
//  * Creates an array filtering/testing helper that returns a test predicate that
//  * returns whether a key is present in a given map or not.
//  *
//  * @param itemMap the map in which to check for existence
//  * @returns a predicate function appropriate to pass to array.filter,
//  * array.every, etc.
//  *
//  * @example
//  * // whether every ID in `someIds` exists in the map
//  * someIds.every(inMap(knownItems))
//  *
//  * // whether at least one ID in `someIds` exists in the map
//  * someIds.some(inMap(knownItems))
//  *
//  * // returns *only* the IDs from `someIds` that are already in the map
//  * someIds.filter(inMap(knownItems))
//  */
// export function inMap<T extends PropertyKey>(itemMap: Record<T, unknown>) {
//   return (key: T) => !!itemMap[key];
// }

// /**
//  * A helper for predicate functions, to allow negating the result without having
//  * to write a separate negative helper.
//  * @param val the value to negate
//  * @returns the "opposite" of the value (truthy => false, falsy => true)
//  *
//  * @example
//  * // all IDs *not* in the map
//  * someIds.filter(not(inMap(knownItems)))
//  */
// export function not(val: boolean) {
//   return !val;
// }

// // The objectIdCounter (the low 3 bytes of an ObjectID) is supposed to be "an
// // incrementing counter, initialized to a random value".  Because of the way
// // that window.crypto.getRandomValues() works, we use a sentinal value and
// // initialize the first time it's really needed.
// let objectIdCounter = -1;

// /**
//  * Generates an ObjectID string based on the current time. This follows the BSON
//  * ObjectID definition from
//  * https://docs.mongodb.com/manual/reference/method/ObjectId
//  */
// export function generateObjectId() {
//   if (objectIdCounter === -1) {
//     const counterBuf = new Uint8Array(3);
//     window.crypto.getRandomValues(counterBuf);

//     // convert 3 bytes into a number (0-16,777,215 (i.e. 2^24 - 1))
//     objectIdCounter =
//       (counterBuf[0] << 16) + (counterBuf[1] << 8) + (counterBuf[3] << 0);

//     // console.log('created ObjectID counter', { counterBuf, objectIdCounter });
//   }

//   // Genereate the 12-byte string (24 hex characters).  Since we're going
//   // straight to a string, we can avoid creating a numerical representation and
//   // just generate te individual string parts and concatenate them.

//   // timestamp (seconds since the epoch) as 4-byte value; note that Date.now()
//   // returns *milliseconds*.  This results in 8 hex characters.
//   const timeStr = Math.floor(Date.now() / 1000)
//     .toString(16)
//     .padStart(8, '0');

//   // 5-byte random value (10 hex characters)
//   const randomBuf = new Uint8Array(5);
//   window.crypto.getRandomValues(randomBuf);
//   // We can't just ".map()" on a typed array, because it forces the result to
//   // be of the same type... and we're converting to a hex string.
//   const randomStr = [...randomBuf.values()]
//     .map((v) => v.toString(16).padStart(2, '0'))
//     .join('');

//   // increment the counter, wraping mod 2^(3*8)
//   objectIdCounter = (objectIdCounter + 1) % 2 ** (3 * 8);
//   const counterStr = objectIdCounter.toString(16).padStart(6, '0');

//   // console.log('ObjectID parts', {
//   //   timeStr,
//   //   randomStr,
//   //   counterStr,
//   //   randomBuf,
//   //   objectIdCounter,
//   // });

//   // len: 8 hex + 10 hex + 6 hex => 24 hex
//   return timeStr + randomStr + counterStr;
// }
