import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcTotalPriceLS } from "../../utils/CalcTotalPriceLS";
import { getItemsFromLS } from "../../utils/getItemsLocalStorage";
import { RootState } from "../store";

export type CartItemsType = {
  id: string;
  title: string;
  sizes: number;
  price: number;
  count: number;
  image: string;
  type: string;
};

export interface CartReducerStateType {
  totalPrice: number;
  items: Array<CartItemsType>;
}

const { items, totalPrice } = getItemsFromLS();

const initialState: CartReducerStateType = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItemsType>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);
      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = CalcTotalPriceLS(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems && findItems.count > 1) {
        findItems.count--;
        state.totalPrice = state.totalPrice - findItems.price;
      }
    },
    removeItems(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      if (findItems) {
        state.totalPrice = state.totalPrice - findItems.price * findItems.count;
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => {
  return state.cart;
};
export const countItemsById = (id: string) => (state: RootState) => {
  return state.cart.items.find((obj) => obj.id === id);
};

export const { addItems, removeItems, minusItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
