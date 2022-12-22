import { FC } from 'react';

import CoinCard from '@/components/CoinCard';
import { CoinsListType } from '@/@types/types';

type CoinsListProps = {
  coinsList: CoinsListType[] | null | undefined;
};

const CoinsListCard: FC<CoinsListProps> = ({ coinsList }) => {
  return (
    <div className="flex flex-wrap items-center justify-between px-2">
      {coinsList
        ?.filter((coins, index) => index < 6)
        .map(
          ({
            id,
            ath,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
          }) => (
            <div key={ath} className="h-72 mx-0.5 my-3 flex-auto">
              <CoinCard
                id={id}
                image={image}
                name={name}
                symbol={symbol}
                current_price={current_price}
                price_change_percentage_24h={price_change_percentage_24h}
              />
            </div>
          )
        )}
    </div>
  );
};

export default CoinsListCard;
