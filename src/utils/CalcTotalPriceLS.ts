import { CartItemsType } from "../redux/reducers/cart-reducer";

export const CalcTotalPriceLS = (items: CartItemsType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
