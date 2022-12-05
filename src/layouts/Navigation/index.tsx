import { FC } from 'react';

import { Menu } from './styled';
import NavbarBrand from '@/components/Navbar/Brand';
import NavbarItems from '@/components/Navbar/Items';

const Navigation: FC = () => {
  return (
    <Menu className="navbar navbar--laptop">
      <NavbarBrand brandName="eProduct" />
      <NavbarItems />
    </Menu>
  );
};

export default Navigation;
