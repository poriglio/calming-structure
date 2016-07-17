var express = require("express")
var bodyParser = require("body-parser")

var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/calmingstructure")

var session = require("express-session")
var passport = require("passport")
var passportConfig = require("./config/auth.js")

var app = express()

app.use(session({
	secret            : "calming-structure-#4jZ9@!kf*H",
	resave            : true,
	saveUninitialized : true
}))

app.use(passport.initialize())

app.use(passport.session())

app.use(express.static(__dirname + "/public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var authCont = require("./controllers/authcontroller.js")

app.get("/",function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.post("/auth/signup",function(req,res){
	console.log(req)
	userController.createUser(req,res)
})

app.post("/auth/signin",authCont.processSignIn)


var userCont = require("./controllers/usercontroller.js")
var giftIdeaCont = require("./controllers/giftideacontroller.js")
var savingsGoalCont = require("./controllers/savingsgoalcontroller.js")


// -=-=-=-=-=-=-=-=-=-=
// LOGGED OUT ROUTES
// -=-=-=-=-=-=-=-=-=-=

// -=-=-=-=-=-=-=-=-=-=-=-
// API ROUTES - logged out
// -=-=-=-=-=-=-=-=-=-=-=-

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// BELOW THIS, MUST BE AUTHENTICATED!
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

app.use(passportConfig.ensureAuthenticated)

app.get("/auth/signout",authCont.signOut)

app.get("/api/me",function(request,response){
	response.send(request.user)
})

// -=-=-=-=-=-=-=-=-=-=-=
// API ROUTES - logged in
// -=-=-=-=-=-=-=-=-=-=-=

var port = 4000

app.get("/",function(request,response){
	response.sendFile("/html/index.html", {root: "./public"})
})

app.listen(port,function(){
	console.log("The server is running on port " + port + ".")
})