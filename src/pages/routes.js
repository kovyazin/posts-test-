import { paths } from './paths'

import { HomePage } from './home'
import { AddPostPage } from './add-post'
import { PostPage } from './post'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  },
  {
    path: paths.addPost(),
    exact: true,
    component: AddPostPage
  },
  {
    path: paths.post(),
    exact: true,
    component: PostPage
  }
]