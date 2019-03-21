const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateCommentInput(data) {
  let errors = {}

  data.text = !isEmpty(data.text) ? data.text : ''
  data.author = !isEmpty(data.author) ? data.author : ''

  if(Validator.isEmpty(data.text)){
    errors.text = "Text field is required"
  }

  if(!Validator.isLength(data.text, { min: 6, max: 300})){
    errors.text = "Title must between 6 and 300 characters."
  }

  if(Validator.isEmpty(data.author)){
    errors.author = "Author field is required"
  }

  if(!Validator.isLength(data.author, { min: 3, max: 50})){
    errors.title = "Author name must be between 3 and 50 characters"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}