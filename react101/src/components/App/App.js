import React, { Component } from 'react';
import SubTitle from '../SubTitle/SubTitle'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WDI Singapore</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SubTitle title="Hello from SubTitle" color="red"/>
        <SubTitle title="Hello from WDI Singapore" color="blue"/>
      </div>
    );
  }
}

export default App;
