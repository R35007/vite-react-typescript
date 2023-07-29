const path = require('path');
const { chdir, exit } = require('node:process');
const { execSync } = require('node:child_process');

const rootDir = path.join(__dirname, '..');

module.exports = (packageName) => {
  // npm uninstall
  const packageJson = require(rootDir + '/package.json');

  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  const packagesToUninstall = [];

  for (const dep in dependencies) {
    if (dep.includes(packageName)) {
      packagesToUninstall.push(dep);
    }
  }

  for (const dep in devDependencies) {
    if (dep.includes(packageName)) {
      packagesToUninstall.push(dep);
    }
  }

  if (!packagesToUninstall.length) {
    console.log(`${packageName} has already been removed.\n`);
    exit();
  }

  const uninstallCommand = 'npm uninstall ' + packagesToUninstall.join(' ');

  chdir(rootDir);
  // execSync return null when command successful
  const res = execSync(uninstallCommand, {
    stdio: [0, 1, 2],
  });

  if (res !== null && res.status !== 0) console.error('Command Failed: ' + uninstallCommand);

  console.log(packagesToUninstall.join('\n'));
  console.log('Above packages uninstall has been successful.');
};
