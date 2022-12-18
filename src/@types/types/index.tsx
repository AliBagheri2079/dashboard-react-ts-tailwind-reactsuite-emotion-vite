export type SliderType = {
  id: number;
  image: string;
};

export type ShopCardType = SliderType & {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};
