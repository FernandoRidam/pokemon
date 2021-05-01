import React from 'react';

import {
  Container,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core';

import typeColors from '../../utils/typeColor.json';

import useStyles from './styles';

export function PokeCard({ pokemon, center }) {
  const Styles = useStyles({ typeColor: typeColors[ pokemon.type ]});

  return (
    <>
      {/* Mobile */}
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item xs={ 6 }>
          <Paper className={ Styles.pokeCard }>
            <img
              src={ pokemon.url_image }
              alt=""
              className={ Styles.pokeImageMobile }
              id="poke-img"
            />

            <Paper className={ Styles.pokeName }>
              <Typography>{ pokemon.name }</Typography>
            </Paper>

            <Paper className={[ Styles.pokeType, center && Styles.pokeTypeCenter ]}>
              <Typography>{ pokemon.type }</Typography>
            </Paper>

            <Paper className={[ Styles.pokeIdView, center && Styles.pokeIdViewCenter ]}>
              <Typography className={ Styles.pokeId }>{ pokemon.id }</Typography>
            </Paper>
          </Paper>
        </Grid>
      </Hidden>

      {/* Web */}
      <Hidden only={['xs', 'sm']}>
        <Grid item md={ 4 }>
          <Paper className={ Styles.pokeCard }>
            <img
              src={ pokemon.url_image }
              alt=""
              className={ Styles.pokeImage }
              id="poke-img"
            />

            <Paper className={ Styles.pokeName }>
              <Typography>{ pokemon.name }</Typography>
            </Paper>

            <Paper className={[ Styles.pokeType, center && Styles.pokeTypeCenter ]}>
              <Typography>{ pokemon.type }</Typography>
            </Paper>

            <Paper className={[ Styles.pokeIdView, center && Styles.pokeIdViewCenter ]}>
              <Typography className={ Styles.pokeId }>{ pokemon.id }</Typography>
            </Paper>
          </Paper>
        </Grid>
      </Hidden>
    </>
  );
};
