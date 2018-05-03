/**
 * 主控-路由
 * CodeBy:MrCo
 * Date:2018/4/15.
 */
import MainContrl from '../controllers/main.controller';
export default class IndexRouter{
    constructor($stateProvider){
        $stateProvider
            .state('main',{
                abstract:true,
                views:{
                    'header':{
                        templateUrl:'/templates/modules/partials/header.html',
                        controller:function ($scope,$state,$http,$stateParams) {
                            new MainContrl().init($scope,$state,$http,$stateParams);
                        }
                    },
                    'menu':{
                        template:'我是菜单'
                    },
                    'main':{
                        template:'<div ui-view="master"></div>'
                    }
                }
            });
    }
}