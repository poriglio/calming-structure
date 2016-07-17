angular.module("calmingStructureApp").factory("calmingStructureFactory",function(){

	// Code from Just Write for my reference:
	// var getStories = function($http,$scope,user){
	// 	$http.get("/api/stories/" + user).then(function(returnData){
	// 		$scope.stories = returnData.data
	// 	})	
	// }

	// var getEssays = function($http,$scope,user){
	// 	$http.get("/api/essays/" + user).then(function(returnData){
	// 		$scope.essays = returnData.data
	// 	})	
	// }

	// var getPoems = function($http,$scope,user){
	// 	$http.get("/api/poems/" + user).then(function(returnData){
	// 		$scope.poems = returnData.data
	// 	})	
	// }

	// var getSubmission = function($http,$scope,type,id,user){
	// 	$http.get("/api/" + type + "/" + id).then(function(returnData){
	// 		$scope.submission = []
	// 		if(user === returnData.data.username){
	// 			$scope.submission.push(returnData.data)
	// 			$scope.submission[0].content = $scope.submission[0].content.join("[p]")
	// 		}
	// 		else{
	// 			$scope.message = "You are not allowed to view this page."
	// 		}
	// 	})
	// }

	var sampleFunction = function(){
		return "This is some sample text!"
	}

	return {
		sampleFunction : sampleFunction
	}

})