import axios from "axios"
import { useEffect, useState } from "react"
import TokenInfo from "../models/TokenInfo"

const getTokenInfo = async () => {
    try {
        const { data, status } = await axios.get("/api/tokenInfo")
        console.log(JSON.stringify(data, null, 4))
        console.log('response status is: ', status)
        return data
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
    }
}

const tokenInfoPanel = () => {

    const [tokenInfo, setTokenInfo] = useState<TokenInfo>()

    useEffect(() => {
        getTokenInfo().then(data => {
            setTokenInfo(data)
        })

    }, [])

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
    </div>
}

export default tokenInfoPanel