import React from 'react';

export const CartContext = React.createContext({
  cartItems: [],
  setCartItems: (items) => {},
});
