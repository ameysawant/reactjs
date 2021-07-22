import React from "react";
import { useForm } from "react-hook-form";

/*
What is React hook Form?
React-hook-form is a library that helps you validate forms in React. React-hook-form is a minimal library without any other dependencies. It is performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

What is Register?
This allows you to register an input or select element and apply validation rules to React Hook Form.

What is handleSubmit?
This function will receive the form data if form validation is successful.

firstname
lastname
email
phone
password
select
checkbox
radio
*/

const ReactHookForm = () => {
  // console.log(useForm());
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>React Hook Form v6 - Part - 1</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          ref={register}
          name="firstName"
          type="text"
          placeholder="firstName"
        />

        <input
          ref={register}
          name="lastName"
          type="text"
          placeholder="lastName"
        />

        <input ref={register} name="email" type="text" placeholder="email" />

        <input ref={register} name="phone" type="text" placeholder="phone" />

        <input
          ref={register}
          name="password"
          type="password"
          placeholder="password"
        />

        <select ref={register} name="country">
          <option value="">select country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="America">America</option>
        </select>

        <label>maruti</label>
        <input ref={register} name="car1" type="checkbox" value="maruti" />

        <label>tata</label>
        <input ref={register} name="car2" type="checkbox" value="tata" />

        <label>male</label>
        <input ref={register} name="gender" type="radio" value="male" />

        <label>female</label>
        <input ref={register} name="gender" type="radio" value="female" />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ReactHookForm;
