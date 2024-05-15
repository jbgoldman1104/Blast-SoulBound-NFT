// SPDX-License-Identifier: LGPL-v3
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulBoundNFT is ERC721, Ownable {

    uint256 public tokenId;

    /**
     * @dev Indicates a failure with token transfer. ( token transfer is restricted in SoulBound )
     */
    error ERC721InvalidTokenTransfer();

    constructor() ERC721("SoulBound", "SoulBound") Ownable(_msgSender()) {}

    function mint(
    ) public payable{
        _safeMint(msg.sender, tokenId);
        tokenId++;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        _requireOwned(tokenId);
        string memory baseURI = _baseURI();
        return baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://plum-known-puffin-733.mypinata.cloud/ipfs/QmT8nfUu7ZYPbJ5cwYgT4VVnjwdV5c1j8R6pVy5nvWBug6";
    }

    function transferFrom(address from, address to, uint256 tokenId) public virtual override {
        revert ERC721InvalidTokenTransfer();
    }
}