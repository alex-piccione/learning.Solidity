// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.6.8;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//import "@openzeppelin/contracts/tok"

//import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
//import "../contract-dependencies/ERC20Mintable.sol";

/*is ERC20Burnable, ERC20Mintable*/
contract eXRD is ERC20 {
  // amount: initiaSupply?
  constructor(address depositAddress, uint256 amount) public ERC20("Test Three", "tTHR") {
    // address(0) is the same as "0x0", an uninitialized address. Used to burn token.
    require(depositAddress != address(0));

    //_addOwner(msg.sender)
    _mint(depositAddress, amount.mul((10**uint256(decimals()))));
  }
}
