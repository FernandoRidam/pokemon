import React from 'react';

import {
  Container,
  LinearProgress,
  TextField,
} from '@material-ui/core';

import {
  Autocomplete,
} from '@material-ui/lab';

import {
  useStore
} from '../../store';

import useStyles from './styles';

export function SelectType() {
  const {
    type,
    pokemon,
  } = useStore();

  const Styles = useStyles();

  return (
    <Autocomplete
      className={ Styles.input }
      options={ type.data }
      getOptionLabel={( option ) => option.name }
      noOptionsText="Empty..."
      value={ pokemon.type }
      disabled={ type.loading }
      onChange={( event, newValue ) => {
        pokemon.handleChangeType( newValue );
      }}
      renderInput={(params) => <Container className={ Styles.autoField }>
        <TextField
          {...params}
          label="Type"
          variant="outlined"
        />

        { type.loading && <LinearProgress className={ Styles.loading } color="primary" />}
      </Container>}
    />
  );
};
