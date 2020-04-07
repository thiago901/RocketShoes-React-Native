import React from 'react';
import PropTypes from 'prop-types';
import { Container, LogContainer, Logo } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <LogContainer onPress={() => navigation.navigate('Main')}>
        <Logo />
      </LogContainer>
    </Container>
  );
}
Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};
