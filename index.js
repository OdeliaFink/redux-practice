const CAKE_ORDER = 'CAKE_ORDERED';

//action is an object with a type property
//action creator is a function that returns an object

function orderCake() {
  return {
    type: CAKE_ORDER,
    quantity: 1,
  };
}
