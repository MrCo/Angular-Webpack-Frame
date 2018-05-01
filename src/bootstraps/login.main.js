/**
 * 入口引导配置
 * CodeBy:Mr.Co
 * Date:2018/4/24.
 */
import loginStyle from '../skins/less/default/login.less';

import Login from '../controllers/login.controller';

let loginMain = new class{
    constructor(){

    }

    printMsg(){

    }


    init(){
        let app = angular.module('defaultApp',['ui.router']);
        app.controller('indexCtrl',function ($scope) {
            $scope.words = ['It','is','what','it','is'];
        })
        new Login().init();
    }
}();

loginMain.init();
loginMain.printMsg();