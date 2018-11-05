import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as views from 'koa-views';
import react from './nodeui/react'

export const app = new Koa();

app.use(serve('/Users/chenjunlin/blog/myBlogClient/public'))
app.use(views(__dirname + '/nodeui/views', {
  extension: 'ejs'
}))

app.use(react)


app.listen(3000)
