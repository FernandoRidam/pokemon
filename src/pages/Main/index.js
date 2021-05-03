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

export function Main() {
  const {
    type,
    pokemon,
  } = useStore();

  useEffect(() => {
    if( pokemon.data.length < 1 ) pokemon.loadPokemon();
    if( type.data.length < 1 ) type.loadTypes();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header>
        <SelectType />
      </Header>

      <Divider />

      <PokeList>
        {
          pokemon.dataPage.map( pokemon => <PokeCard key={ pokemon.name } data={ pokemon }/>)
        }
      </PokeList>

      <Divider />

      <Footer>
        {
          pokemon.randomData.map( pokemon => <PokeCard center key={ pokemon.name } data={ pokemon }/>)
        }
      </Footer>
    </>
  );
};
