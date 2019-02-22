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

export const setCommentsLoading = () => (dispatch) => {
  return {
    type: LOADING_COMMENTS,
  }
}