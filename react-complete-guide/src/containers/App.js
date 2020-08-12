import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


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

  let persons = null;

  if (this.state.showPersons){
    persons = <Persons persons = {this.state.persons} 
                  clicked ={this.deletePersonHandler}
                  changed = {this.nameChangedHandler}
                  />;
  }
    return (
        <div className={classes.App}>
          <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
          {persons} 
        </div>
    );
  }
}

// export default Radium(App);
export default App;