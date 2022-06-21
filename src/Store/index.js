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
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: newItem.quantity,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity !== 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      } else {
        const filterItem = state.items.filter((item) => item.id !== id);
        state.items = filterItem;
      }
    },
    removeWholeItemFromCart(state, action) {
      const id = action.payload;
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

export const { addToCart, removeFromCart, removeWholeItemFromCart } =
  cartSlice.actions;

export default store;
