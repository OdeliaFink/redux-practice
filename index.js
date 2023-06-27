const CAKE_ORDER = 'CAKE_ORDERED';

//action is an object with a type property
//action creator is a function that returns an object

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
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
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
