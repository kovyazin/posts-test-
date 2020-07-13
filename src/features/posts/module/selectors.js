import { createSelector } from 'reselect'

export const posts = (state) => state.posts.posts
export const currentPost = (id) => {
  return createSelector(
    posts,
    (posts) => posts.find((post) => post.id === id)
  )
}