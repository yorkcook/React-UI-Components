import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <div>
        <CalculatorDisplay text="test" />
        <ActionButton text="clear" />
        <div className="buttonStyle">
          {[...Array(9)].map((x, i) => (
            <NumberButton buttonStyle="numberButton" text={i + 1} />
          ))}
        </div>
        <ActionButton text="0" />
      </div>
    </div>
  );
};

export default App;
