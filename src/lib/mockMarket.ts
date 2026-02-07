export type MarketStats = {
  floorPrice: string
  floorDelta: string
  topOffer: string
  vol24h: string
  sales24h: string
  allVol: string
  marketCap: string
  listedSupply: string
  listedPct: string
  owners: string
}

export const mockMarketStats: MarketStats = {
  floorPrice: '0 ETH',
  floorDelta: '0%',
  topOffer: '0 WETH',
  vol24h: '0 ETH',
  sales24h: '0',
  allVol: '0 ETH',
  marketCap: '$1K',
  listedSupply: '3 / 5,555',
  listedPct: '0%',
  owners: '3',
}
