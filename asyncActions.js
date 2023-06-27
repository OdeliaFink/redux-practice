// define state/ action / reducer
const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const intialState = {
  loading: false,
  users: [],
  error: '',
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//action creator - returns actions. thunk helps action creator return a function instead of object
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/userds')
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const reducer = (state = intialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '',
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
