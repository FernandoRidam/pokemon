import React from 'react';

import {
  Grid,
  Hidden,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';

import {
  RemoveRedEye,
  Add,
} from '@material-ui/icons';

import {
  useStore
} from '../../store';

import typeColors from '../../utils/typeColor.json';

import pokeball from '../../assets/pokeball_dark.png';

import {
  PokeType,
} from '../PokeType';

import useStyles from './styles';

export function PokeCard({ data, center }) {
  const Styles = useStyles({ typeColor: typeColors[ data?.type ]});

  const {
    user,
    modalLogin,
    modalPokemon,
  } = useStore();

  function handleCapture() {
    if( !user.data ) {
      modalLogin.openModal();
    } else {
      user.capturePokemon( data );
    }
  };

  function handleView() {
    modalPokemon.openModal( data );
  };

  const PokeInfo = () => {
    return (
      <>
        <Paper className={ Styles.actions }>
          <IconButton
            color="inherit"
            onClick={ handleView }
          >
            <RemoveRedEye />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={ handleCapture }
          >
            <Add />
          </IconButton>
        </Paper>

        <Paper className={ Styles.pokeName }>
          <Typography>{ data?.name }</Typography>
        </Paper>

        <PokeType
          type={ data?.type }
          center={ center }
          absolute
        />

        <Paper className={` ${ Styles.pokeIdView } ${ center && Styles.pokeIdViewCenter }`}>
          <Typography className={ Styles.pokeId }>{ data?.id }</Typography>
        </Paper>
      </>
    );
  };

  return (
    <>
      {/* Mobile */}
      <Hidden only={['md', 'lg', 'xl']}>
        <Grid item xs={ 6 }>
          <Paper className={ Styles.pokeCard }>
            <img
              src={ data?.url_icon || data?.url_image }
              alt={ data?.name }
              className={`${ Styles.pokeImageMobile } ${ !data?.url_icon && Styles.pokeImageAlt }`}
              id="poke-img"
            />

            <PokeInfo />
          </Paper>
        </Grid>
      </Hidden>

      {/* Web */}
      <Hidden only={['xs', 'sm']}>
        <Grid item md={ 4 }>
          <Paper className={ Styles.pokeCard }>
            <img
              src={ data?.url_image || pokeball }
              alt={ data?.name }
              className={`${ Styles.pokeImage } ${ !data?.url_image && Styles.pokeImageAlt }`}
              id="poke-img"
            />

            {
              data?.url_icon &&
                <img
                  src={ data?.url_icon }
                  alt={ data?.name }
                  className={ Styles.pokeIcon }
                  id="poke-img"
                />
            }
            <PokeInfo />
          </Paper>
        </Grid>
      </Hidden>
    </>
  );
};
