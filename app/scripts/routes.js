define(['./app'], function (app) {
    'use strict';
    console.log("=================");
    return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
          console.log("=================");
          //commone state
          $stateProvider
              .state('public', {
                  abstract: true,
                  data: {
                      roles: ['public']
                  },
                  templateUrl: "views/version1.0.html"
              })
              .state('public.404', {
                  url: '/404/',
                  views:{
                      "body": {
                          templateUrl: 'views/404.html'
                      },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              }).state('public.denied', {
                  url: '/denied/',
                  views:{
                      "body": {
                          templateUrl: 'views/denied.html'
                      },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              });//end one stateProvider

          //login and register - [role - anon]
          $stateProvider
              .state('anon', {
                  abstract: true,
                  data: {
                      roles: ['public']
                  },
                  templateUrl: "views/version1.0.html"
              })
              .state('anon.login', {
                  url: '/login/',
                  views:{
                      "body": {
                          templateUrl: 'views/login.html',
                          controller: 'loginCtrl'
                      },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              })
              .state('anon.register', {
                  url: '/register/',
                  views: {
                      "body": {
                          templateUrl: 'views/register.html',
                          controller: 'registerCtrl'
                      },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              });//end one stateProvider


          // Main routes - [role - user]
          $stateProvider
              .state('site', {
                  abstract: true,
                  /*resolve: {
                      authorize: ['authorization',
                          function(authorization) {
                              console.log(authorization.authorize());
                          }
                      ]
                  },*/
                  templateUrl: "views/bone1/version1.0.html"
        //          ,controller: 'headerCtrl'
              })
              .state('site.ws', {
                  url: '/',
                  views: {
                      "body": {
                          templateUrl: 'views/workspace/body.html',
                          controller: 'wsCtrl'
                      },
                      "activities@site.ws":{
                         templateUrl: 'views/workspace/activities.html'
                      },
                      "projects@site.ws":{
                         templateUrl: 'views/workspace/projects.html'
                      },
                      "sidebar":{
                          templateUrl: 'views/workspace/sidebar.html'
                       },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              })
              ;//end one stateProvider

    console.log("=================");
    }]);//end define function return
});//end define