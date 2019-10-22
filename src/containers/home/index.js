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
  onLogin = () => {
    const { push } = this.props
    push('/login')
  }
  renderUser = () => {
    const { user, isSignIn } = this.props
    if (isSignIn) {
      return (
        <div>
          <h3>Hello {user.username}</h3>
          <button class="btn btn-primary" type="submit" onClick={this.onClick}>
            Log Out
          </button>
        </div>
      )
    }
    return (
      <div>
        <button class="btn btn-primary" type="submit" onClick={this.onLogin}>
          Log In
        </button>
      </div>
    )
  }

  render() {
    return <div className="logout">{this.renderUser()}</div>
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
