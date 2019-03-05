const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validatePostInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ''
  data.text = !isEmpty(data.text) ? data.text : ''
  data.author = !isEmpty(data.author) ? data.author : ''
  data.category = !isEmpty(data.category) ? data.category : ''

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
    errors.text = "Title must be at least 6 characters"
  }

  if(Validator.isEmpty(data.author)){
    errors.author = "Author field is required"
  }

  if(!Validator.isLength(data.author, { min: 6, max: 50})){
    errors.author = "Author name must be between 6 and 50 characters"
  }

  if(data.category === 'none'){
    errors.category = "Category selection is required"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}