import React, { useState } from "react";
import "../style/NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product } from "./Products";
import { CartContext } from './CartContext';
import { FavoriteContext } from './FavoriteContext';

const NavBar = () => {
  const { cartItems } = React.useContext(CartContext);
  const { favoriteItems } = React.useContext(FavoriteContext);
  const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
  const [favoriteDropdownVisible, setFavoriteDropdownVisible] = useState(false);

  return (
    <>
      <div className="navbar">
        <img className="logo-img" src="src\images\logo.png" alt="" />

        <div className="search">
          <input className="search-input" type="text" />
          <SearchIcon className="search-icon" />
        </div>

        <div className="menu">
          <div className="menu-option">
            <span className="menu-option-row">Contul meu</span>
          </div>

          <div className="menu-option">
            <span className="menu-option-row">Setari</span>
          </div>

          <div className="menu-option">
            <span className="menu-option-row">Help</span>
          </div>

          <div
            className="option-cart"
            onMouseEnter={() => setCartDropdownVisible(true)}
            onMouseLeave={() => setCartDropdownVisible(false)}
          >
            <ShoppingCartIcon className="cart-icon" />
            <span className="count">{cartItems}</span>
            {cartDropdownVisible && (
              <div className="dropdown-menu">
                <div className="product-name">Product Name</div>
                <div className="product-price">$99.99</div>
                <div className="products-total">Products total</div>
              </div>
            )}
          </div>

          <div
            className="option-favorite"
            onMouseEnter={() => setFavoriteDropdownVisible(true)}
            onMouseLeave={() => setFavoriteDropdownVisible(false)}
          >
            <FavoriteIcon className="nav-favorite-icon" />
            <span className="count">{ favoriteItems }</span>
            {favoriteDropdownVisible && (
              <div className="dropdown-menu">
                <div className="product-name">Product Name</div>
                <div className="product-price">$99.99</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
