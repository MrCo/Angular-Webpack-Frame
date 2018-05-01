/**
 * UI-Router路由配置
 * CodeBy:Mr.Co
 * Date:2018/4/15.
 */
import IndexRouter from '../routers/index.router';
import LoginRouter from '../routers/login.router';

export default class NgRouter{
    app;
    constructor(app){
        this.app = app;
    }

    getRouterConfig($stateProvider,$urlRouterProvider,$controllerProvider){
        this.app.registerController = $controllerProvider.register;
        $stateProvider
            .state('main',{
                abstract:true,
                views:{
                    'header':{
                        template:'<div>我是头部</div>'
                    },
                    'menu':{
                        template:'我是菜单'
                    },
                    'main':{
                        template:'<div ui-view="master"></div>'
                    }
                }
            })

        new IndexRouter($stateProvider);
        new LoginRouter($stateProvider);
    }
}