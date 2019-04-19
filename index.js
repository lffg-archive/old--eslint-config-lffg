module.exports = {
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  plugins: ['prettier', 'html'],

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },

  // TypeScript support:
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
      }
    }
  ],

  rules: {
    // Overwrite some defaults:
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

    // General ESLint rules:
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

    // Prettier rules:
    'prettier/prettier': [
      'error',
      {
        semi: false,
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80
      }
    ]
  }
}
