import React, {
  useState,
} from 'react';

import {
  Container,
  AppBar,
  Button,
  TextField,
  Hidden,
  Link,
  IconButton,
  Typography,
  SwipeableDrawer,
  ListItemIcon,
  ListItem,
  ListItemText,
  Snackbar,
} from '@material-ui/core';

import {
  Alert,
} from '@material-ui/lab';

import {
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import {
  Close,
  Menu,
  ExitToApp,
} from '@material-ui/icons';

import {
  useStore
} from '../../store';

import routeConfig from '../../config/routes';

import logo from '../../assets/logo.png';
import competi from '../../assets/competi.png';

import {
  ModalLogin,
} from '../ModalLogin';

import {
  ModalPokemon,
} from '../ModalPokemon';

import useStyles from './styles';

export function Layout({ children }) {
  const iOS = process.browser && /iPad|iPhone|iPod/.test( navigator.userAgent );

  const fourSeconds = 4000;

  const {
    pokemon,
    user,
    modalLogin,
    alert,
  } = useStore();

  const Styles = useStyles();

  const [ openDrawer, setOpenDrawer ] = useState( false );

  function handleLogout() {
    setOpenDrawer( false );

    user.logOut();
  };

  return (
    <Container className={ Styles.container }>
      <AppBar position="absolute" className={ Styles.appBar }>
        <Hidden smDown>
          <Link href="https://pokeapi.co/" target="_blank">
            <img src={ logo } alt="Pokemon" className={ Styles.logoPokemon }/>
          </Link>
        </Hidden>

        <Hidden smDown>
          <Link href="https://competisistemas.com.br/" target="_blank">
            <img src={ competi } alt="Competi" className={ Styles.logoCompeti }/>
          </Link>
        </Hidden>

        <TextField
          variant="outlined"
          color="primary"
          placeholder="Search Pokemon"
          size="small"
          className={ Styles.search }
          value={ pokemon.search }
          onChange={ event => pokemon.handleChangeSearch( event.target.value )}
          InputProps={{
            endAdornment: pokemon.search && (
              <IconButton
                color="primary"
                onClick={() => pokemon.handleChangeSearch('')}
              >
                <Close />
              </IconButton>
            )
          }}
        />

        {
          !user.data
            ? <Button
                variant="contained"
                color="secondary"
                onClick={ modalLogin.openModal }
              >
                Login
              </Button>
            : <IconButton
                color="inherit"
                onClick={() => setOpenDrawer( true )}
              >
                <Menu />
              </IconButton>
        }
      </AppBar>

      {
        user.data &&
          <SwipeableDrawer
            anchor="right"
            open={ openDrawer }
            onOpen={() => setOpenDrawer( true )}
            onClose={() => setOpenDrawer( false )}
            disableBackdropTransition={ !iOS }
            disableDiscovery={ iOS }
          >
            <Container className={ Styles.drawerContent }>
              <Container className={ Styles.drawerHeader }>
                <Typography
                  noWrap
                  variant="body1"
                  className={ Styles.username }
                >
                  { user.data.username }
                </Typography>

                <IconButton
                  color="inherit"
                  className={ Styles.username }
                  onClick={() => setOpenDrawer( false )}
                >
                  <Close />
                </IconButton>
              </Container>

              {
                routeConfig.routes.map( route => <MenuItemPath key={ route.id } route={ route } close={() => setOpenDrawer( false )}/>)
              }

              <ListItem button onClick={ handleLogout }>
                <ListItemIcon>
                  <ExitToApp color="error"/>
                </ListItemIcon>

                <ListItemText>
                  <Typography noWrap variant="body1" color="error">Logout</Typography>
                </ListItemText>
              </ListItem>
            </Container>
          </SwipeableDrawer>
      }

      <Container maxWidth={ false } className={ Styles.container }>
        <Container maxWidth="md" className={ Styles.body }>
          { children }
        </Container>
      </Container>

      <ModalLogin />
      <ModalPokemon />

      <Snackbar
        open={ alert.open }
        autoHideDuration={ fourSeconds }
        onClose={ alert.closeAlert }
        anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
        className={ Styles.alert }
      >
        <Alert
          severity="success"
          onClose={ alert.closeAlert }
        >
          { alert.message }
        </Alert>
      </Snackbar>
    </Container>
  );
};

function MenuItemPath({ route, close }) {
  const history = useHistory();

  const Styles = useStyles();

  const match = useRouteMatch( route.path );

  function handleClick() {
    if( route.path ) {
      history.push( route.path );

      close();
    }
  };

  return (
    <ListItem
      button
      onClick={ handleClick }
      selected={ !!match }
    >
      <ListItemIcon>
        <route.icon className={ !!match && Styles.active }/>
      </ListItemIcon>

      <ListItemText
        className={ !!match && Styles.active }
        primary={ route.label }
      />
    </ListItem>
  )
};
