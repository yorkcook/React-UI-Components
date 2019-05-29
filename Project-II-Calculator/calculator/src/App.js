import React from 'react';
import './App.css';
import NumberButtons from './components/ButtonComponents/NumberButton'



const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
      
        <NumberButtons />
        
      </p>
    </div>
  );
};

export default App;
