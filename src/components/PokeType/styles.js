import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  pokeType: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginRight: 5,
    minWidth: 65,
    backgroundColor: ({ typeColor }) => typeColor,
    color: '#FFF'
  },

  pokeTypeCenter: {
    top: 'auto',
    right: 'auto',
    bottom: 15,
  },

  absolute: {
    position: 'absolute',
    top: - 15,
    right: 5,
  },
}));

export default useStyles;
