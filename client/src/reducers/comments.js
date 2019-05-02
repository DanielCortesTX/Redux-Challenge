import { GET_ACTIVE_POST_COMMENTS, CLEAR_ACTIVE_POST_COMMENTS, LOADING_COMMENTS, SET_EDIT_COMMENT } from '../actions/types'

const initialState = {
  activePostComments: [],
  editComment: {},
  loading: false
}

export default function commentsReducer (state = initialState, action) {
  switch(action.type) {
    case GET_ACTIVE_POST_COMMENTS:
      return {
        ...state,
        activePostComments: action.payload
      }
    case CLEAR_ACTIVE_POST_COMMENTS:
      return {
        ...state,
        activePostComments: []
      }
    case SET_EDIT_COMMENT:
      return {
        ...state,
        editComment: action.payload
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