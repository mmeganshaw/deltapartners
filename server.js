// Sets package requirements
var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser');

// Setting port to 5000 for heroku
var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

require('./routes/index.js')(app);

app.listen(PORT, function(){
	console.log("Server listening on: " + PORT);
});