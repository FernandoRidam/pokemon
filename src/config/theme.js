import {
  createMuiTheme,
} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#524153',
    },

    secondary: {
      main: '#7E7394',
    },

    error: {
      main: '#FF2020',
    },

    background: {
      default: '#E0D7EC',
    },
  },
});

export default theme;
