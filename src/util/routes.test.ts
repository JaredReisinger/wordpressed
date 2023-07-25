import test from 'ava';

import { analyzeRoute } from './routes.js';

test('analyzeRoute() processes good routes', (t) => {
  const cases = [
    ['', []],
    ['/wp/v2', []],
    ['(?P<foo>abc)', [['foo', 'abc', 'string', 0, 12]]],
    ['/wp/v2/posts/(?P<id>[\\d]+)', [['id', '[\\d]+', 'number', 13, 26]]],
    [
      '/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)',
      [
        ['parent', '[\\d]+', 'number', 13, 30],
        ['id', '[\\d]+', 'number', 41, 54],
      ],
    ],
    // crazy edge-cases...
    [
      '/wp/v2/plugins/(?P<plugin>[^.\\/]+(?:\\/[^.\\/]+)?)',
      [['plugin', '[^.\\/]+(?:\\/[^.\\/]+)?', 'string', 15, 48]],
    ],
    [
      '/wp/v2/template-parts/(?P<id>([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+)',
      [
        [
          'id',
          '([^\\/:<>\\*\\?"\\|]+(?:\\/[^\\/:<>\\*\\?"\\|]+)?)[\\/\\w%-]+',
          'string',
          22,
          80,
        ],
      ],
    ],
  ] as const;

  cases.forEach(([input, expected]) => {
    const actual = analyzeRoute(input);
    t.deepEqual(actual, expected);
  });
});

test('analyzeRoute() throws on invalid pattern', (t) => {
  const cases = ['(?P<no-close-angle \\d)', '(?P<name> no close paren'];

  cases.forEach((input) => {
    t.throws(() => analyzeRoute(input));
  });
});
