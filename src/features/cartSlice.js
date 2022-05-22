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
      remove: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload);
      },
      increase: (state, action) => {
         state.items = state.items.map((item) =>
            item.id === action.payload
               ? { ...item, amount: item.amount + 1 }
               : item
         );
      },
      decrease: (state, action) => {
         state.items = state.items
            .map((item) =>
               item.id === action.payload
                  ? { ...item, amount: item.amount - 1 }
                  : item
            )
            .filter((item) => item.amount !== 0);
      },
      clearCart: (state) => {
         state.items = [];
      },
   },
});

export const { getCartTotal, remove, increase, decrease, clearCart } =
   cartSlice.actions;

export default cartSlice.reducer;
