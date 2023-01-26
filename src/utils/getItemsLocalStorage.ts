import { CartItemsType } from "../redux/reducers/cart-reducer";
import { CalcTotalPriceLS } from "./CalcTotalPriceLS";

export const getItemsFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = CalcTotalPriceLS(items);

  return {
    items: items as CartItemsType[],
    totalPrice,
  };
};
