import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "./components/Add";
import List from "./components/List";
import { increment, decrement } from "./features/CounterSlice";
import Counter from "./components/Counter";
import InventoryStats from "./components/InventoryStats";

const App = () => {
  return (
    <>
      {/* <Counter /> */}

      <Add />

      <InventoryStats />
      
      <List />
    </>
  );
};

export default App;
