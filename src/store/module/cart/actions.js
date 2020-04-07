export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_TO_CART_REQUEST',
    payload: { id },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_TO_CART_SUCCESS',
    payload: { product },
  };
}
export function removeToCart(id) {
  return {
    type: '@cart/REMOVE_TO_CART',
    payload: { id },
  };
}
export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    payload: {
      id,
      amount,
    },
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    payload: {
      id,
      amount,
    },
  };
}
