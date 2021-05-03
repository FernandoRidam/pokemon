import React from 'react';

import {
  Container,
  Grid,
} from '@material-ui/core';

import useStyles from './styles';

export function Footer({ children }) {
  const Styles = useStyles();

  return (
    <Container className={ Styles.footerList }>
      <Grid
        container
        spacing={ 5 }
        justify="center"
      >
        { children }
      </Grid>
    </Container>
  );
};
