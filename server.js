const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const posts = 'postsModel'
const comments = 'commentsModel'

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())