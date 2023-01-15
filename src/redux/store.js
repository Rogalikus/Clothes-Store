import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filter-reducer";
import cartReducer from "./reducers/cart-reducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
});
