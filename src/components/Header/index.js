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

export function Header() {
  const {
    types,
    pokemon,
  } = useStore();

  const Styles = useStyles();

  return (
    <Container className={ Styles.header }>
      <Autocomplete
        className={ Styles.input }
        options={ types.data }
        getOptionLabel={( option ) => option.name }
        noOptionsText="Empty..."
        value={ pokemon.type }
        disabled={ types.loading }
        onChange={( event, newValue ) => {
          pokemon.handleChangeType( newValue );
        }}
        renderInput={(params) => <Container className={ Styles.autoField }>
          <TextField
            {...params}
            label="Type"
            variant="outlined"
          />

          { types.loading && <LinearProgress className={ Styles.loading } color="primary" />}
        </Container>}
      />
    </Container>
  );
};
