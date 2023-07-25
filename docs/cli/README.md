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
wordpressed/0.1.0-alpha.5 linux-x64 node-v18.16.1
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

Generates types from a WordPress REST API host.

```
USAGE
  $ wordpressed generate [-c <value>] [--fetch -h <value>] [-o <value>] [--dry-run]

FLAGS
  -c, --cache=<value>    file to load/cache response JSON
  -h, --host=<value>     host to query
  -o, --out-dir=<value>  directory to write types into
  --dry-run              do not write the type files
  --[no-]fetch           fetch from '--host' even if '--cache' file exists

DESCRIPTION
  Generates types from a WordPress REST API host.

  Queries the 'wp-json' route on a WordPress host to discover types for the available routes/endpoints, then processes
  them into TypeScript-equivalent types for use with the 'wordpressed' client library.

  For convenience (mainly for myself, as this generator is being developed), any '.env' file from the current working
  directory is loaded if it exists so that 'WP_HOST', 'CACHE_FILE', and 'OUT_DIR' don't have to appear on the command
  line.

FLAG DESCRIPTIONS
  -c, --cache=<value>  file to load/cache response JSON

    A file to load-from/save-to for wp-json data. Defaults to the 'CACHE_FILE' environment variable if it is set. If the
    file does not exist, a '--host' value is required, and the host will be queried. If the file does exist, and the
    '--fetch' flag is not present, the cache file is used instead of making a wp-json request.

  -h, --host=<value>  host to query

    The WordPress REST API host to query. Defaults to the 'WP_HOST' environment variable if it is set. Required if no
    '--cache' option is given or if the cache file does not exist.

  -o, --out-dir=<value>  directory to write types into

    The directory in which to write all of the generated route/endpoint argument and parameter types. Defaults to the
    'OUT_DIR' environment variable if it is set.

  --[no-]fetch  fetch from '--host' even if '--cache' file exists

    Used to force re-fetch the wp-json data. Particularly useful when '--host' and '--cache' are set in the environment,
    to force an update of the cached JSON.
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
