// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "../node_modules/hardhat/console.sol";

contract Calculator {
    int256 private int256_max = int256(0) - 1;

    function sum(int256 a, int256 b) external view returns (int256) {
        console.log("Call sum with");
        console.logInt(a);
        console.logInt(b);
        // Solidity is rubbish
        //int256 max = type(int8).max + 1; // VM Exception while processing transaction: reverted with panic code 17
        //console.logInt(max);

        //console.logInt(type(int8).max + 1);
        //console.logInt(type(int16).max);
        //console.logInt(type(int256).max); //: %s", int256_max); //("max uint256", int256_max);
        //console.logInt(2 ^ 8);
        int256 result = a + b;
        require(
            result >= a && result >= b,
            'Function "sum" causes an overflow.'
        );
        return a + b;
    }
}
