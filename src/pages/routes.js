import { paths } from './paths'

import { HomePage } from './home'
import { AddPostPage } from './add-post'
import { PostPage } from './post'
import { NotFoundPage } from './not-found'

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
  },
  {
    path: '*',
    component: NotFoundPage
  }
]