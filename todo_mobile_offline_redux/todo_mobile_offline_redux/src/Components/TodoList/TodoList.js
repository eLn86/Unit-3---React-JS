import React, { Component, PropTypes } from 'react';

// Import Redux connection
import {connect} from 'react-redux';

/**
 * TodoList
 */
export class TodoList extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }


  renderTodo = () => {
    const {todos} = this.props;
    if(todos.length === 0) {
      return (
        <div>Nothing to do, add something!</div>
      )
    }
    return todos.map((todo) => {
      return (
        <div>{todo.text}</div>
      )
    })
  }

  render() {

    const todoRows = this.renderTodo();

    return (
      <section className="row">
        <div className="col-xs-12">
            {todoRows}
        </div>
      </section>
    );
  }
}

export default connect(
    (state) => {
      return state;
    }
)(TodoList);
