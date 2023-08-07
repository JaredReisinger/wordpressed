/* eslint-disable no-use-before-define */

/**
 * A helper class that collects lines to eventually be writen to a file.
 * Abstracts the array storage, indentation level, and eventual join.
 */
export class LineBuffer {
  lines: string[] = [];
  indentLevel = 0;

  constructor() {}

  /** Adds a line to the buffer at the current indentation level. */
  add(str: string, indent?: number) {
    this.lines.push('  '.repeat(this.indentLevel + (indent ?? 0)) + str);
  }

  /** Adds a blank line to the buffer with no indentation. */
  addBlank() {
    this.lines.push('');
  }

  /** Adds a blank line only if the previous line *isn't* blank. */
  ensureBlank() {
    const lineCount = this.lines.length;
    const lastLine = lineCount > 0 ? this.lines[lineCount - 1] : '';

    if (lastLine !== '') {
      this.addBlank();
    }
  }

  /** Returns the entire buffer as a single string. */
  toString() {
    return this.lines.join('\n') + '\n';
  }

  /**
   * Create a child buffer with a new base indentation level. The child buffer
   * shares the same buffer space; avoid adding lines to the original and child
   * at the same time.
   * @param delta additional levels to indent (defaults to 1)
   */
  indent(delta = 1) {
    return new IndentedBuffer(this, delta);
  }
}

/**
 * An indented child buffer. Does *not* protect against intervleaved `add()`s
 * between parent and child.
 */
class IndentedBuffer extends LineBuffer {
  constructor(parent: LineBuffer, delta = 1) {
    super();
    this.lines = parent.lines;
    this.indentLevel = parent.indentLevel + delta;
  }
}
