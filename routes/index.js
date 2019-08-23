var express = require('express');
var path = require('path');
var app = express();


module.exports = function(app) {
    // to the home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/html/index.html'));
    });

    // gotta catch 'em all
    app.get('*', function(req, res) {
        res.redirect('/');
    });
};