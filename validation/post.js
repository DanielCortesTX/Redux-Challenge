const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validatePostInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ''
  data.text = !isEmpty(data.text) ? data.text : ''
  data.author = !isEmpty(data.author) ? data.author : ''
  data.category = !isEmpty(data.category) ? data.category : ''

  return {
    errors,
    isValid: isEmpty(errors)
  }
}