import React, {Component} from 'react';

class Sum extends Component{
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
    this.updateHandler = this.updateHandler.bind(this);
  }

  updateHandler(e) {
    console.log(e)
  this.setState({ [e.target.name]: e.target.value });
  }

  add(num1, num2) {
    this.setState({ sum: (parseInt(num1, num2, 10 ) + parseInt(num2, 10 ))});
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" name="number1" onChange={this.updateHandler}></input>
        <input className="inputLine" name="number2" onChange={this.updateHandler}></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}

export default Sum;