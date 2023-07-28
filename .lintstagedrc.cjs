module.exports = {
  '*.{ts,tsx}': 'eslint --report-unused-disable-directives --max-warnings 0', // Check only staged Scripts
  '*.{css,scss}': 'stylelint', // Check only staged Styles
  '*.{json,yml,html,js,jsx,cjs,ts,tsx,css,scss}': 'prettier --loglevel silent --ignore-unknown --find-config-path --check', // Check only staged File Format
  // Given command inside a function so that the matched files wont be passed to tsc --args
  // By default tsc compiles all the files based on the tsconfig.json includes and files
  '*.{ts,tsx}': () => 'tsc --noEmit', // Check only staged File Types
  '*.{js,ts,ts,tsx}': 'vitest related --run', // run only related tests
};
