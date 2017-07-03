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

import './index.css';

// declare store variable
const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
