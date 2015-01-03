define(['./app'], function (app) {
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
          /*commone state
            分2+N版：上中+N个section
          */
          $stateProvider
              .state('public', {
                  abstract: true,
                  data: {
                      roles: ['public']
                  },
                  templateUrl: "views/bone3/version1.1.html"
              })
              .state('public.index', {
                  url: '/',
                  views:{
                      "nav": {
                          templateUrl: 'views/public/1.1/nav.html',
                      },
                      "body": {
                          templateUrl: 'views/public/1.1/body.html'
                      },
                      "section1": {
                          templateUrl: 'views/public/1.1/section1.html'
                      },
                      "section2": {
                          templateUrl: 'views/public/1.1/section2.html'
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

          /*login and register - [role - anon]
          分2版：上中
          */
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
              })
              ;//end one stateProvider


          /* Main routes - [role - user]
             分三版：上左中
          */
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
//                      //d3数据分析图
//                      "header": {
//                          templateUrl: 'views/workspace/data_report.html',
//                          controller: 'headerCtrl'
//                      },
                      "body": {
                          templateUrl: 'views/workspace/body.html',
                          controller: 'wsCtrl'
                      },
                      //body里面的动态
                      "activities@site.ws":{
                         templateUrl: 'views/workspace/activities.html'
                      },
                      //body里面的项目列表
                      "projects@site.ws":{
                         templateUrl: 'views/workspace/projects.html'
                      },
                      //body里面的status
                      "myStatus@site.ws":{
                         templateUrl: 'views/workspace/myStatus.html'
                      },
                      "left":{
                          templateUrl: 'views/workspace/left.html'
                       },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              })
              .state('site.project', {
                  url: '/project',
                  views: {
                      "nav": {
                          templateUrl: 'views/nav.html',
                          controller: 'navCtrl'
                      },
                      "body": {
                          templateUrl: 'views/project/body.html',
                      },
                      "crumbs@site.project":{
                         templateUrl: 'views/project/crumbs.html'
                      },
                      "members@site.project":{
                         templateUrl: 'views/project/members.html',

                      },
                      "content@site.project":{
                         templateUrl: 'views/project/content.html',
                         controller: 'projectCtrl'
                      },
                      "left":{
                          templateUrl: 'views/project/left.html',
                          controller: 'leftCtrl'
                       },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              })

              ;//end one stateProvider


          /*login and register - [role - anon]
          分2版：上中
          */
          $stateProvider
              .state('bone2', {
                  abstract: true,
                  data: {
                      roles: ['public']
                  },
                  templateUrl: "views/bone2/version1.0.html"
              })
              .state('bone2.create_project', {
                  url: '/create_project',
                  views: {
                      "nav": {
                          templateUrl: 'views/nav.html',
                          controller: 'navCtrl'
                      },
                      "body": {
                          templateUrl: 'views/project/create/body.html',
                          controller: 'createProjectCtrl'
                      },
                      "basic_info@bone2.create_project": {
                          templateUrl: 'views/project/create/basic.html',
                      },
                      "frame_info@bone2.create_project":{
                         templateUrl: 'views/project/create/frame.html',
                         controller: 'stepFrameCtrl'
                      },
                      "tools_info@bone2.create_project":{
                         templateUrl: 'views/project/create/tools.html',
                         controller: 'stepToolsCtrl'

                      },
                      "member_info@bone2.create_project":{
                         templateUrl: 'views/project/create/member.html',
                         controller: 'stepMemberCtrl'

                      },
                      "status_info@bone2.create_project":{
                         templateUrl: 'views/project/create/status.html',
                         controller: 'stepStatusCtrl'

                      },
                      "footer":{
                          templateUrl: 'views/footer.html'
                      }
                  }
              })
              ;//end one stateProvider


    }]);//end define function return
});//end define