import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';


// Import Redux Reducer
import {Provider} from 'react-redux';

// Import Redux Store
import {createStore} from 'redux';

// Import Todo Reducer
import TodoReducer from './Reducers/Todo';

import App from './Components/App/App';

// Import the Store created in Store.js
import {initStore} from './Store/Store';

// API
import { getTodos, setTodos } from './API/TodoAPI';
import {addTodo, addTodos} from './Actions/Todo';

import './index.css';

// declare store variable
const store = initStore();
// subscribe function is called everytime state is updated and saves todos into local storage
store.subscribe( () => {
  const state = store.getState();
  setTodos(state.todos);
})

// Declare variable initialTodos to get the saved Todos
const initialTodos = getTodos();
// Dispatch the action addTodos and pass in the todos received from getTodos()
store.dispatch(addTodos(initialTodos));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
