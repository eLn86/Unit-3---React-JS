import React, { Component } from 'react';

// Import components
import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import ProductRow from '../ProductRow/ProductRow'
import Create from '../Create/Create'
import GrandTotal from '../GrandTotal/GrandTotal'

// Import static assets
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My Amazing Cart"/>
      </div>
    );
  }
}

export default App;
