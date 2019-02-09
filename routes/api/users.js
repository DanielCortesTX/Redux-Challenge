// const express = require('express')
// const router = express.Router()
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const keys = require('../../config/keys')

// const User = require('../../models/User')

// // @route  POST api/users/register
// // @desc   Make new user
// // @access Public
// router.post('/register', (req, res) => {
//   User.findOne({ username: req.body.username }).then(user => {
//     if(user){
//       errors.username = 'Username already exists'
//       return res.status(400).json(errors)
//     } else {
//       const newUser = new User({
//         username: req.body.username,
//         password: req.body.password,
//         // posts: [],
//         // likes: [],
//         deleted: false
//       })

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err
//           newUser.password = hash
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err))
//         })
//       })
//     }
//   })
// })

// // @route  POST api/users/login
// // @desc   Login User / Return jwtToken
// // @access Public
// router.post('/login', (req, res) => {

//   const username = req.body.username
//   const password = req.body.password

//   // Find user by username
//   User.findOne({ username })
//     .then(user => {
//       // Check for user
//       if(!user) {
//         // errors.username = "Username not found"
//         return res.status(404)
//       }

//       // Check password
//       bcrypt.compare(password, user.password).then(isMatch => {
//         if(isMatch) {
//           // User matched
//           // check if administrator

//           // CREATE JWT PAYLOAD
//           const payload = { id: user.id, username: user.username } 

//           // Sign Token
//           jwt.sign(
//             payload,
//             keys.secretOrKey,
//             { expiresIn: 7200 },
//             (err, token) => {
//               res.json({
//                 success: true,
//                 token: 'Bearer ' + token
//               })
//             }
//           )
//         } else {
//           return res.status(400).json(err)
//         }
//       })
//     })
// })

// module.exports = router