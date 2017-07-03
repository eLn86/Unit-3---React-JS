import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../Home/Home'
import Todo from '../Todo/Todo'
import NotFound from '../NotFound/NotFound'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/todo/:id" component={Todo}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
