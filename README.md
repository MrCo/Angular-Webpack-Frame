# Angular + Webpack 脚手架 V1.0
> 

***

## 目录结构
```html
|---- README.md
|---- package.json
|---- node_modules
|---- src 开发目录
|   |---- assets            资源文件
|      |---- images         图片
|   |---- bootstraps        ng启动脚本
|   |---- commons           公共方法
|   |---- components        ng组件
|   |---- controllers       页面、组件控制器
|   |---- routers           spa路由
|   |---- configs           ng配置文件
|   |---- templates         页面、组件模板
|       |---- components    组件模板
|       |---- modules       Page模块模板
|   |---- libs              第三方库
|   |---- widgets           第三方插件
|   |---- views             静态页
|   |---- skins             样式
|---- webpack
|---- webpack.config.js
```

***

## 第三方库说明

- "babel-core": "^6.26.0",
- "babel-preset-es2015": "^6.24.1",
- "babel-preset-stage-0": "^6.24.1",
- "clean-webpack-plugin": "^0.1.19",
- "extract-text-webpack-plugin": "^2.1.2",
- "glob": "^7.1.2",
- "html-webpack-plugin": "^2.30.1",
- "less": "^3.0.1",
- "less-loader": "^4.1.0",
- "react-router": "^4.2.0"
- "webpack-dev-server": "^2.9.7"<p style="background:yellow; color:red; font-size:14px;">微Web服务,安装时候版本不可以安装2以上版本,否则会报invalid "instanceof" keyword value Promise</p>  

## 运行方式
> 必须按步骤执行

* 开发环境 npm run dev
* 代码发布 npm run build
* 热更新开发环境 npm run hot

## 开发迭代记录
> 2018.04.16    搭建
