var mongoose = require("mongoose")

var savingsGoalSchema = mongoose.Schema({
	userId       : {type:Schema.ObjectId,required:true},
	goal         : {type:String,required:true,trim:true},
	amountGoal   : {type:Number,required:true,trim:true},
	amountSaved  : {type:Number,required:true,trim:true},
	privateGoal  : {type:Boolean,default:false},
})

module.exports = mongoose.model("SavingsGoal",savingsGoalSchema)