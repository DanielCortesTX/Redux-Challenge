const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const posts = require('./routes/api/posts')
const categories = require('./routes/api/categories')
const comments = require('./routes/api/comments')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Use Routes
app.use('/api/categories', categories)
app.use('/api/posts', posts)
app.use('/api/comments', comments)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`))