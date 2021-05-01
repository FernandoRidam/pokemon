import React, {
  useState,
  useEffect,
} from 'react';

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
  const { types } = useStore();

  const Styles = useStyles();

  const [ type, setType ] = useState( null );

  useEffect(() => {
    types.loadTypes();
  }, []);

  return (
    <Container className={ Styles.header }>
      <Autocomplete
        className={ Styles.input }
        options={ types.data }
        getOptionLabel={( option ) => option.name }
        noOptionsText="Empty..."
        value={ type }
        disabled={ types.loading }
        onChange={( event, newValue ) => {
          setType( newValue );
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
