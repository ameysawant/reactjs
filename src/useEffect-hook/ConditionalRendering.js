import React, { useState, useEffect } from "react";
// multiple returns
// multiple returns using fetch
// short circuit evaluation
// ternary operator
// toggle component
const API = "https://fakestoreapi.com/products";
const ConditionalRendering = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setLoading(false);
          setError(true);
          throw Error("PRODUCT NOT FOUND");
        }
      })
      .then((productData) => {
        setLoading(false);
        setProducts(productData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      {products.map((product) => {
        const { id, title } = product;
        return (
          <div key={id}>
            <h4 className="mb-4">{title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default ConditionalRendering;
