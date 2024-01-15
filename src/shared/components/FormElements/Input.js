import React, { useState } from "react";

import "./Input.css";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const enteredValueHandler = (event) => {
    const newValue = event.target.value;
    setEnteredValue(event.target.value);
    console.log(enteredValue);
    props.saveValue(enteredValue);
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={enteredValue}
        onChange={enteredValueHandler}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={enteredValue}
        onChange={enteredValueHandler}
      ></textarea>
    );

  return (
    <div className={"form-control"}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
