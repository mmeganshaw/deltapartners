var express = require('express');
var path = require('path');
var app = express();


module.exports = function(app) {
    // to the home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    // route to the about page
    app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/about.html'));
    });

    // route to the about page
    app.get('/track-record', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/track-record.html'));
    });

    // route to the about page
    app.get('/contact', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });

    // route to the about page
    app.get('/privacy-policy', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/privacy-policy.html'));
    });

    // gotta catch 'em all
    app.get('*', function(req, res) {
        res.redirect('/');
    });
};