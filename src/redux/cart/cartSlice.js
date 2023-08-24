import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        state.push({...action.payload.product, amount: action.payload.amount});
      },
      prepare: (product, amount) => {
        return {
          payload: { product, amount }
        }
      }
    }
  }
});

export const selectAllCart = (state) => state.cart;

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;