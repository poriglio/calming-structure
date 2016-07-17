var GiftIdea = require("../models/giftideamodel.js")

var createGiftIdea = function(request,response){

	var d = new Date();
	var n = d.getTime();
	
	var newGiftIdea = new GiftIdea({
		userId      : userId/*find out how to save ObjectID here*/,
		personId    : personId/*find out how to save ObjectID here*/,
		idea        : request.body.idea,
		store       : request.body.store,
		url         : request.body.url,
		cost        : +request.body.cost,
		notes       : request.body.notes,
		dateAdded   : n,
		// The below line is not the best. Should store ObjectId,
		// not username, and search by ObjectId.
		// username        : request.user.username,
	})

	newGiftIdea.save(function(error){
		if(error){
			// Error!
		}
		response.redirect("/#/confirm/submission")
	})

}

var findGiftIdea = function(request,response){
	var id = request.params.submission
	GiftIdea.findOne({_id : id},function(error,doc){
		response.send(doc)
	})
}

var findGiftIdeas = function(request,response){
	if(request.params.username!=="returnAll"){
		var username = request.params.username
		GiftIdea.find({username: username},function(error,docs){
			response.send(docs)
		})
	}
	else if(request.params.username==="returnAll"){
		GiftIdea.find({},function(error,docs){
			response.send(docs)
		})
	}
}

var editGiftIdea = function(request,response){
	GiftIdea.update({_id: request.body[0]._id},{$set:{title:request.body[0].title,content:request.body[0].content.split("[p]"),description:request.body[0].description}},function(error){
	})
}

var deleteGiftIdea = function(request,response){
	GiftIdea.remove({_id: request.body._id},function(error,docs){
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
	findGiftIdea    : findGiftIdea,
	createGiftIdea  : createGiftIdea,
	findStories     : findGiftIdeas,
	editGiftIdea    : editGiftIdea,
	deleteGiftIdea  : deleteGiftIdea,
}