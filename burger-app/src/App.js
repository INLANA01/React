import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {  
    show: true
  };

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000);
  // }

  render(){
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path ="/checkout" component={Checkout}></Route>
            <Route path ="/" exact component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
