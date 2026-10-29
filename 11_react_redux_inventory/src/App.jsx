import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  custom,
  customDecrement,
  decrement,
  increment,
  reset,
} from "./features/CounterSlice";

const App = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <br />

      <input
        type="number"
        placeholder="enter custom number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      
      <br />
      <br />

      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <br />
      <br />

      <button onClick={() => dispatch(custom(number))}>Custom increment</button>

      <br />
      <br />

      <button onClick={() => dispatch(customDecrement(number))}>
        Custom decrement
      </button>

      <br />
      <br />

      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default App;
