import React, { Component, PropTypes } from 'react';

/**
 * Todo
 */
export class Todo extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>My Todo with id: {this.props.match.params.id}</div>
    );
  }
}
export default Todo;
