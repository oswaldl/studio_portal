/**

AMD规范：

define(id?, [], factory);
id：可以不写
[]: 需要加载的模块
factory： 加载完毕后用来做什么？


at last my app name is studio!
*/


define([
    'r.angular',
    'r.angularUiRouter',
    './controllers/index',
//    './directives/index',
//    './filters/index',
    './services/index',
], function (ng) {
    'use strict';

    return ng.module('studio', [
        'ui.router',
        'app.services',
        'app.controllers',
//        'app.filters',
//        'app.directives'
    ]);
});