// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Create a new comment
router.post('/', function(req, res) {
  Comment.create(req.body, function(err, comment) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
    } else {
      res.send(comment);
    }
  });
});

// Get all comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
    } else {
      res.send(comments);
    }
  });
});

// Get a comment by id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
    } else {
      res.send(comment);
    }
  });
});

// Update a comment by id
router.put('/:id', function(req, res) {
  Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, comment) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
    } else {
      res.send(comment);
    }
  });
});

// Delete a comment by id
router.delete('/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err, comment) {
    if (err) {
      console.log(err);
      res.status(400);
      res.send(err);
    } else {
      res.send(comment);
    }
  });
});

module.exports = router;