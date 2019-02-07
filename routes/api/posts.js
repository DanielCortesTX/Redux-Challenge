const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Post = require('../../models/Post')

// @route  GET api/posts
// @desc   Gets all posts
// @access Public
router.get('/posts', (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ categories: 'No posts found'}))
})

// @route  GET api/:category/posts
// @desc   Gets all posts in category
// @access Public
router.post('/posts', (req, res) => {
  title, text, author, category, deleted
  const newPost = new Post({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    category: req.body.category,
    deleted: false
  })

  newPost.save().then(post => res.json(post))
})

module.exports = router