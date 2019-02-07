const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Post = require('../../models/Post')
const Category = require('../../models/Categories')

// @route  GET api/categories
// @desc   Gets all categories
// @access Public
router.get('/categories', (req, res) => {
  Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(404).json({ categories: 'No categories found'}))
})

// @route  GET api/:category/posts
// @desc   Gets all posts in category
// @access Public
router.get('/:category/posts', (req, res) => {
  Post.find({ category: req.param.category })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ categories: 'No posts found'}))
})