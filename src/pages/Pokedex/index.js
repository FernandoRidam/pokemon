import React, {
  useEffect,
} from 'react';

import {
  Divider,
} from '@material-ui/core';

import {
  Footer,
  Header,
  PokeList,
  PokeCard,
  SelectType,
} from '../../components';

import {
  useStore
} from '../../store';

export function Pokedex() {
  const {
    type,
    pokemon,
  } = useStore();

  return (
    <>
      <Header>
        <SelectType />
      </Header>

      <Divider />

      <PokeList>
        {
          pokemon.filteredData.length > 0
            ? pokemon.filteredData.map( pokemon => <PokeCard key={ pokemon.name } pokemon={ pokemon }/>)
            : pokemon.data.map( pokemon => <PokeCard key={ pokemon.name } pokemon={ pokemon }/>)
        }
      </PokeList>

      <Footer />
    </>
  );
};
