"use strict";
console.log("GuideFactory.js is loaded");

app.factory('GuideFactory', ($q, $http) => {
	let getBooks = () => {
		return $q((resolve, reject) => {
			$http.get('../data/guides.json')
			.then((dataObj) => {
				let array = dataObj.data;
				// console.log("array.guides", array.guides);
				resolve(array.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getBooks};
});
