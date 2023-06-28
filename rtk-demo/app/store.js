const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');

const store = configureStore({
  //specify all the reducers from slices that belong to features
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
