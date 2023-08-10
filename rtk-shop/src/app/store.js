import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/CartSlice';

const store = configureStore({
  //specify all the reducers from slices that belong to features
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
