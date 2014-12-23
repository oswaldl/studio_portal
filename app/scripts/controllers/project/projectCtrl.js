/**
    define some common controller here.

*/



define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('projectCtrl', ['authService', '$state' , 'toaster',  function (authService, $state, toaster) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
            console.log("用户已经登录");
        }
    1}]);
});
