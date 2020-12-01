import React, {Component} from "react";
import Button from './components/Button';
import './App.css';

class App extends Component {

  state = {

    result: []

  }

  keys = [
    {value:"AC" , className: "clearButton"},
    {value: "+/-", className: "plus-minusButton"},
    {value: "%" , className: "percentageButton"},
    {value: "÷" , className: "operatorButton"},
    {value: "7" , className: "numberButton"},
    {value: "8" , className: "numberButton"},
    {value: "9" , className: "numberButton"},
    {value: "x" , className: "operatorButton"},
    {value: "4" , className: "numberButton"},
    {value: "5" , className: "numberButton"},
    {value: "6" , className: "numberButton"},
    {value: "-" , className: "operatorButton"},
    {value: "1" , className: "numberButton"},
    {value: "2" , className: "numberButton"},
    {value: "3" , className: "numberButton"},
    {value: "+" , className: "operatorButton"},
    {value: "0" , className: "zeroButton"},
    {value: "." , className: "decimalButton"},
    {value: "=" , className: "equalsButton"}
  ]

  // handleClick = (content) => {
  //   if (content === "=") {
  //     this.setState({result: eval(this.state.result.join(''))})
  //   } else {
  //     this.setState({result:[...this.state.result, content]})
  //   }
  // }

    handleClick = (content) => {
      this.setState({result: this.state.result.concat(content)})
    }

  render() {
    console.log(this.state.result)
    return (
      <div className="App">
        <div className="outerContainer">
          <div className="row" id="screen" >
            {this.state.result}
          </div>
          <div className="keysContainer">
          {this.keys.map((key, ind) => {
            return <Button 
            content={key.value} 
            className={key.className}
            key={ind}
            handleButton = {this.handleClick}>
            </Button>
          })
        }
          </div>
      </div>
      </div>
    );
  }
}




export default App;
