import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index'
import App from './App';
import reducers from './reducers/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(reducers)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

