import styled from '@emotion/styled';

export const Menu = styled('menu')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  list-style: none;
  padding-inline-start: 10px;

  @media (max-width: ${(props) => props.theme.size.xl}px) {
    & .nav-item,
    & .nav-brand {
      display: none;
    }
  }
`;
