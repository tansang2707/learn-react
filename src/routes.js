import Home from './containers/home'
import About from './containers/about'
import Login from './containers/signIn'
import SignUp from './containers/signUp'
import PostDetail from './containers/postdetail'

const routes = [
  {
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
    path: '/post/:id',
    component: PostDetail
  }
]

export default routes
