
define(['../module', 'd3'], function (directives, d3) {
    'use strict';
    directives.directive('autoComplete', ['$parse', '$http', 'accountService', function ($parse, $http, accountService) {
        return {
            restrict:'AE',
            scope:{
            },
            templateUrl: '/app/views/templates/autocomplete-template.html',
            link:function(scope,elem,attrs){
                scope.suggestions=[];

                scope.selectedIndex=-1;

                scope.selectedMembers=[];

                scope.search=function(){
                    $http.get('/app/mock_data/account/users.list').success(function(data){
                        var filters = data.filter(function(value){
                            return value.indexOf(scope.searchText)!== -1;
                        });
                        if(filters.indexOf(scope.searchText)===-1){
                            filters.unshift(scope.searchText);
                        }
                        scope.suggestions=filters;
                        scope.selectedIndex=-1;
                    });
                }
                scope.checkKeyDown=function(event){
                    if(event.keyCode===40){
                        event.preventDefault();
                        if(scope.selectedIndex+1 !== scope.suggestions.length){
                            scope.selectedIndex++;
                        }
                    }
                    else if(event.keyCode===38){
                        event.preventDefault();
                        if(scope.selectedIndex-1 !== -1){
                            scope.selectedIndex--;
                        }
                    }
                    else if(event.keyCode===13){
                        scope.addToSelectedMembers(scope.selectedIndex);
                    }
                }

                scope.$watch('selectedIndex',function(val){
                    if(val!==-1) {
                        scope.searchText = scope.suggestions[scope.selectedIndex];
                    }
                });

                scope.addToSelectedMembers=function(index){
                    if(scope.selectedMembers.indexOf(scope.suggestions[index])===-1){
                        console.log(scope.suggestions[index]);
                        accountService.addUser(scope.suggestions[index]);
                        console.log("acountusers:");
                        console.log(accountService.users);
                        scope.searchText='';
                        scope.suggestions=[];
                    }
                }
            }
       }
    }]);
});