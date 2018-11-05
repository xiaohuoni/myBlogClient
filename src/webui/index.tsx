import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDom.hydrate(app, document.querySelector('#root'))
