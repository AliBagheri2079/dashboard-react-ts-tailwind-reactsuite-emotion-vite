import { ControllerWrapper } from './styled';
import { Button } from '../Button';
import { Sun, UserCircle, VerticalEllipsis, Wifi } from '../Icons';

const HeadController = () => {
  return (
    <ControllerWrapper>
      <Button>
        {/* //TODO: complete at the end of project */}
        <Wifi />
      </Button>
      <Button>
        {/* //TODO: complete at the end of project */}
        <Sun />
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
