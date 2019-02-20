import { GET_ALL_POSTS, GET_ACTIVE_CATEGORY_POSTS } from '../actions/types'

const initialState = {
  allPosts: [],
  activePost: {},
  activeCategoryPosts: [],
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
    case GET_ACTIVE_CATEGORY_POSTS:
      return {
        ...state,
        activeCategoryPosts: action.payload,
        loading: false
      }
    default:
      return state
  }
}