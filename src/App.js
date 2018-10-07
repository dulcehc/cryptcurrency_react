import React, { Component } from 'react';
import './App.css';
import Ticker from './components/Ticker/Ticker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cryptocurrency Ticker</h2>
        </div>
        <Ticker/>
      </div>
    );
  }
}

export default App;
