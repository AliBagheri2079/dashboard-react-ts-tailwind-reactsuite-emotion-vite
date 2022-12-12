import { FC, useEffect, useTransition } from 'react';
import { observer } from 'mobx-react-lite';
import Content from 'rsuite/Content';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';

import ShopCardItem from '@/components/ShopCard/Item';
import ShopCardPlaceholder from '@/components/ShopCard/Placeholder';
import shopItemsStore from '@/store/mobx/ShopItemsStore';

const ShopItems: FC = () => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      shopItemsStore.loadShopItems();
    });
  }, []);

  return (
    <Content>
      <Grid fluid>
        <Row>
          {isPending ? (
            <ShopCardPlaceholder />
          ) : (
            <ShopCardItem items={shopItemsStore.shopItemsList} />
          )}
        </Row>
      </Grid>
    </Content>
  );
};

export default observer(ShopItems);
