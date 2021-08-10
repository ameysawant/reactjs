import React, { useState } from "react";
import { list } from "../recipelist";
import ProductList from "./ProductList";

const Home = () => {
  const [products, setProducts] = useState(list);
  const deleteProduct = (id) => {
    setProducts((products) => {
      return products.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </>
  );
};

export default Home;
