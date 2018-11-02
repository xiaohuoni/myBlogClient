import * as Koa from 'koa';
import * as React from 'react';
import { renderToString } from 'react-dom/server'
import * as serve from 'koa-static';

export const app = new Koa();

import App from '../webui/app'

app.use(serve('/Users/chenjunlin/blog/myBlogClient/public'))

app.use(async (ctx) => {
    const temp = renderToString((
      <App />
    ))

    

    ctx.body = `
    <!DOCTYPE html>
    <html lang="zh-cmn-Hans">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>罗奇个人博客</title>
      </head>
      <body>
            <div id="app">
              ${temp}
            </div>
            <script src="./app.js"></script>
      </body>
    </html>    
    `
})

app.listen(3000)
