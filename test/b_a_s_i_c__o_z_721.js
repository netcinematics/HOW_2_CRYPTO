const BASIC_OZ_721 = artifacts.require("BASIC_OZ_721");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BASIC_OZ_721", function (/* accounts */) {
  it("should assert true", async function () {
    await BASIC_OZ_721.deployed();
    return assert.isTrue(true);
  });
});
