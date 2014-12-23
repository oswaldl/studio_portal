/**
    define some common controller here.

*/



define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('leftCtrl', ['$scope', 'authService', '$state' , 'toaster',  function ($scope, authService, $state, toaster) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
                toaster.pop('error', "", '用户未登录');
        } else {
            $scope.status = {
                isopen: false
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };
        }
    1}]);
});
