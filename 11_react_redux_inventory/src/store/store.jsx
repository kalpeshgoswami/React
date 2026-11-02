import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/CounterSlice";
import inventoryReducer from "../features/inventorySlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    inventory: inventoryReducer,
  },
});

export default store;
