angular.module("calmingStructureApp",["ngRoute","ui.bootstrap"])

angular.module("calmingStructureApp").controller("sampleController",["$scope","$http","sampleFactory",function($scope,$http,sampleFactory){

	$scope.sample = sampleFactory.sampleFunction()

}])

angular.module("storyApp").config(["$routeProvider",function($routeProvider){

	// Example route from Just Write for my reference:
	// $routeProvider.when("/",{
	// 	templateUrl : "/html/public/intro.html",
	// 	controller  : "mainController"
	// })
	// .when("/signup",{
	// 	templateUrl : "/html/public/newuser.html",
	// 	controller  : "mainController"
	// })
	// .when("/loginerror",{
	// 	templateUrl : "/html/confirmation/loginerror.html",
	// 	controller  : "mainController"
	// })
	// .when("/confirm/comment",{
	// 	templateUrl : "/html/confirmation/comment.html",
	// 	controller  : "mainController"
	// })
	// .when("/confirm/registration",{
	// 	templateUrl : "/html/confirmation/registration.html",
	// 	controller  : "mainController"
	// })
	// .when("/confirm/submission",{
	// 	templateUrl : "/html/confirmation/submission.html",
	// 	controller  : "mainController"
	// })
	// .when("/submit",{
	// 	templateUrl : "/html/private/submissionform.html",
	// 	controller  : "mainController",
	// })
	// .when("/profile/:username",{
	// 	templateUrl : "/html/private/profile.html",
	// 	controller  : "userController"
	// })
	// .when("/profile",{
	// 	templateUrl : "/html/private/profile.html",
	// 	controller  : "userController"
	// })
	// .when("/browse",{
	// 	templateUrl : "/html/private/browse.html",
	// 	controller  : "browseController"
	// })
	// .when("/browse/users",{
	// 	templateUrl : "/html/private/browseusers.html",
	// 	controller : "browseController"
	// })
	// .when("/browse/:type",{
	// 	templateUrl : "/html/private/browsesubmissions.html",
	// 	controller : "browseController"
	// })
	// .when("/stories/:submission",{
	// 	templateUrl : "/html/private/submission.html",
	// 	controller  : "submissionController"
	// })
	// .when("/essays/:submission",{
	// 	templateUrl : "/html/private/submission.html",
	// 	controller  : "submissionController"
	// })
	// .when("/poems/:submission",{
	// 	templateUrl : "/html/private/submission.html",
	// 	controller  : "submissionController"
	// })
	// .when("/account/profile",{
	// 	templateUrl : "/html/private/myaccount.html",
	// 	controller : "accountController"
	// })
	// .when("/account/submissions",{
	// 	templateUrl : "/html/private/editsubmissions.html",
	// 	controller  : "accountController"
	// })
	// .when("/account/:type/:id",{
	// 	templateUrl : "/html/private/editsubmission.html",
	// 	controller  : "accountController"
	// })

}])