import React from 'react';

type Props = {
  username: string;
};

const HeadTitle = (props: Props) => {
  return (
    <h3 className="header__title">
      Welcome back, <em>{props.username}</em>!
    </h3>
  );
};

export default HeadTitle;
