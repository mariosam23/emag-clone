import "../style/Products.css";
import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { FavoriteContext } from "./FavoriteContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface Product {
  id: number;
  price: number;
  images: string[];
  title: string;
  category: string;
}

export const Products = ({
  products,
  selectedCategory,
}: {
  products: Product[];
  selectedCategory: string | null;
}) => {
  const [favoriteClicked, setFavoriteClicked] = useState<{
    [key: number]: boolean;
  }>(() => {
    return localStorage.getItem("favoriteClicked")
      ? JSON.parse(localStorage.getItem("favoriteClicked")!)
      : {};
  });

  useEffect(() => {
    localStorage.setItem("favoriteClicked", JSON.stringify(favoriteClicked));
  }, [favoriteClicked]);

  const handleFavoriteClick = (id: number) => {
    setFavoriteClicked((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const { favoriteItems, setFavoriteItems } = React.useContext(FavoriteContext);
  const { cartItems, setCartItems } = React.useContext(CartContext);
  const { cartProducts, setCartProducts } = React.useContext(CartContext);
  const { favoriteProducts, setFavoriteProducts } =
    React.useContext(FavoriteContext);

  return (
    <div className="all-products">
      {products
        .filter(
          (product) =>
            !selectedCategory || product.category === selectedCategory
        )
        .slice(0, 30)
        .map((product) => (
          <div className="item" key={product.id}>
            <p className="title">{product.title}</p>
            <img className="image" src={product.images[0]} />
            <p className="price">{product.price} $</p>
            <button
              className="add-to-cart"
              onClick={() => {
                setCartItems(cartItems + 1);
                setCartProducts([...cartProducts, product]);
              }}
            >
              <div className="cart-icon">
                <ShoppingCartIcon /> Add to Cart
              </div>
            </button>
            <button
              className="add-to-favorites"
              onClick={() => {
                handleFavoriteClick(product.id);
                if (
                  favoriteProducts.some(
                    (favProduct) => favProduct.id === product.id
                  )
                ) {
                  setFavoriteProducts(
                    favoriteProducts.filter(
                      (favProduct) => favProduct.id !== product.id
                    )
                  );
                  setFavoriteItems(favoriteItems - 1);
                } else {
                  setFavoriteProducts([...favoriteProducts, product]);
                  setFavoriteItems(favoriteItems + 1);
                }
              }}
            >
              <div
                className="favorite-icon"
                style={{
                  color: favoriteClicked[product.id] ? "red" : "black",
                }}
              >
                <FavoriteIcon />
              </div>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Products;
