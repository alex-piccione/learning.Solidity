// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";

//import "@openzeppelin/contracts/utils/Strings.sol";
// Strings.toString(uint)

library NumbersUtils {
    function isEven(uint256 value) external pure returns (bool result) {
        result = value % 2 == 0;
    }
}
