import { useDarkMode } from 'usehooks-ts';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { ControllerWrapper } from './styled';
import { Button } from '../Button';
import { UserCircle, VerticalEllipsis, Wifi } from '../Icons';

const HeadController = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <ControllerWrapper>
      <Button>
        <Wifi />
      </Button>
      <Button onClick={toggle}>
        {isDarkMode ? (
          <SunIcon width={20} height={20} />
        ) : (
          <MoonIcon width={20} height={20} />
        )}
      </Button>
      <Button>
        <UserCircle />
      </Button>
      <Button>
        <VerticalEllipsis />
      </Button>
    </ControllerWrapper>
  );
};

export default HeadController;
