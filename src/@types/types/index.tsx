export type CarouselType = {
  id: number;
  image: string;
};

export type ShopCardType = CarouselType & {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};
