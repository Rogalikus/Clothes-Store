import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filter-reducer";
import cartReducer from "./reducers/cart-reducer";
import itemsReducer from "./reducers/items-reducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
