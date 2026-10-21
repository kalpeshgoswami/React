import React, { useState, useReducer } from "react";

const initialValues = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "custom": {
      const number = action.payload;
      return {
        ...state,
        counter: state.counter + Number(number),
      };
    }
    default: {
      console.log("invalid operation");
      return state;
    }
  }
}

const Example = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>Counter:{state.counter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+ 1</button>
      <br /> <br />
      <button onClick={() => dispatch({ type: "decrement" })}>- 1</button>
      <br /> <br />
      <input
        type="number"
        placeholder="enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "custom", payload: number })}>
        {number} add{" "}
      </button>
    </>
  );
};

export default Example;
