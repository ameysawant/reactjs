import React, { useState, useEffect } from "react";
//What is useEffect?
// UseEffect is a hook which allows you to do side effects
// meaning - any work outside of the component or whenever you do something that affects the state of the component, that is side effects.
// API request, change document title, setting up an event listener

// How useEffect works?
// by default it runs after every re-render
// dependency array
// you can add multiple useEffect
// cannot call conditionally
// cleanup function

const UseEffectBasics = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    console.log("useeffect called");
    if (age >= 1) {
      console.log(age);
    }
  }, [age]);

  useEffect(() => {
    console.log("useeffect called2");
    if (salary >= 1) {
      console.log(salary);
    }
  }, []);

  console.log("component rendered");

  return (
    <>
      <div className="center">
        <h1>{age}</h1>
        <button className="btn" onClick={() => setAge(age + 1)}>
          add Age
        </button>

        <h1>{salary}</h1>
        <button className="btn" onClick={() => setSalary(salary + 10)}>
          add salary
        </button>
      </div>
    </>
  );
};

export default UseEffectBasics;
