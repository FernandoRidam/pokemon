import React from 'react';

import {
  Container,
  AppBar,
  Button,
  TextField,
  Hidden,
  Link,
} from '@material-ui/core';

import logo from '../../assets/logo.png';
import competi from '../../assets/competi.png';

import useStyles from './styles';

export function Layout({ children }) {
  const Styles = useStyles();

  return (
    <Container className={ Styles.container }>
      <AppBar position="absolute" className={ Styles.appBar }>
        <Hidden smDown>
          <Link href="https://pokeapi.co/" target="_blank">
            <img src={ logo } alt="Pokemon" className={ Styles.logoPokemon }/>
          </Link>
        </Hidden>

        <TextField
          variant="outlined"
          color="primary"
          placeholder="Search Pokemon"
          size="small"
          className={ Styles.search }
        />

        <Button
          variant="contained"
          color="secondary"
          className={ Styles.button }
        >
          Login
        </Button>

        <Hidden smDown>
          <Link href="https://competisistemas.com.br/" target="_blank">
            <img src={ competi } alt="Competi" className={ Styles.logoCompeti }/>
          </Link>
        </Hidden>
      </AppBar>

      { children }
    </Container>
  );
};
