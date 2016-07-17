angular.module("calmingStructureApp",["ngRoute","ui.bootstrap"])

angular.module("calmingStructureApp").config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
		templateUrl : "/html/home/home.html",
		controller  : "mainController"
	})
	.when("/home",{
		templateUrl : "/html/home/home.html",
		controller  : "mainController"
	})
	.when("/user",{
		templateUrl : "/html/user/index.html",
		controller  : "userController"
	})
	.when("/user/signup",{
		templateUrl : "/html/user/createaccount.html",
		controller  : "userController"
	})
	.when("/user/forgotpassword",{
		templateUrl : "/html/user/forgotpassword.html",
		controller  : "userController"
	})
	.when("/savingsgoals",{
		templateUrl : "/html/savingsgoals/index.html",
		controller  : "savingsGoalsController"
	})
	.when("/giftideas",{
		templateUrl : "/html/giftideas/index.html",
		controller  : "giftIdeasController"
	})
}])

angular.module("calmingStructureApp").controller("mainController",["$scope","$http","$location","calmingStructureFactory",function($scope,$http,$location,calmingStructureFactory){

	$scope.message = "This is the main controller."	
}])

angular.module("calmingStructureApp").controller("userController",["$scope","$http","$location","calmingStructureFactory",function($scope,$http,$location,calmingStructureFactory){

	$scope.message = "This is the user controller."

}])

angular.module("calmingStructureApp").controller("savingsGoalsController",["$scope","$http","$location","calmingStructureFactory",function($scope,$http,$location,calmingStructureFactory){

	$scope.message = "This is the savings goals controller."

}])

angular.module("calmingStructureApp").controller("giftIdeasController",["$scope","$http","$location","calmingStructureFactory",function($scope,$http,$location,calmingStructureFactory){

	$scope.message = "This is the gift ideas controller."

}])