import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
  name: 'cartReducer',
  initialState: { cartData: [] },
  reducers: {
    addCartDataAction(initialState, action) {
      initialState.cartData = action.payload
    }
  }
})

export const {addCartDataAction} = reducer.actions;
export default reducer;
