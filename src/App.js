import React from 'react';

import {
  ThemeProvider,
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes';

import theme from './config/theme';

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}
