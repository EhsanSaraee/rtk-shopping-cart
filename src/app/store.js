import { configureStore } from '@reduxjs/toolkit';
import cartSlice from 'features/cartSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
};

const reducer = combineReducers({
   cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
   reducer: persistedReducer,
});
