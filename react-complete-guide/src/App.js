import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import styled from 'styled-components';



const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red': 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
  color: brown;
}
`;

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Alain', age: 24 },
      { id: '2', name: 'Wolfe', age: 26 },
      { id: '3', name: 'Jon', age: 32 }
    ],
    otherState: 'otherValue',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    this.setState({ persons: [
      { name: newName, age: 24 },
      { name: 'Wolfe', age: 26 },
      { name: 'Jon', age: 32 }
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({    
      persons: persons
    })

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); 
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

  // const style = {
  //   backgroundColor: 'green',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'brown'
  //   }
  // };

  let persons = null;

  if (this.state.showPersons){
    persons = (        
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                  click ={() => this.deletePersonHandler(index)}
                  name = {person.name} 
                  age={person.age}
                  key={person.id}
                  changed = {(event) => this.nameChangedHandler(event, person.id)}
                  />
        } )}

      </div>);
      // style.backgroundColor="red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
  }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    } 
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    } 


    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I am a react App</h1>
          <p className = {classes.join(' ')}>This is working fine</p>
          <StyledButton
          alt = {this.state.showPersons}
            onClick={this.togglePersonHandler}>Switch Name
          </StyledButton>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;