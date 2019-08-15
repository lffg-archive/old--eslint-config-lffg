const builtInModules = require('builtin-modules');

const ERROR = 'error';
const WARN = 'warn';
const OFF = 'off';

const TS_ESLINT_RECOMMENDED_RULES_PATH =
  '@typescript-eslint/eslint-plugin/dist/configs/recommended.json';

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: ['eslint:recommended', 'react-app', 'prettier'],
  plugins: ['prettier', 'html', 'import', 'import-helpers'],

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },

    //
    // Override this option in your own .eslintrc.json file.
    //
    react: {
      version: 'latest'
    }
  },

  //
  // TypeScript support:
  //
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        ...require(TS_ESLINT_RECOMMENDED_RULES_PATH).rules,
        '@typescript-eslint/camelcase': [WARN, { properties: 'never' }],
        '@typescript-eslint/indent': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/interface-name-prefix': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/member-delimiter-style': OFF,
        '@typescript-eslint/no-empty-interface': OFF,
        '@typescript-eslint/explicit-member-accessibility': OFF
      }
    }
  ],

  rules: {
    //
    // Overwrite some defaults:
    //
    'no-console': OFF,
    'no-alert': OFF,
    'no-debugger': OFF,
    'no-constant-condition': OFF,
    'no-shadow': OFF,
    'require-await': OFF,
    'no-empty': WARN,
    'no-unused-vars': WARN,
    'no-extra-boolean-cast': WARN,
    'space-before-function-paren': [
      WARN,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],

    //
    // General ESLint rules:
    //
    camelcase: [WARN, { properties: 'never' }],
    'dot-notation': WARN,
    'prefer-object-spread': WARN,
    'no-return-await': ERROR,
    yoda: WARN,
    'no-unneeded-ternary': WARN,
    'no-useless-call': ERROR,
    'no-useless-catch': ERROR,
    'no-useless-return': ERROR,
    'no-var': ERROR,
    'prefer-const': WARN,
    radix: [ERROR, 'always'],
    strict: ERROR,

    //
    // Plugins:
    //
    'jsx-a11y/accessible-emoji': OFF,
    'import/no-default-export': WARN,
    'import/newline-after-import': [WARN, { count: 1 }],
    'import-helpers/order-imports': [
      WARN,
      {
        groups: [
          [`/^(${builtInModules.join('|')})$/`],
          ['absolute'],
          ['module'],
          ['/^(@|~)//'],
          ['parent'],
          ['sibling'],
          ['index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
        newlinesBetween: 'never'
      }
    ],

    //
    // Prettier rules:
    //
    'prettier/prettier': [
      ERROR,
      {
        semi: true,
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80
      }
    ]
  }
};
