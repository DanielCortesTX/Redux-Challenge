import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { changeVoteScore, deletePost } from '../../actions/posts'

class PostDisplay extends Component {
  upVote(id){
    console.log(id)
    this.props.changeVoteScore(id, {vote:'up'})
  }
  downVote(id){
    console.log(id)
    this.props.changeVoteScore(id, {vote:'down'})
  }
  deletePost(id){
    this.props.deletePost(id)
    console.log(id)
  }
  render() {
    const { post } = this.props
    let display

    if(post.deleted){
      display = <h2 className="display-4 my-4">This post has been deleted.</h2>
    } else {
      display = <div>
        <h1 className="display-4">{post.title}</h1>
        <hr className="focus-post mb-4"/>
        <div className="card d-flex p-4 center-item">
          <p className="lead">{post.text}</p>
          <div className="d-flex flex-row">
          <span className="lead mr-1">Made on <Moment format="MMMM Do YYYY">{post.date}</Moment></span>
          <p className="lead">By {post.author}</p>
        </div>
      <div className="d-flex flex-row align-items-center">
        <button className="btn btn-light bg-success" onClick={() => this.upVote(post._id)}><i className="fas fa-angle-up text-white"/></button>
        <button className="btn btn-light mr-2 bg-danger" onClick={() => this.downVote(post._id)}><i className="fas fa-angle-down text-white"/></button>
        <Link to={`/post-edit/${post._id}`} className='btn btn-info mr-2'>Edit</Link>
        <button className="btn btn-warning btn-large mr-2" onClick={() => this.deletePost(post._id)}>Delete</button>
        <span className="lead">This post has a net score of: {post.voteScore}</span>
      </div>
      </div>
      <hr className="focus-post mb-4"/>
    </div>
    }
    
    return (
      <div className="center-item">
        {display}
      </div>  
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost
  }
}

export default connect(mapStateToProps, { changeVoteScore, deletePost })(PostDisplay)