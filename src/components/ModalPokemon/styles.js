import { makeStyles } from '@material-ui/core/styles';

import {
  darken,
  lighten,
} from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles( theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '95%',
    height: '95%',
    maxWidth: 375,
    maxHeight: 595,
    backgroundColor: '#FFF',
  },

  modalToolbar: {
    paddingRight: theme.spacing( 2 ),
    paddingLeft: theme.spacing( 2 ),
    paddingTop: theme.spacing( 1 ),
    paddingBottom: theme.spacing( 1 ),
    backgroundColor: ({ typeColor }) => typeColor && typeColor,
    minHeight: 40
  },

  modalTitle: {
    flex: '1 1 100%',
    color: theme.palette.primary.contrastText,
    fontSize: 25,
  },

  bodyModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 0,
  },

  pokeView: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 165,
    padding: 0,
    backgroundColor: ({ typeColor }) => typeColor && typeColor,
  },

  pokeInfo: {
    zIndex: 1,
    padding: 10,
    marginTop: - 35,
  },

  types: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    paddingRight: 0,
    paddingLeft: 0,
    marginTop: 5,
  },

  stat: {
    padding: 5,
  },

  hp: {
    backgroundColor: ({ typeColor }) => typeColor && lighten( typeColor, .2 ),
  },

  speed: {
    backgroundColor: ({ typeColor }) => typeColor && typeColor,
  },

  attack: {
    backgroundColor: ({ typeColor }) => typeColor && darken( typeColor, .2 ),
  },

  defense: {
    backgroundColor: ({ typeColor }) => typeColor && darken( typeColor, .4 ),
  },

  special_attack: {
    backgroundColor: ({ typeColor }) => typeColor && darken( typeColor, .3 ),
  },

  special_defense: {
    backgroundColor: ({ typeColor }) => typeColor && darken( typeColor, .5 ),
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },

  statNumber: {
    color: '#FFF',
  },

  pokeball: {
    position: 'absolute',
    top: - 75,
    right: - 65,
    width: 235,
    height: 235,
    opacity: .2,
    transform: 'rotate( -15deg )'
  },

  pokeImage: {
    zIndex: 1,
    width: 235,
    height: 235,
    marginRight: 95,
    marginTop: - 15,
  },

  pokeIcon: {
    position: 'absolute',
    top: - 5,
    right: 0,
    zIndex: 1,
    width: 125,
    height: 125,
  },

  pokeImageAlt: {
    opacity: .1,
    padding: 5,
    transform: 'rotate( -15deg )',
  },

  modalActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 55,
    width: '85%',
  },

  actions: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 5,
  },

  action: {
    width: '75%',
    borderColor: ({ typeColor }) => typeColor && typeColor,
    color: ({ typeColor }) => typeColor && typeColor,

    '&:hover': {
      borderColor: ({ typeColor }) => typeColor && darken( typeColor, .3 ),
      color: ({ typeColor }) => typeColor && darken( typeColor, .3 ),
    }
  },
}));

export default useStyles;
