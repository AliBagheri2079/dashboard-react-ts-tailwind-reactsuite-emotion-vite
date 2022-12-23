import { FC, useEffect, useTransition } from 'react';
import { connect } from 'react-redux';

import CoinsListTable from '@/layouts/CoinsList/Table';
import CoinsListCard from '@/layouts/CoinsList/Card';
import CoinCardPlaceholder from '@/components/CoinCard/Placeholder';
import { RootState, Dispatch } from '@/store/rematch';

const mapState = (state: RootState) => ({
  coinsList: state.coinsList,
});
const mapDispatch = (dispatch: Dispatch) => ({
  getCoinsListData: () => dispatch.coinsList.getCoinsListData(),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const Crypto: FC<Props> = (props) => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      props.getCoinsListData();
    });
  }, []);

  return (
    <>
      {isPending ? (
        <CoinCardPlaceholder />
      ) : (
        <>
          <CoinsListCard coinsList={props.coinsList.coinsList} />
          <CoinsListTable coinsList={props.coinsList.coinsList} />
        </>
      )}
    </>
  );
};

export default connect(mapState, mapDispatch)(Crypto);
