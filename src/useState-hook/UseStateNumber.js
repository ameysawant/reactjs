import React, { useState } from "react";

const UseStateNumber = () => {
  const [number, setNumber] = useState(0);

  const minus = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  const plus = () => {
    setNumber(number + 1);
  };

  const myTimer = () => {
    setTimeout(() => {
      setNumber((oldNumber) => {
        return oldNumber + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div className="center">
        <h1>{number}</h1>
        <button className="btn" onClick={minus}>
          -
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={plus}>
          +
        </button>
      </div>

      <div className="center">
        <h1>{number}</h1>
        <button className="btn" onClick={myTimer}>
          myTimer
        </button>
      </div>
    </>
  );
};

export default UseStateNumber;
