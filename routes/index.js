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

    // route to the track record page
    app.get('/track-record', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/track-record.html'));
    });

    // route to the contact page
    app.get('/contact', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });

    // route to the privacy policy page
    app.get('/privacy-policy', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/privacy-policy.html'));
    });

    // route to the blog page
    app.get('/blog', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/blog.html'));
    });

    // route to the blog page
    app.get('/blog/chro', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/blog-chro.html'));
    });

    // gotta catch 'em all
    app.get('*', function(req, res) {
        res.redirect('/');
    });
};