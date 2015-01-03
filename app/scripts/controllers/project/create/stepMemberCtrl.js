/**
    define some common controller here.

*/



define(['../../module'], function (controllers) {
    'use strict';
    controllers.controller('stepMemberCtrl', ['$scope', 'authService', '$state' , 'toaster', 'toolService', 'accountService', function ($scope, authService, $state, toaster, toolService, accountService) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
            $scope.data=accountService; // share data between controllers;
            $scope.remove=function(index){
                console.log("remove index "+index);
                accountService.remove(index);
            }
            $scope.removeAll=function(){
                console.log("removing all.");
                accountService.removeAll();
            }
        }
    }]);
});
