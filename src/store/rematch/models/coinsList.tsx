import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { CoinsListType } from '@/@types/types';
import { getCoinsList } from '@/services/getCoinsList';

export const coinsList = createModel<RootModel>()({
  state: [] as CoinsListType[],
  reducers: {
    SET_COINS_LIST: (state, payload) => {
      return {
        ...state,
        coinsList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getCoinsListData() {
      const data = await getCoinsList({
        perPage: 10,
        page: 1,
        priceChangePercentage: '24h',
      });
      dispatch.coinsList.SET_COINS_LIST(data);
    },
  }),
});
