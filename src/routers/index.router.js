/**
 * 首页-路由
 * CodeBy:MrCo
 * Date:2018/4/15.
 */
import Index from '../controllers/index.controller';
export default class IndexRouter{
    constructor($stateProvider){
        new Index().init();
        $stateProvider
            .state('main.index',{
                url:'/index',
                views:{
                    'master@main':{
                        templateUrl:'/templates/modules/index.html',
                        controller:function ($scope,$state,$http,$stateParams) {
                            $scope.Name = '西门吹雪';
                            new Index().init();
                        }
                    }
                }
            })
    }
}