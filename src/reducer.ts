// reducer.js
import { ADD_CART } from './actions';

const initialState = {
  cartData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
