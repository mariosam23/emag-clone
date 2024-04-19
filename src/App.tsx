import "./App.css";
import NavBar from "./components/NavBar";
import Products, { Product } from "./components/Products";
import { CartContext } from "./components/CartContext";
import { FavoriteContext } from "./components/FavoriteContext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const url = "https://dummyjson.com/products";
const products: Product[] = [];

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data.products);

      console.log(products);
    });
  }, []);

  const [cartItems, setCartItems] = React.useState(() => {
    return localStorage.getItem("cartItems")
      ? Number(localStorage.getItem("cartItems"))
      : 0;
  });
  const [favoriteItems, setFavoriteItems] = React.useState(() => {
    return localStorage.getItem("favoriteItems")
      ? Number(localStorage.getItem("favoriteItems"))
      : 0;
  });

  React.useEffect(() => {
    localStorage.setItem("cartItems", cartItems.toString());
  }, [cartItems]);

  React.useEffect(() => {
    localStorage.setItem("favoriteItems", favoriteItems.toString());
  }, [favoriteItems]);

  const [cartProducts, setCartProducts] = React.useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = React.useState<Product[]>([]);

  return (
    <div>
      <CartContext.Provider
        value={{ cartItems, setCartItems, cartProducts, setCartProducts }}
      >
        <FavoriteContext.Provider
          value={{
            favoriteItems,
            setFavoriteItems,
            favoriteProducts,
            setFavoriteProducts,
          }}
        >
          <NavBar />
          <Products products={product} />
        </FavoriteContext.Provider>
      </CartContext.Provider>
      {/* <button onClick={clearStorage}>Clear Storage</button> */}
    </div>
  );

  function clearStorage() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("favoriteItems");
    setCartItems(0);
    setFavoriteItems(0);
  }
}

export default App;
