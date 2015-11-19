    angular.module('angularSpa')
    .controller('ActorsCtrl', function($scope, actorsService, $routeParams){
        $scope.actors =[];
        function getActors(){
            actorsService.getActors()
            .success(function(data){
                $scope.actors = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getActors();
        /*
        $scope.actor;*/
        function getActor(actorId){
            actorsService.getActor(actorId)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actor';
            });
        }
        getActor($routeParams.actorId);
    });