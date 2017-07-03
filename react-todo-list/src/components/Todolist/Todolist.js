import React, { Component } from 'react';

// Import child component
import Todoitem from '../Todoitem/Todoitem';

import './Todolist.css';

/**
 * Header
 */
export class Todolist extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }
  getRows = () => {
    console.log('getRows');
    return this.props.createRows;
  }

  render() {
    return (
      <div className="row todoContainer">
        <div className="col-md-12">
          <Todoitem taskRows={this.getRows()}/>
        </div>
      </div>
    );
  }
}

export default Todolist;
