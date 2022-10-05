// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract Calculator {
    int256 private int256_max = int256(0) - 1;

    function sum(int256 a, int256 b) external view returns (int256) {
        require(a + b <= int256_max, 'Function "sum" causes an overflow.');
        return a + b;
    }
}
