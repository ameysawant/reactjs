import React, { useState } from "react";

const UseStateObject = () => {
  //   const [value, setValue] = useState({
  //     heading: "Chicken Tikka Biryani",
  //     price: "Rs. 500",
  //     imageUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/ruchika-rasoi.appspot.com/o/images%2Fproducts%2F3-12-23-chicken-boneless-biryani.jpg?alt=media&token=1cb41302-82cb-4e0f-9ac3-32e008e06542",
  //   });

  const [heading, setHeading] = useState("Chicken Tikka Biryani");
  const [price, setPrice] = useState("Rs. 500");
  const [imageUrl, setImageUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/ruchika-rasoi.appspot.com/o/images%2Fproducts%2F3-12-23-chicken-boneless-biryani.jpg?alt=media&token=1cb41302-82cb-4e0f-9ac3-32e008e06542"
  );

  const changeHeading = () => {
    // setValue({ ...value, heading: "Mutton Tikka Birayni" });
    setHeading("Mutton Tikka Biryani");
  };

  return (
    <>
      <div className="col">
        <img src={imageUrl} alt="" />
        <h2>{heading}</h2>
        <p>{price}</p>
        <button onClick={changeHeading}>Change Heading</button>
      </div>
    </>
  );
};

export default UseStateObject;
