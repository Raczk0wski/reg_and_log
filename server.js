var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var cookieParser = require('cookie-parser');

var MongoClient = require('mongodb').MongoClient;
var mongodb_url = 'mongodb://localhost:27017/';

var windowsDirectory = "C:/Users/Raczkowski/reg_and_log";
var linuxDirectory = "/home/raczkowski/IdeaProjects/reg_and_log";

app.use('/public', express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(linuxDirectory + "/" + "index.html");
});

app.get('/registration.html', function (req, res) {
    res.sendFile(linuxDirectory + "/" + "registration.html");
});

app.get('/login.html', urlencodedParser, function (req, res) {
    res.sendFile(linuxDirectory + "/" + "login.html");
});

app.post('/login.html', urlencodedParser, function (req, res) {
    var user = {
        login: req.body.registrationEmail,
        password: req.body.registrationPassword
    };

    console.log(user);

    MongoClient.connect(mongodb_url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("library");

        dbo.collection("users").findOne(user, function (err, result) {
            if (result === null || result.login !== user.login) {
                dbo.collection("users").insertOne(user, function (err, result) {
                    if (err) throw err;
                    console.log("User is registered");
                    db.close();
                });
                res.sendFile(linuxDirectory + "/" + "login.html");
            } else {
                db.close();
                res.sendFile(linuxDirectory + "/" + "login.html");
            }
        });

    });
});

app.post('/mainPage.html', urlencodedParser, function (req, res) {
    var user = {
        login: req.body.loginEmail,
        password: req.body.loginPassword
    };

    MongoClient.connect(mongodb_url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("library");

        dbo.collection("users").findOne(user, function (err, result) {
            if (err || result === null) {
                console.log(err);
                db.close();
                res.sendFile(linuxDirectory + "/" + "login.html");
            } else {
                console.log(result);
                if (result.login === user.login && result.password === user.password) {
                    db.close();
                    res.sendFile(linuxDirectory + "/" + "mainPage.html");
                } else {
                    db.close();
                    res.sendFile(linuxDirectory + "/" + "login.html");
                    alert("Wrong Login or Password");
                }
            }
        });
    });
});

var server = app.listen(8080, function () {
    console.log("App is running");
});