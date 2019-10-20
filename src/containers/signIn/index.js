import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../modules/auth'
import { push } from 'connected-react-router'
import './signIn.scss'

class Login extends Component {
  state = {
    user: '',
    pass: ''
  }
  componentDidMount() {
    const { auth, push } = this.props
    if (auth.isSignIn) {
      push('/')
    }
  }
  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  onSubmit = e => {
    e.preventDefault()
    const { user, pass } = this.state
    const { login } = this.props
    login({ user, pass })
  }
  render() {
    const { user, pass } = this.state
    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">Username:</label>
          <br />
          <input
            placeholder="username"
            type="text"
            name="user"
            value={user}
            onChange={this.onChange}
          />
          <br />
          <label htmlFor="">Password:</label>
          <br />
          <input
            placeholder="Pass ne con trai"
            type="password"
            name="pass"
            value={pass}
            onChange={this.onChange}
          />
          <br />
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(
  mapStateToProps,
  { login, logout, push }
)(Login)
