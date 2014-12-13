define(['services/module'],
    function(services){
        "use strict";
        services.service('myService', ['$http', function($http){
            console.log('myService');

        }])
    }
);