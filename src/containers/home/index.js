import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../modules/auth'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { fetchPosts } from '../../modules/posts'
class Home extends Component {
  state = {}
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }
  onClick = () => {
    const { logout } = this.props
    logout()
  }
  renderUser = () => {
    const { user, isSignIn } = this.props
    if (isSignIn) {
      return (
        <div>
          <h2>Hello {user.username}</h2>
          <button onClick={this.onClick}>Log Out</button>
        </div>
      )
    }
    return <button onClick={() => push('/login')}>Log In</button>
  }
  renderPosts = () => {
    const { posts } = this.props
    return posts.map(({ content, objectId }) => {
      return (
        <li key={objectId}>
          <Link to={`/post/${objectId}`}>{content}</Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="logout">
        {this.renderUser()}
        <ul>{this.renderPosts()}</ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  isSignIn: state.auth.isSignIn,
  posts: state.posts.posts
})

export default connect(
  mapStateToProps,
  { logout, push, fetchPosts }
)(Home)
