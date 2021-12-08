// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact netcinematics@protonmail.com
contract OZ_Wizard_721_MIN is ERC721, Ownable {
    constructor() ERC721("OZ_Wizard_721_MIN", "KBZ") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://...";
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
