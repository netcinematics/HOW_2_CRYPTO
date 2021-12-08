// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact netcinematics@protonmail.com
contract OZ_Wizard_20_MAX is ERC20, Ownable {
    constructor() ERC20("OZ_Wizard_20_MAX", "KBZ") {
        _mint(msg.sender, 44 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
