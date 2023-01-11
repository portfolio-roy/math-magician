import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandle = (e) => {
    const clickedBtn = e.target.innerText;
    const Result = calculate(this.state, clickedBtn);
    this.setState(Result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator-container">
        <div className="display" id="display">
          {total}
          {operation}
          {next}
        </div>
        <div className="grid-container" id="button-grid">
          <button type="button" className="grid-button operator" onClick={this.clickHandle}>AC</button>
          <button type="button" className="grid-button operator" onClick={this.clickHandle}>+/-</button>
          <button type="button" className="grid-button operator" onClick={this.clickHandle}>%</button>
          <button type="button" className="grid-button operator column-4" onClick={this.clickHandle}>÷</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>7</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>8</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>9</button>
          <button type="button" className="grid-button operator column-4" onClick={this.clickHandle}>x</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>4</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>5</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>6</button>
          <button type="button" className="grid-button operator column-4" onClick={this.clickHandle}>-</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>1</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>2</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>3</button>
          <button type="button" className="grid-button operator column-4" onClick={this.clickHandle}>+</button>
          <button type="button" className="grid-button number" id="zero" onClick={this.clickHandle}>0</button>
          <button type="button" className="grid-button number" onClick={this.clickHandle}>.</button>
          <button type="button" className="grid-button operator" onClick={this.clickHandle}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
