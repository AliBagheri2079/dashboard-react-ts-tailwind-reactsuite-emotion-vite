import { atom } from 'jotai';
import { CoinChartType, CoinsListType } from '@/@types/types';

export const coinsList = atom<CoinsListType[]>([]);
export const coinMarketChart = atom<CoinChartType>({} as CoinChartType);
