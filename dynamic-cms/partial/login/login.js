angular.module('dynamicCms').controller('LoginCtrl',function($rootScope, $state, $scope, $http){

	$scope.login = function(){

		$http.post('http://localhost:3000/api/login', $scope.user)
		.success(function(res){

			$rootScope.token = res.token;

			$state.go('projects');

		});

	};

});