const axios = require('axios');
const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: '',
};

// Takes in action type and a callback function and returns a promise. Generates pending, fulfilled and rejected action types which are the lifecycles. Then dispatch lifecycle actions using extra reducers.
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
