const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Comment = require('../../models/Comment')
const Post = require('../../models/Post')

// @route  POST api/comments
// @desc   Make new comment
// @access Public
router.post('/', (req, res) => {
  const newComment = new Comment({
    parentId: req.body.parentId,
    text: req.body.text,
    author: req.body.author,
    voteScore: 0,
    deleted: false,
    parentDeleted: false
  })

  newComment.save().then(comment => res.json(comment))
})

// @route  GET api/comments/:id
// @desc   Get the details for a comment.
// @access Public
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json({ comments: 'No post found'}))
})

module.exports = router