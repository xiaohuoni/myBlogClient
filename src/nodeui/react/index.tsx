import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Context } from 'koa';
import App from '../../webui/app'

const react = async (ctx: Context) => {
  const template = renderToString((
    <StaticRouter location={ctx.url} context={{}}>
      <App />
    </StaticRouter>
  ))

  await ctx.render('index', {
    react: template
  })
}

export default react
