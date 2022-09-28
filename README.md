# Learning Solidity

Solidity is the programming language used to program smart contracts for Ethereum and Ethereum-Virtual-Machine (EVM) compatible chains, such as polygon, avalanche, bsc, any Eth L2s, etc…

Solidity 0.8.4 Docs: https://docs.soliditylang.org/en/v0.8.4  
Ethereum Wiki: https://ethereum.org/en

## Tutorials

- https://learnweb3.io
  REQUIRES SIGN IN
- https://www.youtube.com/c/patrickcollins
- https://cryptozombies.io
- https://ethereum.org/en/developers/learning-tools
- https://www.chainshot.com
  account created
- https://buildspace.so
- https://dacade.org
  account created

## Create a new Solidity project in VS

From: https://blog.oliverjumpertz.dev/how-to-set-up-a-solidity-project-and-create-your-first-smart-contract

The most prominent Solidity tooling is based on JavaScript. It runs on Node and requires an npm project.
`npm init -y`

## Learned stuff

`block` is ...  
.coinbase: the address of the miner  
.number: the block number (uint256)  
.timestamp: the timestamp of the block (uint256)

`msg` is always available in a call (and in hte contructor?).  
.data: full info  
.value: the amount of ...  
.sender: address of the acount whom sent the ETH

_Events_ are used to persist data (log) of the call/transaction.

`address(<address>)` to transform something to an _address_.  
`payable(<address>)` to transform something to an _address payable_.
