const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    resocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
//takes care of defining an action type constant, and object, an action creator, the swtich statements and immutable updates (ie: ...state)
