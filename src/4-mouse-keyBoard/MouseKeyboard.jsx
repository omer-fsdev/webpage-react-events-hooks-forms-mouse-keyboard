import { useState } from "react";
import { FaReact } from "react-icons/fa";

const MouseKeyboard = () => {
  const [xAxis, SetX] = useState(0);
  const [yAxis, SetY] = useState(0);

  const mouseEvent = (i) => {
    SetX(i.pageX);
    SetY(i.pageY);
  };
  const keyboardEvent = (i) => {
    (i.keyCode >= 48 && i.keyCode <= 57) ||
    (i.keyCode >= 96 && i.keyCode <= 105)
      ? alert("It is a number key.")
      : alert("It is not a number key.");
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <h1 className="display-3">MOUSE EVENTS</h1>
      <p>x, y</p>
      <p className="text-danger fw-bold">
        {xAxis}, {yAxis}
      </p>
      <div
        className="bg-primary text-light w-50 p-4 m-3"
        onMouseMove={mouseEvent}
      >
        <FaReact /> <br /> <span className="">COORDINATES</span>
      </div>
      <div className="">
        <hr />
        <h1 className="display-3">KEYBOARD EVENTS</h1>
        <label htmlFor="isNumber" className="d-flex text-start">
          Is it a number key? Press a key :
        </label>
        <input
          type="text"
          id="isNumber"
          className="form-control mb-5 text-success fw-bold"
          onKeyUp={keyboardEvent}
        />
      </div>
    </div>
  );
};

export default MouseKeyboard;
