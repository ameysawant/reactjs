import React, { useContext } from "react";
import { ProductContext } from "./Home";

const Product = ({ id, heading, imageUrl, price }) => {
  // console.log(props);
  const { deleteProduct } = useContext(ProductContext);

  return (
    <>
      <div className="col-4">
        <img className="img-fluid" src={imageUrl} alt="" />
        <h4>{heading}</h4>
        <p>{price}</p>
        <button onClick={() => deleteProduct(id)}>X</button>
      </div>
    </>
  );
};

export default Product;
