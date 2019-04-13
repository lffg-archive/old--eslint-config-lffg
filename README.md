# `eslint-config-lffg`

My default ESLint (with Prettier) configuration.

Important code style info:

- 2 spaces for indentation;
- No semicolons.

## What it does

- Lints JavaScript based on the latest standards;
- Formats the code with Prettier;
- Lints and fixes erros in HTML script tags;
- You can see all the [rules here](https://github.com/lffg/eslint-config-lffg/blob/master/.eslintrc.js).

## Installing

You can use ESLint globally and/or locally per project.

### Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init -y`.

2. Then install everything needed by the config:

```shell
npx install-peerdeps --dev eslint-config-lffg
```

3. Create a `.eslintrc.json` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.json` file should look like this:

```json
{
  "extends": ["lffg"]
}
```

4. **[Optional]** You can add two scripts to your `package.json` to lint and fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

5. Now you can manually lint your code by running `npm run lint` and fix all _fixable_ issues with `npm run lint:fix`. You probably want your editor to do this though.

### Global Install

1. First install everything needed:

```shell
npx install-peerdeps --global eslint-config-lffg
```

2. Then you need to make a global `.eslintrc.json` file:

ESLint will look for one in your home directory

- `~/.eslintrc.json` for mac
- `C:\Users\<user>\.eslintrc.json` for windows

In your `.eslintrc.json` file, it should look like this:

```json
{
  "extends": ["lffg"]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite ESLint or Prettier rules, you can add the rules in your `.eslintrc.json` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [Prettier options](https://prettier.io/docs/en/options.html) go under `"rules"."prettier/prettier"`. Note that Prettier rules overwrite anything in the config (such as single quote, semicolons...), so you'll need to include those as well:

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

## Integration With VS Code

Once you have done the installation, you probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Open the VSCode settings in `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},

"eslint.autoFixOnSave": true,

// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through ESLint already.
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

---

This package is released under the [MIT License](https://github.com/lffg/eslint-config-lffg/blob/master/LICENSE).

This is a fork of [`eslint-config-wesbos`](https://github.com/wesbos/eslint-config-wesbos) and heavily inspired by the [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) rules.
