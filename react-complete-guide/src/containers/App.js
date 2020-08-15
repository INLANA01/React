import React, { Component } from 'react';
// import logo from '../assets/logo.svg';
import './App.css';
// import Person from '../components/Persons/Person/Person';
import classes from './App.css';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Alain', age: 24 },
      { id: '2', name: 'Wolfe', age: 26 },
      { id: '3', name: 'Jon', age: 32 }
    ],
    otherState: 'otherValue',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
      console.log('[App.js getDerivedStateFromProps] ', props);
      return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate'); 
    return true;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //     console.log('[App.js] getSnapshotBeforeUpdate...');  
  //     return {message: 'Snapshot App huh'};
  // }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[App.js] componentDidUpdate...');
      console.log(snapshot);
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
    console.log('[App.js render')

  let persons = null;

  if (this.state.showPersons){
    persons = <Persons persons = {this.state.persons} 
                  clicked ={this.deletePersonHandler}
                  changed = {this.nameChangedHandler}
                  />;
  }
    return (
        // <div className={classes.App}>
        <Aux>
          <button onClick={() => {
              this.setState({showCockpit: false});
            }}>            
          </button>
          {this.state.showCockpit ? (
          <Cockpit 
          title = {this.props.appTitle}
          showPersons = {this.state.showPersons}
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonHandler}/>
          ): null}
          {persons} 
        </Aux>
        // </div>
    );
  }
}

// export default Radium(App);
export default withClass(App, classes.App);
