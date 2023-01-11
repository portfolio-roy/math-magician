import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <form className="display" id="display" name="display">
          <input className="display-input" id="display-input" name="display-input" type="text" value={0} />
        </form>
        <div className="grid-container" id="button-grid">
          <div className="grid-button operator">AC</div>
          <div className="grid-button operator">+/-</div>
          <div className="grid-button operator">%</div>
          <div className="grid-button operator column-4">÷</div>
          <div className="grid-button number">7</div>
          <div className="grid-button number">8</div>
          <div className="grid-button number">9</div>
          <div className="grid-button operator column-4">x</div>
          <div className="grid-button number">4</div>
          <div className="grid-button number">5</div>
          <div className="grid-button number">6</div>
          <div className="grid-button operator column-4">-</div>
          <div className="grid-button number">1</div>
          <div className="grid-button number">2</div>
          <div className="grid-button number">3</div>
          <div className="grid-button operator column-4">+</div>
          <div className="grid-button number" id="zero">0</div>
          <div className="grid-button number">.</div>
          <div className="grid-button operator column-4">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
