import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, clearPost, clearComment } from '../../modules/posts'
import './postdetail.scss'

class PostDetail extends Component {
  state = {}
  componentDidMount() {
    const { fetchPost } = this.props

    const { id } = this.props.match.params

    fetchPost(id)
  }
  componentWillUnmount() {
    const { clearPost, clearComment } = this.props
    clearPost()
    clearComment()
  }
  renderPost = () => {
    const { post } = this.props
    if (!post) return <h1>Loading...</h1>
    const { createdAt, content, likes } = post
    return (
      <div className="postdetail">
        <p>CreateAt: {createdAt}</p>
        <p>Content: {content}</p>
        <p>Likes: {likes}</p>
      </div>
    )
  }
  renderComment = () => {
    const { comment } = this.props
    if (!comment) return <div></div>
    return comment.map(({ content, objectId, owner, likes }) => {
      return (
        <li key={objectId} className="list-group-item">
          <div className="post__comments__item">
            <div className="post__comments__item--owner">
              <p>{owner}</p>
            </div>
            <div className="post__comment__item--content">
              <p>{content}</p>
            </div>
            <div className="post__comment__item--like">
              <p>{likes}</p>
            </div>
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="post">
          <div className="post__comments">
            <ul className="list-group">{this.renderComment()}</ul>
          </div>
          <div className="post__detail">{this.renderPost()}</div>
        </div>
      </div>
    )
  }
}
const mapStatetoProps = state => ({
  post: state.posts.post,
  comment: state.posts.comment
})

export default connect(
  mapStatetoProps,
  { fetchPost, clearPost, clearComment }
)(PostDetail)
