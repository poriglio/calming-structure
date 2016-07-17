var SavingsGoal = require("../models/savingsgoalmodel.js")
var User = require("../models/usermodel.js")


var createSavingsGoal = function(request,response){

	var d = new Date();
	var n = d.getTime();

	var username = request.user.username

	var title

	if(request.body.title===""){
		title = "Untitled"
	}
	else{
		title = request.body.title
	}
	
	var newSavingsGoal = new SavingsGoal({
		username        : request.user.username,
		title           : title,
		description     : request.body.description,
		lastRevised     : "not yet revised",
		matureContent   : request.body.mature,
		content         : request.body.content.split("[p]"),
		type            : "story",
		dateAdded       : n,
		numComments     : +0,
	})

	newSavingsGoal.save(function(error){
		if(!error){
			User.update({username: username},{$inc:{numSubmissions : 1}},function(error,docs){
				if(error){
					return error
				}
			})
			User.update({username: username},{$inc:{numStories : 1}},function(error,docs){
				if(error){
					return error
				}
			})
		}
		else{
			console.log("Error!",error)
		}
		response.redirect("/#/confirm/submission")
	})

}

var findSavingsGoal = function(request,response){
	var id = request.params.submission
	Story.findOne({_id : id},function(error,doc){
		response.send(doc)
	})
}

var findSavingsGoals = function(request,response){
	if(request.params.username!=="returnAll"){
		var username = request.params.username
		SavingsGoal.find({username: username},function(error,docs){
			response.send(docs)
		})
	}
	else if(request.params.username==="returnAll"){
		SavingsGoal.find({},function(error,docs){
			response.send(docs)
		})
	}
}

var editSavingsGoal = function(request,response){
	SavingsGoal.update({_id: request.body[0]._id},{$set:{title:request.body[0].title,content:request.body[0].content.split("[p]"),description:request.body[0].description}},function(error){
	})
}

var deleteSavingsGoal = function(request,response){
	SavingsGoal.remove({_id: request.body._id},function(error,docs){
		if(!error){
			User.update({username: request.body.username},{$inc:{numStories : -1}},function(error,docs){
				if(error){
					return error
				}
			})
			User.update({username: request.body.username},{$inc:{numSubmissions : -1}},function(error,docs){
				if(error){
					return error
				}
			})
		}
	})
}

module.exports = {
	findSavingsGoal   : findSavingsGoal,
	createSavingsGoal : createSavingsGoal,
	findSavingsGoals  : findSavingsGoals,
	editSavingsGoal   : editSavingsGoal,
	deleteSavingsGoal : deleteSavingsGoal,
}