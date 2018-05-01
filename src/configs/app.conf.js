/**
 * Angular 配置
 * CodeBy:Mr.Co
 * Date:2018/4/15.
 */
import NgRouter from './router.conf';
import GridView from '../components/gridview.component';
export default class AppConf{
    app;
    constructor(){
        this.app = angular.module('defaultApp',['ui.router']);

        this.app.config(($controllerProvider,$compileProvider,$filterProvider,$provide) => {
            this.app.register = {
                controller:$controllerProvider.register,
                directive:$compileProvider.register,
                filter:$filterProvider.register,
                service:$provide.service
            }
        });

        /*this.app.config(function ($httpProvider) {
            $httpProvider.defaults.transformRequest = function (obj) {
                let str = [],
                    keys = obj.keys();
                for(let i = 0,len = keys.length; i < len; i++){
                    str.push(`${encodeURIComponent(keys[i])}=${encodeURIComponent(keys[i])}`);
                }
                return str.join('&');
            };

            $httpProvider.defaults.headers.post = {
                'Content-Type':'application/x-www-form-urlencoded',
                'X-Requested-With':'XMLHttpRequest'
            }
        });*/

        new GridView(this.app);

        this.app.config(($stateProvider,$urlRouterProvider,$controllerProvider) => {
            new NgRouter(this.app).getRouterConfig($stateProvider,$urlRouterProvider,$controllerProvider);
        });
    }
}