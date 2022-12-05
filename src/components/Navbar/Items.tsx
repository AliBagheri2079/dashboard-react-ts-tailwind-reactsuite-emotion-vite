import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Item } from './styled';
import { Button } from '../Button';
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
  isActive?: boolean;
};

const NavbarItems: FC = () => {
  const [items] = useState<NavItem[] | null>([
    {
      id: uuidv4(),
      path: '/',
      name: 'home',
      icon: <ModernHome />,
      isActive: true,
    },
    {
      id: uuidv4(),
      path: '/stock',
      name: 'stock',
      icon: <CurrencyDollar />,
      isActive: true,
    },
    {
      id: uuidv4(),
      path: '/kanban',
      name: 'kanban',
      icon: <SquareStack />,
      isActive: true,
    },
    {
      id: uuidv4(),
      path: '/message',
      name: 'message',
      icon: <OpenMessage />,
      isActive: false,
    },

    {
      id: uuidv4(),
      path: '/setting',
      name: 'setting',
      icon: <Cog />,
      isActive: false,
    },
    {
      id: uuidv4(),
      path: '/logout',
      name: 'logout',
      icon: <RightOnRectangle />,
      isActive: false,
    },
  ]);

  return (
    <>
      {items?.map(
        ({ id, path, name, icon, isActive }): ReactElement => (
          <Item key={id} className="navbar__items">
            <Button
              as="a"
              href={path}
              disabled={!isActive && true}
              fontSize="1.2rem"
            >
              {icon}
              <span className="nav-item">{name}</span>
            </Button>
          </Item>
        )
      )}
    </>
  );
};
export default NavbarItems;
