/**
 * Created by tom on 23/04/16.
 */
//angular.module('app', [])
//.controller('FirstCtrl',['$scope',function ($scope) {
//	scope.message = { sentence: 'swiecie2'};
//}]);

//var APP = angular.module('app', []);

//APP.FirstCtrl = function ($scope){
//	scope.message = { sentence: 'swiat3'};
//};
	
//APP.SecondCtrl = function ($scope){
//	scope.message = {sentence: 'second controler'};
//};

(function() {

	var app = angular.module("Viewer", []);

	var MainController = function($scope, $http) {

		var onUserComplete = function (response) {
			$scope.user = response.data;
			$http.get($scope.user.repos_url)
				.then(onRepos, onError);
		};

		var onRepos = function(response){
			$scope.repos = response.data;
		};


		var onError = function (reason) {
			$scope.error = "Error: Could not load";
		};


		$scope.search = function(username){
			$http.get("https://api.github.com/users/" + username)
				.then(onUserComplete, onError);
		};


		$scope.message = "GitHub Viewer";
		$scope.username = "angular";
		$scope.repoSortOrder = "-stargazers_count"
	};

	app.controller("MainController", ["$scope", "$http", MainController]);

}());