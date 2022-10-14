import type { NextApiRequest, NextApiResponse } from "next"
import TokenInfo from "../../models/TokenInfo"

export default function handler(req: NextApiRequest, res: NextApiResponse<TokenInfo>) {
  const tokenInfo = {
    Contract: "---------------",
    Name: "Token AAA",
    Symbol: "AAA",
    TotalSupply: 12345,
  }

  res.status(200).json(tokenInfo)
}
