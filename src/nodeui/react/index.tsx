import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Context } from 'koa';
import counterApp from './../../webui/store/reducer'
import App from '../../webui/router'

const react = async (ctx: Context) => {
  const store = createStore(counterApp)

  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c')

  store.getState()

  const template = renderToString((
    <Provider store={store}>
      <StaticRouter location={ctx.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  ))

  await ctx.render('index', {
    react: template,
    preloadedState: preloadedState
  })
}

export default react
