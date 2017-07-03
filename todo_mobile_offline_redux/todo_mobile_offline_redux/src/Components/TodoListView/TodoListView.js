import React, { Component, PropTypes } from 'react';

// Import redux connection
import {connect} from 'react-redux';

// Import Todo Action file
import {toggleTodo} from '../../Actions/Todo';

/**
 * Todo List View
 */
export class TodoListView extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

  }

  onClick = (event) => {

  }

  markCheckBox = (event) => {
    if(event.target.checked) {
      this.props.completeTask(this.props.todo);
    }

  }

  render() {
    return (
      <div className="row todoList">
          <div className="col-md-12">
            <h2 className="taskNameHeader">{this.props.todo.text}</h2>
            <input type="checkbox"
                   className="taskCheckBox"
                   onChange={this.markCheckBox}/>
          </div>
      </div>
    );
  }
}

// Declare function to care of state
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

// Declare function to take care of the Actions
const mapDispatchToProps = (dispatch) => {
  return {
    completeTask: (task) => {dispatch(toggleTodo(task))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
