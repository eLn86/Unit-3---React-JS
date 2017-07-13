import React, { Component } from 'react';

import CarList from './components/CarList/CarList';
import Create from './components/Create/Create';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeCar: ""
    }
  }


  setActiveCar = (id) => {

    this.setState({
      activeCar: id
    })
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-2" id="CarList">
            <CarList setActiveCar={this.setActiveCar}/>
          </div>
          <div className="col-md-10" id="CarEdit">
            <Create car={this.state.activeCar}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
