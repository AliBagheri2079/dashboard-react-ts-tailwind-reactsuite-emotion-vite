import styled from '@emotion/styled';

const Container = styled('div')`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  gap: 5px 5px;

  grid-template-columns: minmax(6vw, 16vw) 1fr;
  grid-template-rows: minmax(5vh, 10vh) 1fr;
  grid-template-areas:
    'nav header'
    'nav section';

  height: 100vh;
  overflow: hidden;
`;

const Nav = styled('nav')`
  grid-area: nav;
  overflow: auto;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.lightGray};
`;

const Head = styled('header')`
  grid-area: header;
`;

const Section = styled('section')`
  grid-area: section;
  overflow: auto;
`;

export { Container, Nav, Head, Section };
