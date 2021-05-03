import React from 'react';

import {
  TableRow,
  TableCell,
  Hidden,
  Paper,
  Typography,
  IconButton,
} from '@material-ui/core';

import {
  Delete,
  RemoveRedEye,
} from '@material-ui/icons';

import {
  useStore
} from '../../store';

import { PokeType } from '../PokeType';

import useStyles from './styles';

export function PokeRow({ pokemon }) {
  const Styles = useStyles();

  const {
    user,
    modalPokemon,
    alert,
  } = useStore();

  function handleRelease() {
    user.releasePokemon( pokemon.index );

    alert.openAlert('Pokemon Successfully Released!');
  };

  function handleView() {
    modalPokemon.openModal( pokemon );
  };

  return (
    <TableRow>
      <TableCell align="center">
        {/* Web */}
        <Hidden only={['xs']}>
          <Paper className={`${ Styles.icon } ${ Styles.iconWeb }`}>
            <img
              src={ pokemon?.url_icon }
              alt=""
              className={ Styles.pokeIcon }
              id="poke-img"
            />
          </Paper>
        </Hidden>

        {/* Mobile */}
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Paper className={`${ Styles.icon } ${ Styles.iconMobile }`}>
            <img
              src={ pokemon?.url_icon }
              alt=""
              className={ Styles.pokeIcon }
            />
          </Paper>
        </Hidden>
      </TableCell>

      <TableCell align="left">
        <Typography noWrap className={ Styles.name }>{ pokemon?.name }</Typography>
      </TableCell>

      <TableCell align="center" className={ Styles.type }>
        <PokeType type={ pokemon?.type } />
      </TableCell>

      <TableCell align="center" className={ Styles.actions }>
        <IconButton
          className={ Styles.view }
          onClick={ handleView }
        >
          <RemoveRedEye />
        </IconButton>

        <IconButton
          className={ Styles.delete }
          onClick={ handleRelease }
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
