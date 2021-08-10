import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "./Home";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
