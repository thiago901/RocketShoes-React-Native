import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { ContainerBasket, Amount } from './styles';

function BasketComponent({ navigation, cartSize }) {
  return (
    <ContainerBasket onPress={() => navigation.navigate('Cart')}>
      <Icon name="shopping-basket" size={30} color="#fff" />
      {cartSize ? <Amount>{cartSize}</Amount> : null}
    </ContainerBasket>
  );
}
const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(BasketComponent);
