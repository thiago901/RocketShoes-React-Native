import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

export function* addToCart({ payload }) {
  const { id } = payload;
  const productExist = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.log('ERRRO');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

export function* updateAmount({ payload }) {
  const { id, amount } = payload;
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    console.log('erroo');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
