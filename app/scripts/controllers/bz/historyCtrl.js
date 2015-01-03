/**
    define some common controller here.

*/



define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('historyCtrl', ['$scope', 'authService', '$state' , 'toaster',  function ($scope, authService, $state, toaster) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
//            $scope.reddit = new Reddit();

        }
    1}]);
});
