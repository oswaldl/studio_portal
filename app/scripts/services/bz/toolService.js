define(['services/module'],
    function(services){
        "use strict";
        services.service('toolService', ['ipCookie', '$http', function(ipCookie, $http){

            return {
                getDevToolData: function(success,error){
                    console.log("toolService1");
                    $http.get('/app/mock_data/service_tools.json').success(function(res) {
                        success(res.dev_tools);
                    }).error(error);
                },
                getAlmToolData: function(success,error){
                    console.log("toolService2");
                    $http.get('/app/mock_data/service_tools.json').success(function(res) {
                        success(res.alm_tools);
                    }).error(error);
                },
            }
        }])
    }
);