import "./App.css";
import NavBar from "./components/NavBar";
import Products, { Product } from "./components/Products";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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

  return (
    <>
      <NavBar />
      <Products products={product} />
    </>
  );
}

export default App;
