import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  header: {
    paddingTop: 25,
    paddingBottom: 25,
  },

  input: {
    width: '100%',
    maxWidth: 295
  },

  autoField: {
    position: 'relative',
    padding: 0,
    borderRadius: 6,
    // backgroundColor: '#FFF',
  },

  loading: {
    position: 'absolute',
    color: theme.palette.primary.contrastText,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomRightRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
