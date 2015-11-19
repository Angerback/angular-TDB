angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
        this.getActor = function(actorId){
            var str = urlBase + "/" + actorId;
            console.log(str);
            return $http.get(urlBase + "/" + actorId);
        };
    });
