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
  render() {
    const { post, loadingPost } = this.props
    let postDisplay
    const parentId = this.props.match.params.id
    
    if(post === null || loadingPost){
      postDisplay = <h1 className="display-4">Loading Post</h1>
    } else {
      postDisplay = <PostDisplay post={post}/>
    }


    return (
      <div className="container">
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
  }
}

export default connect(mapStateToProps, { getActivePost, changeVoteScore, getActivePostComments })(Post)