"use strict";
console.log("bookCtrl.js is loaded");


app.controller('BookCtrl', function($scope, GuideFactory){
	$scope.something = "";
	$scope.getVal = function(el){
		console.log("$scope.something", $scope.something);
		$scope.something = el;
	};
	console.log("$scope.something in controller", $scope.something);
	// console.log('controller is firing');
	GuideFactory.getBooks()
	.then(function(data){
		console.log('data in controller', data);
		$scope.guides = data;
	});
});