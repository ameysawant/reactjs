import React from "react";

const Dish = (props) => {
  // console.log(props);
  // const mylist = props.list;
  // console.log(mylist);
  const { heading, imageUrl, price } = props;
  const myFunction = (e) => {
    console.log(e);
    console.log(e.target);
  };
  const hovers = () => {
    console.log(price);
  };
  return (
    <>
      <div onMouseOver={hovers}>
        <img className="image" src={imageUrl} alt="" />
        <h4 className="heading">{heading}</h4>
        <p className="price">{price}</p>
        <button onClick={myFunction}>click</button>
        {/* <button onMouseOver={hovers}>Mouse Over</button> */}
      </div>
    </>
  );
};

export default Dish;
