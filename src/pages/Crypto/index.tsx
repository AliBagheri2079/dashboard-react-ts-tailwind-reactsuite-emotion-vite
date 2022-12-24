import { FC, useEffect, useTransition } from 'react';
import { useAtom } from 'jotai';

import CoinsListTable from '@/layouts/CoinsList/Table';
import CoinsListCard from '@/layouts/CoinsList/Card';
import CoinCardPlaceholder from '@/components/CoinCard/Placeholder';
import { coinsList as coinsListAtom } from '@/store/jotai/atom';
import { getCoinsList } from '@/services/getCoinsList';

const Crypto: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [coinsList, setCoinsList] = useAtom(coinsListAtom);

  useEffect(() => {
    startTransition(() => {
      getCoinsList({
        perPage: 10,
        page: 1,
        priceChangePercentage: '24h',
      }).then((coin) => setCoinsList(coin));
    });
  }, []);

  return (
    <>
      {isPending ? (
        <CoinCardPlaceholder />
      ) : (
        <>
          <CoinsListCard />
          <CoinsListTable />
        </>
      )}
    </>
  );
};

export default Crypto;
