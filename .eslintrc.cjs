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
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.test.{ts|tsx}', '*.cy.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.cy.ts'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'func-names': 'off',
        'no-console': 'off',
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off',
        'promise/no-nesting': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', project: true, sourceType: 'module' },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'jsx-a11y', 'promise', 'no-loops', 'import', 'prettier', 'sort-keys-fix'],
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
    'import/no-namespace': 'off',
    'linebreak-style': 0,
    'no-loops/no-loops': 1,
    'prettier/prettier': ['error', {}, { properties: { usePrettierrc: true } }],
    quotes: ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    semi: 1,
    'sort-keys-fix/sort-keys-fix': 'error',
    'tailwindcss/no-custom-classname': 0,
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
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl'],
      classRegex: '^class(Name)?$',
      config: 'tailwind.config.js',
      cssFiles: ['**/*.css', '**/*.scss', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      tags: [],
      whitelist: [], // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
});
