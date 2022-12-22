export type SliderType = {
  id: number;
  image: string;
};

export type ShopCardType = SliderType & {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CoinsListType = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;

  ath?: number;
  high_24h?: number;
  low_24h?: number;
  market_cap?: number;
  ath_change_percentage?: number;
  price_change_percentage_24h?: number;
  // ath_date: Date;
  // atl: number;
  // atl_change_percentage: number;
  // atl_date: Date;
  // circulating_supply: number;
  // fully_diluted_valuation: number;
  // last_updated: Date;
  // market_cap_change_24h: number;
  // market_cap_change_percentage_24h: number;
  // market_cap_rank: number;
  // max_supply: number;
  // price_change_24h: number;
  // price_change_percentage_24h_in_currency: number;
  // roi: object;
  // total_volume: number;
};

export type CoinChartType = {
  prices: Array<number>;
  market_caps: Array<number>;
  total_volumes: Array<number>;
};
