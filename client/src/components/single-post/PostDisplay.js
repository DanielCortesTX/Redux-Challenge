import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

import { changeVoteScore } from '../../actions/posts'

class PostDisplay extends Component {
  upVote(id){
    console.log(id)
    this.props.changeVoteScore(id, {vote:'up'})
  }
  downVote(id){
    console.log(id)
    this.props.changeVoteScore(id, {vote:'down'})
  }
  render() {
    const { post } = this.props
    
    return (
      <div className="center-item">
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
            <button className="btn btn-light bg-success" onClick={() => this.upVote(post._id)}><i className="fas fa-angle-up text-white"/></button>
            <button className="btn btn-light mr-2 bg-danger" onClick={() => this.downVote(post._id)}><i className="fas fa-angle-down text-white"/></button>
            <span className="lead">This post has a net score of: {post.voteScore}</span>
          </div>
          </div>
          <hr className="focus-post mb-4"/>
        </div>
      </div>  
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost
  }
}

export default connect(mapStateToProps, { changeVoteScore })(PostDisplay)