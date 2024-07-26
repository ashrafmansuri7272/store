// actions.js
export const ADD_CART = 'ADD_CART';

export const addCartAction = (data) => ({
  type: ADD_CART,
  payload: data,
});
