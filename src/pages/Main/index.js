import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import { formatNumber } from '../../util/format';
import Container from '../../components/Container';
import * as actionsCart from '../../store/module/cart/actions';

import {
  List,
  Product,
  Title,
  Image,
  Value,
  BuyProduct,
  BuyProductText,
  Info,
  Amount,
  Loading,
} from './styles';

import api from '../../services/api';

function Main({ addToCartRequest, amount }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const response = await api.get('/products');
      const data = response.data.map((product) => ({
        ...product,
        formatPrice: formatNumber(product.price),
      }));

      setProducts(data);
      setLoading(false);
    }
    load();
  }, []);

  function handleAddToCart(id) {
    addToCartRequest(id);
  }
  return (
    <Container>
      {loading ? (
        <Loading>
          <ActivityIndicator size="large" color="#7159c1" />
        </Loading>
      ) : (
        <List
          data={products}
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <Product>
              <Image source={{ uri: item.image }} />
              <Title>{item.title}</Title>
              <Value>{item.formatPrice}</Value>
              <BuyProduct>
                <Info>
                  <Icon name="shopping-basket" size={20} color="#fff" />
                  <Amount>{amount[item.id] || 0}</Amount>
                </Info>
                <BuyProductText onPress={() => handleAddToCart(item.id)}>
                  ADICIONAR AO CARRINHO
                </BuyProductText>
              </BuyProduct>
            </Product>
          )}
        />
      )}
    </Container>
  );
}

Main.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
const mapToActionToProps = (dispatch) => {
  return bindActionCreators(actionsCart, dispatch);
};
export default connect(mapStateToProps, mapToActionToProps)(Main);
