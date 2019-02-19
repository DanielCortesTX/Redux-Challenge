import { LOADING_CATEGORIES, GET_ALL_CATEGORIES, SET_ACTIVE_CATEGORIES } from '../actions/types'

const initialState = {
  allCategories: [],
  activeCategory: {},
  loading: false
}

export default function categoriesReducer (state=initialState, action) {
  switch(action.type){
    default:
      return state
  }
}