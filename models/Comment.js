const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Comment Schema
const CommentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  parentId: {
    type: String
  }, 
  body: {
    type: String,
    required: true
  }, 
  author: {
    type: String,
    required: true
  }, 
  category: {
    type: String
  }, 
  voteScore: {
    type: Number
  }, 
  deleted: {
    type: Boolean
  }, 
  parentDeleted: {
    type: Boolean
  }
})

module.exports = Comment = mongoose.model('comment', PostSchema)