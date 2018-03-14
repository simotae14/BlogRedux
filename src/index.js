import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// importo React Router e l'History
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
// importo le route
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
