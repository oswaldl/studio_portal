/**
the application logic start here.


main.js 声明了angular, angular-ui-router, ...
    ----> bootstrap.js 加载根目录除了main.js，bootstrap.js以外的重要文件：routes.js和app.js，并启动app.js声明的angular应用程序
        ----> app.js
        ----> routes.js


注意：非常容易混淆的是，用requriejs声明的模块名称与angular声明的模块名称，凡是AMD规范声明的都是一次性的，而开发人与更多的是面向angular声明的模块！
为此，所有的requirejs声明的模块名称以r_开头

*/


require.config({


  // alias libraries paths
    paths: {
        'r.domReady': '../bower_components/requirejs-domready/domReady',
        'r.angular': '../bower_components/angular/angular',
        'r.jquery': '../bower_components/jquery/dist/jquery.min',
        'r.angularUiBootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        'r.angularUiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
        'r.angularCookie': '../bower_components/angular-cookie/angular-cookie',
        'r.angularMock': '../bower_components/angular-mocks/angular-mocks',
        'd3': '../bower_components/d3.github.com/d3.v3.min',

    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'r.angular': {
            deps: [ 'r.jquery'],
            exports: 'angular'  //可恶，这里居然不能是r.angular
        },
        'r.angularUiBootstrap': {
            deps: ['r.angular']
        },
        'r.angularUiRouter':{
            deps: ['r.angular']
        },
        'r.angularCookie':{
            deps: ['r.angular']
        },
        'r.angularMock':{
            deps: ['r.angular']
        },

//        'r.d3':{
//            exports: 'd3'
//        },
    },

    // kick start application
    deps: ['./bootstrap']
});