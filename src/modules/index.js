import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import posts from './posts'

export default combineReducers({
  counter,
  auth,
  posts
})
