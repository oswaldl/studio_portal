/**
    define some common controller here.

*/



define(['../../module'], function (controllers) {
    'use strict';
    controllers.controller('stepStatusCtrl', ['$scope', 'authService', '$state' , 'toaster', 'toolService',  function ($scope, authService, $state, toaster, toolService) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
            console.log(toolService);
            toolService.getDevToolData(function(devtools){
                $scope.dev_tools=devtools;
            },function(){
                console.log("getDevToolData error");
            });

        }
    }]);
});
