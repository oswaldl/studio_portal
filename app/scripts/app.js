/**

AMD规范：

define(id?, [], factory);
id：可以不写
[]: 需要加载的模块
factory： 加载完毕后用来做什么？在这里，我们只用了ng，即r.angular，并调用了他的module方法，返回studio module（并告诉ng，这个studio依赖了哪些模块，
这些模块不少是定义在其他AMD声明文件里面的，有一些是我们定义的，有一些是引入的module定义的）

把"use strict"; 放在第一行，表示该js按照严格模式运行，否则以正常模式运行


at last my app name is studio!
*/


define([
    'r.angular',
    'r.angularUiRouter',
    './controllers/index',
    './directives/index',
//    './filters/index',
    './services/index',
    'r.angularCookie',
    'r.angularMock',
    'd3',
    'r.angularToaster',
    'r.angularUiBootstrap',
], function (ng) {
    'use strict';

    return ng.module('studio', [
        'ui.router',
        'app.services',
        'app.controllers',
        'app.directives',
        'ipCookie',
        'ngMockE2E',
        'toaster',
        'ui.bootstrap',
//        'd3',

    ]).run(['$rootScope', function ($rootScope) {

            /*$rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;*/
          /**
           * $rootScope.doingResolve is a flag useful to display a spinner on changing states.
           * Some states may require remote data so it will take awhile to load.
           */
          var resolveDone = function () {
              $rootScope.doingResolve = false;
          };

          $rootScope.doingResolve = false;

          $rootScope.$on('$stateChangeStart', function () {
            $rootScope.doingResolve = true;
          });

          $rootScope.$on('$stateChangeSuccess', resolveDone);
          $rootScope.$on('$stateChangeError', resolveDone);
          $rootScope.$on('$statePermissionError', resolveDone);

    }]);
});