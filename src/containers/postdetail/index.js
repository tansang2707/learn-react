import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, clearPost } from '../../modules/posts'

class PostDetail extends Component {
  state = {}
  componentDidMount() {
    const { fetchPost } = this.props
    const { id } = this.props.match.params
    fetchPost(id)
  }
  componentWillUnmount() {
    const { clearPost } = this.props
    clearPost()
  }
  renderPost = () => {
    const { post } = this.props
    if (!post) return <h1>Loading...</h1>
    const { createdAt, content, likes } = post
    return (
      <div>
        <p>CreateAt: {createdAt}</p>
        <p>Content: {content}</p>
        <p>Likes: {likes}</p>
      </div>
    )
  }
  render() {
    return <div>{this.renderPost()}</div>
  }
}
const mapStatetoProps = state => ({
  post: state.posts.post
})

export default connect(
  mapStatetoProps,
  { fetchPost, clearPost }
)(PostDetail)
