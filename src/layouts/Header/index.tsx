import { FC } from 'react';

import { HeaderItems } from './styled';
import HeadTitle from '@/components/Head/Title';
import HeadController from '@/components/Head/Controller';

const Header: FC = () => {
  return (
    <HeaderItems>
      <HeadTitle username="Ali Bagheri" />
      <HeadController />
    </HeaderItems>
  );
};

export default Header;
