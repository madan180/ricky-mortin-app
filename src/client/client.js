import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './components/Routes/routes';
import reducers from './reducers';
import Header from './components/presentational/Header/header';

// Integrating Redux Dev Tools
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Creating Redux Store
const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));
