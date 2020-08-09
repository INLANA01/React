import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Alain', age: 24 },
      { name: 'Wolfe', age: 26 },
      { name: 'Jon', age: 32 }
    ],
    otherState: 'otherValue'
  }

  switchNameHandler = () => {
    // console.log('Was Clicked!');
    this.setState({ persons: [
      { name: 'Alan', age: 24 },
      { name: 'Wolfe', age: 26 },
      { name: 'Jon', age: 32 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a react App</h1>
    <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name = {this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
