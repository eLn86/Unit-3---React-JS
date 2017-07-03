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
    var checkStatus = event.target.checked;
    console.log(checkStatus);

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

// Declare function to take care of the Actions
const mapDispatchToProps = (dispatch) => {
  return {
    completeTask: (task) => {dispatch(toggleTodo(task))}
  }
}

export default connect(mapDispatchToProps)(TodoListView);
