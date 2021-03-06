import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CommentDisplay extends Component {
  upVote(id){
    console.log(id)
    this.props.changeCommentVote(id, {vote:'up'})
  }
  downVote(id){
    console.log(id)
    this.props.changeCommentVote(id, {vote:'down'})
  }
  deleteComment(id) {
    this.props.deleteComment(id)
  }
  render() {
    const { comment } = this.props
    let commentDisplay

    if(comment.deleted){
      commentDisplay = <h1 className="lead mb-3">This comment has been deleted</h1>
    } else {
      commentDisplay = <div>
      <div className=" d-flex flex-column align-items-start mb-3">
        <h2 className="lead">{comment.text}</h2>
        <em>By {comment.author}</em>
      </div>
      <div className="d-flex flex-row align-items-center">
        <button className="btn btn-light bg-success" onClick={() => this.upVote(comment._id)}><i className="fas fa-angle-up text-white"/></button>
        <button className="btn btn-light mr-2 bg-danger" onClick={() => this.downVote(comment._id)}><i className="fas fa-angle-down text-white"/></button>
        <Link className="btn btn-light mr-2 bg-info text-white" to={`/edit-comment/${comment._id}`}>Edit</Link>
        <button className="btn bt-light bg-warning mr-2" onClick={() => this.deleteComment(comment._id)}>Delete</button>
        <span className="lead">Comment score: {comment.voteScore}</span>
      </div>
      </div>
    }

    return (
      <div className="card card-body comment-frame my-2">
        {commentDisplay}
      </div>
      
    )
  }
}

export default CommentDisplay