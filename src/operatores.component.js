import React, { Component } from "react";

class OperatorsComponent extends Component {
  
  constructor(props) {
    super(props);
    this.operators = ["+", "-", "*", "/"];
    
  }

  onOperatorClick = event =>{
    this.props.onOperatorClick(event.target.value);
  }

  render() {
    return (
      <div className="operator-bar col-md-4 pull-left">
        {this.operators.map((item, index) => {
          return (
            <button
              key={index}
              className="button"
              onClick={this.onOperatorClick}
              value={item}
            >
              {item}
            </button>
          );
        })}
        <button className="button sum" onClick={this.props.calculateResult}>=</button>
      </div>
    );
  }
}

export default OperatorsComponent;
