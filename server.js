var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    console.log("Running at Port 8080");
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);