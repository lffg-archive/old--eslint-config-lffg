const defaultParents = ['eslint:recommended', 'react-app', 'prettier'];
const defaultPlugins = ['prettier', 'html', 'import', 'import-helpers'];

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: defaultParents,
  plugins: defaultPlugins,

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
      extends: [
        ...defaultParents,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      plugins: [...defaultPlugins, '@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off'
      }
    }
  ],

  rules: {
    //
    // Overwrite some defaults:
    //
    'no-console': 'off',
    'no-alert': 'off',
    'no-debugger': 'off',
    'no-constant-condition': 'off',
    'no-shadow': 'off',
    'require-await': 'off',
    'no-empty': 'warn',
    'no-unused-vars': 'warn',
    'no-extra-boolean-cast': 'warn',
    'space-before-function-paren': [
      'warn',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],

    //
    // General ESLint rules:
    //
    'dot-notation': 'warn',
    'prefer-object-spread': 'warn',
    'no-return-await': 'error',
    yoda: 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    radix: ['error', 'as-needed'],
    strict: 'error',

    //
    // Plugins:
    //
    'jsx-a11y/accessible-emoji': 'off',
    'import/prefer-default-export': 'warn',
    'import/newline-after-import': ['warn', { count: 1 }],
    'import-helpers/order-imports': [
      'warn',
      {
        'newlines-between': 'never',
        groups: [
          ['builtin'],
          ['external'],
          ['internal'],
          ['/^(@|~)//'],
          ['parent'],
          ['sibling'],
          ['index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],

    //
    // Prettier rules:
    //
    'prettier/prettier': [
      'error',
      {
        semi: true,
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80
      }
    ]
  }
};
