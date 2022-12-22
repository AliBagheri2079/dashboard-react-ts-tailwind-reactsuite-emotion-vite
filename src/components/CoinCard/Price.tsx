import { FC } from 'react';
import { changePriceFormat } from '@/utils/changePriceFormat';

type CoinPriceProp = {
  currentPrice: number;
  priceChangePercentageToday: number | undefined;
};

const CoinCardPrice: FC<CoinPriceProp> = ({
  currentPrice,
  priceChangePercentageToday,
}) => {
  return (
    <>
      <div className="font-medium text-xl">
        <strong>{changePriceFormat(currentPrice)}</strong>
      </div>

      <div
        className={`text-sm ${
          priceChangePercentageToday && priceChangePercentageToday >= 0
            ? 'text-green-400'
            : 'text-red-400'
        }`}
      >
        <span>{priceChangePercentageToday}%</span>
      </div>
    </>
  );
};

export default CoinCardPrice;
