import { Models } from '@rematch/core';
import { coinsList } from './coinsList';
import { coinMarketChart } from './coinMarketChart';

export interface RootModel extends Models<RootModel> {
  coinsList: typeof coinsList;
  coinMarketChart: typeof coinMarketChart;
}

export const models: RootModel = { coinsList, coinMarketChart };
