/**
 * 登录-路由
 * CodeBy:MrCo
 * Date:2018/4/15.
 */
import Login from '../controllers/login.controller';
export default class LoginRouter{
    constructor($stateProvider){

        $stateProvider
            .state('main.login',{
                url:'/login',
                views:{
                    'master@main':{
                        //templateUrl:'./modules/login.html'
                        template:'<div id="divPie" style="width: 600px;height:400px; margin-left:300px;"></div>',
                        controller:function () {
                            new Login().init();
                        }
                    }
                }
            })
    }
}