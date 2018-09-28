import React, {Component} from 'react';

class Palindrome extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(input){
    // console.log(event)
    this.setState({ userInput: input});
  }

  palindromeBot(userInput){
    let forwards = userInput;
    let reverse = userInput;

    reverse = reverse.split('');
    reverse = reverse.reverse();
    reverse = reverse.join('');

    if ( forwards === reverse){
      this.setState({palindrome: 'YEP ITS A PALINDROME' })
    } else {
      this.setState( {palindrome: 'NOPE TRY AGAIN' })
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.palindromeBot(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}

export default Palindrome;