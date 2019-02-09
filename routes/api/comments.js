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
  // title, text, author, category, deleted
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

module.exports = router