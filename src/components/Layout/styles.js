import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  appBar: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    height: 85,
  },

  logoPokemon: {
    width: 150,
    height: 55,
  },

  search: {
    width: '40%',
    minWidth: 175,
    borderRadius: 6,
    backgroundColor: '#FFF',
  },

  logoCompeti: {
    width: 150,
    height: 38,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingTop: 85,
  },
}));

export default useStyles;
