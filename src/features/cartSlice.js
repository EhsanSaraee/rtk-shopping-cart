import { createSlice } from '@reduxjs/toolkit';
import data from 'data';

const initialState = {
   items: data,
   totalAmount: 0,
   totalQuantity: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      getCartTotal: (state) => {
         let { totalAmount, totalQuantity } = state.items.reduce(
            (cartTotal, cartItem) => {
               const { price, amount } = cartItem;
               const itemTotal = price * amount;
               cartTotal.totalAmount += itemTotal;
               cartTotal.totalQuantity += amount;
               return cartTotal;
            },
            { totalAmount: 0, totalQuantity: 0 }
         );
         state.totalAmount = parseInt(totalAmount.toFixed(2));
         state.totalQuantity = totalQuantity;
      },
   },
});

export const { getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
