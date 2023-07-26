import { createSlice } from '@reduxjs/toolkit';

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
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
//takes care of defining an action type constant, and object, an action creator, the swtich statements and immutable updates (ie: ...state)
