import React from "react";

export const FavoriteContext = React.createContext({
  favoriteItems: 0,
  setfavoriteItems: (items: number) => {},
  favoriteProducts: [],
  setFavoriteProducts: () => {},
  setFavoriteClicked: () => {},
});
