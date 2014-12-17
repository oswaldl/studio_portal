
define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('navCtrl', ['$rootScope', '$scope', '$state', 'authService', 'ipCookie', function ($rootScope, $scope, $state, authService, ipCookie) {
       console.log('navCtrl');
        //如果cookie中才能在用户信息，就保持登陆状态
        if(ipCookie('user')) {
            $scope.user = ipCookie('user');
            $rootScope.isLogged = true;
        }

        //注册logout方法
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