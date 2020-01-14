import React,{Component} from "react"

class ResultComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: this.props.result
        } 
    }

    render(){
        return(
            <div className="result">
                <div className="pull-right result-area">
                    {this.props.params}
                </div>
        <div className="pull-right input-area">{this.props.result}</div>
              </div>
        )
    }
}


export default ResultComponent;