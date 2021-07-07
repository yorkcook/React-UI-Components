import React from "react";
import "./Button.css";

const ActionButton = ({ text, buttonStyle }) => {
  return <button className={buttonStyle}>{text}</button>;
};

export default ActionButton;
