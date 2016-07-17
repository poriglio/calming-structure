var mongoose = require("mongoose")
var bcrypt = require("bcryptjs")

var userSchema = mongoose.Schema({
	username          : {type:String, unique:true, required:true,trim:true},
	// Note: Ensure that lowercase username is unique!
	firstName         : {type:String, required:true,trim:true},
	lastName          : {type:String, required:true,trim:true},
	email             : {type:String, required:true, unique:true,trim:true},
	password          : {type:String, required:true},
	passwordResetCode : {type:String, unique:true},
	dateJoined        : {type:Date, required:true, default: Date.now},
	lastLogIn         : {type:Date, required:true, default: Date.now},
})

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// THE CODE BELOW ENCRYPTS A PASSWORD:
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

userSchema.pre("save",function(next){
	if(!this.isModified("password")) return next()
	var user = this
	bcrypt.genSalt(10,function(error,salt){
		if(error) return next(error)
		bcrypt.hash(user.password,salt,function(error,hash){
			if(error) return next(error)
			user.password = hash
			return next()
		})
	})
})
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// THE CODE BELOW ENCRYPTS THE PASSWORD ENTERED AT LOGIN AND COMPARES IT TO THE STORED ENCRYPTION:
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
userSchema.methods.comparePassword = function(candidatePassword,next){
	bcrypt.compare(candidatePassword,this.password,function(error,isMatch){
		if(error) return next(error)
		return next(null, isMatch)
	})
}

var User = mongoose.model("User",userSchema)
module.exports = User