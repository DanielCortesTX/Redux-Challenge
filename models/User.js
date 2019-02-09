const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Post Schema
const UserSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  username: {
    type: String
  }, 
  password: {
    type: String,
    required: true
  }, 
  comments: [
    {
      comment: {
        type: Schema.Types.ObjectId
      }
    }
  ], 
  posts: [
    {
      post: {
        type: Schema.Types.ObjectId
      }
    }
  ], 
  likes: [
    {
      post: {
        type: Schema.Types.ObjectId
      }
    }
  ], 
  deleted: {
    type: Boolean
  }
})

module.exports = User = mongoose.model('user', UserSchema)