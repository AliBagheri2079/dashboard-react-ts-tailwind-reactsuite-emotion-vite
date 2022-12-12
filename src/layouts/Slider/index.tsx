import { FC, useEffect, useTransition } from 'react';
import { observer } from 'mobx-react-lite';
import Header from 'rsuite/Header';
import FlexboxGrid from 'rsuite/FlexboxGrid';
import Col from 'rsuite/Col';

import SlidePlaceholder from '@/components/Slide/Placeholder';
import SlideItem from '@/components/Slide/Item';
import sliderStore from '@/store/mobx/SliderStore';

const Slider: FC = () => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      sliderStore.loadSlider();
    });
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
          {isPending ? (
            <SlidePlaceholder />
          ) : (
            <SlideItem items={sliderStore.sliderItem} />
          )}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Header>
  );
};

export default observer(Slider);
