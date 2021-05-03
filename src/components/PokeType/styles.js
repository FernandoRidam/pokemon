import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  pokeType: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginRight: 5,
    minWidth: 65,
    backgroundColor: ({ typeColor }) => typeColor,
    color: '#FFF'
  },

  absolute: {
    position: 'absolute',
    top: - 15,
    right: 5,
    bottom: 'auto',
    left: 'auto',
  },

  pokeTypeCenter: {
    top: 'auto',
    right: 'auto',
    bottom: 10,
    left: 15,
  },
}));

export default useStyles;
