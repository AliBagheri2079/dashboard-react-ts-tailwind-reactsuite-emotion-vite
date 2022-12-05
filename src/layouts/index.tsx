import React from 'react';

import { Container, Nav, Head, Section } from './styled';
import Navigation from './Navigation';
import Header from './Header';

type Prop = {
  children: React.ReactElement;
};

const Layout = ({ children }: Prop) => {
  return (
    <Container>
      <Nav>
        <Navigation />
      </Nav>

      <Head>
        <Header />
      </Head>

      <Section>{children}</Section>
    </Container>
  );
};

export default Layout;
