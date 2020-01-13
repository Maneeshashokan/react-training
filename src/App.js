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
        result: "My Test String"
    };
    this.result = "Result";
  }

  onButtonClickParent = (value) =>{
    this.setState({result: value},()=>{
      console.log(this.state.result)
    })
    this.result = value;
  }

  render() {
    return (
      <div className="row w-100 h-100">
        <div className="col-md-12 h-100 calculator">
          <div className="container">
            <div className="row h-100">
                <ResultComponent result = {this.state.result}/>
                <ButtonBarComponent onButtonClick = {this.onButtonClickParent}/>
                <OperatorsComponent/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
