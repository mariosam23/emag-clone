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

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProduct(res.data.products);
    });
  }, []);

  const [cartItems, setCartItems] = useState(() => {
    return localStorage.getItem("cartItems")
      ? Number(localStorage.getItem("cartItems"))
      : 0;
  });
  const [favoriteItems, setFavoriteItems] = useState(() => {
    return localStorage.getItem("favoriteItems")
      ? Number(localStorage.getItem("favoriteItems"))
      : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", cartItems.toString());
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", favoriteItems.toString());
  }, [favoriteItems]);

  const [cartProducts, setCartProducts] = useState<Product[]>(() => {
    return localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts")!)
      : [];
  });

  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>(
    () => {
      return localStorage.getItem("favoriteProducts")
        ? JSON.parse(localStorage.getItem("favoriteProducts")!)
        : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

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
      <button onClick={clearStorage}>Clear Storage</button>
    </div>
  );

  function clearStorage() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("favoriteItems");
    localStorage.removeItem("cartProducts");
    localStorage.removeItem("favoriteProducts");
    localStorage.removeItem("favoriteClicked");
    setCartItems(0);
    setFavoriteItems(0);
    setCartProducts([]);
    setFavoriteProducts([]);
    setFavoriteClicked({});
  }
}

export default App;
