angular.module('dynamicCms').controller('LoginCtrl',function($scope, $http){

	$scope.login = function(){

		$http.post('http://localhost:3000/api/login', $scope.user)
		.success(function(res){

			console.log(res);

		});

	};

});