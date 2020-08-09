import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
// import userInput from '../../base-syntax--assignment-solution/src/UserInput/UserInput';


class App extends Component {

  state = {
    userName: 'Alan'
  }

  nameChangedHandler = (event) => {
    this.setState({    
      persons: [
      { name: 'Alain', age: 24 },
      { name: event.target.value, age: 26 },
      { name: 'Jon', age: 32 }
    ]
    })

  }

  changeState = (event) => {
    this.setState(
      {
        userName: event.target.value
      }
    )
  }
  

  render(){
    return(
    <div className="App">
      <UserInput changed = {this.changeState}></UserInput>      
      <UserOutput userName = {this.state.userName} paragraph=""></UserOutput>
      <UserOutput userName = "Wolfe" paragraph="http://www.gutenberg.org/files/62880/62880-8.txt"></UserOutput>
    </div>
  );
  }
}

export default App;
