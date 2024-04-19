import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmonut: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      return { ...state, items: [...state.items, action.payload] };
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;