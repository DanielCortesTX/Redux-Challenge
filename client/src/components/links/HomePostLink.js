import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class PostLink extends Component {
  render() {
    const { post } = this.props
    let upper = post.category.toUpperCase()
    return (
      <div className="card card-body mx-3 my-3 link-width">
        <div>
          <h4 className="center-item lead">{upper}</h4>
        </div>
        <Link to={`/post/${post._id}`} className={classnames('btn btn-lg', {
          'btn-warning': post.category === 'movies'
        }, {
          'btn-danger': post.category === 'books'
        }, {
          'btn-primary': post.category === 'games'
        })}>{post.title}</Link>
      </div>
    )
  }
}

export default PostLink