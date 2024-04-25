import React from "react";
import { Product } from "./Products";

interface CartContextType {
  cartItems: number;
  setCartItems: React.Dispatch<React.SetStateAction<number>>;
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: 0,
  setCartItems: () => {},
  cartProducts: [],
  setCartProducts: () => {},
});
