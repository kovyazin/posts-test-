import { combineReducers } from 'redux'

import { postsReducer } from '@features/posts'

export const rootReducer = combineReducers({
  posts: postsReducer
})
