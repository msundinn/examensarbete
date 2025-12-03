import { createContext, type Dispatch } from "react";
import type { CartState, CartAction } from "../reducers/cartReducer";

export interface ICartContext {
  cart: CartState;
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<ICartContext>({
  cart: { items: [] },
  dispatch: () => {},
});
