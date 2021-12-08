// scripts/index.js
module.exports = async function main (callback) {
    try {
        // Retrieve accounts from the local node
        // const accounts = await web3.eth.getAccounts();
        // console.log(accounts)
        const BASIC_oz = artifacts.require('BASIC_oz');
        const _basic_oz = await BASIC_oz.deployed();
        await _basic_oz.store(23);
        const value = await _basic_oz.retrieve();
        console.log('State value is', value.toString());

      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  };