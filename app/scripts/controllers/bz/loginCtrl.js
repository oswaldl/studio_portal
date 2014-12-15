
define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('loginCtrl', ['$rootScope','$scope', '$state','authService','$http', '$timeout',function ($rootScope,$scope, $state,authService,$http, $timeout) {
       console.log('loginCtrl');

        $rootScope.isLogged = false;

        $scope.login = {
            working: false,
            wrong: false
        };

        $scope.loginFn = function () {

            $scope.login.working = true;
            $scope.login.wrong = false;

            //console.log("let's login");
            //console.log($scope.login);
            authService.login(
                $scope.login,
                function(user) {
                    $rootScope.isLogged = true;
                    $state.go('site.ws');
                    $rootScope.user = user
                    $rootScope.error = null;
                },
                function(err){
                    $scope.login.wrong = true;
                    $timeout(function () {
                        $scope.login.wrong = false;
                    },
                    2000);
                },
                function(){
                    $scope.login.working = false;
                }
            );

        };



    1}]);
});