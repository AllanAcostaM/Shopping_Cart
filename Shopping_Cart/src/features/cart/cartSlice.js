import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import cartItems from "../../data/cartData";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const url = "http://localhost:3000/items";

// Middleware
// Etsados de la peticion asincrona (promises)
// 1. Pending
// 2. Fullfulled (exito)
// 3. Rejected (error)
export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    return [];
  }
});

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
    increaseItemAmount: (state, { payload }) => {
      // Busca el elemento dado su id
      const cartItem = state.cartItems.find((item) => item.id === payload);
      // Incrementa la cantidad del item
      cartItem.amount++;
    },
    decreaseItemAmount: (state, { payload }) => {
      // Busca el elemento dado su id
      const cartItem = state.cartItems.find((item) => item.id >= payload);
      // Decrementa la cantidad del item
      if (cartItem.amount > 0) {
        cartItem.amount--;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      // Recorre los items para calcular el amount y total del carrito
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      // Modifica el estado
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      // Peticion pediente
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      // Peticion exitosa
      .addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // Modifica el estado
        // payload = datos obtenidos del backend
        state.cartItems = payload;
      })
      // Peticion fallida
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  clearCard,
  removeItem,
  increaseItemAmount,
  decreaseItemAmount,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
