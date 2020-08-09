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

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({ persons: [
      { name: newName, age: 24 },
      { name: 'Wolfe', age: 26 },
      { name: 'Jon', age: 32 }
    ]})
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

  render() {

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>Hi I am a react App</h1>
    <button
      style={style} 
      onClick={() => this.switchNameHandler('Alan')}>Switch Name
    </button>
        <Person 
        name = {this.state.persons[0].name} 
        age={this.state.persons[0].age}></Person>
        <Person 
        name = {this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Anil')}
        changed={this.nameChangedHandler}>My hobbies: Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
