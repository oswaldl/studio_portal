/**
    define some common controller here.

*/



define(['../module', 'd3'], function (controllers, d3) {
    'use strict';
    controllers.controller('projectCtrl', ['$scope', 'almSvgService', 'authService', '$state' , 'toaster',  function ($scope, almSvgService, authService, $state, toaster) {

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


            $scope.addReq = function($event) {
                console.log("add req");
                almSvgService.addSampleBox(d3);
            };

        }
    }]);
});
