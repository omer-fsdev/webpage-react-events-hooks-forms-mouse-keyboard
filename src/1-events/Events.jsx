import React from "react";

const Events = () => {
  // js field
  let title = "HELLO";
  let count = 0;
  const increase = () => {
    count++;
    document.querySelector("span").textContent = count;
  };
  const date = (param) => {
    document.querySelector(".btn-warning").textContent = param;
  };
  return (
    //jsx field
    <div className="container text-start mt-5">
      <h1 className="display-3">INFO: {title}</h1>
      <h2>
        COUNT: <span>{count}</span>
      </h2>
      <button onClick={increase} className="btn btn-success">
        INCREASE
      </button>
      <button
        onClick={() => date(new Date().getFullYear())}
        className="btn btn-warning ms-3"
      >
        SHOW DATE
      </button>
    </div>
  );
};

export default Events;
