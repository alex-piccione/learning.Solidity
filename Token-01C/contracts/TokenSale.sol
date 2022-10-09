// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./Token.sol";
import "../node_modules/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TokenSale {
    Token private token;
    uint256 private tokenPrice = 50;
    address payable private ethFunds =
        payable(0x13D665d500F9b335d7bC26354e26bcA0C3f3F36a);
    address payable private admin =
        payable(0x3A61549d160Ff8ff6E833500F551457F8b957111);
    uint256 transactionsCount = 0;
    mapping(uint256 => Transaction) public transactions;

    AggregatorV3Interface private priceFeed;

    event Sell(address buyer, uint256 amount);

    struct Transaction {
        address buyer;
        uint256 amount;
    }

    constructor(Token _token) {
        token = _token;
        // Goerli testnet ETH/USD 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        priceFeed = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
    }

    function buyToken(uint256 amount) external payable {
        uint256 tokenPriceETH = tokenPrice / getLatestPrice();

        // check that buyer sent enough ETH
        require(msg.value >= tokenPriceETH * amount);

        // check that contract has enough tokens
        require(token.balanceOf(address(this)) >= amount);

        // transfer the ETH of the buyer to us
        require(ethFunds.send(msg.value));
        //require(ethFunds.transfer(msg.value));

        // send the tokens to the user address
        require(token.transfer(msg.sender, amount));

        // store the transaction
        transactions[transactionsCount++] = Transaction(msg.sender, amount);

        emit Sell(msg.sender, amount);
    }

    /* payable ?? */
    function endSale() external {
        require(msg.sender == admin);
        // transfer the remaining Token amount to admin
        uint256 amount = token.balanceOf(address(this));
        require(token.transfer(admin, amount));
        selfdestruct(admin); // apyable
    }

    function getLatestPrice() private view returns (uint256) {
        // uint80 roundID, int256 price, uint startedAt, uint timeStamp, uint80 answeredInRound
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return uint256(price);
    }
}
