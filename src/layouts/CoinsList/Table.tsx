import React, { FC } from 'react';
import { Avatar, Button, Table } from 'flowbite-react';
import { useAtom } from 'jotai';

import { changePriceFormat } from '@/utils/changePriceFormat';
import { coinsList as coinsListAtom } from '@/store/jotai/atom';

const CoinsListTable: FC = () => {
  const [coinsList] = useAtom(coinsListAtom);

  return (
    <Table hoverable={true} className="mt-3 mb-2">
      <Table.Head>
        <Table.HeadCell>Coin</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Highest Today</Table.HeadCell>
        <Table.HeadCell>Lowest Today</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Price change today</span>
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {coinsList?.map(
          ({
            ath,
            image,
            name,
            symbol,
            current_price,
            high_24h,
            low_24h,
            price_change_percentage_24h,
          }) => (
            <Table.Row key={ath}>
              <Table.Cell className="whitespace-nowrap font-medium">
                <Avatar
                  className="!justify-start"
                  img={image}
                  alt={name}
                  placeholderInitials={symbol}
                  rounded={true}
                >
                  <div className="space-y-1 font-medium">
                    <div>
                      <strong className="text-base capitalize font-bold">
                        {name}
                      </strong>
                    </div>
                    <div className="text-sm uppercase text-gray-500 dark:text-gray-400">
                      <span>{symbol}</span>
                    </div>
                  </div>
                </Avatar>
              </Table.Cell>

              <Table.Cell>{changePriceFormat(current_price)}</Table.Cell>
              <Table.Cell>{high_24h && changePriceFormat(high_24h)}</Table.Cell>
              <Table.Cell>{low_24h && changePriceFormat(low_24h)}</Table.Cell>

              <Table.Cell className="text-sm">
                <Button gradientDuoTone="cyanToBlue">
                  {price_change_percentage_24h}%
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  );
};

export default CoinsListTable;
