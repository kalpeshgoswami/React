import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "./components/Add";
import List from "./components/List";
import { increment,decrement } from "./features/CounterSlice";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      <Add />
      <List />
    </>
  );
};

export default App;
