import { FC } from 'react';
import Col from 'rsuite/Col';
import Panel from 'rsuite/Panel';
import Rate from 'rsuite/Rate';
import Badge from 'rsuite/Badge';
import Button from 'rsuite/Button';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';

import { ShopCardType } from '@/@types/types';

type Props = {
  items: ShopCardType[];
};

const ShopCardItem: FC<Props> = ({ items }) => {
  return (
    <>
      {items.map(
        ({ id, title, price, category, description, image, rating }) => (
          <Col key={id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Panel shaded bordered bodyFill style={{ marginBlockEnd: '10px' }}>
              <div className="card">
                <div className="poster full-height-width">
                  <img src={image} className="full-height-width" />
                </div>

                <div className="details">
                  <Panel header={title}>
                    <div>
                      <Rate defaultValue={rating.rate} allowHalf size="sm" />
                      <del>{price} $</del>
                    </div>

                    <div style={{ marginBlock: '20px' }}>
                      <p>{description}</p>
                    </div>

                    <div>
                      <Badge content={<CheckOutlineIcon />}>
                        <Button>{category}</Button>
                      </Badge>
                    </div>
                  </Panel>
                </div>
              </div>
            </Panel>
          </Col>
        )
      )}
    </>
  );
};

export default ShopCardItem;
