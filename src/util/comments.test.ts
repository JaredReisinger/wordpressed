import test from 'ava';
import { sanitizeForDocComment } from './comments.js';

test('sanitizeForDocComment() protects against "*/"', (t) => {
  const actual = sanitizeForDocComment('*/');
  t.false(actual.includes('*/'));
});
