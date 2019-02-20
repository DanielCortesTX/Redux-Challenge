import { LOADING_CATEGORIES, GET_ALL_CATEGORIES, SET_ACTIVE_CATEGORY } from '../actions/types'

const initialState = {
  allCategories: [],
  activeCategory: '',
  loading: false
}

export default function categoriesReducer (state=initialState, action) {
  switch(action.type){
    case LOADING_CATEGORIES:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
        loading: false
      }
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.selection,
        loading: false
      }
    default:
      return state
  }
}