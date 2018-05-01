/**
 * 说明
 * CodeBy:mrco
 * Date:2018/4/27.
 */
export default class Component{
    app;
    constructor(app){
        this.app = app;
    }

    /**
     * @name        string      必须为全小写形式命名,不可以驼峰命名
     * @restrict    string      枚举值,分别为E (元素:<directive></directive>)、A (属性:<div directiveName='expression'></div>)、C (类:<div class='directiveName'></div>)、M (注释：<-- directive:directiveName expression-->) 默认为A
     * @templateUrl string      模板路径
     *  */
    factory(name='',restrict = 'EA',templateUrl = ''){
        this.app.directive(`${name}`, function() {
            return {
                restrict : restrict,
                templateUrl : templateUrl,
                replace:true,
                controller:function () {
                    
                }
            };
        });
    }
}