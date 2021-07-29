import React, { useState } from "react";
import { list } from "../recipelist";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState(list);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {products.map((item) => {
            const { id, heading, imageUrl, price } = item;
            return (
              <div key={id} className="col-4">
                <Link to={`productdetail/${id}`}>
                  <img src={imageUrl} className="img-fluid" alt="" />
                </Link>
                <h5>{heading}</h5>
                <p>{price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
