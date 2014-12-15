define(['./app'], function (app) {
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
          //commone state
          $stateProvider
              .state('public', {
                  abstract: true,
                  data: {
                      roles: ['public']
                  },
                  templateUrl: "views/bone3/version1.0.html"
              })
              .state('public.index', {
                  url: '/',
                  views:{
                      "nav": {
                          templateUrl: 'views/public/nav.html',
                      },
                      "big-banner": {
                          templateUrl: 'views/public/big-banner.html',
                      },
                      "body": {
                          templateUrl: 'views/public/body.html'
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
                  templateUrl: "views/bone2/version1.0.html"
              })
              .state('anon.login', {
                  url: '/login/',
                  views:{
                      "nav": {
                          templateUrl: 'views/nav.html',
                      },
                      "body": {
                          templateUrl: 'views/login/login.html',
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
                          templateUrl: 'views/login/regist.html',
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
                  url: '/studio',
                  views: {
                      "nav": {
                          templateUrl: 'views/nav.html',
                          controller: 'navCtrl'
                      },
                      "header": {
                          templateUrl: 'views/workspace/data_report.html',
                          controller: 'headerCtrl'
                      },
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

    }]);//end define function return
});//end define