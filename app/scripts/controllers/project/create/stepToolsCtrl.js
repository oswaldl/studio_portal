/**
    define some common controller here.

*/



define(['../../module'], function (controllers) {
    'use strict';
    controllers.controller('stepToolsCtrl', ['$scope', 'authService', '$state' , 'toaster', 'toolService',  function ($scope, authService, $state, toaster, toolService) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
            toolService.getAlmToolData(function(almtools){
                $scope.alm_tools=almtools;
            },function(){
                console.log("getDevToolData error");
            });

        }
    }]);
});
