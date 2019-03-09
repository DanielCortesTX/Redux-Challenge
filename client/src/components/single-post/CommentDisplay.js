import React, { Component } from 'react'

class CommentDisplay extends Component {
  upVote(id){
    console.log(id)
    this.props.changeCommentVote(id, {vote:'up'})
  }
  downVote(id){
    console.log(id)
    this.props.changeCommentVote(id, {vote:'down'})
  }
  render() {
    const { comment } = this.props


    return (
      <div className="card card-body">
        <h3>{comment.author}:</h3>
        <h2>{comment.text}</h2>
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-light bg-success" onClick={() => this.upVote(comment._id)}><i className="fas fa-angle-up text-white"/></button>
          <button className="btn btn-light mr-2 bg-danger" onClick={() => this.downVote(comment._id)}><i className="fas fa-angle-down text-white"/></button>
          <button className="btn bt-light bg-warning mr-2">Delete</button>
          <span className="lead">Comment score: {comment.voteScore}</span>
        </div>
      </div>
    )
  }
}

export default CommentDisplay