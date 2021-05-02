import React, {
  useState,
  useEffect,
} from 'react';

import {
  Container,
  Button,
  TextField,
  Modal,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {
  useStore
} from '../../store';

import useStyles from './styles';

export function ModalLogin() {
  const Styles = useStyles();

  const {
    user,
    modalLogin,
  } = useStore();

  const [ username, setUsername ] = useState('');

  function handleLogin() {
    user.logIn( username );

    modalLogin.closeModal();
  };

  useEffect(() => {
    setUsername('');
  }, [ modalLogin.open ]);

  return (
    <Modal
      open={ modalLogin.open }
      onClose={ modalLogin.closeModal }
      className={ Styles.modal }
    >
      <Paper className={ Styles.modalView }>
        <Toolbar className={ Styles.modalToolbar }>
          <Typography className={ Styles.modalTitle } variant="h6">Login</Typography>
        </Toolbar>

        <Container className={ Styles.bodyModal }>
          <TextField
            autoFocus
            variant="outlined"
            color="primary"
            placeholder="Username"
            label="Username"
            size="small"
            className={ Styles.input }
            value={ username }
            onChange={ event => setUsername( event.target.value )}
            onKeyPress={ event => event.key === 'Enter' && username !== '' && handleLogin()}
          />

          <Container className={ Styles.modalActions }>
            <Button
              variant="outlined"
              color="secondary"
              onClick={ modalLogin.closeModal }
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={ handleLogin }
              disabled={ username === ''}
            >
              Login
            </Button>
          </Container>
        </Container>
      </Paper>
    </Modal>
  );
};
