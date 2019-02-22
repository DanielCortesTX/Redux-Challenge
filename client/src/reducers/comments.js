import { GET_ACTIVE_POST_COMMENTS, CLEAR_ACTIVE_POST_COMMENTS, LOADING_COMMENTS } from '../actions/types'

const initialState = {
  activePostComments: [],
  loading: false
}

export default function commentsReducer (state = initialState, action) {
  switch(action.type) {
    case GET_ACTIVE_POST_COMMENTS:
      return {
        ...state,
        activePostComments: action.payload
      }
    case LOADING_COMMENTS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}