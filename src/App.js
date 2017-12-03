import React, { Component } from 'react';
import './App.css';
import CoinTable from './components/cointable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinTable />
      </div>
    );
  }
}

export default App;
