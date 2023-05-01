import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, createStoreHook } from 'redux';
import App from './App';
import reducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </React.StrictMode>
);

