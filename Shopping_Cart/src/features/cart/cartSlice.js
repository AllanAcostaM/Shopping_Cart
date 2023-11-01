import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

// Crea un nuevo Slice(caracteristica)
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
