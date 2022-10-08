# (Solidity) Hardhat project

From: https://blog.oliverjumpertz.dev/how-to-set-up-a-solidity-project-and-create-your-first-smart-contract

The most prominent Solidity tooling is based on JavaScript. It runs on Node and requires an npm project.
`npm init -y`

Initialize and Hardhat project
`npx hardhat` and chose empty project

Install Hardhat package
`npm install --save-dev hardhat`

Create project file structure, create these 3 folders: _contracts_, _scripts_, _test_

Install Hardhat plugins:
`npm install --save-dev @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers ethereum-waffle chai ethers solidity-coverage`

## NPM scripts

- "build": "hardhat compile",
- "test": "hardhat test",
- "test:coverage": "hardhat coverage"
