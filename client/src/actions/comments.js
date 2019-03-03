import axios from 'axios'

import { GET_ACTIVE_POST_COMMENTS, CLEAR_ACTIVE_POST_COMMENTS, LOADING_COMMENTS } from '../actions/types'

export const getActivePostComments = (id) => (dispatch) => {
  dispatch(setCommentsLoading())
  axios.get(`/api/posts/${id}/comments`)
    .then(res =>
      dispatch({
        type: GET_ACTIVE_POST_COMMENTS,
        payload: res.data
      }))
    .catch(err =>
      dispatch({
        type: GET_ACTIVE_POST_COMMENTS,
        payload: null
      }))
}

export const clearActivePostComments = () => {
  return {
    type: CLEAR_ACTIVE_POST_COMMENTS
  }
}

export const changeCommentVote = (id, vote, parentId) => (dispatch) => {
  axios.post(`/api/comments/${id}`, vote)
    .then(res =>
    dispatch({
      type: GET_ACTIVE_POST_COMMENTS,
      payload: res.data
    }))
  .catch(err => 
    dispatch({
      type: GET_ACTIVE_POST_COMMENTS,
      payload: null
    }))    
}

export const setCommentsLoading = () => () => {
  return {
    type: LOADING_COMMENTS,
  }
}