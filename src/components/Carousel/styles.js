import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  carousel: {
    padding: 35,
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    paddingBottom: 55,
  },
}));

export default useStyles;
