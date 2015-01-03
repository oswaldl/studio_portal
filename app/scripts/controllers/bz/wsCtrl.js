/**
    define some common controller here.

*/



define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('wsCtrl', ['$scope', 'authService', '$state' , 'toaster',  function ($scope, authService, $state, toaster) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
            $scope.tabs = {
                index: 0,
                count: 0
            };

            this.headIndex = 0;
            this.bodyIndex = 0;

            this.getTabHeadIndex = function() {
                return $scope.tabs.count = ++this.headIndex;
            };

            this.getTabBodyIndex = function() {
                return ++this.bodyIndex;
            };

        }
    1}]);
});
