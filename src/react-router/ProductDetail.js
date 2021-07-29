import React, { useState, useEffect } from "react";
import { list } from "../recipelist";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  console.log(useParams());
  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const newProduct = list.find((item) => item.id === parseInt(id));
    setProduct(newProduct);
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {
            <div className="col-6">
              <img src={product.imageUrl} className="img-fluid" alt="" />
              <h5>{product.heading}</h5>
              <p>{product.price}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
