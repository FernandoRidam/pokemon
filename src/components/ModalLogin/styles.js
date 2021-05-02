import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '75%',
    maxWidth: 375,
    backgroundColor: theme.palette.background.default,
  },

  modalToolbar: {
    paddingRight: theme.spacing( 2 ),
    paddingLeft: theme.spacing( 2 ),
    paddingTop: theme.spacing( 1 ),
    paddingBottom: theme.spacing( 1 ),
    backgroundColor: theme.palette.primary.main,
    minHeight: 40
  },

  modalTitle: {
    flex: '1 1 100%',
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.fontSize * 1.25
  },

  bodyModal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
    paddingTop: 55,
  },

  input: {
    width: '85%',
    marginTop: 10,
    marginBottom: 10,
  },

  modalActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 55,
    width: '85%',
  },
}));

export default useStyles;
