// ParentComponent.js
import React, { useState } from 'react';
import Products from './Products';
import NavBar from './NavBar';

const Parent = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart} />
      <Products cart={cart} setCart={setCart} />
    </>
  );
};

export default Parent;
