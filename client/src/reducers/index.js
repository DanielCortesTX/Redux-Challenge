import { combineReducers } from 'redux'
import categoriesReducer from './categories'
import postsReducer from './posts'
import commentsReducer from './comments'
import errorsReducer from './errors'

export default combineReducers({
  category: categoriesReducer,
  post: postsReducer,
  comment: commentsReducer,
  errors: errorsReducer
})