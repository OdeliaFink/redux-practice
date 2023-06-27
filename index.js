const redux = require('redux');

//redux store allows access to state via getState()
const createStore = redux.createStore;

const CAKE_ORDER = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

//action is an object with a type property
//action creator is a function that returns an object

function orderCake() {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCK,
    payload: qty,
  };
}

//reducers specify how the app's state changes in response to action
//function that accepts state and action as two arguments and returns new state
// (previousState, action ) => newState

const initialState = {
  //when the store just opens it starts with 10
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        //first make a copy of state object and onnly update number of cakes without affection other properties
        numberOfCakes: state.numberOfCakes - 1,
      };
    case CAKE_RESTOCK:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state', store.getState());

//anytime the store updates we log to console
const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

unsubscribe();
