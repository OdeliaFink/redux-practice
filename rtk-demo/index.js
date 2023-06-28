const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('initialstate', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('update', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe();
