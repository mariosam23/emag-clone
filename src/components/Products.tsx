import "../style/Products.css";
import React, { useState } from "react";
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

export const Products = ({ products }: { products: Product[] }) => {
  const [favoriteClicked, setFavoriteClicked] = useState<{
    [key: number]: boolean;
  }>({});
  const [cartClicked, setCartClicked] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleFavoriteClick = (id: number) => {
    setFavoriteClicked({ ...favoriteClicked, [id]: !favoriteClicked[id] });
  };

  const [cart, setCart] = useState<Product[]>([]);

  const handleCartClick = (product: Product) => {
    setCart([...cart, product]);
  };

  const { favoriteItems, setFavoriteItems } = React.useContext(FavoriteContext);
  const { cartItems, setCartItems } = React.useContext(CartContext);

  return (
    <div className="all-products">
      {products.slice(0, 20).map((product) => (
        <div className="item" key={product.id}>
          <p className="title">{product.title}</p>
          <img className="image" src={product.images[0]} />
          <p className="price">{product.price} $</p>
          <button
            className="add-to-cart"
            onClick={() => {setCartItems(cartItems + 1);}}
            >
            <div className="cart-icon">
              <ShoppingCartIcon /> Add to Cart
            </div>
          </button>
          <button
            className="add-to-favorites"
            onClick={() => {
              handleFavoriteClick(product.id);
              setFavoriteItems(favoriteItems + 1);
            }}
          >
            <div
              className="favorite-icon"
              style={{ color: favoriteClicked[product.id] ? "red" : "inherit" }}
            >
              <FavoriteIcon />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export const filterByCategory = (products: Product[], category: string) => {
  return products.filter((product) => product.category === category);
};

export default Products;
