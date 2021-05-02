import React from 'react';

import {
  Paper,
  Typography,
} from '@material-ui/core';

import typeColors from '../../utils/typeColor.json';

import useStyles from './styles';

export function PokeType({ type, center, absolute }) {
  const Styles = useStyles({ typeColor: typeColors[ type ]});

  return (
    <Paper className={`${ Styles.pokeType } ${ center && Styles.pokeTypeCenter } ${ absolute && Styles.absolute }`}>
      <Typography>{ type }</Typography>
    </Paper>
  );
};
