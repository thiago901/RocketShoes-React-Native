import { produce } from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action.payload;
        draft.push(product);
      });
    case '@cart/REMOVE_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    }
    default:
      return state;
  }
}
