import React, { useState, createContext } from "react";
import { list } from "../recipelist";
import ProductList from "./ProductList";

export const ProductContext = createContext();
console.log(ProductContext);

const Home = () => {
  const [products, setProducts] = useState(list);
  const deleteProduct = (id) => {
    setProducts((products) => {
      return products.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <ProductContext.Provider value={{ deleteProduct, products }}>
        <ProductList />
      </ProductContext.Provider>
    </>
  );
};

export default Home;
