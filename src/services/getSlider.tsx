import { SliderType } from '@/@types/types';

export const getSlider = async (): Promise<SliderType[]> => {
  const data = await fetch('https://fakestoreapi.com/products?limit=5');
  const items = await data.json();

  return items;
};
