import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/cartData";

const initialState = {
  cartItems,
  amount: 4,
  total: 60,
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
    removeItem: (state, action) => {
      // Obtiene el id del item
      const itemId = action.payload;
      // Elimina el item dado su id
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { clearCard, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
