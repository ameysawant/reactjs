import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// multiple returns
// multiple returns using fetch
// short circuit evaluation
// ternary operator
// toggle component
const ShortCircuit = () => {
  // const [value, setValue] = useState(true);
  const [salary, setSalary] = useState(true);
  const [value2, setValue2] = useState(true);
  // const name = value || "kishori";
  // const surname = !value && "tutorials";

  return (
    <>
      {/* <h1>name: {value || "kishori"}</h1>
      <h1>surname: {!value && "tutorials"}</h1>
      <h1>surname: {value && "tutorials" ? "value is true" : "value false"}</h1> */}
      <button onClick={() => setSalary(!salary)}>click</button>
      <h1>{salary && 50000}</h1>

      <button onClick={() => setValue2(!value2)}>
        {value2 ? <FaBars /> : <FaTimes />}
      </button>
    </>
  );
};

export default ShortCircuit;
