import React, { useState, useEffect } from "react";
// add height on scroll
// resize window size
const CleanupFunction = () => {
  // const [value, setValue] = useState(0);
  // const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const showHeight = () => {
    // setHeight((oldHeight) => oldHeight + 1);
    setWidth(window.innerWidth);
    // console.log(height);
    console.log(width);
  };

  useEffect(() => {
    console.log("useeffect called");
    window.addEventListener("resize", showHeight);

    return () => {
      console.log("cleanup function called");
      window.removeEventListener("resize", showHeight);
    };
  });

  return (
    <>
      <div className="center">
        <h1>cleanup function</h1>
        {/* <h1>{height}</h1> */}
        <h1>{width}</h1>
        {/* <h1>{value}</h1> */}
        {/* <button className="btn" onClick={() => setValue(value + 1)}>
          click
        </button> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default CleanupFunction;
