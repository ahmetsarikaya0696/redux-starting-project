import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    console.log("increment counter: " + state.counter);
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    console.log("decrement counter: " + state.counter);
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
