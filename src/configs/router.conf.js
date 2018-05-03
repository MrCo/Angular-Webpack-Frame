/**
 * UI-Router路由配置
 * CodeBy:Mr.Co
 * Date:2018/4/15.
 */
import MainRouter from '../routers/main.router';
import IndexRouter from '../routers/index.router';
import LoginRouter from '../routers/login.router';
export default class NgRouter{
    app;
    constructor(app){
        this.app = app;
    }
    /**
     * 初始化Router相关配置
     * $stateProvider       object      路由配置
     * $urlRouterProvider   object      路径管理
     * $controllerProvider  object      控制器
     * */
    initRouterConfig($stateProvider,$urlRouterProvider,$controllerProvider){
        new MainRouter($stateProvider);
        new IndexRouter($stateProvider);
        new LoginRouter($stateProvider);
    }
}