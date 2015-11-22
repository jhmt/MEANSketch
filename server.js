var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
var users;

app.use(express.static('views'));
app.use(bodyParser.json());
app.listen(3000);

mongodb.MongoClient.connect("mongodb://localhost:27017/test", function(err, database) {
  users = database.collection("users");
});

// user list
app.get("/api/users", function(req, res) {
  users.find().toArray(function(err, items) {
    res.send(items);
  });
});

