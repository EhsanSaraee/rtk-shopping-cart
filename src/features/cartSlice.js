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
   reducers: {},
});

export default cartSlice.reducer;
