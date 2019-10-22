import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../../modules/posts'
import './posts.scss'

class Posts extends Component {
  state = {}
  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }
  renderPosts = () => {
    const { posts } = this.props
    return (
      <ul>
        {posts.map(({ content, objectId }) => {
          return (
            <li className="list-group-item">
              <Link key={objectId} to={`/posts/${objectId}`}>
                {content}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return <div className="posts">{this.renderPosts()}</div>
  }
}
const mapStatetoProps = state => {
  return { posts: state.posts.posts }
}
export default connect(
  mapStatetoProps,
  {
    fetchPosts
  }
)(Posts)
