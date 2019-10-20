import React, { Component } from 'react'
import { signup } from '../../modules/auth'
import { connect } from 'react-redux'

class SignUp extends Component {
  state = {
    user: '',
    pass: '',
    email: '',
    confirm_pass: ''
  }
  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  onSubmit = event => {
    event.preventDefault()
    const { user, pass, email, confirm_pass } = this.state
    if (pass !== confirm_pass) {
      return alert('Sai roi ku')
    }
    const { signup } = this.props
    signup(user, pass, email)
  }
  render() {
    const { user, pass, email, confirm_pass } = this.state
    return (
      <div className="signup">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">UserName</label>
          <br />
          <input
            type="text"
            name="user"
            onChange={this.onChange}
            value={user}
          />{' '}
          <br />
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            onChange={this.onChange}
            value={email}
          />{' '}
          <br />
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            name="pass"
            onChange={this.onChange}
            value={pass}
          />{' '}
          <br />
          <label htmlFor="">Confirm Password</label> <br />
          <input
            type="password"
            name="confirm_pass"
            onChange={this.onChange}
            value={confirm_pass}
          />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { signup }
)(SignUp)
