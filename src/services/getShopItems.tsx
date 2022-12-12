import { ShopCardType } from '@/@types/types';

export const getShopItems = async (): Promise<ShopCardType[]> => {
  const data = await fetch('https://fakestoreapi.com/products');
  const items = await data.json();

  return items;
};
