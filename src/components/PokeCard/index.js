import React from 'react';

import {
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import typeColors from '../../utils/typeColor.json';

import useStyles from './styles';

export function PokeCard({ center }) {
  const Styles = useStyles({ typeColor: typeColors['Electric']});

  return (
    <Grid item md={ 4 }>
      <Container>
        <Paper className={ Styles.pokeCard }>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt=""
            className={ Styles.pokeImage }
          />

          <Paper className={ Styles.pokeName }>
            <Typography>Pokemon</Typography>
          </Paper>

          <Paper className={[ Styles.pokeType, center && Styles.pokeTypeCenter ]}>
            <Typography>Electric</Typography>
          </Paper>

          <Paper className={[ Styles.pokeIdView, center && Styles.pokeIdViewCenter ]}>
            <Typography className={ Styles.pokeId }>25</Typography>
          </Paper>
        </Paper>
      </Container>
    </Grid>
  );
};
