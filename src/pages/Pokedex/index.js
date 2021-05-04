import React from 'react';

import {
  Divider,
  Typography,
  TableRow,
  TableCell,
} from '@material-ui/core';

import {
  Header,
  PokeTable,
  PokeRow,
} from '../../components';

import {
  useStore
} from '../../store';

export function Pokedex() {
  const {
    user,
  } = useStore();

  return (
    <>
      <Header>
        <Typography noWrap variant="h6">Pokedex { user.data?.username }</Typography>
      </Header>

      <Divider />

      <PokeTable>
        {
          user.myPokemon.length > 0
            ? user.myPokemon.map(( pokemon, index ) => <PokeRow key={ index } pokemon={{ ...pokemon, index }} />)
            : <TableRow>
                <TableCell colSpan={ 4 } align="center">
                  <Typography noWrap variant="h6">No Pokemon Captured</Typography>
                </TableCell>
              </TableRow>
        }
      </PokeTable>
    </>
  );
};
