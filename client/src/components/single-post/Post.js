import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getActivePost, changeVoteScore } from '../../actions/posts'
import { getActivePostComments } from '../../actions/comments'
import CommentsFeed from './CommentsFeed'
import PostDisplay from './PostDisplay'

class Post extends Component {
  componentDidMount(){
    this.props.getActivePost(this.props.match.params.id)
    this.props.getActivePostComments(this.props.match.params.id)
  }
  upVoteScore = (id, vote) => {
    this.props.changeVoteScore(id, vote)
  }
  // changeCommentVote = (id, vote) => {
  //   this.props.changeCommentVote(id, vote)
  // }
  render() {
    const { post, loadingPost } = this.props
    let postDisplay
    const parentId = this.props.match.params.id
    // , comments, loadingComments
    // let commentsDisplay
    
    if(post === null || loadingPost){
      postDisplay = <h1 className="display-4">Loading Post</h1>
    } else {
      postDisplay = <PostDisplay post={post}/>
    }

    // if(comments === null || loadingComments){
    //   commentsDisplay = <h1 className="display-4">Loading Comments</h1>
    // } else {
    //   commentsDisplay = <CommentsFeed comments={comments} changeCommentVote={this.changeCommentVote}/>
    //   comments.map((comment) => <h2>{comment.text}</h2>
    // }


    return (
      <div className="container center-item">
        {postDisplay}
        <CommentsFeed parentId={parentId}/>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.activePost,
    loadingPost: post.loading,
    // loadingComments: comment.loading,
    // comments: comment.activePostComments
  }
}

export default connect(mapStateToProps, { getActivePost, changeVoteScore, getActivePostComments })(Post)

// , getActivePostComments, changeCommentVote