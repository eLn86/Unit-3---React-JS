// Import Store, Debugger and CombineReducers
import {createStore, compose, combineReducers} from 'redux';

// Import Reducers
import TodoReducer from '../Reducers/Todo';

// Initialise Store
export let initStore = () => {

  // declare Master Reducer
  const reducer = combineReducers({
    todos: TodoReducer
  })

  // Create the store and pass in the Master Reducer, also pass in debugger Redux Dev Tools Extension, exposing the store and all its data to the development tools
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
}
