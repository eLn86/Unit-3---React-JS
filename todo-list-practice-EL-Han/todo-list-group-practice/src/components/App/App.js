import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import Header from "../Header/Header";
import Body from "../Body/Body";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
