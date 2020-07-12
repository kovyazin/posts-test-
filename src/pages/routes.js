import { paths } from './paths'

import { HomePage } from './home'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  }
]