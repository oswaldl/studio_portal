
define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('navCtrl', ['$rootScope','$scope', '$state','authService',function ($rootScope,$scope, $state,authService) {
       console.log('navCtrl');

        $scope.logout = function () {
            authService.logoutUser(
                function(){
                    $rootScope.isLogged = false;
                    $state.go('public.index');
                },
                function(){
                    $rootScope.error('退出失败！');
                }
            );
        };



    1}]);
});