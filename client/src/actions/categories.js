import axios from 'axios'

import { LOADING_CATEGORIES, GET_ALL_CATEGORIES, SET_ACTIVE_CATEGORY, GET_ALL_POSTS } from './types'

export const getAllCategories = () => {
  dispatch(setPostLoading())
  axios.get('/api/categories/categories')
    .then(res => 
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ALL_POSTS,
        payload: null
      }))
}

export const setActiveCategory = (selection) => {
  return {
    type: SET_ACTIVE_CATEGORY,
    selection
  }
}

export const setPostLoading = () => {
  return {
    type: LOADING_CATEGORIES
  }
}