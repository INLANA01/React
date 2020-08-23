import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgeBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgeBuilder></BurgeBuilder>
      </Layout>
    </div>
  );
}

export default App;
