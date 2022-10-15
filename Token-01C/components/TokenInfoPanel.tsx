import axios from "axios"
import { useEffect, useState } from "react"
import TokenInfo from "../models/TokenInfo"
import { ConnectInfo, ContractData, loadTokenInfo } from "../managers/ethereumManager"
import detectEthereumProvider from "@metamask/detect-provider"
import { BigNumber } from "ethers"


const getTokenInfo = async () => {

    const contractData:ContractData = await loadTokenInfo("Test")
    return contractData
/*
    try {        
        const { data, status } = await axios.get("/api/tokenInfo.api")
        if(data.success)
        {
            //console.log(JSON.stringify(<data className="d"></data>, null, 4))
            return data.data
        }
        else {
            const errorMessage = data.errorMessage
            alert(errorMessage)
        }
    }
    catch (error)
    {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message)
          return error.message
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred'
        }
    }*/
}


type ConnectionState = "Connected" | "Unconnected" | "Connecting" | "Unknown"

const tokenInfoPanel = () => {

    const [tokenInfo, setTokenInfo] = useState<TokenInfo>()
    const [provider, setProvider] = useState<detectEthereumProvider.MetaMaskEthereumProvider|null>()

    const [connectionStatus, setConnectionStatus] = useState("unknown")
    const [connectioState, setConnectionState] = useState<ConnectionState>("Unknown")

    const [tokenData, SetTokenData] = useState<ContractData>()

    useEffect(() => {
        getTokenInfo().then(data => {
            SetTokenData(data)
        }).catch(error => {
            console.error(`Failed to load Token info, ${error}`)
        } )

        //loadProvider()
        //    .then(provider => { setProvider(provider)})
        //    .catch(error => {  setProvider(null); console.error(`Failed to load MetaMaskEthereumProvider. ${error}`)})
    }, [])

    useEffect(() => {
        if(provider === null || provider === undefined)
            setConnectionStatus("Cannot use Ethereum provider. Open Metamask.")
        else {            
            //window.ethereum.
            provider.on("connect", (connectInfo:ConnectInfo) => {
                setConnectionStatus(`Connected to ${connectInfo.chainId}`)
                console.log(`Connected to ${connectInfo.chainId}`)})
        }

    }, [provider])

    const tryToConnect = async () => {
        setConnectionState("Connecting")
        /*
        const provider = await __loadProvider()

        if(provider)
        {            
            provider.on("connect", (connectionInfo) => {
                setConnectionState("Connected")
                setConnectionStatus(`Connected to ${connectionInfo.chainId}`)
            })
        }
        else 
            setConnectionState("Unknown")
            */
    }

    return <div className="panel" data-testid="tokenInfo-panel">
        <h2 className="panel-title">Token Info</h2>
        { tokenInfo === undefined ? <>loading...</> :         
        <div className="columns-2">       
            <div>Contract</div>
            <div>{tokenInfo.Contract}</div>
    
            <div>Name</div>
            <div>{tokenInfo.Name}</div>

            <div>Symbol</div>
            <div>{tokenInfo.Symbol}</div>
                      
            <div>Total supply</div>
            <div>{tokenInfo.Name}</div>
            
        </div>}

        {tokenData === undefined ? <>loading...</> :  
        <div className="columns-2">   
            <div>Address</div>
            <div>{tokenData.address}</div>   

            <div>Symbol</div>
            <div>{tokenData.symbol}</div>   

            <div>Name</div>
            <div>{tokenData.name}</div>
        </div>}

        <div>Connection status: {connectionStatus}</div>
        <div>Connection state: {connectioState} 
        {connectioState == "Unknown" && <div className="float-left" onClick={ tryToConnect}>Try to connect</div>}
        </div>
    </div>
}

export default tokenInfoPanel