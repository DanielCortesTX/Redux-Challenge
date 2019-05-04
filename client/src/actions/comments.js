import axios from 'axios'

import { GET_ACTIVE_POST_COMMENTS, CLEAR_ACTIVE_POST_COMMENTS, LOADING_COMMENTS, SET_EDIT_COMMENT } from '../actions/types'

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

export const addComment = (newComment) => (dispatch) => {
  dispatch(setCommentsLoading)
  axios.post('/api/comments', newComment)
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

export const deleteComment = (id) => (dispatch) => {
  axios.delete(`/api/comments/${id}`)
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

export const editComment = (newComment, id, parentId, history) => (dispatch) => {
  axios.put(`/api/comments/${id}`, newComment)
    .then(res => 
      dispatch({
        type: SET_EDIT_COMMENT,
        payload: null
      }))
      .then(res => history.push(`/post/${parentId}`))  
    .catch(err => 
      dispatch({
        type: SET_EDIT_COMMENT,
        payload: null
      }))  
}

export const setEditComment = (id) => (dispatch) => {
  axios.get(`/api/comments/${id}`)
    .then(res =>
    dispatch({
      type: SET_EDIT_COMMENT,
      payload: res.data
    }))
  .catch(err => 
    dispatch({
      type: SET_EDIT_COMMENT,
      payload: null
    })) 
}

export const setCommentsLoading = () => () => {
  return {
    type: LOADING_COMMENTS,
  }
}