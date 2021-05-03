import {
  makeStyles,
} from '@material-ui/core/styles';

import {
  darken,
} from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(( theme ) => ({
  pokeCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ({ typeColor }) => typeColor && darken( typeColor, .6 ),
    border: 'solid',
    borderWidth: 2,
    borderColor: '#100B16',

    '&:hover': {
      '& $actions': {
        opacity: 1,
        width: '100%',
        height: '100%',
        padding: 15,
        transform: 'scale( 1 )'
      }
    }
  },

  pokeImage: {
    width: 225,
    height: 225,
    opacity: .4
  },

  pokeIcon: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 145,
    height: 145,
  },

  pokeImageMobile: {
    width: 105,
    height: 105,
  },

  pokeImageAlt: {
    opacity: .1,
    padding: 5,
    transform: 'rotate( -15deg )',
  },

  pokeName: {
    position: 'absolute',
    bottom: - 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60%',
    maxWidth: '95%',
    padding: 5,
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    borderRadius: 8,
    border: 'solid',
    borderWidth: 2,
    borderColor: '#100B16',
  },

  pokeIdView: {
    position: 'absolute',
    top: - 15,
    left: - 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    border: 'solid',
    borderWidth: 2,
    borderColor: '#100B16',
    transform: 'rotate( -45deg )'
  },

  pokeIdViewCenter: {
    left: 'auto',
  },

  pokeId: {
    fontSize: 21,
    color: '#FFF',
    transform: 'rotate( 45deg )'
  },

  actions: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0,
    width: 0,
    height: 0,
    backgroundColor: '#0008',
    opacity: 0,
    color: '#FFF',

    transition: 'all .4s',
    transform: 'scale( 0 )'
  },

  view: {
    backgroundColor: '#49DBDF',
    color: '#FFF',

    '&:hover': {
      backgroundColor: '#49DBDF',
    }
  },

  add: {
    backgroundColor: '#3AA05B',
    color: '#FFF',

    '&:hover': {
      backgroundColor: '#3AA05B',
    }
  },
}));

export default useStyles;
