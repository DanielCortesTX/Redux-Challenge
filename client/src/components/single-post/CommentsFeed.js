import React, { Component } from 'react'
import CommentDisplay from './CommentDisplay'
import { changeCommentVote, deleteComment } from '../../actions/comments'
import { connect } from 'react-redux'

class CommentsFeed extends Component {
  changeCommentVote = (id, vote) => {
    const { parentId } = this.props
    this.props.changeCommentVote(id, vote, parentId)
  }
  render() {
    const { comments, loading } = this.props
    let commentFeed

    if(comments === null || loading){
      commentFeed = <h1 className="display-4 center-item">Loading</h1>
    } else {
      commentFeed = comments.map((comment) => <CommentDisplay key={comment._id} comment={comment} deleteComment={this.props.deleteComment} changeCommentVote={this.props.changeCommentVote}/>)
    }

    return (
      <div className="center-item mb-4">
        <div className="d-flex align-items-center flex-column m-1">
          {commentFeed}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ comment }) => {
  return {
    comments: comment.activePostComments,
    loading: comment.loading
  }
}

export default connect(mapStateToProps, { changeCommentVote, deleteComment })(CommentsFeed)