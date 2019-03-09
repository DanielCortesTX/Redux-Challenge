import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class PostLink extends Component {
  render() {
    const { post } = this.props
    let postDisplay

    if(post.deleted){
      postDisplay = "Post Deleted"
    } else {
      postDisplay = post.title
    }
    return (
      <div className="card card-body mx-3 my-3 link-width">
        <Link to={`/post/${post._id}`} className={classnames('btn btn-lg', {
          'btn-warning': post.category === 'movies'
        }, {
          'btn-danger': post.category === 'books'
        }, {
          'btn-primary': post.category === 'games'
        })}>{postDisplay}</Link>
      </div>
    )
  }
}

export default PostLink