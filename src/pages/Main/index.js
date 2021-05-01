import React, {
  useEffect,
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

import {
  useStore
} from '../../store';

import useStyles from './styles';

export function Main() {
  const {
    types,
    pokemon,
  } = useStore();

  const Styles = useStyles();

  useEffect(() => {
    pokemon.loadPokemon();
    types.loadTypes();

    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth={ false } className={ Styles.container }>
      <Container maxWidth="md" className={ Styles.body }>
        <Header />

        <Divider />

        <PokeList>
          {
            pokemon.filteredData.length > 0
              ? pokemon.filteredData.map( pokemon => <PokeCard key={ pokemon.name } pokemon={ pokemon }/>)
              : pokemon.data.map( pokemon => <PokeCard key={ pokemon.name } pokemon={ pokemon }/>)
          }
        </PokeList>

        <Footer />
      </Container>
    </Container>
  );
};
