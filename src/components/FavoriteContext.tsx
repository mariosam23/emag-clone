import React from "react";

export const FavoriteContext = React.createContext({
  favoriteItems: 0,
  setfavoriteItems: () => {},
  favoriteProducts: [],
  setFavoriteProducts: () => {},
  setFavoriteClicked: () => {},
});
