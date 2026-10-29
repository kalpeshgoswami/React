import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "../features/CounterSlice.js";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

export default store;
