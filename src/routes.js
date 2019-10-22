import Home from './containers/home'
import About from './containers/about'
import Login from './containers/signIn'
import SignUp from './containers/signUp'
import PostDetail from './containers/postdetail'
import Posts from './containers/posts'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    path: '/about-us',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/posts/:id',
    component: PostDetail
  },
  {
    path: '/posts',
    component: Posts
  }
]

export default routes
