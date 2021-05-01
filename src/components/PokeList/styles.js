import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  pokeList: {
    padding: 0,
    paddingTop: 25,
  },

  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 15,
    marginTop: 25,
  },

  paginationItem: {
    border: 'solid',
    borderWidth: 1,
    borderColor: '#100B16',
    backgroundColor: theme.palette.secondary.main,
    color: '#FFF'
  }
}));

export default useStyles;
