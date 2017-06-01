"use strict";
console.log("app.js is loaded");


var app = angular.module('BookGuide', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: './partials/guideList.html',
		controller: 'BookCtrl'
	})
	.otherwise('/');

});
