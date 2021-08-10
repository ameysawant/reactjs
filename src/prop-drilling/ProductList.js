import React from "react";
import Product from "./Product";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((item) => {
            return (
              <Product key={item.id} {...item} deleteProduct={deleteProduct} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
