import React, { Component } from 'react';


import './Todoitem.css';

/**
 * Header
 */
export class Todoitem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const taskRows = this.props.taskRows;
    const rows = []
    for(var i in taskRows) {
      rows.push(taskRows[i])
    };
    console.log(rows)
    return (
      <div className="col-md-12 taskRows">
      <input type="checkbox" />{this.props.name}
      {rows}
      </div>
    );
  }
}

export default Todoitem;
