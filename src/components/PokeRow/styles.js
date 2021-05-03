import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#B4ADBE',
    border: 'solid',
    borderWidth: 1,
    borderColor: '#100B16',
  },

  iconWeb: {
    width: 105,
    height: 105,
  },

  iconMobile: {
    width: 45,
    height: 45,
  },

  pokeIcon: {
    width: '90%',
    height: '90%',
  },

  name: {
    width: 115,
  },

  type: {
    paddingLeft: 25
  },

  view: {
    color: '#49DBDF',
  },

  delete: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
