import { atom } from 'recoil';
import { ShopCardType, SliderType } from '@/@types/types';

export const sliderState = atom({
  key: 'sliderState', // unique ID (with respect to other atoms/selectors)
  default: [] as SliderType[], // default value (aka initial value)
});

export const shopItemsState = atom({
  key: 'shopItemsState', // unique ID (with respect to other atoms/selectors)
  default: [] as ShopCardType[], // default value (aka initial value)
});
