import { GET_ALL_POSTS } from '../actions/types'

const initialState = {
  allPosts: [],
  activePost: {},
  loading: false
}

export default function postsReducer (state = initialState, action) {
  switch(action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        loading: false
      }
    default:
      return state
  }
}