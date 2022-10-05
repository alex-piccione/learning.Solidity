// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract Calculator {
    int256 private int256_max = int256(0) - 1;

    function sum(int256 a, int256 b) external pure returns (int256) {
        int256 result = a + b;
        require(
            result >= a && result >= b,
            'Function "sum" causes an overflow.'
        );
        return a + b;
    }
}
