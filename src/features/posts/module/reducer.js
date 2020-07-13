import * as types from './types'

const initialState = {
  posts: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}
