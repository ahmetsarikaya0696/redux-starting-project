import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = (amount = 1) => {
    dispatch({ type: "increment", amount: amount });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const counters = showCounter && (
    <div>
      <button onClick={decrementHandler}>Decrement (-)</button>
      <button onClick={() => incrementHandler(5)}>Increase by 5 (+5)</button>
      <button onClick={() => incrementHandler()}>Increment (+)</button>
    </div>
  );

  const toggleCounter = <button onClick={toggleCounterHandler}>{showCounter ? "Hide counter!" : "Show counter!"}</button>;

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {counters}
      {toggleCounter}
    </main>
  );
};

export default Counter;
