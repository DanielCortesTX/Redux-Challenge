const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Comment = require('../../models/Comment')
const Post = require('../../models/Post')

// Load Validator
const validateCommentInput = require('../../validation/comment')

// @route  POST api/comments
// @desc   Make new comment
// @access Public
router.post('/', (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body)

  // Validate
  if(!isValid){
    return res.status(400).json(errors)
  }
  
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

// @route  GET api/comments
// @desc   Get all comments.
// @access Public
router.get('/', (req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json({ comments: 'No comments found'}))
})

// @route  GET api/comments/:id
// @desc   Get the details for a comment.
// @access Public
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json({ comments: 'No comments found'}))
})

// @route  POST api/comments/:id
// @desc   Up/down vote a comment.
// @access Public
router.post('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
      if(req.body.vote === 'up'){
        comment.voteScore += 1

        comment.save().then(comment => res.json(comment))
      } else {
        comment.voteScore -= 1

        comment.save().then(comment => res.json(comment))
      }   
    })
    .catch(err => res.status(404).json({ comments: 'Comment not found'}))
})

// @route  PUT api/comments/:id
// @desc   Modify an existing comment.
// @access Public
router.put('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
        comment.date = Date.now()
        comment.text = req.body.text

        comment.save().then(comment => res.json(comment))
    })
    .catch(err => res.status(404).json({ comments: 'Comment not found'}))
})

// @route  DELETE api/comments/:id
// @desc   Set deleted flag to true.
// @access Public
router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
        comment.deleted = true

        comment.save().then(comment => res.json(comment))
    })
    .catch(err => res.status(404).json({ comments: 'Comment not found'}))
})

module.exports = router