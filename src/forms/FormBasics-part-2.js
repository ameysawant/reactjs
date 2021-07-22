import React, { useState, useRef } from "react";
/*
  In a controlled component, form data is handled by a
  React component. The alternative is uncontrolled
  components, where form data is handled by the
  DOM itself. To write an uncontrolled component,
  instead of writing an event handler for every state
  update, you can use a ref to get form values from the
  DOM.
  1. useRef does not re-render
  2. preserve the value
  3. mainly use for targeting DOM elements
*/
const FormBasicsPart2 = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  const [formArray, setFormArray] = useState([]);

  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");

  const myContainer = useRef();
  console.log(myContainer.current);

  const changeBackground = () => {
    myContainer.current.style.backgroundColor = "red";
  };

  const handleForm = (e) => {
    e.preventDefault();
    const users = {
      fName: firstName.current.value,
      lName: lastName.current.value,
      emailId: email.current.value,
    };
    if (
      firstName.current.value &&
      lastName.current.value &&
      email.current.value
    ) {
      setFormArray((prevValue) => {
        return [...prevValue, users];
      });
      //   setFirstName("");
      //   setLastName("");
      //   setEmail("");
      firstName.current.value = "";
      lastName.current.value = "";
      email.current.value = "";
    } else {
      console.log("should not be blank");
    }
  };
  console.log(formArray);
  return (
    <>
      <h1>React Form Basics</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input
            autoComplete="none"
            ref={firstName}
            id="firstName"
            name="firstName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            autoComplete="none"
            ref={lastName}
            id="lastName"
            name="lastName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            autoComplete="off"
            ref={email}
            id="email"
            name="email"
            type="text"
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>

      <div ref={myContainer}>my div</div>
      <button type="button" onClick={changeBackground}>
        change background
      </button>
    </>
  );
};

export default FormBasicsPart2;
