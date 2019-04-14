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
  overrides: {
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
  },

  rules: {
    // Overwrite ESLint's recommended rules:
    'no-console': 'off',
    'no-alert': 'off',
    'no-debugger': 'off',
    'no-constant-condition': 'off',
    'no-empty': 'warn',
    'no-unused-vars': 'warn',
    'no-extra-boolean-cast': 'warn',

    // General ESLint rules:
    'sort-imports': 'off',
    'require-await': 'warn',
    'dot-notation': 'warn',
    'no-multi-assign': 'error',
    'prefer-object-spread': 'warn',
    'no-return-await': 'error',
    yoda: 'warn',
    'no-unneeded-ternary': 'warn',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    radix: 'error',
    strict: 'error',
    'no-shadow': [
      'warn',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
      }
    ],

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
