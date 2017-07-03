import React, { Component, PropTypes } from 'react';

/**
 * Task Row
 */
export class TaskRow extends Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
        <div className= "row taskRow">
          <div className="col-md-12 taskRows">
            <h3 className="taskName">{this.props.taskName}</h3>
            <input type="checkbox" className="taskCheckBox"/>
          </div>
        </div>
    );
  }
}


export default TaskRow;
