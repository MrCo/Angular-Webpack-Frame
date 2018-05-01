/**
 * 入口引导配置
 * CodeBy:Mr.Co
 * Date:2018/4/24.
 */
import resetStyle from '../skins/less/default/reset.less';
import indexStyle from '../skins/less/default/index.less';

import AppConf from '../configs/app.conf';


let indexMain = new class{
    constructor(){}

    printMsg(){
        console.log('hello cmd angular2222..');
    }

    init(){
        let appConf = new AppConf();
        appConf.app.controller('indexCtrl',function ($scope) {
            $scope.words = ['It','is','what','it','is'];
        });
    }
}();

indexMain.init();
indexMain.printMsg();