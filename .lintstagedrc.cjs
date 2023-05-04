module.exports = {
  '*.{ts,tsx}': 'npm run lint:scripts', // Check only staged Scripts
  '*.{css,scss}': 'npm run lint:styles', // Check only staged Styles
  '*.{json,yml,html,md,mdx,js,jsx,cjs,ts,tsx,css,scss}': 'npm run format', // Check only staged File Format
  // Given command inside a function so that the matched files wont be passed to tsc --args
  // By default tsc compiles all the files based on the tsconfig.json includes and files
  '*.{ts,tsx}': () => 'npm run lint:ts', // Check only staged File Types
};
