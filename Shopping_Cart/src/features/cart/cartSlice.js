import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartData";

const initialState = {
  cartItems,
  amount: 4,
  total: 1000,
};

// Crea un nuevo Slice(caracteristica)
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCard: (state) => {
      // Elimina todos los elementos del cart
      state.cartItems = [];
    },
  },
});

export const { clearCard } = cartSlice.actions;
export default cartSlice.reducer;
