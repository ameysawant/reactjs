import React from "react";

const Product = ({ id, heading, imageUrl, price, deleteProduct }) => {
  // console.log(props);

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
