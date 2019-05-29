import React from "react";
import "./Button.css";

const NumberButton = ({ text, buttonStyle }) => {
  return <button className={buttonStyle}>{text}</button>;
};

// const NumberColumn1 = (props) => {
//     return (
//         <div className = "number-buttons">
//             <div className = "number">{props.numberProp[0]}</div>
//             <div className = "number">{props.numberProp[1]}</div>
//             <div className = "number">{props.numberProp[2]}</div>
//         </div>
//     );
// }

// const NumberColumn2 = (props) => {
//     return (
//         <div className = "number-buttons">
//             <div className = "number">{props.numberProp}</div>
//             <div className = "number">{props.numberProp}</div>
//             <div className = "number">{props.numberProp}</div>
//         </div>
//     );
// }

// const NumberButtons = () => {
//     return (
//         <div className = "number-pad">
//             <NumberColumn1 numberProp = {[1, 2, 3]} />
//             <NumberColumn2 numberProp = {[4, 5, 6]} />

//         </div>
//     );
// }

export default NumberButton;
