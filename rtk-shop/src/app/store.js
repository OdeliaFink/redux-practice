import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  //specify all the reducers from slices that belong to features
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;
