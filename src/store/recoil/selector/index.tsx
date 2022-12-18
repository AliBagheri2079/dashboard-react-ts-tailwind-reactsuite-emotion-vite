import { selector } from 'recoil';
import { shopItemsState, sliderState } from '../atom';

export const allSliderState = selector({
  key: 'allSliderState',
  get: ({ get }) => {
    const slides = get(sliderState);
    return slides;
  },
});

export const allShopItemsState = selector({
  key: 'allShopItemsState',
  get: ({ get }) => {
    const shopItems = get(shopItemsState);
    return shopItems;
  },
});
