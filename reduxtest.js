const { createStore } = require("redux");

const initialState = {
  age: 21
};
const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  }
  if (action.type === "MINUS") {
    newState.age -= action.val;
  }
  return newState;
};

const store = createStore(myReducer);

store.subscribe(() => {
  console.log("state changed" + JSON.stringify(store.getState()));
});

// console.log("initial state" + JSON.stringify(store.getState()));
store.dispatch({ type: "ADD", val: 10 });
// console.log("after add " + JSON.stringify(store.getState()));
store.dispatch({ type: "MINUS", val: 5 });
// console.log("after Minus " + JSON.stringify(store.getState()));
