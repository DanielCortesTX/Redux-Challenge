import React, { Component } from 'react'

export default class PostDisplay extends Component {
  render() {
    const { post } = this.props
    return (
      <div className="d-flex align-items-center flex-column">
        <h1 className="display-4">{post.title}</h1>
        <hr className="focus-post mb-4"/>
        <div className="card focus-post d-flex">
        <p className="lead">{post.text}</p>
        <p className="lead">By {post.author}</p>
        </div>
      </div>
    )
  }
}
