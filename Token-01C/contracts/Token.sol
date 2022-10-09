// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

uint256 constant initialSupply = 1000000;
uint8 constant tokenDecimals = 3;

contract Token is ERC20 {
    constructor() ERC20("Token-T1C", "T1C") {
        _mint(msg.sender, initialSupply * 10**tokenDecimals);
    }

    // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol#L87-L89
    // function decimals() public view virtual override returns (uint8) { return 18; }
    function decimals() public view virtual override returns (uint8) {
        return tokenDecimals;
    }
}
