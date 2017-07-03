/*
 * Reducers - This is where state of action variables is modified
*/

const todos = (state = [], action) => {  // state = [] sets the initial state and adds empty array as the default

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,   // if state action is 'ADD_TODO', clone the state
        {
          id: action.id,
          text: action.text,
          completed: false    // Set the initial value of a task, in this case whether it is completed, to false
        }
      ]
      break;
      case 'ADD_TODOS':
        return action.todos
        break;
      case 'TOGGLE_TASKSTATUS':
        return [
          ...state,
          {
            completed: true
          }
        ]
        break;
    default:
      return state    // Return the empty array state if there is no action
  }
}

export default todos;
