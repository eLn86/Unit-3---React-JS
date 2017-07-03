import React, { Component, PropTypes } from 'react';

// Import redux connection
import {connect} from 'react-redux';

// Import Todo Action file
import {addTodo} from '../../Actions/Todo';

import './Create.css';

/**
 * Create
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  onChange = (event) => {
    let text = event.target.value;
    this.setState({text})
  }

  onClick = (event) => {
    const {dispatch} = this.props;
    dispatch(addTodo(this.state.text));

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="create">
        <input className="form-control input-lg"
               type="text"
               placeholder="Enter todo"
               onChange={this.onChange}
               value={this.state.text}/>
        <button type="button"
                className="btn btn-primary btn-lg"
                onClick={this.onClick}>Create</button>
      </div>
    );
  }
}

// Whenever we create a component, we call the connect function from Redux to create the Create compoenent, thus the Create component will have all the functionality of Redux/Reducer/Action/Store
export default connect()(Create);
