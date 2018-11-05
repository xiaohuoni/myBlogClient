import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import AppRouter from './router';
import counterApp from './store/reducer';

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = (window as any).__PRELOADED_STATE__

delete (window as any).__PRELOADED_STATE__
// , preloadedState

const store = createStore(counterApp, preloadedState, composeWithDevTools(
  applyMiddleware(reduxThunk)
))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>

)

ReactDom.hydrate(app, document.querySelector('#root'))
