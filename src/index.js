
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const root = document.getElementById('root');

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


const rootInstance = createRoot(root);
rootInstance.render(app);
