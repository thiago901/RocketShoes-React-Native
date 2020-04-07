import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { formatNumber } from '../../util/format';
import * as CartActions from '../../store/module/cart/actions';

import Container from '../../components/Container';
import {
  Content,
  CartList,
  Product,
  Info,
  AmountContainer,
  Image,
  Decription,
  DecriptionText,
  Value,
  Input,
  InputContainer,
  SubTotal,
  Total,
  ButtonFinish,
  ButtonFinishText,
  TotalText,
  ButtonTouch,
  ContentEmpty,
} from './styles';

function Cart({ cart, removeToCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <ContentEmpty>
          <Icon name="remove-shopping-cart" size={100} color="#7159c1" />
          <Value>Carrinho vazio</Value>
        </ContentEmpty>
      ) : (
        <Content>
          <CartList
            data={cart}
            keyExtractor={(c) => c.id.toString()}
            renderItem={({ item }) => (
              <>
                <Product>
                  <Info>
                    <Image source={{ uri: item.image }} />
                    <Decription>
                      <DecriptionText>{item.title}</DecriptionText>
                      <Value>{item.formatPrice}</Value>
                    </Decription>
                    <ButtonTouch onPress={() => removeToCart(item.id)}>
                      <Icon name="delete" size={25} color="#7159c1" />
                    </ButtonTouch>
                  </Info>
                  <AmountContainer>
                    <InputContainer>
                      <ButtonTouch onPress={() => decrement(item)}>
                        <Icon name="remove-circle" size={30} color="#7159c1" />
                      </ButtonTouch>
                      <Input
                        editable={false}
                        keyboardType="numeric"
                        value={`${item.amount}`}
                      />
                      <ButtonTouch onPress={() => increment(item)}>
                        <Icon name="add-circle" size={30} color="#7159c1" />
                      </ButtonTouch>
                    </InputContainer>
                    <SubTotal>{item.subTotal}</SubTotal>
                  </AmountContainer>
                </Product>
              </>
            )}
          />
          <TotalText>Total</TotalText>
          <Total>{total}</Total>
          <ButtonFinish>
            <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
          </ButtonFinish>
        </Content>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatNumber(product.amount * product.price),
  })),
  total: formatNumber(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(CartActions, dispatch);
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeToCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps)(Cart);
