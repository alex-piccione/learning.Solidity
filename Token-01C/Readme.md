# Token-01C

Project using Truffle to deploy a token contract on Goerly network.

Explorer: https://goerli.etherscan.io
I chose ["ethers.js"](https://docs.ethers.io/ethers.js/v3.0/html/) as web3 library because it seems t osupport Typescript better.  
https://docs.ethers.io/v5/cli/typescript  
Check also _Moralis_.

I used the private key of Dev-One account.

## Setup

Create a Nextjs app within TypeScript:
`npx create-next-app@latest --ts`

Install Truffle:
`npm install -g truffle` No, it cannot be installed as dev-deoendencies.  
`truffle init`

http://trufflesuite.com/docs

Create an ETH address and store the secret key in a variable (load it from secrets file).  
Create an Infura Web3 (ex. Ethereum) project and store the e key in a variable (project key, not the secret key).

Install "@truffle/hdwallet-provider"

Install @openzeppelin contracts:
`yarn add @openzeppelin/contracts -D`
https://docs.openzeppelin.com

## Compile

Truffle compile will create teh artifacts in _build/contracts_.

## Deploy

The deploy for Truffle ia always a migration.  
I migration will deploy contracts that have their reference changed.

First migration output:

```
Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_initial_deploy.js
===================

   Deploying 'Token'
   -----------------
   > transaction hash:    0xd3fb138416c44b029219082745864852cce81264541f0377b645e67a7fc5135e
   > Blocks: 1            Seconds: 12
   > contract address:    0x7F7aE0141E4D09e77198b4Bb9e280e2088C5eee8
   > block number:        7740289
   > block timestamp:     1665333384
   > account:             0x3A61549d160Ff8ff6E833500F551457F8b957111
   > balance:             0.165310372485841788
   > gas used:            1179851 (0x1200cb)
   > gas price:           2.500000012 gwei
   > value sent:          0 ETH
   > total cost:          0.002949627514158212 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 7740290)
   > confirmation number: 2 (block: 7740291)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.002949627514158212 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.002949627514158212 ETH

   -------------------------------
   > confirmation number: 1 (block: 7740290)
```

Contract address: 0x7F7aE0141E4D09e77198b4Bb9e280e2088C5eee8

Admin account (Dev-One) has 1000000 "01C" tokens.

## Get the ABI

To complete some tasks you need the ABI of the contract.  
In Etherscan the Contract address page shows the ABI in some place.  
In Goerli it doesn't !

To create the ABI from the contract source:  
`solcjs filename.sol --abi`

solcjs ./contracts/Token.sol --abi
Error: "solc is not recognized"

You need `solc` installed globally or a devdependency
`npm install -g solc`
`npm ls -g --depth=0`
