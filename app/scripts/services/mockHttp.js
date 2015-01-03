/*
模拟http请求
*/

define(['./module'],function (services) {
    'use strict';
    services.run(['$httpBackend', '$log', '$http', '$location', function ($httpBackend, $log, $http, $location) {

            var userStorage = angular.fromJson(localStorage.getItem('userStorage')),
                emailStorage = angular.fromJson(localStorage.getItem('emailStorage'));

            if (userStorage === null || emailStorage === null) {
                userStorage = {
                    'oswaldl': { userName: 'oswaldl', userPassword: 'oswaldl', email: 'oswaldl@126.com', roles:['user']},
                    'demo': {  userName: 'demo', userPassword: '123456', email: 'demo@demo.com',roles:['admin']},
                    'test': {  userName: 'test', userPassword: '123456',email:'', roles:['user']}
                };
                emailStorage = {
                    'oswaldl@126.com': 'oswaldl',
                    'demo@qq.com': 'demo',
                    'test@test.com': 'test'
                };
                localStorage.setItem('userStorage', angular.toJson(userStorage));
                localStorage.setItem('emailStorage', angular.toJson(emailStorage));
            }

           $httpBackend.whenGET(/views/).passThrough();
           $httpBackend.whenGET(/mock_data/).passThrough();



            //fakeLogin
            $httpBackend.when('POST', '/login').respond(function (method, url, data, headers) {
                //debugger;
                var postData = angular.fromJson(data),
                    userName = emailStorage[postData.userName],
                    user = userStorage[userName];

                $log.info(method, '->>', url);
                console.log(postData);
                //return;
                if (angular.isDefined(user) && user.userPassword === postData.userPassword) {
                    localStorage.setItem('userStorage', angular.toJson(userStorage));
                    return [200, { userName: user.userName,roles: user.roles }, {}];
                } else {
                    return [401, '用户名或密码错误', {}];
                }
            });

            // fakeLogout
            $httpBackend.when('POST', '/logout').respond(function (method, url, data, headers) {

                $log.info(method, '->', url);

                return [200, {}, {}];
            });

            // get dev tools data




        }])

});
