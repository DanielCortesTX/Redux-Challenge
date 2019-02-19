import { combineReducers } from 'thunk'
import categoriesReducer from './categories'

export default combineReducers({
  categort: categoriesReducer
})