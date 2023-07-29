const fsProm = require('node:fs/promises');
const path = require('node:path');
const uninstallPackages = require('./uninstall-packages.cjs');

const rootDir = path.join(__dirname, '..');

const deleteTailwindCssConfigFiles = async () => {
  try {
    await fsProm.unlink(rootDir + '/postcss.config.cjs');
    console.log('postcss.config.cjs was removed.');
    await fsProm.unlink(rootDir + '/tailwind.config.cjs');
    console.log('tailwind.config.cjs was removed.');
  } catch (e) {
    if (e.message.includes('no such file or directory')) console.log('TailwindCss config has already been removed.');
  }
};

const removeTailwind = async () => {
  await deleteTailwindCssConfigFiles();
  await uninstallPackages('tailwindcss');
  await uninstallPackages('postcss');

  console.log();
  console.log('Completed remove TailwindCSS.');
};

// run
removeTailwind();
