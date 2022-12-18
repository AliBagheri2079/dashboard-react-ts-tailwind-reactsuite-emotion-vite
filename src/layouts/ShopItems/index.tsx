import { FC, useEffect, useTransition } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import Content from 'rsuite/Content';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';

import ShopCardItem from '@/components/ShopCard/Item';
import ShopCardPlaceholder from '@/components/ShopCard/Placeholder';
import { getShopItems } from '@/services/getShopItems';
import { shopItemsState } from '@/store/recoil/atom';

const ShopItems: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [shopItem, setShopItem] = useRecoilState(shopItemsState);
  const resetShopItem = useResetRecoilState(shopItemsState);

  useEffect(() => {
    startTransition(() => {
      getShopItems().then((item) => setShopItem(item));
    });

    return () => resetShopItem();
  }, []);

  return (
    <Content>
      <Grid fluid>
        <Row>
          {isPending ? (
            <ShopCardPlaceholder />
          ) : (
            <ShopCardItem items={shopItem} />
          )}
        </Row>
      </Grid>
    </Content>
  );
};

export default ShopItems;
