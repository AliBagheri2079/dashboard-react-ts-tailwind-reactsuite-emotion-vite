import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';

import { Item } from './styled';
import {
  ModernHome,
  CurrencyDollar,
  SquareStack,
  OpenMessage,
  Cog,
  RightOnRectangle,
} from '../Icons';

type NavItem = {
  id: string;
  path: string;
  name: string;
  icon?: ReactElement;
};

const NavbarItems: FC = () => {
  const [items] = useState<NavItem[] | null>([
    {
      id: uuidv4(),
      path: '/',
      name: 'home',
      icon: <ModernHome />,
    },
    {
      id: uuidv4(),
      path: '/crypto',
      name: 'stock',
      icon: <CurrencyDollar />,
    },
    {
      id: uuidv4(),
      path: '/kanban',
      name: 'kanban',
      icon: <SquareStack />,
    },
    {
      id: uuidv4(),
      path: '/message',
      name: 'message',
      icon: <OpenMessage />,
    },

    {
      id: uuidv4(),
      path: '/setting',
      name: 'setting',
      icon: <Cog />,
    },
    {
      id: uuidv4(),
      path: '/logout',
      name: 'logout',
      icon: <RightOnRectangle />,
    },
  ]);

  return (
    <>
      {items?.map(
        ({ id, path, name, icon }): ReactElement => (
          <Item key={id}>
            <NavLink to={path} className="navbar__items">
              {icon}
              <span className="nav-item">{name}</span>
            </NavLink>
          </Item>
        )
      )}
    </>
  );
};
export default NavbarItems;
