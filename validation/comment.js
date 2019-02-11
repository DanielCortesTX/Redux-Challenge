const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateCommentInput(data) {
  let errors = {}

  data.text = !isEmpty(data.text) ? data.text : ''
  data.author = !isEmpty(data.author) ? data.author : ''

  if(Validator.isEmpty(data.text)){
    errors.text = "Text field is required"
  }

  if(Validator.isLength(data.text, { min: 6, max: undefined})){
    errors.text = "Title must be at least 6 characters"
  }

  if(Validator.isEmpty(data.author)){
    errors.author = "Author field is required"
  }

  if(Validator.isLength(data.author, { min: 6, max: 50})){
    errors.title = "Author name must be between 6 and 50 characters"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}