import React from "react";
import { useForm } from "react-hook-form";

/*
 email
 /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

 only numbers
 /^[0-9]*$/

 only letters
 /^[A-Za-z]+$/

Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

 validation border color

 mode : onChange, onTouched
*/

const ReactHookFormPart2 = () => {
  console.log(useForm());
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onChange",
  });
  // console.log(getValues);
  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>React Hook Form v6 - Part - 2</h1>
      <form autoComplete="off" onSubmit={handleSubmit(submitForm)}>
        <input
          // style={{ border: errors.firstName ? "5px solid red" : "" }}
          className={errors.firstName ? "red-border" : ""}
          ref={register({
            required: "firstName is required",
            minLength: {
              value: 4,
              message: "min 4 characters",
            },
            maxLength: {
              value: 10,
              message: "max 10 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "only letters",
            },
          })}
          name="firstName"
          type="text"
          placeholder="firstName"
        />
        <p className="red">{errors.firstName && errors.firstName.message}</p>

        <input
          className={errors.lastName ? "red-border" : ""}
          ref={register({
            required: "lastName is required",
            minLength: {
              value: 4,
              message: "min 4 characters",
            },
            maxLength: {
              value: 10,
              message: "max 10 characters",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "only letters",
            },
          })}
          name="lastName"
          type="text"
          placeholder="lastName"
        />
        <p className="red">{errors.lastName && errors.lastName.message}</p>

        <input
          className={errors.email ? "red-border" : ""}
          ref={register({
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "valid email",
            },
          })}
          name="email"
          type="text"
          placeholder="email"
        />
        <p className="red">{errors.email && errors.email.message}</p>

        <input
          className={errors.phone ? "red-border" : ""}
          ref={register({
            required: "phone is required",
            minLength: {
              value: 10,
              message: "min 10 numbers",
            },
            maxLength: {
              value: 10,
              message: "max 10 numbers",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "only numbers",
            },
          })}
          name="phone"
          type="text"
          placeholder="phone"
        />
        <p className="red">{errors.phone && errors.phone.message}</p>

        <input
          className={errors.password ? "red-border" : ""}
          ref={register({
            required: "password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            },
          })}
          name="password"
          type="password"
          placeholder="password"
        />
        <p className="red">{errors.password && errors.password.message}</p>

        <input
          className={errors.confirmPassword ? "red-border" : ""}
          ref={register({
            required: "confirmPassword is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            },
            validate: (value) =>
              value === getValues("password") || "password not match",
          })}
          name="confirmPassword"
          type="password"
          placeholder="confirmPassword"
        />
        <p className="red">
          {errors.confirmPassword && errors.confirmPassword.message}
        </p>

        <select
          className={errors.country ? "red-border" : ""}
          ref={register({
            required: "country is required",
          })}
          name="country"
        >
          <option value="">select country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="America">America</option>
        </select>
        <p className="red">{errors.country && errors.country.message}</p>

        <div className={errors.car1 ? "red-border" : ""}>
          <label>maruti</label>
          <input
            ref={register({
              required: "car1 is required",
            })}
            name="car1"
            type="checkbox"
            value="maruti"
          />
        </div>
        <p className="red">{errors.car1 && errors.car1.message}</p>

        <div className={errors.car2 ? "red-border" : ""}>
          <label>tata</label>
          <input
            ref={register({
              required: "car2 is required",
            })}
            name="car2"
            type="checkbox"
            value="tata"
          />
        </div>
        <p className="red">{errors.car2 && errors.car2.message}</p>

        <div className={errors.gender ? "red-border" : ""}>
          <label>male</label>
          <input
            ref={register({
              required: "gender is required",
            })}
            name="gender"
            type="radio"
            value="male"
          />

          <label>female</label>
          <input
            ref={register({
              required: "gender is required",
            })}
            name="gender"
            type="radio"
            value="female"
          />
        </div>
        <p className="red">{errors.gender && errors.gender.message}</p>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ReactHookFormPart2;
