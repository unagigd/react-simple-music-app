import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory  } from 'react-router'

import Main from './components/Main';
import Albums from './components/Albums';
import reducers from './reducers';

const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="/albums" component={Albums} />
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

render();
store.subscribe(render);

if (module.hot) {
  module.hot.accept();
  // module.hot.accept('./reducers', () => {
  //   const nextRootReducer = require('./reducers/index');
  //   store.replaceReducer(nextRootReducer);
  // });
}
