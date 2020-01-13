import React, { Component } from "react";

class ButtonBarComponent extends Component {
  constructor(props) {
    super(props);
    this.buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9,0];
  }

  onButtonClick = event =>{
    console.log(event.target.value);
    this.props.onButtonClick(event.target.value)
  }

  render() {
    return (
      <div className="button-bar col-md-8 pull-left">
        {this.buttons.map((item, index) => {
          return (
            <button key={index} className="button" value={item} onClick={this.onButtonClick}>
              {item}
            </button>
          );
        })}
        <button className="button clear" >clear</button>
      </div>
    );
  }
}

export default ButtonBarComponent;
