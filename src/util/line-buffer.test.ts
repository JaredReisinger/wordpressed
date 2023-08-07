import test from 'ava';

import { LineBuffer } from './line-buffer.js';

test('LineBuffer always terminates with with a newline', (t) => {
  const buf = new LineBuffer();
  t.is('\n', buf.toString());
  buf.add('text');
  t.is('text\n', buf.toString());
});

test('add() can perform ad-hoc indentation', (t) => {
  const buf = new LineBuffer();
  buf.add('text', 1);
  t.is('  text\n', buf.toString());
});

test('addBlank() always adds a blank line', (t) => {
  const buf = new LineBuffer();
  buf.add('before');
  buf.addBlank();
  buf.addBlank();
  buf.add('after');
  t.is('before\n\n\nafter\n', buf.toString());
});

test('ensureBlank() adds a blank when needed', (t) => {
  const buf = new LineBuffer();
  buf.add('before');
  buf.ensureBlank();
  buf.add('after');
  t.is('before\n\nafter\n', buf.toString());
});

test('ensureBlank() never adds more than one blank', (t) => {
  const buf = new LineBuffer();
  buf.add('before');
  buf.ensureBlank();
  buf.ensureBlank();
  buf.ensureBlank();
  buf.add('after');
  t.is('before\n\nafter\n', buf.toString());
});

test("ensureBlank() doesn't add after existing blank", (t) => {
  const buf = new LineBuffer();
  buf.add('before');
  buf.addBlank();
  buf.ensureBlank();
  buf.add('after');
  t.is('before\n\nafter\n', buf.toString());
});

test('indent() results in indented lines', (t) => {
  const buf = new LineBuffer();
  buf.add('before');
  const indent = buf.indent();
  indent.add('indented');
  buf.add('after');
  t.is('before\n  indented\nafter\n', buf.toString());
});
