import React, { Component } from 'react'

// import { changeCommentVote } from '../../actions/comments'

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
        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-light" onClick={() => this.upVote(comment._id)}><i className="fas fa-angle-up text-info"/></button>
          <button className="btn btn-light mr-2" onClick={() => this.downVote(comment._id)}><i className="fas fa-angle-down text-info"/></button>
          <span className="lead">Comment score: {comment.voteScore}</span>
        </div>
      </div>
    )
  }
}

export default CommentDisplay