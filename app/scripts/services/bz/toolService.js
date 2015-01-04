define(['services/module'],
    function(services){
        "use strict";
        services.service('toolService', ['ipCookie', '$http', function(ipCookie, $http){

            return {
                getDevToolData: function(success,error){
                    $http.get('/app/mock_data/dev_tools.json').success(function(res) {
                        success(res);
                    }).error(error);
                },
                getAlmToolData: function(success,error){
                    $http.get('/app/mock_data/alm_tools.json').success(function(res) {
                        success(res);
                    }).error(error);
                },
            }
        }])
    }
);