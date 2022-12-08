import { Container, CustomProvider } from 'rsuite';

import Slider from '@/layouts/Slider';
import TagSelect from '@/components/TagPicker';
import ShopItems from '@/layouts/ShopItems';
import './index.css';

const Products = () => {
  return (
    // TODO: enable toggle mode with custom hook

    <CustomProvider theme="dark">
      <Container>
        <Slider />
        <TagSelect />
        <ShopItems />
      </Container>
    </CustomProvider>
  );
};

export default Products;
