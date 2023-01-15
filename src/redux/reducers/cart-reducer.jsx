import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItems(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },
    addItems(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems && findItems.count > 0) {
        findItems.count--;
      }
      state.totalPrice = state.totalPrice - findItems.price;
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const findItems = state.items.find((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.totalPrice - findItems.price * findItems.count;
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, removeItems, minusItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
