import React, { Component } from 'react';

// Import Create CSS
import './Create.css'
import uuid from 'uuid';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      id: uuid.v4()
    }
  }

  onChange = (e) => {
    var taskName = e.target.value;
    var taskID = e.target.id;
    console.log(taskID);
    this.setState({
      taskName: taskName,
      id: taskID
    })
  }

  createTaskRow = () => {
    var state = this.state;
    if(state.taskName !== "") {
      this.props.createRow(state);
    }

    this.setState({
      taskName: "",
      id: uuid.v4()
    })

  }

  render() {
    return (
      <div className="row createTaskRow">
        <div className="col-md-12">
        <input className="taskName input-lg"
               type= "text"
               value= {this.state.taskName}
               onChange={this.onChange}
               id={this.state.id}/>
          <button className="btn btn-lg btn-primary"
                  onClick={this.createTaskRow}>Create Task</button>
        </div>
      </div>
    );
  }
}

export default Create;
