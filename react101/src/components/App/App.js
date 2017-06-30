import React, { Component } from 'react';

// Import components
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'

// Import static assets
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header title="My Amazing Cart"/>
          <Cart />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
