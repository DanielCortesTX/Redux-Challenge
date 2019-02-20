import axios from 'axios'

import { LOADING_POSTS, GET_ALL_POSTS, SET_ACTIVE_POST } from './types'

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

export const setLoadingAction = () => {
  return {
    type: LOADING_POSTS
  }
}