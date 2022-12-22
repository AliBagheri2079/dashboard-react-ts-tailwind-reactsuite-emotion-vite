import { CoinsListOrder } from '@/@types/enum';
import { CoinsListType } from '@/@types/types';

type CoinsListProp = {
  vsCurrency?: string;
  ids?: string;
  order?: CoinsListOrder;
  perPage: number;
  page: number;
  sparkline?: boolean;
  priceChangePercentage?: string;
};

export const getCoinsList = async ({
  vsCurrency = 'usd',
  ids = '',
  order = CoinsListOrder.market_cap_desc,
  perPage = 100,
  page = 1,
  sparkline = false,
  priceChangePercentage = '24h',
}: CoinsListProp): Promise<CoinsListType[]> => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=${ids}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePercentage}`
  );
  const items = await data.json();

  return items;
};
