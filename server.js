
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')


app.use('/public', express.static('public'))

app.get('/index.html', function (req, res) {
    res.sendFile("C:/Users/Raczkowski/reg_and_log" + "/" + "index.html");
});
app.get('/registration.html', function (req, res) {
    res.sendFile("C:/Users/Raczkowski/reg_and_log" + "/" + "registration.html");
});

app.get('/login.html', function (req, res) {
    res.sendFile("C:/Users/Raczkowski/reg_and_log" + "/" + "login.html");
});

app.get('/mainPage.html', function (req, res) {
    res.sendFile("C:/Users/Raczkowski/reg_and_log" + "/" + "mainPage.html");
});

var server = app.listen(8080, function () {
    console.log("App is running");
});