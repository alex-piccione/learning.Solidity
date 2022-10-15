import type { NextApiRequest, NextApiResponse } from "next"
import TokenInfo from "../../models/TokenInfo"
//import detectEthereumProvider from "@metamask/detect-provider" // cannot be uses server side because it use "window" !!
import Web3 from "web3"
import api, { Response } from "./common"

//docs.metamask.io/guide/ethereum-provider.html

/*
if (Object.hasOwn(window, "ethereum")) {
  alert("OK")
} else {
  alert("KO")
}*/
/*
const loadWeb3 = async() => {
  if (object hasAttribute() window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // Request account access if needed
          await ethereum.enable();
          // Acccounts now exposed
          web3.eth.sendTransaction({ ... );
      } catch (error) {
          // User denied account access...
      }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
      web3.eth.sendTransaction({ ... });
  }
  // Non-dapp browsers...
  else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
};
*/

const loadToken = async () => {
  const tokenInfo = {
    Contract: "---------------",
    Name: "Token AAA",
    Symbol: "AAA",
    TotalSupply: 12345,
  }

  return tokenInfo
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Response<TokenInfo>>) {
  try {
    loadToken()
      .then((tokenInfo) => res.send(api.Ok(tokenInfo)))
      .catch((error) => {
        // don't return 500 because axios manage it as it likes and it makes difficult to understand what kind of error happened
        res.send(api.Error(`Failed to load Token info. ${error}`))
      })
  } catch (error) {
    res.send(api.Error(`Failed to try to load Token info. ${error}`))
  }
}
