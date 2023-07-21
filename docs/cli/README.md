# Table of contents

<!-- toc -->

- [Table of contents](#table-of-contents)
- [Wordpressed CLI](#wordpressed-cli)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Wordpressed CLI

This package includes a CLI to make it easier to generate types for other WordPress REST API hosts/plugins/namespaces/routes.

# Usage

<!-- usage -->

```sh-session
$ npm install -g wordpressed
$ wordpressed COMMAND
running command...
$ wordpressed (--version)
wordpressed/0.1.0-alpha.3 linux-x64 node-v18.15.0
$ wordpressed --help [COMMAND]
USAGE
  $ wordpressed COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`wordpressed generate`](#wordpressed-generate)
- [`wordpressed help [COMMANDS]`](#wordpressed-help-commands)

## `wordpressed generate`

generates types for a WordPress REST API host

```
USAGE
  $ wordpressed generate

DESCRIPTION
  generates types for a WordPress REST API host
```

## `wordpressed help [COMMANDS]`

Display help for wordpressed.

```
USAGE
  $ wordpressed help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for wordpressed.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.14/src/commands/help.ts)_

<!-- commandsstop -->
