import React, { Component } from 'react';

import './Create.css';
import uuid from 'uuid'

/**
 * Header
 */
export class Create extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      inputText: "",
      id: uuid.v4()
    }
  }

  onChange = (e) => {
    if(e.target.name === "createItemText") {
      this.state.inputText = e.target.value;
    }
    this.setState({
      inputText: this.state.inputText
    })
  }

  onClick = (e) => {
    this.props.createTask(this.state);
    // console.log('Create clicked!');
    // console.log(this.state);
    this.setState({
      inputText: "",
      id: uuid.v4()
    })
  }

  render() {
    return (
      <div className="row createItemRow">
        <div className="col-md-12">
          <div className="checkbox">
            <label className="todoItem">
              <input type="text"
                     className="input-lg"
                     name="createItemText"
                     placeholder="Create your task here..."
                     onChange={this.onChange}/>
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <button type="button"
                  className="btn btn-lg btn-primary"
                  onClick={this.onClick}>Create</button>
        </div>
      </div>
    );
  }
}

export default Create;
