import React, {
  useEffect,
} from 'react';

import {
  Divider,
} from '@material-ui/core';

import {
  Header,
  PokeList,
  PokeCard,
  SelectType,
  CarouselView,
  CarouselItem,
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
    if( pokemon.data.length < 1 && type.data.length > 0 ) {
      pokemon.loadPokemon();
    }

    // eslint-disable-next-line
  }, [ pokemon.data.length, type.data.length ]);

  useEffect(() => {
    if( type.data.length < 1 ) {
      type.loadTypes();
    }

    // eslint-disable-next-line
  }, [ type.data.length ]);

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

      {
        pokemon.randomData.length > 0 &&
          <CarouselView>
            {
              pokemon.randomData.map( pokemon => <CarouselItem key={ pokemon.name }><PokeCard center data={ pokemon }/></CarouselItem>)
            }
          </CarouselView>
      }
    </>
  );
};
