// helper functions for dealing with WordPress routes.

/**
 * Analyze a WordPress REST API route path for any path variables. We use this
 * to help define what's needed when calling this route.
 *
 * TODO: Do we need something that also defines a general-purpose regexp that
 * matches a full path?
 *
 * @param route route path to analyze
 * @returns list of [name, pattern, valueType, start, end] tuples
 */
export function analyzeRoute(route: string) {
  // There is a standard pattern to how a path variable is defined, because it
  // must be named to be useful on the WordPress side of things.  *Generally* a
  // path variable will be the entirety of a single path segment (i.e. between
  // `/`), but we attempt to be agnostic about this, just in case.
  //
  // While most of the patterns `(?P<NAME>PATTERN)` have PATTERN as a relatively
  // simple expression (like `[\\d]+`), there are at least some significantly
  // more complex. For example:
  //
  //   /wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)
  //
  // This means we can't simply use a regular expression to find the closing
  // `)`, because we have to know how to interpret all of the matching logic!  I
  // hadn't really wanted to write a regular expression parser, but I don't see
  // any more-expedient way to deal with it.  And fortunately, I don't *really*
  // have to understand regexps, I just need to know about how to match grouping
  // characters and ignore escapes.

  // map "known" patterns to types... `[\\d]+` is really the only one...
  // everything else is a string!
  const patternTypes: Record<string, string> = {
    '[\\d]+': 'number',
  };

  // build up name, pattern, and start/end of pattern regexps...
  const patterns: [string, string, string, number, number][] = [];

  for (let i = 0; i < route.length; i++) {
    const start = route.indexOf('(?P<', i);
    if (start < 0) {
      break;
    }

    // capture the name, and begin the state machine to process the regexp...
    const nameEnd = route.indexOf('>', start);
    if (nameEnd < 0) {
      // unexpected! poorly-formatted regexp?
      throw new Error(
        `badly formatted pattern in "${route}" (position ${start})`
      );
    }

    const name = route.substring(start + 4, nameEnd);

    // all we really need to track (?) is every time a new grouping open/close
    // magic character is encountered.
    const groupChars = {
      '[': ']',
      '(': ')',
      '{': '}',
    } as const;

    const stack: string[] = [')']; // what we expect to end the pattern!
    i = nameEnd + 1;

    let foundEnd = false;
    for (; i < route.length && !foundEnd; i++) {
      const char = route.charAt(i);
      // console.log(`pos ${i}: ${char}\t"${route}", ${stack}`);

      switch (char) {
        case '\\':
          // escape/magic char... we can skip the next characer!
          i++;
          break;
        case '[':
        case '(':
        case '{':
          stack.push(groupChars[char]);
          break;
        default:
          if (char === stack[stack.length - 1]) {
            stack.pop();
            if (stack.length === 0) {
              foundEnd = true;
              break;
            }
          }
      }

      if (foundEnd) {
        // we've reached the end!!!
        // console.log('FOUND END!');
        i++;
        // push the found data onto patterns...
        // console.log('pushing pattern', route, start, i, name, nameEnd, i);
        const pattern = route.substring(nameEnd + 1, i - 1);
        patterns.push([
          name,
          pattern,
          patternTypes[pattern] ?? 'string',
          start,
          i,
        ]);
      }
    }

    if (!foundEnd) {
      // unexpected! poorly-formatted regexp?
      throw new Error(
        `badly formatted pattern in "${route}" (position ${start})`
      );
    }
  }

  return patterns;
}
