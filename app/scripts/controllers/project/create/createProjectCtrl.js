/**
    define some common controller here.

*/



define(['../../module'], function (controllers) {
    'use strict';
    controllers.controller('createProjectCtrl', ['$scope', 'authService', '$state' , 'toaster', 'WizardHandler',  function ($scope, authService, $state, toaster, WizardHandler) {

        if (!authService.isLoggedIn()) {
            $state.go('anon.login');
            toaster.pop('error', "", '用户未登录');
        } else {
           console.log("createProjectCtrl");
           $scope.enterValidation = function(){
               return true;
           };

           $scope.exitValidation = function(){
               return true;
           };

           // In your controller
           $scope.changeLabelAndGoNext = function() {
               $scope.model.label = "Hola Gonto";

           }

           $scope.finishedWizard = function() {
               console.log("finishedWizard");
           }

           $scope.goonnext = function() {
              console.log("goonnext");
           }



           $scope.$watch(
              function() {return WizardHandler.wizard();},
              function (wizard) {
                  console.log("loaded");
                  //if (wizard) wizard.goTo(1);
              }
           );



        }
    1}]);
});
