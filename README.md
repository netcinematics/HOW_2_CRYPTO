#HOW_TO_CRYPTO!
- this doc is a walkthrough - from zero to crypto.
- derived from https://docs.openzeppelin.com/learn/
- and https://wizard.openzeppelin.com
These are instructions for Startup of existing or 
creation of a new CRYPTO-PROJECT.
## STARTUP: 
- compile, ganache, migrate, exec, test,
> npm install
> npx truffle compile
> npx ganache-cli --deterministic 
> npx truffle migrate --network development
> npx truffle exec --network development ./scripts/index.js
> npx truffle test
----
## 1) Build a CRYPTO-SCAFFOLD:
----
> mkdir PROJECTS/CRYPTO/EXAMPLE && cd PROJECTS/CRYPTO/EXAMPLE
> npm init -y
> code .
> create README.md
> create ./scripts
> npx truffle init
> truffle create contract EXAMPLE
> truffle create test EXAMPLE
RESULT:
crypto project ready to rock,
with /contracts, /scripts,
/migrations, and /test. 
> git init
GitHub with LICENSE MIT
> git remote paste.git
> git push, git pull.
> create s3cr3tz.json
.gitignore s3cr3tz.json
-----
## 2) SOLIDITY PROJECT!
-----
> npm install --save-dev truffle
- Truffle or Hardhat. 
- Truffle uses Web3.js. Hardhat uses ethers.js
- Platforms for compile and migrate 
- (to various TEST NETS)
- Like Ganache (local) or Rinkeby, public.
-----
## 3) CONTRACTS!!
-----
> create /contracts/BASIC_721_oz.sol
- go to Open Zeppelin Wizard to get code.
- compile SOL into BYTECODE for EVM
- configure truffle-config to use solc compiler.
> npx truffle compile
- will compile all contracts into 
- /build/contracts/artifacts
> .gitignore /build folder
-----
### 4) ERC20, ERC721, ERC1155
-----
OpenZeppelin Contract Wizard
https://wizard.openzeppelin.com/
MAX ANNOTATED EXAMPLES in /contracts
> npm install --save-dev @openzeppelin/contracts
> npx truffle compile
----
## 5) DEVNET (testnet local)
----
- with Ganache-CLI
> npm install --save-dev ganache-cli
- DEPLOY / migrate
- DEV by CONSOLE
- TEST RUN by scripts
- No METAMASK
- GR8 for UNIT-TESTS (next)
- RUN GANACHE
> npx ganache-cli --deterministic
- configure connection with ganache (geth,parity)
> create // migrations/2_deploy.js
- and configure truffle-config
> networks:development:host:127.0.0.1:8545:*
- standard ETH PORT 8545
- DEPLOY contracts to DEVELOPMENT NETWORK, on GANACHE:8545
> npx truffle migrate --network development
- puts BYTECODE artifacts and ABI to ganache
- if ERROR, update migrate, or restart GANACHE
----
## 6) PROTOTYPE-TEST (local network - truffle CONSOLE)
----
> npx truffle console --network development
- now INIT CONTRACT VARIABLE (charged 0.008 ETH)
> accounts
> const BASIC_oz = await BASIC_oz.deployed();
- CALL TRANSACTION
> await BASIC_oz.store(42)
- GET a RECEIPT BACK (charged 43755)
> (await BASIC_oz.retrieve()).toString()  //42
- no receipt, no transaction.
- CMD-LINE-QUERY
----
## 7) SCRIPT-DEV ( /script/js with Web3.js)
----
- Truffle executes ./scripts
- once deployed, any library sees contract
- in scripts-index:
// const accounts = await web3.eth.getAccounts();
// console.log(accounts)
> npx truffle exec --network development ./scripts/index.js
----
## 8) JS instance of CONTRACT ( Web3.js)
----
- Truffle CONTRACT, as JSON.
// const BASIC_oz = artifacts.require('BASIC_oz');
// const _basic_oz = await BASIC_oz.deployed();
- CALL THE CONTRACT
// const value = await _basic_oz.retrieve();
// console.log('State value is', value.toString());
- CALL TRANSACTION
// await _basic_oz.store(23);
----
## 9) UNIT-TESTS ( chai.js)
----
> npm install --save-dev chai
- /tests mirror /contracts 1 to 1.
> create test/BASIC_oz.test.js
> npx truffle test
----
## 10) OZ TEST-HELPERS ( complex assertions )
----
> npm install --save-dev @openzeppelin/test-helpers
- EXTRAs like
- veryify revert, exact balances, events emitted.