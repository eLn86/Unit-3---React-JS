// Import Modules
import React, { Component } from 'react';

// Import Static Assets
import './App.css';

// Import components
import Header from '../Header/Header';
import Search from '../Search/Search';
import Todolist from '../Todolist/Todolist';
import Todoitem from '../Todoitem/Todoitem';
import Create from '../Create/Create';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }

  createTask = (task) => {
    let newTask = {};
    newTask.inputText = task.inputText;
    newTask.id = task.id;

    let tasks = this.state.tasks;
    tasks.push(newTask);

    this.setState({
      tasks: tasks
    });
    console.log(this.state.tasks)
  }

  createTaskRows = () => {
    console.log('test')
    var taskRows = [];
    this.state.tasks.forEach((task, index) => {
      taskRows.push(<Todoitem name={task.inputText}
                                   id={task.id}
                                   key={task.id} />)
    });
    console.log('CreateTaskRows: ' + taskRows)
  return taskRows;
  }

  render() {
    return (
      <div className="App container">
        <Header title="My Todos"/>
        <Search />
        <Todolist createRows={this.createTaskRows()}/>
        <Create createTask={this.createTask}/>
      </div>
    );
  }
}

export default App;
