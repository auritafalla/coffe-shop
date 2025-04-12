import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coffee } from '../data/coffee';  // Asegúrate de importar el tipo Coffee

interface CartState {
  cart: Coffee[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Añadir un producto al carrito
    addToCart: (state, action: PayloadAction<Coffee>) => {
      state.cart.push(action.payload);
    },
    // Eliminar un producto del carrito
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // Vaciar el carrito
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
