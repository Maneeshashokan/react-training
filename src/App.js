import React from "react";
import logo from "./logo.svg";
import ResultComponent from "./result.component";
import ButtonBarComponent from "./buttonbar.component";
import OperatorsComponent from "./operatores.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
      params:""
    };
    this.result = 0;
    this.params = "";
    this.operator = "";
  }

  onButtonClickParent = (value) =>{
    this.params = this.params + value;
    let inputData = this.state.params + value;
    this.setState({ params: inputData });
  }

  onOperatorClick = operator => {
    this.operator = operator;
    switch (operator) {
      case '+':
        this.result = this.params !== ""
          ? this.result + parseInt(this.params)
          : this.result;
    }

    this.params = "";
    let inputData = this.state.params + operator;
    this.setState({ params: inputData });
  }

  calculateResult = () => {
    let params = parseInt(this.params);
    switch (this.operator) {
      case "+":
        this.result = this.result + params;
        this.setState({ result: this.result });
        break;
      default:
        break;
    }
    this.params = "";
  };

  render() {
    return (
      <div className="row w-100 h-100">
        <div className="col-md-12 h-100 calculator">
          <div className="container">
            <div className="row h-100">
              <ResultComponent params={this.state.params} result={this.state.result}/>
                <ButtonBarComponent onButtonClick = {this.onButtonClickParent}/>
              <OperatorsComponent onOperatorClick={this.onOperatorClick} calculateResult={this.calculateResult.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
