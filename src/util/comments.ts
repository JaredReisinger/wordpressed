// helpers for creating JSDoc smart comments in the type descriptions

/**
 * Returns a string sanitized for use inside a doc comment.
 * @param str string to sanitize
 */
export function sanitizeForDocComment(str: string) {
  // for now, we just ensure there's no `*/` that would close the comment.
  return str.replaceAll('*/', '* /');
}
