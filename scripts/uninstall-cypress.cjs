const { glob } = require('glob');
const fsProm = require('node:fs/promises');
const path = require('node:path');
const uninstallPackages = require('./uninstall-packages.cjs');

const rootDir = path.join(__dirname, '..');

const deleteCypressFolder = async () => {
  const cypressFolder = path.resolve(rootDir, 'cypress');
  try {
    await fsProm.rm(cypressFolder, { recursive: true });
    console.log(`/cypress folder was removed.`);
  } catch (err) {
    if (e.message.includes('no such file or directory')) console.log(`/cypress folder has already been removed.`);
  }
};

const deleteCypressTestFiles = async () => {
  const pattern = 'src/**/*.cy.{ts,tsx,js,jsx}';
  const files = await glob(pattern);

  if (!files.length) {
    console.log('Cypress test files has already been removed.');
    return;
  }

  const promises = files.map((file) =>
    fsProm.unlink(file).then((_) => {
      console.log(`${file} was deleted`);
    })
  );

  await Promise.all(promises);
};

const deleteCypressConfigFiles = async () => {
  const cypressConfigFile = rootDir + '/cypress.config.ts';
  try {
    await fsProm.unlink(cypressConfigFile);
    console.log(`cypress.config.ts was removed`);
  } catch (err) {
    if (e.message.includes('no such file or directory')) console.log(`cypress.config.ts has already been removed.`);
  }
};

const removeCypress = async () => {
  try {
    await deleteCypressFolder();
    await deleteCypressTestFiles();
    await deleteCypressConfigFiles();
    await uninstallPackages('cypress');

    console.log();
    console.log('Completed remove Cypress.');
  } catch (error) {
    console.error(error);
  }
};

// run
removeCypress();
