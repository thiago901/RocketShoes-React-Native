import React from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';

export default function ComponentContainer({ children }) {
  return <Container>{children}</Container>;
}

ComponentContainer.propTypes = {
  children: propTypes.element.isRequired,
};
