/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'r.angular',
    'app',    //这也不能重命名！
    'routes', //这也不能重命名！
], function (require, ng) {
    'use strict';

    require(['r.domReady!'], function (document) {
        ng.bootstrap(document, ['studio']);
    });
});