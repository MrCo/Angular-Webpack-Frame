/**
 * 表格组件
 * CodeBy:Mr.Co
 * Date:2018/4/15.
 */
import Component from './base.component';
export default class GridViewComponent extends Component{
    app;
    constructor(app){
        super(app);
        this.app = app;
        this.factory('gridview','E','/templates/components/gridview.html',{
            title:'='
        },function ($scope,$location) {
            this.myName = 'My name is Mr.Co';
            console.log($scope);
        },'testCtrl');
    }
}