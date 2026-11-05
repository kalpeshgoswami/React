import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../features/inventorySlice";

const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

export default store;
