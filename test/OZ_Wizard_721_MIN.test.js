const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const OZ_Wizard_721_MIN = artifacts.require("BASIC_oz");
/* Use contract keyword instead of describe, for state clean up on network
 * docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("OZ_Wizard_721_MIN", function ([ owner, other ]/* accounts */) {

  beforeEach(async function () {
    this.MIN721 = await OZ_Wizard_721_MIN.new({ from: owner });
  });

  it("should assert true", async function () {
    await OZ_Wizard_721_MIN.deployed();
    return assert.isTrue(true);
  });

  // it('retrieve returns a value previously stored', async function () {
  //   await this.basic_oz.store(42);
  //   expect((await this.basic_oz.retrieve()).toString()).to.equal('42');
  // });

// contract('Box', function ([ owner, other ]) {
  // Use large integers ('big numbers')
  
  // beforeEach(async function () {
    //   this.box = await Box.new({ from: owner });
    // });
    
//   const value = new BN('42'); //Big Number
//   it('retrieve returns a value previously stored', async function () {
//     await this.basic_oz.store(value, { from: owner });
//     expect(await this.basic_oz.retrieve()).to.be.bignumber.equal(value);
//   });

//   it('store emits an event', async function () {
//     const receipt = await this.basic_oz.store(value, { from: owner });
//     // Test that a ValueChanged event was emitted with the new value
//     expectEvent(receipt, 'ValueChanged', { value: value });
//   });

//   it('non owner cannot store a value', async function () {
//     // Test a transaction reverts
//     await expectRevert(
//       this.basic_oz.store(value, { from: other }),
//       'Ownable: caller is not the owner',
//     );
//   });
});