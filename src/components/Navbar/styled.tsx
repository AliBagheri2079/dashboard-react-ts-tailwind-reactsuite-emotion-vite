import styled from '@emotion/styled';

const Brand = styled('li')`
  margin: 20px 20px 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
`;

const Item = styled('li')`
  .navbar__items {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    font-size: 1.2rem;
    border-radius: 2rem 0 0 2rem;
    padding-inline-start: 25px;
    text-transform: capitalize;
    height: 50px;

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

    &:hover,
    &.active {
      background-color: ${(props) => props.theme.color.light};
      color: ${(props) => props.theme.color.primary};

      &::before {
        box-shadow: 35px -35px 0 10px ${(props) => props.theme.color.light};
      }

      &::after {
        box-shadow: 35px 35px 0 10px ${(props) => props.theme.color.light};
      }
    }
  }
`;

export { Brand, Item };
