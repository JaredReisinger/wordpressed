import inflection from 'inflection';
import { WpJsonEndpointMethod } from './wpapi-types.js';

/**
 * All supported HTTP methods, in canonical/normalized order.
 */
export const allMethods = Object.values(WpJsonEndpointMethod);

/**
 * Normalizes a method list to (a) dedupe, and (b) put into canonical order.
 * @param methods list of methods (from route or endpoint typically)
 */
export function normalizeMethodList(methods: WpJsonEndpointMethod[]) {
  return allMethods.filter((m) => methods.includes(m));
}

/**
 * Returns a humanized list of method names for comments, optionally with the
 * word "method" (or "methods").
 * @param methods list of methods
 * @param includeMethodWord whether to include "method(s)" at the end
 * @param ultimateConjuntion whether to use 'and' or 'or' before last method
 */
export function humanizeMethodList(
  methods: WpJsonEndpointMethod[],
  includeMethodWord?: boolean,
  ultimateConjuntion?: 'and' | 'or'
) {
  // we assume it's already normalized
  const count = methods.length;
  let human: string;
  switch (count) {
    case 0:
      human = '(none)';
      break;
    case 1:
      human = methods[0];
      break;
    default:
      human = `${methods.slice(0, count - 1).join(', ')}${
        count > 2 ? ',' : ''
      } ${ultimateConjuntion ?? 'and'} ${methods[count - 1]}`;
      break;
  }

  if (includeMethodWord) {
    human = `${human} ${inflection.inflect('method', count)}`;
  }

  return human;
}
