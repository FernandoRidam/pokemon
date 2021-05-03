import React, {
  useState,
  useEffect,
} from 'react';

import {
  Container,
  Modal,
  Paper,
  Toolbar,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

import {
  useStore
} from '../../store';

import typeColors from '../../utils/typeColor.json';

import pokeball from '../../assets/pokeball_dark.png';

import {
  PokeType,
} from '../PokeType';

import useStyles from './styles';

export function ModalPokemon() {
  const {
    modalPokemon,
  } = useStore();

  const Styles = useStyles({ typeColor: typeColors[ modalPokemon.data?.type ]});

  return (
    <Modal
      open={ modalPokemon.open }
      onClose={ modalPokemon.closeModal }
      className={ Styles.modal }
    >
      <Paper className={ Styles.modalView }>
        <Toolbar className={ Styles.modalToolbar }>
          <Typography noWrap className={ Styles.modalTitle } variant="h6">{ modalPokemon.data?.name }</Typography>

          <PokeType type={ modalPokemon.data?.type } />
        </Toolbar>

        <Container className={ Styles.bodyModal }>
          <Container className={ Styles.pokeView }>
            <img
              src={ modalPokemon.data?.url_image || pokeball }
              alt={ modalPokemon.data?.name }
              className={`${ Styles.pokeImage } ${ !modalPokemon.data?.url_image && Styles.pokeImageAlt }`}
              id="poke-img"
            />

            {
              modalPokemon.data?.url_icon &&
                <img
                  src={ modalPokemon.data?.url_icon }
                  alt={ modalPokemon.data?.name }
                  className={ Styles.pokeIcon }
                  id="poke-img"
                />
            }

            <img src={ pokeball } alt="Pokeball" className={ Styles.pokeball } id="poke-img" />

            <Container className={ Styles.pokeInfo }>
              <Container className={ Styles.types }>
                {
                  modalPokemon.data?.types.map( type =>
                    <PokeType type={ type } />
                  )
                }
              </Container>

              <Grid container
                spacing={ 1 }
                justify="center"
              >
                {
                  modalPokemon.data?.stats.map(( stat, index ) =>
                    <Grid key={ stat.key } item xs={ 6 }>
                      <Paper className={`${ Styles.stat } ${ Styles[ stat.key ]}`}>
                        <Typography noWrap variant="body1" align="center" className={ Styles.label }>{ stat.label }</Typography>

                        <Typography noWrap variant="body1" align="center" className={ Styles.statNumber }>{ stat.stat }</Typography>
                      </Paper>
                    </Grid>
                  )
                }
              </Grid>
            </Container>
          </Container>

          <Container className={ Styles.actions }>
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={ Styles.action }
              onClick={ modalPokemon.closeModal }
            >
              <Typography>Ok</Typography>
            </Button>
          </Container>
        </Container>
      </Paper>
    </Modal>
  );
};
