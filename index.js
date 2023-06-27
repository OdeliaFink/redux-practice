const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
//logs exact events from before (initial), event (action), and new state

//redux store allows access to state via getState()
const createStore = redux.createStore;
const bindActionCreatores = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const CAKE_ORDER = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const ICECREAM_ORDER = 'ICECREAM_ORDER';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';

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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

//reducers specify how the app's state changes in response to action
//function that accepts state and action as two arguments and returns new state
// (previousState, action ) => newState

const initialCakeState = {
  numberOfCakes: 10,
};
const intialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = intialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        numberOfIceCreamss: state.numberOfIceCreams - 1,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  //to access its state.cake.numberOfCakes or state.iceCream.numberOfIcream
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));

//anytime the store updates we log to console
// const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));

const action = bindActionCreatores(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
action.orderCake();
action.restockCake(3);
action.orderIceCream();
action.restockIceCream(9);

// unsubscribe();
