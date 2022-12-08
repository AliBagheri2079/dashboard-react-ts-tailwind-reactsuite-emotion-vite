import { FC, useEffect, useState, useTransition } from 'react';
import Content from 'rsuite/Content';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';

import { ShopCardType } from '@/@types/types';
import ShopCardItem from '@/components/ShopCard/Item';
import ShopCardPlaceholder from '@/components/ShopCard/Placeholder';

const ShopItems: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState<ShopCardType[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const items = await data.json();
      startTransition(() => {
        setProducts(items);
      });
    };
    getAllProducts();

    return () => {
      //TODO: cancell request
    };
  }, []);

  return (
    <Content>
      <Grid fluid>
        <Row>
          {isPending ? (
            <ShopCardPlaceholder />
          ) : (
            <ShopCardItem items={products} />
          )}
        </Row>
      </Grid>
    </Content>
  );
};

export default ShopItems;
