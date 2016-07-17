var User = require("../models/usermodel.js")

var createUser = function(request,response){

	console.log(request)

	var d = new Date();
	var n = d.getTime();

	var newUser = new User({
		username          : request.body.username,
		firstName         : request.body.firstName,
		lastName          : request.body.lastName,
		email             : request.body.email,
		password          : request.body.password,
		dateJoined        : +n,
	})

	newUser.save(function(error){
		if(!error){
			console.log("Successfully saved new user.")
		}
		else{
			console.log("Error while trying to save new user. ",error)
		}
	})
}

var findUser = function(request,response){
	if(request.params.username !== "returnAll"){
		var name = request.params.username.toLowerCase()
		User.findOne({usernameLower : name},function(error,doc){
			response.send(doc)
		})
	}
	else if(request.params.username === "returnAll"){
		User.find({},function(error,doc){
			response.send(doc)
		})
	}
	else{
		response.send("error")
	}
	
}

var editUser = function(request,response){
	console.log(request.body)
	User.update({username:request.body.username},{$set:{email:request.body.email,age:request.body.age,birthday:request.body.birthday,favBooks:request.body.favBooks.split(", "),favWriters:request.body.favWriters.split(", "),bio:request.body.bio}},function(error,docs){
		if(!error){
			response.redirect("/#/profile")
		}
	})
}

module.exports = {
	createUser  : createUser,
	findUser    : findUser,
	editUser    : editUser,
}