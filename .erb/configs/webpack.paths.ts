const path = require('path');

const rootPath = path.join(__dirname, '../..');

const dllPath = path.join(__dirname, '../dll');

const srcPath = path.join(rootPath, 'src');
const srcMainPath = path.join(srcPath, 'main');
const srcAppPath = path.join(srcPath, 'app');

const releasePath = path.join(rootPath, 'release');
const appPath = path.join(releasePath, 'app');
const appPackagePath = path.join(appPath, 'package.json');
const appNodeModulesPath = path.join(appPath, 'node_modules');
const srcNodeModulesPath = path.join(srcPath, 'node_modules');

const distPath = path.join(appPath, 'dist');
const distMainPath = path.join(distPath, 'main');
const distAppPath = path.join(distPath, 'app');

const buildPath = path.join(releasePath, 'build');

const apiPath = path.join(srcAppPath, 'api');
const compPath = path.join(srcAppPath, 'component');
const conPath = path.join(srcAppPath, 'container');
const corePath = path.join(srcAppPath, 'core');
const dbPath = path.join(corePath, 'db');
const i18nPath = path.join(corePath, 'i18n');
const themePath = path.join(corePath, 'theme');
const libPath = path.join(srcAppPath, 'lib');
const pagePath = path.join(srcAppPath, 'page');
const scssPath = path.join(srcAppPath, 'scss');
const servicePath = path.join(srcAppPath, 'service');
const staticPath = path.join(srcAppPath, 'static');
const iconPath = path.join(staticPath, 'icon');
const imagePath = path.join(staticPath, 'image');
const storePath = path.join(srcAppPath, 'store');
const styledPath = path.join(srcAppPath, 'styled');
const testPath = path.join(srcAppPath, 'test');
const toolPath = path.join(srcAppPath, 'tool');
const typePath = path.join(srcAppPath, 'type');
const utilPath = path.join(srcAppPath, 'util');

export default {
  rootPath,
  dllPath,
  srcPath,
  srcMainPath,
  srcAppPath,
  releasePath,
  appPath,
  appPackagePath,
  appNodeModulesPath,
  srcNodeModulesPath,
  distPath,
  distMainPath,
  distAppPath,
  buildPath,
  // src
  apiPath,
  compPath,
  conPath,
  corePath,
  dbPath,
  i18nPath,
  themePath,
  libPath,
  pagePath,
  scssPath,
  servicePath,
  staticPath,
  iconPath,
  imagePath,
  storePath,
  styledPath,
  testPath,
  toolPath,
  typePath,
  utilPath,
};
