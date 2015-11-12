angular.module('dynamicCms').controller('ProjectsCtrl',function($scope, $rootScope, $http){

	$http.get('http://localhost:3000/api/project').success(function(projects){

		console.log(projects);
		$scope.projects = projects;

	});

	$scope.remove = function(project){

		console.log(project._id);

		$http.delete('http://localhost:3000/api/project/'+project._id+'?token='+$rootScope.token).success(function(projects){

			for(var i=0;i<$scope.projects.length;i++){

				if($scope.projects[i]._id === project._id){

					$scope.projects.splice(i,1);

				}

			}

		});

	};

});