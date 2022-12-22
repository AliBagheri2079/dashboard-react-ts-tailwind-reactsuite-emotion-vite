import { FC } from 'react';
import { Avatar } from 'flowbite-react';

type CoinAvatarProp = {
  image: string;
  name: string;
  symbol: string;
};

const CoinCardAvatar: FC<CoinAvatarProp> = ({ image, name, symbol }) => {
  return (
    <Avatar
      className="!justify-start"
      img={image}
      alt={name}
      placeholderInitials={symbol}
      rounded={true}
    >
      <div className="space-y-1 font-medium">
        <div>
          <strong className="text-base capitalize font-bold">{name}</strong>
        </div>
        <div className="text-sm uppercase text-gray-500 dark:text-gray-400">
          <span>{symbol}</span>
        </div>
      </div>
    </Avatar>
  );
};

export default CoinCardAvatar;
