# ✨ 💫  `eslint-config-lffg`

My default ESLint (with Prettier) configuration.

[![NPM](https://img.shields.io/npm/v/eslint-config-lffg.svg?logo=npm)](https://npmjs.org/package/eslint-config-lffg)

Important code style info:

- 2 spaces for indentation;
- Single quotes;
- Semicolons as required.

## What it does

- Lints JavaScript based on the latest standards;
- Formats the code with Prettier;
- Lints and fixes erros in HTML script tags;
- You can see all the [rules here](https://github.com/lffg/eslint-config-lffg/blob/master/eslint-config-lffg.js).

## Installing

You should install this configuration for each project you want. As of ESLint 6.x, a global installation is not recommended. You can learn more reading [this migration guide by ESLint](https://eslint.org/docs/user-guide/migrating-to-6.0.0#-plugins-and-shareable-configs-are-no-longer-affected-by-eslints-location).

### Per Project Install

1. If you don't already have a `package.json` file, create one with `yarn init -y`.

2. Then install everything needed by the config:

```shell
yarn add eslint eslint-config-lffg --dev
```

3. Create a `.eslintrc.json` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.json` file should look like this:

```js
{
  "extends": ["lffg"]
}
```

4. **[Optional]** You can add two scripts to your `package.json` to lint and fix:

```js
"scripts": {
  "lint": "yarn lint:raw .",
  "lint:fix": "yarn lint:raw --fix .",
  "lint:raw": "eslint --ext .js,.jsx,.ts,.tsx --max-warnings=0"
},
```

5. Now you can manually lint your code by running `yarn lint` and fix all _fixable_ issues with `yarn lint:fix`. You probably want your editor to do this though.

## Integration With VS Code

Once you have done the installation, you probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint);
2. Open the VSCode settings in `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
"javascript.format.enable": false,
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},

"eslint.autoFixOnSave": true,

// 🛑 If you're using Yarn:
"eslint.packageManager": "yarn",

// 🛑 Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through ESLint already.
"prettier.disableLanguages": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
],
```

## Extra Rules Configuration

If you'd like to overwrite [ESLint](https://eslint.org/docs/rules/) or [Prettier](https://prettier.io/docs/en/options.html) rules, you can add the rules in your `.eslintrc.json` file:

```js
{
  "extends": ["lffg"],
  "rules": {
    // Your ESLint rules here.
    // <https://eslint.org/docs/rules/>

    "prettier/prettier": [
      "error",
      {
        // Your Prettier options here.
        // <https://prettier.io/docs/en/options.html>
      }
    ]
  }
}
```

## Usage with `eslint-config-react-app`

As of [8.x](https://github.com/lffg/eslint-config-lffg/releases/tag/v8.0.0), this ESLint configuration **does NOT** extend `eslint-config-react-app` by default. If you want to use this configuration with React App's presets, use the following in your `.eslintrc.json`:

```js
// Note: You'll need to install `eslint`, `eslint-config-react-app` and `eslint-config-lffg`.

{
  "extends": ["react-app", "lffg"]
}
```

But in the end, you should not even bother using React App's configuration, as `eslint-config-lffg` already supports React out of the box. 😁

---

This package is released under the [MIT License](https://github.com/lffg/eslint-config-lffg/blob/master/LICENSE).

This is a _fork_ of [`eslint-config-wesbos`](https://github.com/wesbos/eslint-config-wesbos) and heavily inspired by the [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) rules.
