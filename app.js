var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var session = require("express-session")
var passport = require("passport")

var app = express()

app.use(express.static(__dirname + "/public"))

var port = 4000

app.get("/",function(request,response){
	response.sendFile("/html/index.html", {root: "./public"})
})

app.listen(port,function(){
	console.log("The server is running on port " + port + ".")
})