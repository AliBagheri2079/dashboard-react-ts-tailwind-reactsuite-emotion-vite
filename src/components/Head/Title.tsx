import React from 'react';

type Props = {
  username: string;
};

const HeadTitle = (props: Props) => {
  return (
    <h5 className="header__title">
      Welcome back, <em>{props.username}</em>!
    </h5>
  );
};

export default HeadTitle;
