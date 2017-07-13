import React, { Component, PropTypes } from 'react';

import './CarListView.css';

/**
 * CarListView
 */
export class CarListView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ "col-md-12 carmini " + this.props.active} onClick={this.props.onClick} id={this.props.car._id}>
          <div className="manufacturer">{this.props.car.manufacturer}</div>
          <div className="model">{this.props.car.year} - {this.props.car.model}</div>
      </div>
    );
  }
}

export default CarListView;
