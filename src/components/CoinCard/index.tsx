import { FC } from 'react';
import { Card } from 'flowbite-react';

import CoinCardAvatar from './Avatar';
import CoinCardChart from './Chart';
import CoinCardPrice from './Price';
import { CoinsListType } from '@/@types/types';

const CoinCard: FC<CoinsListType> = ({
  image,
  name,
  symbol,
  id,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <Card>
      <div>
        <CoinCardAvatar image={image} name={name} symbol={symbol} />
      </div>

      <div className="w-full h-36">
        <CoinCardChart id={id} />
      </div>

      <div className="flex items-center justify-between h-8">
        <CoinCardPrice
          currentPrice={current_price}
          priceChangePercentageToday={price_change_percentage_24h}
        />
      </div>
    </Card>
  );
};

export default CoinCard;
