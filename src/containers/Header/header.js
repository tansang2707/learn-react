import React, { Component } from 'react'
//menu
const menu = [
  //Home Page
  {
    name: 'Home'
  },
  //Posts Page
  {
    name: 'Posts'
  },
  //About Page
  {
    name: 'About'
  },
  //Login Page
  {
    name: 'Loign'
  },
  //SignUp Page
  {
    name: 'SignUp'
  }
]

class Header extends Component {
  state = {
    menu: []
  }
  render() {
    return <header></header>
  }
}

export default Header
