var mongoose = require("mongoose")

var giftIdeaSchema = mongoose.Schema({
	userId      : {type:Schema.ObjectId,required:true},
	personId    : {type:Schema.ObjectId},
	idea        : {type:String,required:true},
	store       : {type:String,trim:true},
	url         : {type:String,trim:true},
	cost        : {type:Number,trim:true},
	purchased   : {type:Boolean,default:false},
	shipped     : {type:Boolean,default:false},
	delivered   : {type:Boolean,default:false},
	gifted      : {type:Boolean,default:false},
	notes       : {type:String,trim:true},
	dateAdded   : {type:Date, required:true, default: Date.now},
	dateGifted  : Date,
})

module.exports = mongoose.model("GiftIdea",giftIdeaSchema)