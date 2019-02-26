import React, { Component } from 'react'
import CommentDisplay from './CommentDisplay'

class CommentsFeed extends Component {
  render() {
    const { comments, changeCommentVote } = this.props
    return (
      <div className="focus-post d-flex align-items-center flex-column">
        {comments.map((comment) => <CommentDisplay comment={comment} changeCommentVote={changeCommentVote}/>)}
      </div>
    )
  }
}

export default CommentsFeed