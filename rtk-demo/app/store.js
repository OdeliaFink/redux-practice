const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');

const store = configureStore({
  //specify all the reducers from slices that belong to features
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = store;
