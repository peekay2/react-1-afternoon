import React, {Component} from 'react';

class EvenAndOdd extends Component{
  constructor(){
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
    handleChange(event){
      // console.log(event)
      this.setState({ userInput: event});
    }

    handleSubmit(userInput){
    // convert str into array
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
        console.log(arr);
      
        //for loop over arr to check even/odds, then update our state
        for(let i = 0; i< arr.length; i++){
          if(arr[i] % 2 === 0){
            evens.push( parseInt(arr[i], 10) )
          } else {
            odds.push( parseInt(arr[i], 10) )
          } 
        }
        this.setState( {evenArray: evens, oddArray: odds} );
      }

  render(){
    console.log(this.state.userInput.split(''))
    return(
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}/>
        <button className='confirmationButton' onClick={()=>this.handleSubmit(this.state.userInput)}>Split</button>
        <span className='resultsBox'>Evens:{JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'>Odds:{JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd;

// handleSubmit(userInput){
//   // convert str into array
//   let arr = userInput.split(''); 
//    **** now we need to figure out to parseInt() BEFORE we loop thru the array ****
//   console.log(arr);
//   //for loop over arr to check even/odds, then update our state
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//       this.setState( {evenArray:userInput} )
//     } else {
//       this.setState( {oddArray:userInput} )
//     } 
//   }

// < -- James map function
// handleSubmit(userInput){
//   // convert str into array
//   let arr = userInput.split(',');
//   let evens = [];
//   let odds = [];
//   console.log(arr);

//   //for loop over arr to check even/odds, then update our state
//   for(let i = 0; i< arr.length; i++){
//     if(arr[i] % 2 === 0){
//       evens.push( parseInt(arr[i], 10) )
//     } else {
//       odds.push( parseInt(arr[i], 10) )
//     } 
//   }
//   this.setState( {evenArray: evens, oddArray: odds} );
// }