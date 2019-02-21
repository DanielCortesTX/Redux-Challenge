import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostLink extends Component {
  render() {
    const { post } = this.props
    let upper = post.category.toUpperCase()
    return (
      <div className="card card-body">
        <div>
          <h4>{upper}</h4>
        </div>
        <Link to={`/post/${post._id}`} className="btn btn-lg btn-primary">{post.title}</Link>
      </div>
    )
  }
}

export default PostLink