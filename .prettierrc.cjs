/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  endOfLine: 'auto',
  printWidth: 140,
};
