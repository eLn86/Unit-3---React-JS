import uuid from 'uuid';

// Action object which adds a todo task
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: uuid.v4(),
    text // returns the value of passed in text automatically
  }
}
