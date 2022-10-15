import detectEthereumProvider from "@metamask/detect-provider"
import { ethers } from "ethers"

// https://chainlist.org/
export type chains = [{ Id: 1; Name: "Ethereum Mainnet" }, { Id: 5; Name: "Goerli Test Network" }]

export const tryGetProvider = async () => {
  const provider = await detectEthereumProvider()
  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    //startApp(provider); // initialize your app
  } else {
    console.log("Please install MetaMask!")
  }
  return provider
}

export type network = "Main" | "Test"
const mainnetChainId = 1
const goerliChainId = 5
const goerliContractAddress = "0x63D4cDD2840fa676EE7CAb330bD270D03a458522" // "0x4a9BD8abcFcE6425dC86Bb2bC164Cc2Fbc75259F"
const adminAddress = "0x3a61549d160ff8ff6e833500f551457f8b957111"

export interface ContractData {
  address: string
  symbol: string
  name: string
  ethFunds: ethers.BigNumber
}

export const loadTokenInfo = async (network: network) => {
  if (network == "Main") throw new Error("MainNet still not available")

  const goerliNetwork = ethers.providers.getNetwork(goerliChainId)
  const provider = ethers.getDefaultProvider(goerliNetwork)

  const balance = await provider.getBalance(goerliContractAddress)

  const contractInterface: ethers.ContractInterface = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ]

  const contract = new ethers.Contract(goerliContractAddress, contractInterface, provider)
  const symbol = await contract.symbol()
  const name = await contract.name()

  // to get the "symbol()" method called
  // where the hell is documented this?
  const transaction = {
    to: goerliContractAddress,
    data: ethers.utils.id("symbol()").substring(0, 10),
  }

  const result = await provider.call(transaction)

  const contractData: ContractData = {
    address: goerliContractAddress,
    symbol,
    name,
    ethFunds: balance,
  }

  return contractData
}

/*** from https://docs.metamask.io/guide/ethereum-provider.html#events ***/
export interface ConnectInfo {
  chainId: string
}

export default {}
