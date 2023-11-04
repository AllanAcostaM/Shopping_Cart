import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: "1",
      title: "Apple iPhone 15 Pro Max",
      price: 20,
      img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
      amount: 1,
    },
    {
      id: "2",
      title: "Google Pixel 8 Pro",
      price: 35,
      img: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
      amount: 1,
    },
    {
      id: "3",
      title: "Samsung Galaxy S23 Ultra",
      price: 60,
      img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
      amount: 1,
    },
    {
      id: "4",
      title: "Xiaomi Redmi Note 12 Pro",
      price: 100,
      img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-pro.jpg",
      amount: 1,
    },
  ],
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
