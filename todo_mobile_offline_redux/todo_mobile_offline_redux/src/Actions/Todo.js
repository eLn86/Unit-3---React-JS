import uuid from 'uuid';

// Action object which adds a todo task
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text // returns the value of passed in text automatically
  }
}

// Define function to return the whole Todos array
export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

// Define function to return the task that was checked
export const toggleTodo = (task) => {
  return {
    type: 'TOGGLE_TASKSTATUS',
    task
  }
}
