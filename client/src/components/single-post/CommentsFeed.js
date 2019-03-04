import React, { Component } from 'react'
import CommentDisplay from './CommentDisplay'
import { changeCommentVote } from '../../actions/comments'
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
      commentFeed = <h1>Loading</h1>
    } else {
      commentFeed = comments.map((comment) => <CommentDisplay key={comment._id} comment={comment} changeCommentVote={this.props.changeCommentVote}/>)
    }

    return (
      <div className="center-item">
        <div className="d-flex align-items-center flex-column">
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

export default connect(mapStateToProps, { changeCommentVote })(CommentsFeed)