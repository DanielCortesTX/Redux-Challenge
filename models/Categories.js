const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Post Schema
const CategorySchema = new Schema({ 
  category: [
    {
      name: String,
      path: String
    }
  ]
})

module.exports = Category = mongoose.model('post', CategorySchema)