import React, { Component } from 'react'
import Moment from 'react-moment'

export default class PostDisplay extends Component {
  render() {
    const { post } = this.props
    
    return (
      <div>
        <div className="d-flex align-items-center flex-column">
          <h1 className="display-4">{post.title}</h1>
          <hr className="focus-post mb-4"/>
          <div className="card focus-post d-flex p-4">
          <p className="lead">{post.text}</p>
          <div className="d-flex flex-row">
            <span className="lead mr-1">Made on <Moment format="MMMM Do YYYY">{post.date}</Moment></span>
            <p className="lead">By {post.author}</p>
          </div>
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-light"><i className="fas fa-angle-up text-info"/></button>
            <button className="btn btn-light"><i className="fas fa-angle-down text-info"/></button>
            <span className="lead">This post has a net score of: {post.voteScore}</span>
          </div>
          </div>
          <hr className="focus-post mb-4"/>
        </div>
      </div>  
    )
  }
}
