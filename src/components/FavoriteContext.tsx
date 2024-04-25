import React from "react";
import { Product } from "./Products";

interface FavoriteContextType {
  favoriteItems: number;
  setFavoriteItems: React.Dispatch<React.SetStateAction<number>>;
  favoriteProducts: Product[];
  setFavoriteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const FavoriteContext = React.createContext({
  favoriteItems: 0,
  setfavoriteItems: (items: number) => {},
  favoriteProducts: [],
  setFavoriteProducts: () => {},
});
