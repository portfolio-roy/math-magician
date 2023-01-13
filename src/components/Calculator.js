import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;

  const clickHandle = (e) => {
    const clickedBtn = e.target.innerText;
    const result = calculate(state, clickedBtn);
    setState(result);
  };

  return (
    <div className="calculator-container">
      <div className="display" id="display">
        {total}
        {operation}
        {next}
      </div>
      <div className="grid-container" id="button-grid">
        <button type="button" className="grid-button operator" onClick={clickHandle}>AC</button>
        <button type="button" className="grid-button operator" onClick={clickHandle}>+/-</button>
        <button type="button" className="grid-button operator" onClick={clickHandle}>%</button>
        <button type="button" className="grid-button operator column-4" onClick={clickHandle}>÷</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>7</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>8</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>9</button>
        <button type="button" className="grid-button operator column-4" onClick={clickHandle}>x</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>4</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>5</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>6</button>
        <button type="button" className="grid-button operator column-4" onClick={clickHandle}>-</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>1</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>2</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>3</button>
        <button type="button" className="grid-button operator column-4" onClick={clickHandle}>+</button>
        <button type="button" className="grid-button number" id="zero" onClick={clickHandle}>0</button>
        <button type="button" className="grid-button number" onClick={clickHandle}>.</button>
        <button type="button" className="grid-button operator column-4" onClick={clickHandle}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
