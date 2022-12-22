import { useEffect, useState, useTransition } from 'react';

import { getCoinsList } from '@/services/getCoinsList';
import { CoinsListType } from '@/@types/types';
import CoinsListTable from '@/layouts/CoinsList/Table';
import CoinsListCard from '@/layouts/CoinsList/Card';
import CoinCardPlaceholder from '@/components/CoinCard/Placeholder';

const Crypto = () => {
  const [coinsList, setCoinsList] = useState<CoinsListType[] | null>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getCoinsList({
        perPage: 10,
        page: 1,
        priceChangePercentage: '24h',
      }).then((coins) => {
        setCoinsList(coins);
      });
    });
  }, []);

  return (
    <>
      {isPending ? (
        <CoinCardPlaceholder />
      ) : (
        <>
          <CoinsListCard coinsList={coinsList} />
          <CoinsListTable coinsList={coinsList} />
        </>
      )}
    </>
  );
};

export default Crypto;
