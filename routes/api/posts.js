const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Post = require('../../models/Post')

// @route  GET api/posts
// @desc   Gets all posts
// @access Public
router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ categories: 'No posts found'}))
})

// @route  GET api/posts
// @desc   Make new post
// @access Public
router.post('/', (req, res) => {
  // title, text, author, category, deleted
  const newPost = new Post({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    category: req.body.category,
    voteScore: 0,
    deleted: false
  })

  newPost.save().then(post => res.json(post))
})

/////////////////////////////////////////////
//////////////////////////////////////////////
///////////////////////////////////////////

// @route  GET api/posts/:id
// @desc   Gets specific post
// @access Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ categories: 'No post found'}))
})

// @route  POST api/posts/:id
// @desc   Increment Upvotes 
// @access Public
router.post('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.voteScore += 1

      post.save().then(post => res.json(post))
    })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ categories: 'No post found'}))
})

// @route  PUT api/posts/:id
// @desc   Edit post 
// @access Public
router.put('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title
      post.text = req.body.text

      post.save().then(post => res.json(post))
    })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ categories: 'No post found'}))
})

// @route  DELETE api/posts/:id
// @desc   Delete post 
// @access Public
router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.remove().then(() => res.json({ success: true}))
    })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ categories: 'No post found'}))
})

module.exports = router