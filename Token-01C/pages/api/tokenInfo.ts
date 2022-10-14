import type { NextApiRequest, NextApiResponse } from "next"

type TokenInfo = {
  Name: string
  Symbol: string
  TotalSupply: Number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<TokenInfo>) {
  const tokenInfo = {
    Name: "Token AAA",
    Symbol: "AAA",
    TotalSupply: 12345,
  }

  res.status(200).json(tokenInfo)
}
