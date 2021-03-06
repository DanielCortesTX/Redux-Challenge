import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActivePost, changeVoteScore } from '../../actions/posts'
import { getActivePostComments, addComment } from '../../actions/comments'
import CommentsFeed from '../comment/CommentsFeed'
import PostDisplay from './PostDisplay'

import NewCommentForm from '../comment/NewCommentForm'
import Loading from '../frequents/Loading'

class Post extends Component {
  componentDidMount(){
    this.props.setActivePost(this.props.match.params.id)
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
      postDisplay = <Loading specific="Post"/>
    } else {
      postDisplay = <PostDisplay post={post}/>
    }

    return (
      <div className="container">
        {postDisplay}
        <NewCommentForm parentId={parentId} post={post} addComment={this.props.addComment}/>
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

export default connect(mapStateToProps, { setActivePost, changeVoteScore, getActivePostComments, addComment })(Post)