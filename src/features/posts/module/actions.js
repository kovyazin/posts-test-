import * as types from './types'

export const getPosts = () => (dispatch) => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []

  dispatch(getPostsSuccess(posts))
}

export const getPostsSuccess = (posts) => ({
  type: types.GET_POSTS_SUCCESS,
  payload: posts
})

export const addPost = (post) => (dispatch) => {
  const posts = JSON.parse(localStorage.getItem('posts')) || []

  const newPost = {
    ...post,
    timestamp: Date.now(),
    id: posts.length + 1
  }

  localStorage.setItem('posts', JSON.stringify([...posts, newPost]))

  dispatch(addPostSuccess(newPost))
}

const addPostSuccess = (post) => ({
  type: types.ADD_POST_SUCCESS,
  payload: post
})
