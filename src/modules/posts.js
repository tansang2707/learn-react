import b4a from '../apis/b4a'
//Constant
export const FETCH_POSTS = 'FETCH_POSTS'

export const FETCH_POST = 'FETCH_POST'

export const CLEAR_POST = 'CLEAR_POST'

export const FETCH_CMT = 'FETCH_CMT'
export const CLEAR_CMT = 'CLEAR_CMT'
//Reducer
const initState = {
  posts: [],
  post: null,
  comment: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload }
    case FETCH_POST:
      return { ...state, post: action.payload }
    case CLEAR_POST:
      return { ...state, post: null }
    case FETCH_CMT:
      return { ...state, comment: action.payload }
    case CLEAR_CMT:
      return { ...state, comment: null }
    default:
      return state
  }
}
//Action
export const fetchPosts = () => async dispatch => {
  const Post = b4a.Object.extend('Post')
  const query = new b4a.Query(Post)
  const response = await query.find()
  dispatch({ type: FETCH_POSTS, payload: JSON.parse(JSON.stringify(response)) })
}
export const fetchPost = id => async dispatch => {
  const Post = b4a.Object.extend('Post')
  const query = new b4a.Query(Post)
  query.equalTo('objectId', id)
  const response = await query.find()
  console.log(JSON.parse(JSON.stringify(response)))
  await dispatch(fetchComment(response[0]))
  dispatch({
    type: FETCH_POST,
    payload: JSON.parse(JSON.stringify(response))[0]
  })
}
export const clearPost = () => dispatch => {
  dispatch({ type: CLEAR_POST })
}

export const fetchComment = post => async dispatch => {
  const Comment = b4a.Object.extend('Comment')
  // const Post = b4a.Object.extend('Post')
  // const q1 = new b4a.Query(Post)
  // q1.equalTo('objectId', Post)
  // const p = await q1.find()
  // console.log(p)
  const query = new b4a.Query(Comment)
  query.equalTo('post', post)
  const response = await query.find()
  console.log(JSON.parse(JSON.stringify(response)))
  dispatch({
    type: FETCH_CMT,
    payload: JSON.parse(JSON.stringify(response))
  })
}

export const clearComment = () => dispatch => {
  dispatch({ type: CLEAR_CMT })
}
