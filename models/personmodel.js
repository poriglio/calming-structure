var mongoose = require("mongoose")

var personSchema = mongoose.Schema({
	userId       : {type:Schema.ObjectId,required:true},
	firstName    : {type:String,trim:true,required:true},
	lastName     : {type:String,trim:true},
	nickname     : {type:String,trim:true},
	relationship : {type:String,trim:true},
	notes        : {type:String,trim:true},
})

module.exports = mongoose.model("Person",personSchema)