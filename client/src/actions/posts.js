import axios from 'axios'

import { LOADING_POSTS, GET_ALL_POSTS, SET_ACTIVE_POST, GET_ACTIVE_CATEGORY_POSTS } from './types'

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

export const getActivePost = (id) => (dispatch) => {
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

export const setLoadingAction = () => {
  return {
    type: LOADING_POSTS
  }
}