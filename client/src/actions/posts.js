import axios from 'axios'

import { LOADING_POSTS, GET_ALL_POSTS, SET_ACTIVE_POST, GET_ACTIVE_CATEGORY_POSTS, GET_ERRORS, CLEAR_ERRORS } from './types'

export const getAllPosts = () => (dispatch) => {
  dispatch(setLoadingAction())
  axios.get('/api/posts')
    .then(res => 
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ALL_POSTS,
        payload: null
    }))
}

export const setActivePost = (id) => (dispatch) => {
  dispatch(setLoadingAction())
  axios.get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: SET_ACTIVE_POST,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: SET_ACTIVE_POST,
        payload: null
      }))  
}

export const clearActivePost = () => {
  return {
    type: SET_ACTIVE_POST,
    payload: {}
  }
}

export const changeVoteScore = (id, vote) => (dispatch) => {
  axios.post(`/api/posts/${id}`, vote)
    .then(res =>
      dispatch({
        type: SET_ACTIVE_POST,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: SET_ACTIVE_POST,
        payload: null
      }))
}

export const getCategoryPosts = (category) => (dispatch) => {
  dispatch(setLoadingAction())
  axios.get(`/api/categories/${category}/posts`)
    .then(res => 
      dispatch({
        type: GET_ACTIVE_CATEGORY_POSTS,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ACTIVE_CATEGORY_POSTS,
        payload: null
      }))  
}

export const createPost = (newPost, history) => (dispatch) => {
  dispatch(clearErrors())
  axios.post(`/api/posts`, newPost)
    .then(res => history.push(`/category/${newPost.category}`))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))  
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}

export const setLoadingAction = () => {
  return {
    type: LOADING_POSTS
  }
}