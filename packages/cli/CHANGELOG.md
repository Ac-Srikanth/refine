# @pankod/refine-cli

## 1.4.1

### Patch Changes

-   [#3092](https://github.com/refinedev/refine/pull/3092) [`984f1c21ab6`](https://github.com/refinedev/refine/commit/984f1c21ab66fedcedb8630248e7429f7d4f26c3) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: Warning command description changed according `refine CLI` installed or not.

    -   If `refine CLI` is installed, It will be shown as `npm run refine update` command.
    -   IF `refine CLI` is not installed, It will be shown as `npx refine update` command.
        -   package manager will be detected automatically.

## 1.4.0

### Minor Changes

-   [#3085](https://github.com/refinedev/refine/pull/3085) [`1ff8002f31d`](https://github.com/refinedev/refine/commit/1ff8002f31d5a9970d41c8853cbd5ed9a2d7059e) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Inferencer support added to the resources created with the `refine-cli`.

## 1.3.1

### Patch Changes

-   [#3083](https://github.com/refinedev/refine/pull/3083) [`9a2f3bd2d61`](https://github.com/refinedev/refine/commit/9a2f3bd2d6174e1cced430868ff63a3907b09e32) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: undefined `process.NODE_ENV` value set to the `development` from `production`.

## 1.3.0

### Minor Changes

-   [#3067](https://github.com/refinedev/refine/pull/3067) [`6f83ddba2ad`](https://github.com/refinedev/refine/commit/6f83ddba2ad35f02f4aa352d0f1587fd61a9f704) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: `whoami` command to `refine-cli`. It's shows details of the development environment.
    Added: telemetry to `refine-cli` commands.

### Patch Changes

-   [#3080](https://github.com/refinedev/refine/pull/3080) [`407250fba24`](https://github.com/refinedev/refine/commit/407250fba2474b276944f80a69ee00d6ed253ced) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: `@types/figlet` as a `devDependencies`

-   [#3078](https://github.com/refinedev/refine/pull/3078) [`37fac3e9cfa`](https://github.com/refinedev/refine/commit/37fac3e9cfa05df59d8c14f3cb1d5c56b31f466d) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Fixed: `figlet` moved to `dependencies` from `devDependencies`

## 1.2.0

### Minor Changes

-   [#3067](https://github.com/refinedev/refine/pull/3067) [`6f83ddba2ad`](https://github.com/refinedev/refine/commit/6f83ddba2ad35f02f4aa352d0f1587fd61a9f704) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: `whoami` command to `refine-cli`. It's shows details of the development environment.
    Added: telemetry to `refine-cli` commands.

### Patch Changes

-   [#3080](https://github.com/refinedev/refine/pull/3080) [`407250fba24`](https://github.com/refinedev/refine/commit/407250fba2474b276944f80a69ee00d6ed253ced) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: `@types/figlet` as a `devDependencies`

-   [#3078](https://github.com/refinedev/refine/pull/3078) [`37fac3e9cfa`](https://github.com/refinedev/refine/commit/37fac3e9cfa05df59d8c14f3cb1d5c56b31f466d) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Fixed: `figlet` moved to `dependencies` from `devDependencies`

## 1.1.4

### Patch Changes

-   [`1fa9e25ac23`](https://github.com/refinedev/refine/commit/1fa9e25ac23c01a7a673d069d54aa2b6d3dc4701) Thanks [@omeraplak](https://github.com/omeraplak)! - Added some fun

## 1.1.3

### Patch Changes

-   [#3063](https://github.com/refinedev/refine/pull/3063) [`949b8bd6ac9`](https://github.com/refinedev/refine/commit/949b8bd6ac9fbb50e5bc30b8521bb618b7ecdc1c) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Added unique check on `create-resource` with `refine-cli`.

## 1.1.2

### Patch Changes

-   [#3058](https://github.com/refinedev/refine/pull/3058) [`5f43dc6361f`](https://github.com/refinedev/refine/commit/5f43dc6361fa4621f098d3411ac58d2bd6e4d2e8) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Added: The description of `dev`,`start`,`build` commands changed according to project type.

-   [#3060](https://github.com/refinedev/refine/pull/3060) [`1a53f4c4699`](https://github.com/refinedev/refine/commit/1a53f4c46992b532946e5e5438cf909f446da8e2) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - - Rename command name `generate:resource` to `create-resource`.

    -   Removed the requirement for the `resource name` parameter. Ask for `resource name` and `actions` with `inquirer`.
    -   Add multiple resource create support. (`refine create-resource post category user`)

-   [#3056](https://github.com/refinedev/refine/pull/3056) [`29417155780`](https://github.com/refinedev/refine/commit/294171557809ffa46d298b8aeeaa64392316aeee) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - Fixed `refine check-updates` showing packages when current version ahead of next

## 1.1.1

### Patch Changes

-   [#3049](https://github.com/refinedev/refine/pull/3049) [`da4d6320580`](https://github.com/refinedev/refine/commit/da4d63205801824ece5a8ee5ba0c936d32496b90) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - - Fix `create-refine-app` argument error.
    -   Add bin params on `refine-cli` package.json

## 1.1.0

### Minor Changes

-   [#3028](https://github.com/refinedev/refine/pull/3028) [`2af26e9b91b`](https://github.com/refinedev/refine/commit/2af26e9b91bed8a8b5e5a6792deed398270cf7f5) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Initial release for `@pankod/refine-cli` and `refine-create-app` 🎉