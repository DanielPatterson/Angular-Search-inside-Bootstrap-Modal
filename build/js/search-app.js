var App = angular.module('App', []);

App.controller('AppCtrl', function ($scope) {

	$scope.orderProp = 'name';
	$scope.searchList = [

		{
		"title": "Placeholder Title",
		"name": "Placeholder Name",
		"section" : "Placeholder Section",
		"desc": "Placeholder Description",
		"url": "Placeholder URL"
		}
	]
});