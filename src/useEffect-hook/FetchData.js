import React, { useEffect, useState } from "react";
const API = "https://fakestoreapi.com/products";
const FetchData = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setProducts(data);
    // console.log(data);
  };
  //   console.log(products);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            const { id, description, category, image, price, title } = product;
            return (
              <div key={id} className="col-6 col-md-4 col-xl-3">
                <img className="img-fluid" src={image} alt={title} />
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{category}</p>
                <p>{price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchData;
