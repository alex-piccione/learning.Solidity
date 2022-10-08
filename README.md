# Learning Solidity

Solidity is the programming language used to program smart contracts for Ethereum and Ethereum-Virtual-Machine (EVM) compatible chains, such as polygon, avalanche, bsc, any Eth L2s, etc…

Solidity 0.8.4 Docs: https://docs.soliditylang.org/en/v0.8.4  
Ethereum Wiki: https://ethereum.org/en
Frameworks/Tools: https://ethereum.org/en/developers/local-environment

## Tutorials

- https://hardhat.org
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

## Create a Solidity project in VS

From: https://blog.oliverjumpertz.dev/how-to-set-up-a-solidity-project-and-create-your-first-smart-contract
I followed this tutorial and create teh [Calculator](Calculator/README.md) folder.  
It is a project using **Hardhat**.

## Truffle token contract

Setup in [Token-01C](Token-01C/Readme.md) folder.

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
