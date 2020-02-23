var app = angular.module('demoApp', []);
app.controller('userInforCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	  $scope.firstName = "John";
	  
    $scope.go = function ( pathUrl ) {
        console.log(pathUrl);
        $location.path( pathUrl );
        

        
      };

}]);