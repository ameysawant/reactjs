import React, { useState } from "react";

const FormBasics = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(fname, lname);
  };
  return (
    <>
      <div className="container mt-5" onSubmit={handleForm}>
        <form className="row">
          <div className="col-12 mb-4">
            <label className="d-block" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="fc"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="col-12 mb-4">
            <label className="d-block" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="fc"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="col-12 mb-4">
            <button>submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormBasics;
