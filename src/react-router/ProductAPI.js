import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = "https://fakestoreapi.com/products";
const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("res error");
        }
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };
  console.log(products);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {products.map((item) => {
            const { id, image, title, description, price, category } = item;
            return (
              <div key={id} className="col-4">
                <Link to={`/productdetailapi/${id}`}>
                  <img className="img-fluid" src={image} alt="" />
                </Link>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{price}</p>
                <p>{category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductAPI;
