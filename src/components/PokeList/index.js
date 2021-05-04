import React from 'react';

import {
  Container,
  Grid,
  CircularProgress,
} from '@material-ui/core';

import {
  Pagination,
  PaginationItem,
} from '@material-ui/lab';

import {
  useStore
} from '../../store';

import useStyles from './styles';

export function PokeList({ children }) {
  const { pokemon } = useStore();

  const Styles = useStyles();

  return (
    <Container className={ Styles.pokeList }>
      <Grid
        container
        spacing={ 5 }
        justify="center"
      >
        { children }
      </Grid>

      <Container className={ Styles.pagination }>
        <Pagination
          count={ pokemon.pages }
          color="primary"
          shape="rounded"
          size="small"
          onChange={( event, page ) => pokemon.handleChangePage( page )}
          renderItem={( item ) => {
            if( pokemon.loading && item.page === pokemon.pages ) {
              item.page = <CircularProgress color="inherit" size={ 14 }/>;
              item.disabled = pokemon.loading;
            }

            return (
              <PaginationItem
                { ...item }
                className={ Styles.paginationItem }
              />
            )
          }}
        />
      </Container>
    </Container>
  );
};
