import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import createStoreWithMiddleware from './store/ConfigureStore';
import './styles/main.scss';

const store = createStoreWithMiddleware();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
