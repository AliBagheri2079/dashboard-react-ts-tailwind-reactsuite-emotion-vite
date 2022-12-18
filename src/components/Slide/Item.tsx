import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import Carousel from 'rsuite/Carousel';

import { SliderType } from '@/@types/types';
import { allSliderState } from '@/store/recoil/selector';

type Props = {
  items: SliderType[];
};

const SlideItem: FC<Props> = ({ items }) => {
  const sliders = useRecoilValue(allSliderState);

  return (
    <Carousel
      key="bar"
      placement="bottom"
      shape="bar"
      autoplay
      className="custom-slider"
      style={{ height: '100%' }}
    >
      {sliders?.map(({ id, image }) => (
        <img key={id} src={image} />
      ))}
    </Carousel>
  );
};

export default SlideItem;
