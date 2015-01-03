define(['services/module'],
    function(services){
        "use strict";
        services.service('accountService', [function(){
            var users = [];
            return {
                getUsers: function(){
                    return users;
                },
                addUser: function(username){
                    if(users.indexOf(username)===-1){
                        users.push(username);
//                        console.log("added."+username);
                    }else{
//                        console.log("already exist.");
                    }
                },
                removeUser: function(username){
                    if(users.indexOf(scope.searchText)===-1){
                        console.log("not exist, no need to remove");
                    }else{
                        users.unshift(username);
                    }
                },
                remove: function(index){
                    users.splice(index,1);
                },
                removeAll: function(){
                    users.splice(0, users.length);
                },

                users: users
            }
        }])
    }
);