angular.module("sampleApp",["ngRoute","ui.bootstrap"])

angular.module("sampleApp").controller("sampleController",["$scope","$http","sampleFactory",function($scope,$http,sampleFactory){

	$scope.sample = sampleFactory.sampleFunction()

}])