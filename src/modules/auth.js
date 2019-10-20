import b4a from '../apis/b4a'
import { push } from 'connected-react-router'
//Constant
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SIGNUP = 'SIGNUP'
export const FORGOTPASS = 'FORGOTPASS'
//Reducers
const initState = {
  isSignIn: !!localStorage.getItem(
    `Parse/${process.env.REACT_APP_ID}/currentUser`
  ),
  token: null,
  user: localStorage.getItem(`Parse/${process.env.REACT_APP_ID}/currentUser`)
    ? JSON.parse(
        localStorage.getItem(`Parse/${process.env.REACT_APP_ID}/currentUser`)
      )
    : null
}
export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isSignIn: true }
    case LOGOUT:
      return { ...state, isSignIn: false, token: null }
    default:
      return state
  }
}
//Action creator
export const login = ({ user, pass }) => async dispatch => {
  try {
    const response = await b4a.User.logIn(user, pass)
    console.log(response)
    dispatch({ type: LOGIN })
    dispatch(push('/'))
  } catch (e) {
    console.log(user, pass)
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  localStorage.clear()
  dispatch(push('/login'))
}
export const signup = (user, pass, email) => async dispatch => {
  try {
    const u = new b4a.User()
    u.set('username', user)
    u.set('email', email)
    u.set('password', pass)
    const response = await u.signUp()
    dispatch(push('/login'))
  } catch (e) {
    console.log(e)
  }
}
