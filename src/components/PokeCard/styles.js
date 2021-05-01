import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(( theme ) => ({
  pokeCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B4ADBE',
    border: 'solid',
    borderWidth: 2,
    borderColor: '#100B16',
  },

  pokeImage: {
    width: 225,
    height: 225,
  },

  pokeName: {
    position: 'absolute',
    bottom: - 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    padding: 5,
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
    borderRadius: 8,
    border: 'solid',
    borderWidth: 2,
    borderColor: '#100B16',
  },

  pokeType: {
    position: 'absolute',
    top: - 15,
    right: 5,
    padding: 3,
    backgroundColor: ({ typeColor }) => typeColor,
    color: '#FFF'
  },

  pokeTypeCenter: {
    top: 'auto',
    right: 'auto',
    bottom: 10,
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
}));

export default useStyles;
