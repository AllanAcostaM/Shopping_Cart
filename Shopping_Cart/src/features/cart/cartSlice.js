import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: "1",
      title: "Apple iPhone 15 Pro Max",
      price: 20,
      img: "https://fdn.gsmarena.com/imgroot/reviews/23/oppo-find-n3-flip/-728x314/gsmarena_002.jpg",
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
  amount: 0,
  total: 0,
};

// Crea un nuevo Slice(caracteristica)
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
