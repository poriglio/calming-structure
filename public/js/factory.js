angular.module("sampleApp").factory("sampleFactory",function(){

	var sampleFunction = function(){
		return "This is some sample text!"
	}

	return {
		sampleFunction : sampleFunction
	}

})