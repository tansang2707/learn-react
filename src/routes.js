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
    name: 'About',
    path: '/about-us',
    component: About
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  { name: 'SignUp', path: '/signup', component: SignUp },
  { name: 'PostDetail', path: '/posts/:id', component: PostDetail },
  {
    name: 'Posts',
    path: '/posts',
    component: Posts
  }
]

export default routes
