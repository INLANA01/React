import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import Validation from './Validation/Validation'
import Char from  './Char/Char'
// import userInput from '../../base-syntax--assignment-solution/src/UserInput/UserInput';


class App extends Component {

  state = {
    userName: 'Alan',
    userMessage: ''
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
  
  inputChangedHandler = (event) => {
    this.setState({userMessage: event.target.value})
  }

  deleCharHandler = (index) => {
      const text = this.state.userMessage.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userMessage: updatedText});
  }

  render(){

    const charList = this.state.userMessage.split('').map((ch , index)=> {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleCharHandler(index)}></Char>
    }); 

    return(
    <div className="App">
      <UserInput changed = {this.changeState}></UserInput>      
      <UserOutput userName = {this.state.userName} paragraph=""></UserOutput>
      <UserOutput userName = "Wolfe" paragraph="http://www.gutenberg.org/files/62880/62880-8.txt"></UserOutput>
      <ol>
        <li>
          Mumma killed a man put a gun against his head
        </li>
        <li>
          Pulled my trigger now he's dead
        </li>
        <li>
          Mumma woo hoo I dont wanna die
        </li>
        <li>
          Sometimes I wish I never been born at all
        </li>
      </ol>
      <input type="text" onChange={this.inputChangedHandler} value = {this.state.userMessage}></input>
      <p>{this.state.userMessage}</p>
      <Validation inputLength={this.state.userMessage.length} />
      {charList}
    </div>
  );
  }
}

export default App;
