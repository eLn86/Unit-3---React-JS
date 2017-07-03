import React, { Component } from 'react';

// Create Component by EL
import Create from '../Create/Create';
// Search Component by Han
import Search from '../Search/Search';
import TaskRow from '../TaskRow/TaskRow';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Task Array to handle all task rows
      tasks: []
    }
  }

  /*
   * Function name: createRow
   * Purpose: To push Object obtained from Create.js, ready to be rendered by createTaskRows function
   * Dependencies: Create.js
   * Description: Takes in an object as a parameter and assigns it to a new object which is then pushed to the task array in this.state
  */
  createTask = (taskRow) => {

    // New Object creation
    let newTask = {};
    newTask.taskName = taskRow.taskName;
    newTask.id = taskRow.id;
    // Creating new variable and push taskRow information into it
    let tasks = this.state.tasks;
    tasks.push(newTask);

    this.setState({
      tasks: tasks
    })
  }

  /*
   * Function name: createTaskRows
   * Purpose: This function is responsible for looping through the tasks array in this.state and pushing them into a new array which is rendered in Body
   * Dependencies: SearchResults.js
   * Description: Creating task rows
  */
  createTaskRows = () => {
    var taskRows = [];
    this.state.tasks.forEach((task, index) => {
      taskRows.push(<TaskRow taskName={task.taskName}
                                   id={task.id}
                                   key={task.id}/>)
    })
    return taskRows;
  }

  render() {
    var rows = this.createTaskRows();
    return (
      <div className="row">
      <div className="col-md-12 taskRows">
        {rows}
      </div>
      <Search tasks={this.state.tasks}/>

      <Create createRow={this.createTask}/>
      </div>
    );
  }
}

export default Body;
