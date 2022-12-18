import { FC, useEffect, useTransition } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Header from 'rsuite/Header';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Col from 'rsuite/Col';

import SlidePlaceholder from '@/components/Slide/Placeholder';
import SlideItem from '@/components/Slide/Item';
import { getSlider } from '@/services/getSlider';
import { sliderState } from '@/store/recoil/atom';

const Slider: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [sliderItem, setSliderItem] = useRecoilState(sliderState);
  const resetSliderItem = useResetRecoilState(sliderState);

  useEffect(() => {
    startTransition(() => {
      getSlider().then((slide) => setSliderItem(slide));
    });

    return () => resetSliderItem();
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
          {isPending ? <SlidePlaceholder /> : <SlideItem items={sliderItem} />}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Header>
  );
};

export default Slider;
