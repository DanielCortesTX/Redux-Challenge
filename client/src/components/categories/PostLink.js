import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostLink extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="card card-body">
        <div>
          <h4>{post.title}</h4>
        </div>
        <Link to={`/category/${post.title}`} className="btn btn-lg btn-primary">{post.title} posts</Link>
      </div>
    )
  }
}

export default PostLink