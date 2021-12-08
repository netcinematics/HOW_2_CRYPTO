// migrations/2_deploy.js
const BASIC_oz = artifacts.require('BASIC_oz');

module.exports = async function (deployer) {
  await deployer.deploy(BASIC_oz);
};