import React, { useState } from "react";

//! HTML        vs          JSX:
//  class                   className
//  twowords                twoWords (camelCase)
//  onclick, onchange       onClick, onChange
//  (label tag) for         (label tag) htmlFor
//  value                   defaultValue
//  ...                     ...

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const formReceived = () => {
    //! Send the form to the backend.
    alert(
      `
        Username= ${username}
        Password= ${password}
        Country= ${country}
        `
    );
  };

  return (
    <div className="container">
      <h1 className="display-3">FORM EVENTS</h1>
      <form onSubmit={formReceived}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            USERNAME: <span className="text-primary fw-bold">{username}</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onInput={(item) => setUsername(item.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            PASSWORD:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onInput={(item) => setPassword(item.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country" className="form-label">
            COUNTRY: <span className="text-primary fw-bold">{country}</span>
          </label>
          <select
            className="form-select"
            id="country"
            onChange={(item) => setCountry(item.target.value)}
          >
            <option selected="">Select your country</option>
            <option value="Germany">Germany</option>
            <option value="Turkey">Turkey</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary my-4">
          Submit
        </button>
      </form>
      <hr />
      <hr />
    </div>
  );
};

export default Form;
