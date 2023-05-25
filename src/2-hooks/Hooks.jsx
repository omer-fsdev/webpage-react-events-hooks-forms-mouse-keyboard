import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    pName: "George",
    email: "george@mustermail.com",
    year: 19,
    color: "#0002A1",
  });
  const increase = () => {
    setCount(count + 1);
  };
  const change = () => {
    if (person.color === "#0002A1") {
      setPerson({
        pName: "Orwell",
        email: "orwell@mustermail.com",
        year: 84,
        color: "#D61C4E",
      });
    } else {
      setPerson({
        pName: "George",
        email: "george@mustermail.com",
        year: 19,
        color: "#0002A1",
      });
    }
  };
  return (
    <div className="container text-center">
      <hr /> <hr />
      <h1 className="display-3">useState</h1>
      <h2>
        COUNT: <span>{count}</span>
      </h2>
      <button onClick={increase} className="btn btn-success">
        INCREASE
      </button>
      <button onClick={() => setCount(count - 1)} className="btn btn-danger">
        DECREASE
      </button>
      <hr />
      <hr />
      <div className="text-end">
        <h1 className="display-3">useState WITH OBJECT</h1>
        <h2>{person.pName}</h2>
        <h5>{person.email}</h5>
        <h5>{person.year}</h5>
        <button
          onClick={change}
          className="btn text-light"
          style={{ backgroundColor: person.color }}
        >
          CHANGE
        </button>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default Hooks;
