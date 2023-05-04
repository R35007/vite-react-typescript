/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', project: true, sourceType: 'module' },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'jsx-a11y', 'sort-keys-fix', 'promise', 'no-loops', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-as-const': 'warn',
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 0,
    'import/no-anonymous-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-namespace': 'error',
    'import/no-relative-parent-imports': 'error',
    'linebreak-style': 0,
    'no-loops/no-loops': 1,
    'prettier/prettier': ['error', {}, { properties: { usePrettierrc: true } }],
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    semi: 1,
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
});
