import styled from '@emotion/styled';

const Brand = styled('li')`
  margin: 20px 25px 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
`;

const Item = styled('li')`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 50px;

  position: relative;
  border-radius: 2rem 0 0 2rem;
  padding-inline-start: 10px;
  text-transform: capitalize;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
  }

  &::after {
    top: -50px;
  }

  &::before {
    bottom: -50px;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.primary};

    &::before {
      box-shadow: 35px -35px 0 10px ${(props) => props.theme.color.light};
    }

    &::after {
      box-shadow: 35px 35px 0 10px ${(props) => props.theme.color.light};
    }
  }
`;

export { Brand, Item };
