import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { StoreProvider } from './store/Store';


ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
