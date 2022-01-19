oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g test-cli
$ test-cli COMMAND
running command...
$ test-cli (--version)
test-cli/0.0.0 darwin-x64 node-v14.18.0
$ test-cli --help [COMMAND]
USAGE
  $ test-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`test-cli help [COMMAND]`](#test-cli-help-command)
* [`test-cli plugins`](#test-cli-plugins)
* [`test-cli plugins:inspect PLUGIN...`](#test-cli-pluginsinspect-plugin)
* [`test-cli plugins:install PLUGIN...`](#test-cli-pluginsinstall-plugin)
* [`test-cli plugins:link PLUGIN`](#test-cli-pluginslink-plugin)
* [`test-cli plugins:uninstall PLUGIN...`](#test-cli-pluginsuninstall-plugin)
* [`test-cli plugins update`](#test-cli-plugins-update)

## `test-cli help [COMMAND]`

Display help for test-cli.

```
USAGE
  $ test-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for test-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `test-cli plugins`

List installed plugins.

```
USAGE
  $ test-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ test-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.12/src/commands/plugins/index.ts)_

## `test-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ test-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ test-cli plugins:inspect myplugin
```

## `test-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ test-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ test-cli plugins add

EXAMPLES
  $ test-cli plugins:install myplugin 

  $ test-cli plugins:install https://github.com/someuser/someplugin

  $ test-cli plugins:install someuser/someplugin
```

## `test-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ test-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ test-cli plugins:link myplugin
```

## `test-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ test-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ test-cli plugins unlink
  $ test-cli plugins remove
```

## `test-cli plugins update`

Update installed plugins.

```
USAGE
  $ test-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
