import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import CarListView from '../CarListView/CarListView';


import './CarList.css';

/**
 * CarList
 */
export class CarList extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      cars: [],
      activeCar: ""
    }
  }

  componentDidMount() {

    axios.get('/api/')
      .then( (response) => {
        this.setState({
          cars: response.data
        });
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  onClick = (e) => {

    this.props.setActiveCar(e.target.id);
    this.setState({
      activeCar: e.target.id
    });
  }

  addCars = () => {
    return this.state.cars.map((car) => {
      let isActive = car._id == this.state.activeCar ? "active" : "";
      return ( <CarListView car={car} key={ car._id } onClick={this.onClick} active={isActive} /> )
    });
  }

  render() {
    return (
      <div className="row" id="CarList">
        <div className="col-md-12" id="search">
          <input className="form-control" type="text" placeholder="Search" />
         </div>
         {this.addCars()}
      </div>
    );
  }
}


export default CarList;
