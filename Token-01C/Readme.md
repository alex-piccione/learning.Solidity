# Token-01C

Project using Truffle to deploy a token contract.

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
