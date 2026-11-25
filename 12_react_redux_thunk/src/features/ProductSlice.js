import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../features/ProductThunk";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const product = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        ((state.loading = false), (state.products = action.payload));
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      });
  },
});

export default product.reducer;
