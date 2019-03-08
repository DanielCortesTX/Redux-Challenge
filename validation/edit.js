const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateEditInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ''
  data.text = !isEmpty(data.text) ? data.text : ''

  if(Validator.isEmpty(data.title)){
    errors.title = "Title field is required"
  }

  if(!Validator.isLength(data.title, { min: 6, max: 50})){
    errors.title = "Title must be between 6 and 50 characters"
  }

  if(Validator.isEmpty(data.text)){
    errors.text = "Text field is required"
  }

  if(!Validator.isLength(data.text, { min: 6, max: undefined})){
    errors.text = "Post must be at least 6 characters"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}