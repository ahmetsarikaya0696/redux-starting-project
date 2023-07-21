import { counterActions } from "../store/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = (amount = 1) => {
    dispatch(counterActions.increment(amount));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const counterButtons = showCounter && (
    <div>
      <button onClick={decrementHandler}>Decrement (-)</button>
      <button onClick={() => incrementHandler(5)}>Increase by 5 (+5)</button>
      <button onClick={() => incrementHandler()}>Increment (+)</button>
    </div>
  );

  const toggleCounter = (
    <button onClick={toggleCounterHandler}>
      {showCounter ? "Hide counter!" : "Show counter!"}
    </button>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {counterButtons}
      {toggleCounter}
    </main>
  );
};

export default Counter;
