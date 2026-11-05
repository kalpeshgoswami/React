import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "phone",
      qty: 10,
      price: "10000",
      category: "electronics",
    },
    {
      id: 2,
      name: "laptop",
      qty: 3,
      price: "20000",
      category: "electronics",
    },
    {
      id: 3,
      name: "Tablet",
      qty: 5,
      price: "10000",
      category: "electronics",
    },
    {
      id: 4,
      name: "Chair",
      qty: 12,
      price: "2000",
      category: "furniture",
    },
    {
      id: 5,
      name: "table",
      qty: 20,
      price: "5000",
      category: "furniture",
    },
  ],
  editVal: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    add: (state, action) => {
      const newProduct = {
        id: new Date().getTime(),
        ...action.payload,
      };

      state.products.push(newProduct);

      console.log("product list", [...state.products]);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((l) => l.id !== action.payload);
    },

    setEditValue: (state, action) => {
      state.editVal = state.products.find((p) => p.id === action.payload);
    },

    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);

      if (index !== -1) {
        state.products[index] = action.payload;
      }

      state.editVal = null;
    },
  },
});

export const { add, deleteProduct, updateProduct, setEditValue } =
  inventorySlice.actions;

export default inventorySlice.reducer;
