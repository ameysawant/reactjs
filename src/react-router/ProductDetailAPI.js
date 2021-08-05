import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const ProductDetailAPI = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //string
  const { pathname } = useLocation();
  console.log(pathname);

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
              {pathname === "/productdetailapi/3" && <button>more info</button>}
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default ProductDetailAPI;
