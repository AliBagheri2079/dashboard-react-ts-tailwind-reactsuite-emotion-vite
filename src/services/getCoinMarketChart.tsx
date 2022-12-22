import { CoinChartType } from '@/@types/types';

type CoinChartProp = {
  id: string;
  vsCurrency: string;
  days: number;
};

export const getCoinMarketChart = async ({
  id,
  vsCurrency,
  days,
}: CoinChartProp): Promise<CoinChartType> => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vsCurrency}&days=${days}`
  );
  const items = await data.json();

  return items;
};
