import { FC, useEffect, useState, useTransition } from 'react';
import Header from 'rsuite/Header';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Col from 'rsuite/Col';

import { CarouselType } from '@/@types/types';
import SlidePlaceholder from '@/components/Slide/Placeholder';
import SlideItem from '@/components/Slide/Item';

const Slider: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [carousel, setCarousel] = useState<CarouselType[]>([]);

  useEffect(() => {
    const getCarouselItems = async () => {
      const data = await fetch('https://fakestoreapi.com/products?limit=5');
      const items = await data.json();

      startTransition(() => {
        setCarousel(items);
      });
    };
    getCarouselItems();

    return () => {
      //TODO: cancell request
    };
  }, []);

  return (
    <Header>
      <FlexboxGrid
        justify="space-around"
        align="middle"
        style={{ height: 300 }}
      >
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          md={18}
          lg={12}
          style={{ height: '100%' }}
        >
          {isPending ? <SlidePlaceholder /> : <SlideItem items={carousel} />}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Header>
  );
};

export default Slider;
