import { Container, CustomProvider } from 'rsuite';
import { useDocumentTitle } from 'usehooks-ts';

import Slider from '@/layouts/Slider';
import TagSelect from '@/components/TagSelect';
import ShopItems from '@/layouts/ShopItems';
import './index.css';

const Products = () => {
  useDocumentTitle('Home');

  return (
    <CustomProvider>
      <Container>
        <Slider />
        <TagSelect />
        <ShopItems />
      </Container>
    </CustomProvider>
  );
};

export default Products;
