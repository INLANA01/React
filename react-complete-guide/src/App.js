import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
// import styled from 'styled-components';
import classes from './App.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red': 'green'};
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;
// &:hover {
//   background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//   color: brown;
// }
// `;

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
  let btnClass = [classes.Button];

  if (this.state.showPersons){
    persons = (        
      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
                  <Person 
                    click ={() => this.deletePersonHandler(index)}
                    name = {person.name} 
                    age={person.age}
                    changed = {(event) => this.nameChangedHandler(event, person.id)}
                    />
                  </ErrorBoundary>
        } )}

      </div>);
      // style.backgroundColor="red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass.push(classes.Red);
  }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    } 
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    } 


    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi I am a react App</h1>
          <p className = {assignedClasses.join(' ')}>This is working fine</p>
          {/* <StyledButton */}
          <button className={btnClass.join(' ')}
          alt = {this.state.showPersons}
            onClick={this.togglePersonHandler}>Switch Name
          </button>
          {/* </StyledButton> */}
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;