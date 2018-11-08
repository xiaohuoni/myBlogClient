# react服务器渲染原理

## 项目地址

https://github.com/logictuLuoqi/myBlogClient  

## react 服务器渲染好处

1.利于SEO：React服务器渲染的方案使你的页面在一开始就有一个HTML DOM结构，方便Google等搜索引擎的爬虫能爬到网页的内容。  
2.提高首屏渲染的速度：服务器直接返回一个填满数据的HTML，而不是在请求了HTML后还需要异步请求首屏数据。  
3.前后端都可以使用js  

## 先搞清楚概念

### 什么是前后端同构呢

就是前后端都可以使用同一套代码生成页面，页面既可以由前端动态生成，也可以由后端服务器直接渲染出来  

### 服务器渲染的原理

服务端调用react的renderToString方法，在服务器端生成文本，插入到html文本之中，输出到浏览器客户端。然后客户端检测到这些已经生成的dom,就不会重新渲染，直接使用现有的html结构。  

然而现实并不是这么单纯，使用react做前端开发的应该不会不使用webpack,React-router,redux等等一些提高效率，简化工作的一些辅助类库或者框架，这样的应用是不是就不太好做同构应用了？至少不会向上文这么简单吧？  

做当然是可以做的，但复杂度确实也大了不少  

## 怎么做呢 介意大家先把我的项目跑起来

```bash
    git clone git@github.com:logictuLuoqi/myBlogClient.git
    cd myBlogClient
    npm run start
    npx node-dev build/app.js
```

## 这个框架是这么搭起来的

### gulp是什么

gulp是 自动化构建工具增强你的工作流程
不用这个也可以 自己webpack-watch 一堆终端用了这个就是整合了一套流程

### EJS处理

#### EJS是什么

https://github.com/tj/ejs

EJS是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有如何组织内容的教条；也没有再造一套迭代和控制流语法；有的只是普通的 JavaScript 代码而已

### tsx服务端处理

服务端 千万不能用 webpack编译处理 这个是禁忌

服务器采用tsc处理  tsconfig.json

### tsx客户端处理

客户端采用webpack处理

/config目录下的 webpack配置
