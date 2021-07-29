import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetailAPI = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //string

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res error");
        }
      })
      .then((data) => {
        // const newProduct = data.find((item) => item.id === parseInt(id));
        // console.log(newProduct);
        // setProduct(newProduct);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {
            <div className="col-6">
              <img className="img-fluid" src={product.image} alt="" />
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <h6>{product.category}</h6>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProductDetailAPI;
