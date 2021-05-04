import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingTop: 40,
  },

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

  logoCompeti: {
    width: 150,
    height: 38,
  },

  search: {
    width: '40%',
    minWidth: 175,
    borderRadius: 6,
    backgroundColor: '#FFF',
  },

  drawerContent: {
    padding: 0,
    width: 305,
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 85,
    backgroundColor: theme.palette.primary.main,
  },

  username: {
    fontSize: 19,
    color: '#FFF'
  },

  active: {
    color: theme.palette.primary.main,
  },

  drawerFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 0,
  },

  logout: {
    color: theme.palette.error.main,
  },

  body: {
    backgroundColor: '#D4C3A3',
    paddingBottom: 25,
  },

  alert: {
    marginTop: 75,
  },
}));

export default useStyles;
