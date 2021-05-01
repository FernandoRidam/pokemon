import React, {
  useState,
} from 'react';

import {
  Container,
  Divider,
} from '@material-ui/core';

import {
  Footer,
  Header,
  PokeList,
  PokeCard,
} from '../../components';

import useStyles from './styles';

export function Main() {
  const Styles = useStyles();

  return (
    <Container maxWidth={ false } className={ Styles.container }>
      <Container maxWidth="md" className={ Styles.body }>
        <Header />

        <Divider />

        <PokeList>
          <PokeCard />

          <PokeCard />

          <PokeCard />

          <PokeCard />

          <PokeCard />

          <PokeCard />
        </PokeList>

        <Footer />
      </Container>
    </Container>
  );
};
