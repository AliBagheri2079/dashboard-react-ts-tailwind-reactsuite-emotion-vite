import { FC } from 'react';
import Carousel from 'rsuite/Carousel';

import { CarouselType } from '@/@types/types';

type Props = {
  items: CarouselType[];
};

const SlideItem: FC<Props> = ({ items }) => {
  return (
    <Carousel
      key="bar"
      placement="bottom"
      shape="bar"
      autoplay
      className="custom-slider"
      style={{ height: '100%' }}
    >
      {items?.map(({ id, image }) => (
        <img key={id} src={image} />
      ))}
    </Carousel>
  );
};

export default SlideItem;
