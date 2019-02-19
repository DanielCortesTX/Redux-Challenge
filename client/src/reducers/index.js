import { combineReducers } from 'thunk'
import categoriesReducer from './categories'
import postsReducer from './posts'

export default combineReducers({
  category: categoriesReducer,
  post: postsReducer
})