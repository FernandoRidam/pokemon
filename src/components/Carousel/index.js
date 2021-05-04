import React from 'react';

import {
  Container,
} from '@material-ui/core';

import Carousel from 'react-material-ui-carousel';

import useStyles from './styles';

export function CarouselView({ children }) {
  const Styles = useStyles();

  return (
    <Carousel
      className={ Styles.carousel }
      animation="slide"
      navButtonsAlwaysVisible
    >
      { children }
    </Carousel>
  );
};

export function CarouselItem({ children }) {
  const Styles = useStyles();

  return (
    <Container className={ Styles.item }>
      { children }
    </Container>
  );
};
