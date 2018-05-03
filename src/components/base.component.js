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
     * @scope       json        组件参数对象
     * @ctrlHandler  function    控制器
     * @ctrlNameAs  string      控制器别名
     *  */
    factory(name='',restrict = 'EA',templateUrl = '',scope = {},ctrlHandler = new Function(),ctrlNameAs = ''){
        this.app.directive(`${name}`, function() {
            return {
                restrict : restrict,
                templateUrl : templateUrl,
                replace:true,
                scope:scope,
                controller:ctrlHandler,
                controllerAs:ctrlNameAs,
                link:function (scope,element,attrs) {
                    console.log(element);
                    console.log(attrs);

                    element.on('click',function () {
                        alert('hello.');
                    })
                }
            };
        });
    }
}