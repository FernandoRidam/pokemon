import React from 'react';

import {
  Container,
} from '@material-ui/core';

import useStyles from './styles';

export function Header({ children }) {
  const Styles = useStyles();

  return (
    <Container className={ Styles.header }>
      { children }
    </Container>
  );
};
