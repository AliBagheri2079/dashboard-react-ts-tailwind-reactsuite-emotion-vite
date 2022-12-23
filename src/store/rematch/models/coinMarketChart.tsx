import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { CoinChartType } from '@/@types/types';
import { getCoinMarketChart } from '@/services/getCoinMarketChart';

export const coinMarketChart = createModel<RootModel>()({
  state: {} as CoinChartType,
  reducers: {
    SET_COIN_CHART: (state, payload) => {
      return {
        ...state,
        coinMarketChart: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getCoinMarketChartData(id: string) {
      const data = await getCoinMarketChart({ id, vsCurrency: 'usd', days: 1 });
      dispatch.coinMarketChart.SET_COIN_CHART(data);
    },
  }),
});
