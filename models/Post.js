const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Post Schema
const PostSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  title: {
    type: String
  }, 
  text: {
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
  }
})

module.exports = Post = mongoose.model('post', PostSchema)