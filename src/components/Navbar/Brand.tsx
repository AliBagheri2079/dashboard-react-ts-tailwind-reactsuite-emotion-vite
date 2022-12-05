import { Brand } from './styled';
import { BuildingLibrary } from '../Icons';

type Props = {
  brandName: string;
};

const NavbarBrand = (props: Props) => {
  return (
    <Brand className="navbar__brand">
      <BuildingLibrary />
      <strong className="nav-brand">{props.brandName}</strong>
    </Brand>
  );
};

export default NavbarBrand;
