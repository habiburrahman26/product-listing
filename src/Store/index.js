import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += 1;
        existingItem.price = existingItem.price * existingItem.quantity + 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity !== 1) {
        existingItem.quantity -= 1;
        existingItem.price = existingItem.price * existingItem.quantity - 1;
      } else {
        const filterItem = state.items.filter((item) => item.id !== id);
        state.items = filterItem;
      }
    },
    removeWholeItemFromCart(state, action) {
      const id = action.payload.id;
      const filterItem = state.items.filter((item) => item.id !== id);
      state.items = filterItem;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeFromCart,removeWholeItemFromCart } = cartSlice.actions;

export default store;
