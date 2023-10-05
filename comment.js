// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var user = require('./routes/user');
var comment = require('./routes/comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', user);
app.use('/comment', comment);

app.listen(3000);
console.log("Server running at http://localhost:3000/");