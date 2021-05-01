import React, {
  useState,
} from 'react';

import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import {
  Pagination,
  PaginationItem,
} from '@material-ui/lab';

import useStyles from './styles';

export function PokeList({ children }) {
  const Styles = useStyles();

  return (
    <Container className={ Styles.pokeList }>
      <Grid
        container
        spacing={ 6 }
        justify="center"
      >
        { children }
      </Grid>

      <Container className={ Styles.pagination }>
        <Pagination
          count={ 10 }
          color="primary"
          shape="rounded"
          size="small"
          renderItem={( item ) => (
            <PaginationItem
              { ...item }
              className={ Styles.paginationItem }
            />
          )}
        />
      </Container>
    </Container>
  );
};
